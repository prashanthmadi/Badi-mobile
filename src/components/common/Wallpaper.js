import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
} from 'react-native';

import bgSrc from '../../assets/images/wallpaper.png';
import AppColors from 'AppColors';

export default class Wallpaper extends Component {
	render() {
		return (
			<View style={styles.picture} >
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	picture: {
		flex: 1,
			width: null,
			height: null,
			backgroundColor:AppColors.appBackground,
	},
});
