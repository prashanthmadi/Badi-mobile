/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Card,Button } from 'react-native-elements'

import Header from '../components/common/Header';
import Wallpaper from '../components/common/Wallpaper';
import hamburgerImg from '../assets/images/hamburger.png';
import kid from '../assets/images/kid1.jpg';


export default class Home extends Component {
  render() {
    return (
      <Wallpaper>
        <Header title="Badi" source={hamburgerImg}/>
        <ScrollView>
         <View style={[styles.content]}>
            <Card title='HELLO WORLD' image={kid}>
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                icon={{ name: 'code' }}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
            </Card>
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
