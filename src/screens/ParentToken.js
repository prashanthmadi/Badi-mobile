/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/common/Header';
import Wallpaper from '../components/common/Wallpaper';
import hamburgerImg from '../assets/images/hamburger.png';

export default class ParentToken extends Component {
    render() {
        return (
            <Wallpaper>
                <Header title="Generate Parent Token" source={hamburgerImg}/>
                <ScrollView>
                    <View style={[styles.content]}></View>
                </ScrollView>
            </Wallpaper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
