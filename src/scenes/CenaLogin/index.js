import React from 'react';
import {
	StatusBar,
    SafeAreaView,
    useColorScheme,
	Text
} from 'react-native';
import COLORS from '@constants/colors';
import FormLogin from '@components/Forms/FormLogin';

export default CenaLogin = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? COLORS.darker : COLORS.lighter,
    };

    return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
		<StatusBar
			translucent={true}
			backgroundColor={'#fff'}
			barStyle={'dark-content'}
		/>

		<FormLogin navigation={navigation} />
    </SafeAreaView>
    );

}