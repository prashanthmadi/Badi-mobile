/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Header from '../components/common/Header';
import Wallpaper from '../components/common/Wallpaper';
import hamburgerImg from '../assets/images/hamburger.png';


export default class Home extends Component {
  render() {
    return (
      <Wallpaper>
        <Header title="Badi" source={hamburgerImg}/>
        <ScrollView>
         <View style={[styles.content]}>
           <View style={[styles.box]}></View>
           <View style={[styles.box]}></View>
           <View style={[styles.box]}></View>
           <View style={[styles.box]}></View>
           <View style={[styles.box]}></View>
           <View style={[styles.box]}></View>
           <View style={[styles.box]}></View>
         </View>
       </ScrollView>
    </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40
  },
  footer: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#8BC34A'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    marginBottom: 10
  }
});
