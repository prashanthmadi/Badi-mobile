/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Wallpaper from '../components/common/Wallpaper';
import Header from '../components/common/Header';
import hamburgerImg from '../assets/images/hamburger.png';

export default class AddStudent extends Component {
  render() {
    return (
      <Wallpaper>
          <Header title="Add Student" source={hamburgerImg}/>
          <View style={styles.container}>
                this is student
        </View>
      </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
});
