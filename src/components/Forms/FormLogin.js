import React from 'react';
import { Formik, Field } from 'formik';
import {
	View,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { Button } from "@rneui/themed";
import GlobalStyle from '@styles/global';
import FieldTextInput from '@components/Forms/components/Fields/TextInput';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from "@rneui/themed";

import COLORS from '@constants/colors';

import * as yup from 'yup';
import { pt } from 'yup-locale-pt';
yup.setLocale(pt);

const FormLogin = (props) => {

    const dispatch = useDispatch();
	const isRequesting = useSelector(state => state.appReducer.isRequestingLogin);

	const submit = values => {
		dispatch({type: 'LOGIN_TRIGGER', payload: values });
	};

	const complementDataSchema = yup.object().shape({
		email: yup
			.string()
			.email()
			.required(),
		password: yup
			.string()
			.required(),
	});

	return (
		<Formik
			initialValues={{ email: '', password: ''}}
			onSubmit={submit}
			validationSchema={complementDataSchema}
		>
			{({ handleSubmit }) => (
			<View style={{flex: 1, justifyContent: `space-between`}}>

				<View>

					<View style={GlobalStyle.spaceBig} />

					<View style={GlobalStyle.secureMargin}>
					<Text style={{color: COLORS.primary, fontSize: 22, fontWeight: 'bold'}}>
						Login{'\n'}
						<Text style={{color: '#fff', fontSize: 10, fontWeight: 'bold', textDecorationLine: `underline`, textDecorationColor: COLORS.primary}}>ooooooooo</Text>
					</Text>
					</View>

					<View style={GlobalStyle.spaceBig} />

					<Field
						name="email"
						component={FieldTextInput}
						placeholder="Digite seu e-mail"
						labelText="Email"
						keyboardType="email-address"
						multiline={false}
						returnKeyType="next"
						referencia={componentRef => (fieldEmail = componentRef)}
						forwardRef={true}
						autoCapitalize={'none'}
						autoCorrect={false}
						onEnter={() => {
							fieldPassword.focus()
						}}
					/>
					<Field
						name="password"
						component={FieldTextInput}
						placeholder="Digite sua senha"
						labelText="Senha"
						keyboardType="default"
						secureTextEntry={true}
						maxLength={20}
						multiline={false}
						returnKeyType="done"
						referencia={componentRef => (fieldPassword = componentRef)}
						forwardRef={true}
						onEnter={handleSubmit}
					/>

					<View style={GlobalStyle.secureMargin}>
						<View style={{alignItems: 'flex-end'}}>
							<TouchableOpacity onPress={()=>{props.navigation.navigate('EsqueciSenha')}}>
							<Text style={styles.esqueciAsenhaText}>Esqueci minha senha</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={GlobalStyle.secureMargin}>

  
					<Button
						title="Entrar"
						buttonStyle={{
							backgroundColor: COLORS.primary,
							borderRadius: 25,
							fontSize: 13,
							paddingVertical: 10,
						}}
						containerStyle={{
							width: '90%',
							alignSelf: 'center',
							opacity: isRequesting ? 0.8 : 1
						}}
						disabled={isRequesting}
						handleSubmit={isRequesting}
						onPress={handleSubmit}
						loading={isRequesting}
					/>

					<View style={GlobalStyle.spaceSmall} />

					<Text style={{textAlign: `center`}}>Ainda não tem cadastro?</Text>

					<View style={GlobalStyle.spaceSmall} />
			
					<Button
						title="Quero me cadastrar"
						buttonStyle={{
							backgroundColor: COLORS.secondary,
							borderRadius: 20,
							fontSize: 13,
							paddingVertical: 10
						}}
						containerStyle={{
							width: '90%',
							alignSelf: 'center',
						}}
						onPress={()=>{props.navigation.navigate('CadastroScreen')}}
						disabled={isRequesting}
					/>
				</View>


			</View>
			)}
		</Formik>
	);
}
const styles = StyleSheet.create({
	esqueciAsenhaText: {
		color: COLORS.secondary,
		alignSelf: 'center',
		fontSize: 14,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
})

export default FormLogin;