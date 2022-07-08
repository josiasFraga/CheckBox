import React from 'react';
import {
	StatusBar,
    SafeAreaView,
    useColorScheme,
	View
} from 'react-native';
import COLORS from '@constants/colors';
import FormEsqueciSenha from '@components/Forms/FormEsqueciSenha';
import { Header, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { StackActions } from '@react-navigation/native';

export default CenaPerfil = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? COLORS.darker : COLORS.lighter,
    };

    return (
        <>
            <StatusBar
                translucent={true}
                backgroundColor={'#000'}
                barStyle={'dark-content'}
            />
            <SafeAreaView style={{backgroundColor: COLORS.primary}}></SafeAreaView>
            <Header
                ViewComponent={LinearGradient} // Don't forget this!
                centerComponent={{ text: 'Esqueci minha senha' , style: {fontSize: 22, fontWeight: 'bold', color: 'white'}}}
                linearGradientProps={{
                    colors: [COLORS.primary, COLORS.primary],
                    
                }}
                leftComponent={
                    <Icon
                        name='left'
                        type='antdesign'
                        color='white'
                        onPress={()=>{
                            const popAction = StackActions.pop(1);
                            navigation.dispatch(popAction);
                        }}
                    />
                }
            />
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <FormEsqueciSenha />
            </View>
            <SafeAreaView style={[backgroundStyle]}></SafeAreaView>
        </>
    );

}