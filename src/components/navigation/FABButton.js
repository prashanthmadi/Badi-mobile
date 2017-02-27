/* @flow */

import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Actions} from 'react-native-router-flux';

import AppColors from '../common/AppColors';
import actionSettings from '../../assets/images/actionSettings.png';
import actionEdit from '../../assets/images/actionEdit.png';
import actionAdd from '../../assets/images/actionAdd.png';

export default class FABButton extends Component {
  render() {
    return (
      <ActionButton buttonColor={AppColors.accentcolor} icon={<Image style={styles.inlineImg} source={actionSettings} />}>
        <ActionButton.Item buttonColor={AppColors.accentcolor} title="Add Student" onPress={() =>Actions.drawer({key: "addStudent", type: 'replace'})}>
          <Image style={styles.inlineImg} source={actionAdd} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor={AppColors.accentcolor} title="Edit" onPress={() => {}}>
          <Image style={styles.inlineImg} source={actionEdit} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

const styles = StyleSheet.create({
  inlineImg: {
    width: 50,
    height: 50,
    borderRadius:50,
    resizeMode:'cover'
  },
});
