import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	StatusBar,
} from 'react-native';
import { connect } from 'react-redux';


type Props = {};
class CenaSplash extends Component<Props> {

	componentDidMount = async () => {

	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					translucent={true}
					backgroundColor={'transparent'}
					barStyle={'dark-content'}
				/>
                
			</View>
		);
	}
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
		flex: 1
	},
	container: {
		flex: 1,
		backgroundColor: '#2d20a4'
	}
});


export default connect(null, null)(CenaSplash);