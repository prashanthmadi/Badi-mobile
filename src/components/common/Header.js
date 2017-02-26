/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppColors from 'AppColors';

export default class Header extends Component {

  _onPressButton(){
    Actions.refresh({key: 'drawer', open: value => !value })
  }
    render() {
        return (
            <View style={styles.header}>
                <TouchableHighlight onPress={this._onPressButton} style={styles.inlineImg}>
                    <Image source={this.props.source} style={styles.inlineImg}/>
                </TouchableHighlight>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        paddingTop: 5,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: AppColors.darkprimarycolor,
        zIndex: 10
    },
    text: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        fontSize: 20,
        flex: 1
    },
    inlineImg: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 99,
        width: 22,
        height: 22
    }
});
