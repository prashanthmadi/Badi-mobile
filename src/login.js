/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the LoginScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = LoginScreen;
