import axios from 'axios'
import config from '@constants/configs'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const callApi = async (call) => {

    const token = await AsyncStorage.getItem('user_token');

    let {
        endpoint,
        method = 'GET',
        params = null,
        data = null,
        headers = {},
        showJSON = false,
    } = call

    let url = endpoint
    let defaultHeaders = {};

    // Merge headers info
    if ( method == 'POST' ) {
        defaultHeaders = {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            //'Authorization': config.defaultToken
        };
    } else {
        defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            //'Authorization': config.defaultToken
        };
    }

    if ( token && token != null && token != '' ){
        headers = Object.assign({
            Authorization: `Bearer ${token}`
        },headers);
    }

    headers = Object.assign({}, defaultHeaders, headers);

    console.debug('[CALL API URL]', url);
    console.debug('[CALL API COMPLETE]', { headers, method, url, params, data });

    if (showJSON)
        console.log('[CALL API JSON DATA]', JSON.stringify(data));

    let request = {
        headers,
        method,
        url
    };

    if (params) request.params = params;
    if (data) request.data = data;

    console.log('[REQUEST]', request)

    return axios(request);
}