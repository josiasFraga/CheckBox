import {call, put, takeLatest} from 'redux-saga/effects';
import {callApi} from '@services/api';
import AlertHelper from '@components/Alert/AlertHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONFIG from '@constants/configs';

function* loadingApp() {
	console.log('SAGA - loading app');

    yield put({
		type: 'SET_IS_LOADING_APP',
		payload: true,
	});

	try {
		const value = yield AsyncStorage.getItem('user_token')
		if(value !== null) {
			console.log('SAGA - Token de usuário armazenado');
			yield put({
				type: 'SET_IS_LOADING_APP_SUCCESS',
				payload: {
					isLoadingApp: false,
					userIsLogged: true,
				},
			});

		} else {

			console.log('SAGA - sem token de usuário armazenado');
			yield put({
				type: 'SET_IS_LOADING_APP_SUCCESS',
				payload: {
					isLoadingApp: false,
					userIsLogged: false,
				},
			});

		}
	} catch(e) {

		console.log('SAGA ERRO - ao buscar o token de usuário armazenado');

		yield put({
			type: 'SET_IS_LOADING_APP_ERROR',
			payload: {},
		});
	}
}

function* login({payload}) {

  var email = payload.email;
  var password = payload.password;
  var notifications_id = JSON.parse(yield AsyncStorage.getItem('notifications')).userId;

  var token = null;
  if ( JSON.parse(yield AsyncStorage.getItem('token')) != null )
  	token = JSON.parse(yield AsyncStorage.getItem('token')).token;

  try {
    yield put({
      type: 'SET_IS_REQUESTING',
      payload: true,
    });

	var data = new FormData();
	const dados = {
        email: email,
        password: password,
        notifications_id: notifications_id,
	};

	data.append('dados', JSON.stringify(dados));

    const response = yield call(callApi, {
      endpoint: CONFIG.url + '/Usuarios/login/',
      method: 'POST',
      data: data,
    });

	console.log('[LOGIN]', response);

    if (response.data.status == 'ok') {
	  AlertHelper.show('success', 'Sucesso', 'Logado com sucesso.');
	  
      yield AsyncStorage.setItem(
        'token',
        JSON.stringify(response.data.dados.Token),
      );
      yield AsyncStorage.setItem(
        'usuario',
        JSON.stringify(response.data.dados.Usuario),
	  );
	  if ( response.data.dados.Usuario.nivel_id == 2 ) {

		yield AsyncStorage.setItem(
			'cliente',
			JSON.stringify(response.data.dados.Cliente),
		);

		if ( response.data.dados.cadastro_horarios_ok == false || response.data.dados.cadastro_categorias_ok == false ) {

			yield AsyncStorage.setItem(
				'dadosComplementares',
				JSON.stringify({'cadastro_horarios_ok': response.data.dados.cadastro_horarios_ok, 'cadastro_categorias_ok' : response.data.dados.cadastro_categorias_ok}),
			);

			Actions.empresaCompletarDados({type: ActionConst.RESET});
		} else {
			Actions.cenaTabsEmpresa({type: ActionConst.RESET});
		}

	  }
	  else if ( response.data.dados.Usuario.nivel_id == 3 )
		Actions.cenaTabs({type: ActionConst.RESET});
    }  else if (response.data.status == 'no_signature' ) { 

		console.log('Sem assinatura ativa');

		yield AsyncStorage.setItem(
		  'token',
		  JSON.stringify(response.data.dados.Token),
		);

		yield AsyncStorage.setItem(
		  'usuario',
		  JSON.stringify(response.data.dados.Usuario),
		);
  
		yield AsyncStorage.setItem(
			'cliente',
			JSON.stringify(response.data.dados.Cliente),
		);

		Actions.problemasConta({type: ActionConst.REPLACE, 'status': response.data.status, 'message': response.data.msg, 'button_text': response.data.button_text});

	} else if (response.data.status == 'overdue' ) { 

		console.log('Assinatura com pendencia financeira');

		yield AsyncStorage.setItem(
		  'token',
		  JSON.stringify(response.data.dados.Token),
		);

		yield AsyncStorage.setItem(
		  'usuario',
		  JSON.stringify(response.data.dados.Usuario),
		);
  
		yield AsyncStorage.setItem(
			'cliente',
			JSON.stringify(response.data.dados.Cliente),
		);

		Actions.problemasConta({type: ActionConst.REPLACE, 'status': response.data.status, 'message': response.data.msg, 'button_text': response.data.button_text});
	} else {
      AlertHelper.show('error', 'Erro', response.data.msg);
    }

    yield put({
      type: 'SET_IS_REQUESTING',
      payload: false,
    });
  } catch ({message, response}) {
	  console.log(response);
    if ( response.status == 401) {
      AlertHelper.show('error', 'Falha', 'Login e/ou senha inválidos.');
    } else {
      console.warn('[ERROR : LOGIN_TRIGGER]', {message, response});
      AlertHelper.show('error', 'Erro', message);
    }

    yield put({
      type: 'SET_IS_REQUESTING',
      payload: false,
    });
  }
}

export default function* () {
	yield takeLatest('LOGIN_TRIGGER', login);
	yield takeLatest('LOADING_APP', loadingApp);
}