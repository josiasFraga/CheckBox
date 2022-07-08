import React, {useEffect} from 'react';
import {
	StatusBar,
		SafeAreaView,
		useColorScheme,
	Text
} from 'react-native';
import COLORS from '@constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Header, Icon } from '@rneui/themed';
import { useDispatch } from 'react-redux';

export default CenaInicio = ({ navigation }) => {
  	const dispatch = useDispatch();
		const isDarkMode = useColorScheme() === 'dark';

		useEffect(() => {
      dispatch({
				type: 'LOAD_N_NOTIFICATIONS_NOT_READ_TRIGGER',
				payload: {}
			});
		}, []);
	
		const backgroundStyle = {
			backgroundColor: isDarkMode ? COLORS.darker : COLORS.lighter,
		};

		return (
		<SafeAreaView style={[{flex: 1, backgroundColor: '#f7f7f7'}]}>
			<StatusBar
				translucent={true}
				backgroundColor={'#f7f7f7'}
				barStyle={'dark-content'}
			/>

				<Header
						ViewComponent={LinearGradient} // Don't forget this!
						centerComponent={{ text: 'Dashboard' , style: {fontSize: 22, fontWeight: 'bold', color: COLORS.primary}}}
						linearGradientProps={{
								colors: ['#f7f7f7', '#FFF'],
						}}
				/>
		</SafeAreaView>
		);

}