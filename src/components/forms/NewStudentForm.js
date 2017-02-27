/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Field, reduxForm} from 'redux-form';

import UserInput from '../common/UserInput';
import DatePickerInput from '../common/DatePicker';
import ButtonSubmit from '../common/ButtonSubmit';
import personImg from '../../assets/images/person.png';


class NewStudentForm extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.topContainer}>
              <Field name="firstname" component={UserInput} source={personImg} placeholder='First Name' autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/>
              <Field name="lastname" component={UserInput} source={personImg} placeholder='Last Name' autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/>
              <Field name="dob" component={DatePickerInput} placeholder='dob' returnKeyType={'done'} />
          </View>
          <View style={styles.bottomContainer}>
              <Field name="submit" component={ButtonSubmit} type="Submit" action={this.props.handleSubmit}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 0.3,
  },
  bottomContainer: {
    flex: 0.7,
  },
});

export default reduxForm({
    form: 'newStudentForm', // a unique identifier for this form
})(NewStudentForm)
