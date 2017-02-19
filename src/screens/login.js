import React, { Component } from 'react';

import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import Wallpaper from '../components/Wallpaper';
import ButtonSubmit from '../components/ButtonSubmit';
import SignupSection from '../components/SignupSection';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
				<Logo size={3}/>
				<LoginForm />
        <ButtonSubmit type="Login"/>
				<SignupSection/>
			</Wallpaper>
    );
  }
}

module.exports = LoginScreen;
