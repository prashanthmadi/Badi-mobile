/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,Image,TouchableOpacity
} from 'react-native';
import AppColors from 'AppColors';
import kid1 from '../../assets/images/kid1.jpg';
import {Actions} from 'react-native-router-flux';


export default class UserListItem extends Component {
  _onPress(studentData){
    Actions.drawer({key: "studentDetail", type: 'replace'});
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this._onPress(this.props.student)} style={styles.container}>
        <Image style={styles.inlineImg} source={kid1} />
        <Text style={styles.text}>{this.props.student.get('firstName')}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding:10

  },
  inlineImg: {
    width: 50,
    height: 50,
    borderRadius:50,
  },
  text:{
    color: AppColors.primarytextcolor,
    fontSize: 15,
    padding: 10,
  }
});
