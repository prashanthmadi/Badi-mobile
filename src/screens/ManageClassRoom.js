/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ManageClassRoom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Manage ClassRoom component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
