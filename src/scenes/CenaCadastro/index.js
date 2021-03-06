import React from 'react';
import {
	StatusBar,
    SafeAreaView,
    useColorScheme,
	View
} from 'react-native';
import COLORS from '@constants/colors';
import FormCadastro from '@components/Forms/FormCadastro';
import { Header, Icon } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { StackActions } from '@react-navigation/native';

export default CenaCadastro = ({ navigation }) => {
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
                centerComponent={{ text: 'Cadastro' , style: {fontSize: 22, fontWeight: 'bold', color: 'white'}}}
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
                <FormCadastro />
            </View>
            <SafeAreaView style={[backgroundStyle]}></SafeAreaView>
        </>
    );

}