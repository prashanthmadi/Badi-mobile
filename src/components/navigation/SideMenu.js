/* @flow */

import React, {Component} from 'react';
import {View, ListView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from 'AppColors';
import {Actions} from 'react-native-router-flux';

export default class SideMenu extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    name: 'Home',
                    action: 'homeScreen'
                }, {
                    name: 'Manage Student',
                    action: 'manageStudent'
                }, {
                    name: 'Manage ClassRoom',
                    action: 'manageClassRoom'
                }, {
                    name: 'Create a Parent Token',
                    action: 'parentToken'
                }
            ])
        };
    }

    _onPress(rowData) {
        Actions.drawer({key: rowData.action, type: 'replace'});
        Actions.refresh({key: 'drawer', open: false })
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <TouchableOpacity onPress={() => this._onPress(rowData)}>
                    <Text style={styles.text}>{rowData.name}</Text>
                </TouchableOpacity>}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.darkprimarycolor,
        paddingTop: 10
    },
    text: {
        textAlign: 'left',
        fontSize: 20,
        paddingLeft: 5,
        borderColor: AppColors.textprimarycolor,
        borderWidth: 1,
        color: AppColors.textprimarycolor
    }
});
