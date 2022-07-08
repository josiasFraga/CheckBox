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

const FormEsqueciSenha = (props) => {

    const dispatch = useDispatch();
    const isRequesting = useSelector(state => state.appReducer.isRequestingRegister);
    const step = useSelector(state => state.appReducer.stepResetPassword);

	const submit = values => {
		dispatch({type: 'FORGOT_PASSWORD_TRIGGER', payload: values });
	};

	let complementDataSchema = [];
    let buttonText = [];

    complementDataSchema[0] = yup.object().shape({
        email: yup
        .string()
        .email()
        .required(),
    });

    complementDataSchema[1] = yup.object().shape({
        code: yup
        .number()
        .required(),
    });

    complementDataSchema[2] = yup.object().shape({
		password: yup
		.string()
		.required(),
		password_repeat: yup
		.string()
		.required()
		.oneOf([yup.ref('password'), null], 'As senhas devem ser idênticas'),
    });

    buttonText[0] = 'Enviar Código';
    buttonText[1] = 'Confirmar Código';
    buttonText[2] = 'Mudar Senha';

	return (
		<Formik
			initialValues={{ email: '', token: '', password: '', password_repeat: ''}}
			onSubmit={submit}
			validationSchema={complementDataSchema[step]}
		>
			{({ handleSubmit }) => (
			<View style={{flex: 1, justifyContent: `space-between`}}>

				<View>

					<View style={GlobalStyle.spaceBig} />

                    {
                        step == 0 && (

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
                                onEnter={handleSubmit}
                            />

                        )
                    }

                    {
                        step == 1 && (

                            <Field
                                name="code"
                                component={FieldTextInput}
                                placeholder="Digite o código recebido no seu e-mail"
                                labelText="Código"
                                keyboardType="numeric"
                                multiline={false}
                                returnKeyType="next"
                                referencia={componentRef => (fieldCode = componentRef)}
                                forwardRef={true}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                onEnter={handleSubmit}
                            />

                        )
                    }

                    {
                        step == 2 && (
                            <>
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
                            </>
                        )
                    }

				</View>

				<View style={GlobalStyle.secureMargin}>

					<Button
						title={buttonText[step]}
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

export default FormEsqueciSenha;