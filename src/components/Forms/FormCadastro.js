import React, {Component} from 'react';
import { Formik, Field } from 'formik';
import {
	View,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { Button } from "@rneui/themed";
import GlobalStyle from '@styles/global';
import FieldTextInput from '@components/Forms/components/Fields/TextInput';
import AnimatedLoader from '@components/Loader';
import { Text } from "@rneui/themed";

import COLORS from '@constants/colors';

import * as yup from 'yup';
import { pt } from 'yup-locale-pt';
yup.setLocale(pt);

const FormCadastro = (props) => {

		const submit = values => {
		  //this.props.login(values);
		};

    const isRequesting = false;

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
		});

		return (
			<Formik
			  initialValues={{ nome: '', email: '', password: '', password_repeat: ''}}
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
              placeholder="Digite sua senha"
              labelText="Senha"
              keyboardType="default"
              secureTextEntry={true}
              maxLength={20}
              multiline={false}
              returnKeyType="done"
              referencia={componentRef => (fieldPassword = componentRef)}
              forwardRef={true}
            />

          </View>

		    <View style={GlobalStyle.secureMargin}>

  
            <Button
                title="Confirmar Cadastro"
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
                disabled={props.isRequesting}
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