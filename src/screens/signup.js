/* @flow */

import React, { Component } from 'react';
import {
	StyleSheet,
	View
} from 'react-native';

import Logo from '../components/Logo';
import SingUpForm from '../components/SingUpForm';
import Wallpaper from '../components/Wallpaper';
import ButtonSubmit from '../components/ButtonSubmit';

export default class SignUp extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo size={1}/>
				<SingUpForm />
        <View style={styles.container}>
				      <ButtonSubmit type="Submit"/>
        </View>
			</Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center'
	}
});
