import React, {useEffect} from 'react';
import {
	StyleSheet,
	View,
	StatusBar,
	Image,
} from 'react-native';
import IMAGES from '@constants/images';
import COLORS from '@constants/colors';
import { useDispatch } from 'react-redux';

const CenaSplash = ({ navigation }) => {

	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(()=>{
			dispatch({
				type: 'LOADING_APP',
				payload: {}
			});
		}, 3500);
	
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar
				translucent={true}
				backgroundColor={'#fff'}
				barStyle={'light-content'}
			/>
			<View style={styles.imageContainer}>
				<Image source={IMAGES.LOGO_WHITE} style={{ width: 300, height: 139 }} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	bg: {
		//width: 100
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center"
	},
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		paddingLeft: 25,
		paddingRight: 25,
	},
	container: {
		flex: 1,
		backgroundColor: COLORS.primary
	}
});


export default CenaSplash;