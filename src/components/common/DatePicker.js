/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import Dimensions from 'Dimensions';
import AppColors from 'AppColors';

export default class DatePickerInput extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2010-05-15"}
  }

  render() {
    const { input: { value, onChange }} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>DOB : </Text>
        <DatePicker
           style={{width: 200}}
           date={this.state.date}
           showIcon = {false}
           mode="date"
           placeholder="select date"
           format="YYYY-MM-DD"
           confirmBtnText="Confirm"
           cancelBtnText="Cancel"
           customStyles={datestyles}
           onDateChange={(value) => onChange(value)}
         />
       </View>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 45,

  },
  text:{
    color: AppColors.primarytextcolor,
    fontSize: 15,
    margin:10,
  }
});

const datestyles = StyleSheet.create({
  dateInput: {
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    borderRadius: 20,
  }
});
