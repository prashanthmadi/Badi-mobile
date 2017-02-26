import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {View, Button} from 'react-native';

import UserInput from './common/UserInput';
import ButtonSubmit from './common/ButtonSubmit';

import emailImg from '../assets/images/email.png';
import passwordImg from '../assets/images/password.png';
import phoneImg from '../assets/images/phone.png';

class SignUpForm extends Component {

    render() {
        return (
            <View style={this.container()}>
                <View style={this.inputfields()}>
										<Field name="email" component={UserInput} source={emailImg} placeholder='Email' autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/>
										<Field name="phoneNumber" component={UserInput} source={phoneImg} placeholder='Phone Number' autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/>
                    <Field name="password" component={UserInput} source={passwordImg} secureTextEntry={true} placeholder='Password' returnKeyType={'done'} autoCapitalize={'none'} autoCorrect={false}/>
										<Field name="confirmPassword" component={UserInput} source={passwordImg} secureTextEntry={true} placeholder='Confirm Password' returnKeyType={'done'} autoCapitalize={'none'} autoCorrect={false}/>
    						</View>
                <View style={this.submitbutton()}>
                    <Field name="submit" component={ButtonSubmit} type="SingUp" action={this.props.handleSubmit}/>
                </View>
            </View>
        );
    }

    container() {
        return {flex: 2, alignItems: 'center'}
    }
		inputfields() {
        return {flex: 1, alignItems: 'center'}
    }
		submitbutton() {
        return {flex: 1, alignItems: 'center'}
    }
}

export default reduxForm({
    form: 'signUpForm', // a unique identifier for this form
})(SignUpForm)
