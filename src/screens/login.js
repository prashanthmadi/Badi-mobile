import React, { Component } from 'react';

import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import Wallpaper from '../components/Wallpaper';
import SignupSection from '../components/SignupSection';

export default class LoginScreen extends Component {

  handleSubmit = (values) => {
     console.warn(JSON.stringify(values));
   }

  render() {
    return (
      <Wallpaper>
				<Logo size={3}/>
				<LoginForm/>
				<SignupSection/>
			</Wallpaper>
    );
  }
}

module.exports = LoginScreen;
