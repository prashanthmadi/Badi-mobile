/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,Image,TouchableOpacity
} from 'react-native';
import AppColors from 'AppColors';

export default class UserListItem extends Component {
  _onPress(userData){
    console.warn(JSON.stringify(userData));
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this._onPress(this.props.user)} style={styles.container}>
        <Image style={styles.inlineImg} source={this.props.user.image} />
        <Text style={styles.text}>{this.props.user.name}</Text>
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
