/* @flow */

import React, { Component } from 'react';

import Logo from './components/Logo';
import SingUpForm from './components/SingUpForm';
import Wallpaper from './components/Wallpaper';
import ButtonSubmit from './components/ButtonSubmit';

export default class SignUp extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo size={1}/>
				<SingUpForm />
				<ButtonSubmit/>
			</Wallpaper>
    );
  }
}
