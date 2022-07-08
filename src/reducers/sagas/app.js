import {call, put, takeLatest} from 'redux-saga/effects';
import {callApi} from '@services/api';
import AlertHelper from '@components/Alert/AlertHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONFIG from '@constants/configs';

import * as RootNavigation from '../../../RootNavigation.js';

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

function* register({payload}) {
	
  	//var notifications_id = JSON.parse(yield AsyncStorage.getItem('notifications')).userId;
    yield put({
      type: 'SET_IS_REQUESTING_REGISTER',
      payload: true,
    });

	try {

		const response = yield call(callApi, {
			endpoint: CONFIG.url + '/Usuarios/add.json',
			method: 'POST',
			data: payload,
		});

		console.log('SAGA - cadastro - resposta - ', response);

		if ( response.status === 200 ) {
			yield AlertHelper.show('success', 'Sucesso', 'Cadastrado efetuado com sucesso!');

			yield AsyncStorage.setItem(
				'user_token',
				response.data.token
			);

			yield put({
				type: 'SET_IS_REQUESTING_REGISTER_SUCCESS',
				payload: {},
			});

		} else {
			yield AlertHelper.show('error', 'Erro', response);

			yield put({
				type: 'SET_IS_REQUESTING_REGISTER_ERROR',
				payload: {},
			});
		}
	} catch ({message, response}) {

		console.warn('[ERROR : REGISTER_TRIGGER]', {message, response});
		AlertHelper.show('error', 'Erro', message);

		//RootNavigation.navigate('LoginScreen')

		yield put({
			type: 'SET_IS_REQUESTING_REGISTER_ERROR',
			payload: {},
		});
  }
}

function* login({payload}) {
	
  	//var notifications_id = JSON.parse(yield AsyncStorage.getItem('notifications')).userId;
    yield put({
      type: 'SET_IS_REQUESTING_LOGIN',
      payload: true,
    });

	try {

		const response = yield call(callApi, {
			endpoint: CONFIG.url + '/Usuarios/login.json',
			method: 'POST',
			data: payload,
		});

		console.log('SAGA - login - resposta - ', response);

		if ( response.status === 200 ) {
			yield AlertHelper.show('success', 'Sucesso', 'Login efetuado com sucesso!');

			yield AsyncStorage.setItem(
				'user_token',
				response.data.token
			);

			yield put({
				type: 'SET_IS_REQUESTING_LOGIN_SUCCESS',
				payload: {},
			});

		} else if ( response.status === 401 ) {
			yield AlertHelper.show('warning', 'Login inválido', 'Login e/ou senha inválidos.');

			yield put({
				type: 'SET_IS_REQUESTING_LOGIN_ERROR',
				payload: {},
			});
		} else {
			yield AlertHelper.show('error', 'Erro', response);

			yield put({
				type: 'SET_IS_REQUESTING_LOGIN_ERROR',
				payload: {},
			});
		}
	} catch ({message, response}) {

		console.warn('[ERROR : LOGIN_TRIGGER]', {message, response});
		AlertHelper.show('error', 'Erro', message);

		//RootNavigation.navigate('CadastroScreen')

		yield put({
			type: 'SET_IS_REQUESTING_LOGIN_ERROR',
			payload: {},
		});
  }
}

export default function* () {
	yield takeLatest('LOADING_APP', loadingApp);
	yield takeLatest('REGISTER_TRIGGER', register);
	yield takeLatest('LOGIN_TRIGGER', login);
}