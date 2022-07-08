import {call, put, takeLatest} from 'redux-saga/effects';
import {callApi} from '@services/api';
import AlertHelper from '@components/Alert/AlertHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONFIG from '@constants/configs';

import * as RootNavigation from '../../../RootNavigation.js';
import { StackActions } from '@react-navigation/native';

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
					is_loading_app: false,
					user_is_logged: true,
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

function* forgotPassword({payload}) {

	let action = 'sendcode';

	if ( payload.step == 1 ){
		action = 'checkcode';
	} else if ( payload.step == 2 ){
		action = 'change_password';
	}

    yield put({
      type: 'SET_IS_REQUESTING_FORGOT_PASSWORD',
      payload: true,
    });

	try {

		const response = yield call(callApi, {
			endpoint: CONFIG.url + '/Usuarios/' + action + '.json',
			method: 'POST',
			data: payload,
		});

		console.log('SAGA - esqueci minha senha - resposta - ', response);

		if ( response.status === 200 ) {

			if ( payload.step < 2 ) {

				yield put({
				  type: 'SET_STEP_FORGOT_PASSWORD',
				  payload: (payload.step+1),
				});
			} else {

				yield put({
					type: 'SET_IS_REQUESTING_FORGOT_PASSWORD_SUCCESS',
					payload: {},
				});

				yield put({
				  type: 'SET_STEP_FORGOT_PASSWORD',
				  payload: 0,
				});

				const popAction = StackActions.pop(1);
				yield RootNavigation.dispatch(popAction);

			}

		} if ( response.status == 400 ) {
			yield AlertHelper.show('warning', 'Atenção', reponse.data.msg);
		} else {
			yield AlertHelper.show('error', 'Erro', response);
		}

		yield put({
		  type: 'SET_IS_REQUESTING_FORGOT_PASSWORD',
		  payload: false,
		});
	} catch ({message, response}) {

		console.warn('[ERROR : FORGOT_PASSWORD_TRIGGER]', {message, response});
		yield AlertHelper.show('error', 'Erro', message);

		//RootNavigation.navigate('LoginScreen')

		yield put({
			type: 'SET_IS_REQUESTING_FORGOT_PASSWORD_ERROR',
			payload: {},
		});
  	}
}

function* loadNNotificationsNotRead({payload}) {
	console.log('SAGA - loading notifications not read');

	try {

		const response = yield call(callApi, {
			endpoint: CONFIG.url + '/Notificacoes/n_nao_lidas.json',
			method: 'GET',
			params: {},
		});

		console.log('SAGA - busca nº notificações - resposta - ', response);

		if ( response.status === 200 ) {

			yield put({
				type: 'SET_N_NOTIFICATIONS_NOT_READ',
				payload: response.n_notifications,
			});

		} 
		
	} catch(e) {}
}

export default function* () {
	yield takeLatest('LOADING_APP', loadingApp);
	yield takeLatest('REGISTER_TRIGGER', register);
	yield takeLatest('LOGIN_TRIGGER', login);
	yield takeLatest('FORGOT_PASSWORD_TRIGGER', forgotPassword);
	yield takeLatest('LOAD_N_NOTIFICATIONS_NOT_READ_TRIGGER', loadNNotificationsNotRead);
}