import React, {Component} from 'react';
import { Formik, Field } from 'formik';
import {
	View,
	StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@rneui/themed";
import GlobalStyle from '@styles/global';
import FieldTextInput from '@components/Forms/components/Fields/TextInput';

import COLORS from '@constants/colors';

import * as yup from 'yup';
import { pt } from 'yup-locale-pt';
yup.setLocale(pt);

const FormCadastro = (props) => {

    const dispatch = useDispatch();
    const isRequesting = useSelector(state => state.appReducer.isRequestingRegister);

	const submit = values => {
		dispatch({type: 'REGISTER_TRIGGER', payload: values });
	};

	const complementDataSchema = yup.object().shape({
		nome: yup
		.string()
		.required(),
		email: yup
		.string()
		.email()
		.required(),
		password: yup
		.string()
		.required(),
		password_repeat: yup
		.string()
		.required()
		.oneOf([yup.ref('password'), null], 'As senhas devem ser idênticas'),
	});

	return (
		<Formik
			initialValues={{ nome: '', email: '', code: '', password: '', password_repeat: ''}}
			onSubmit={submit}
			validationSchema={complementDataSchema}
		>
			{({ handleSubmit }) => (
			<View style={{flex: 1, justifyContent: `space-between`}}>

				<View>

					<View style={GlobalStyle.spaceBig} />

					<Field
						name="nome"
						component={FieldTextInput}
						placeholder="Digite seu nome completo"
						labelText="Nome Completo"
						keyboardType="default"
						multiline={false}
						returnKeyType="next"
						referencia={componentRef => (fieldNome = componentRef)}
						forwardRef={true}
						autoCorrect={false}
						onEnter={() => {
						fieldEmail.focus()
						}}
					/>
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
						placeholder="Senha para acesso"
						labelText="Senha"
						keyboardType="default"
						secureTextEntry={true}
						maxLength={20}
						multiline={false}
						returnKeyType="done"
						referencia={componentRef => (fieldPassword = componentRef)}
						forwardRef={true}
						onEnter={() => {
							fieldPasswordRepeat.focus()
						}}
					/>
					<Field
						name="password_repeat"
						component={FieldTextInput}
						placeholder="Repita a senha digitada acima"
						labelText="Repita a Senha"
						keyboardType="default"
						secureTextEntry={true}
						maxLength={20}
						multiline={false}
						returnKeyType="done"
						referencia={componentRef => (fieldPasswordRepeat = componentRef)}
						forwardRef={true}
						onEnter={handleSubmit}
					/>

				</View>

				<View style={GlobalStyle.secureMargin}>

					<Button
						title="Confirmar Cadastro"
						loading={isRequesting}
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
						onPress={handleSubmit}
					/>

					<View style={GlobalStyle.spaceSmall} />
					
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

export default FormCadastro;