import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { getIn } from 'formik';

import { Input } from "@rneui/themed";

import COLORS from '@constants/colors';
import GlobalStyle from '@styles/global';

const FieldTextInput = (props) => {

  const number_format = (number, decimals, dec_point, thousands_sep) => {
    var n = number,
      prec = decimals;
    var toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return (Math.round(n * k) / k).toString();
    };
    n = !isFinite(+n) ? 0 : +n;
    prec = !isFinite(+prec) ? 0 : Math.abs(prec);
    var sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep;
    var dec = typeof dec_point === 'undefined' ? '.' : dec_point;
    var s = prec > 0 ? toFixedFix(n, prec) : toFixedFix(Math.round(n), prec);
    //fix for IE parseFloat(0.55).toFixed(0) = 0;
    var abs = toFixedFix(Math.abs(n), prec);
    var _, i;
    if (abs >= 1000) {
      _ = abs.split(/\D/);
      i = _[0].length % 3 || 3;
      _[0] =
        s.slice(0, i + (n < 0)) + _[0].slice(i).replace(/(\d{3})/g, sep + '$1');
      s = _.join(dec);
    } else {
      s = s.replace('.', dec);
    }
    var decPos = s.indexOf(dec);
    if (prec >= 1 && decPos !== -1 && s.length - decPos - 1 < prec) {
      s += new Array(prec - (s.length - decPos - 1)).join(0) + '0';
    } else if (prec >= 1 && decPos === -1) {
      s += dec + new Array(prec).join(0) + '0';
    }
    return s;
  };

  const maskMoney = (text) => {
    let numberPattern = /\d+/g;
    let formated = text.match(numberPattern).join('');
    formated = formated / 100;
    formated = number_format(formated, 2, ',', '.');
    formated = 'R$ ' + formated;

    if (formated == 'R$ 0,00') {
      formated = '';
    }

    return formated;
  }

  const maskPhone = (text) => {
    let x = text.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    let retorno = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

    return retorno;
  }

  const maskCPF = (text) => {
    return text
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  const maskTime = (text) => {
    let x = text.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})/);
    let retorno = x[1] + ':' + x[2];

    return retorno;
  }

  const maskCNPJ = (text) => {
    let x = text.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    let retorno  = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');

    return retorno;
  }

  const maskCEP = (text) => {
    let x = text.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})/);
    let retorno = x[1] + '-' + x[2];

    return retorno;
  }

  const maskNumber = (text) => {
    return text.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
  }

  const maskCCExpiry = (text) => {
    let x = text.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})/);
    let retorno = x[1] + '/' + x[2];

    return retorno;
  }

    const {
      placeholder,
      field, 
      keyboardType,
      maxLength,
      multiline,
      labelText,
      returnKeyType,
      onEnter,
      mask,
      referencia,
      labelStyle,
      form, 
      autoCapitalize,
      autoFocus,
      autoCorrect,
      editable,
      key,
      setLabel,
      ...inputProps
    } = props;


    const {value, onChange, onBlur} = field;

    const error = getIn(form.errors, field.name);
    const touch = getIn(form.touched, field.name);

    let _onFocus = () => {};
    if ( typeof props._onFocus != 'undefined' ) {
      _onFocus = props._onFocus
    }

    let _onBlur = () => {};
    if ( typeof props._onBlur != 'undefined' ) {
      _onBlur = props._onBlur
    }

    let _onChange = ()=>{};
    if ( typeof props._onChange != 'undefined' ) {
      _onChange = props._onChange;
    }

    let _onPressIn = ()=>{};
    if ( typeof props.onPressIn != 'undefined' ) {
      _onPressIn = props.onPressIn;
    }

    return (
      <View style={styles.inputContainer}>

        <Input
          style={
            form.touched && form.error
              ? props.multiline
                ? [
                    GlobalStyle.textareaAndroid,
                    GlobalStyle.text,
                    styles.fieldError,
                  ]
                : [
                    GlobalStyle.inputAndroid,
                    GlobalStyle.text,
                    styles.fieldError,
                  ]
              : props.multiline
              ? [GlobalStyle.textareaAndroid, GlobalStyle.text, styles.input]
              : [GlobalStyle.inputAndroid, GlobalStyle.text, styles.input]
          }
          underlineColorAndroid={COLORS.secondary}
          onBlur={() => {
            //onBlur();
            _onBlur();
            field.onBlur(field.name);
            form.setFieldTouched(field.name, true, true);
          }}
          onFocus={() => {
            _onFocus();
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          returnKeyType={returnKeyType}
          ref={referencia}
          onSubmitEditing={onEnter}
          placeholderTextColor={'#bbb'}
          onChangeText={text => {

            if ( text == '' ) {
              _onChange('');
              form.setFieldValue(field.name, '');
              return;
            }

            let formated = text;
            if (mask == 'money') {
              formated = maskMoney(text);
            }
            if (mask == 'phone') {
              formated = maskPhone(text);
            }
            if (mask == 'cpf') {
              formated = maskCPF(text);
            }
            if (mask == 'cnpj') {
              formated = maskCNPJ(text);
            }
            if (mask == 'cep') {
              formated = maskCEP(text);
            }
            if (mask == 'number') {
              formated = maskNumber(text);
            }
            if (mask == 'time') {
              formated = maskTime(text);
            }
            if (mask == 'cc_expiry') {
              formated = maskCCExpiry(text);
            }

            form.setFieldValue(field.name, formated);
            //form.setFieldValue(formated, text);
            _onChange(formated);
          }}
          name={field.name}
          value={value}
          secureTextEntry={props.secureTextEntry}
          textContentType={props.textContentType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          editable={editable}
          //autoFocus={autoFocus}
          onPressIn={_onPressIn}
          label={labelText}
          labelStyle={styles.label}

          errorMessage={(touch && error) ? error : null}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 8,
  },
  input: {
  },
  label: {
    color: COLORS.secondary
  },
});

export default FieldTextInput;
