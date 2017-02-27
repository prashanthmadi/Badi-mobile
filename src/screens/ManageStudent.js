/* @flow */

import React, {Component} from 'react';
import {View, Text, ListView, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../components/common/Header';
import Wallpaper from '../components/common/Wallpaper';
import hamburgerImg from '../assets/images/hamburger.png';
import UserListItem from '../components/common/UserListItem';
import AppColors from 'AppColors';
import FABButton from '../components/navigation/FABButton';

import kid1 from '../assets/images/kid1.jpg';
import kid2 from '../assets/images/kid2.jpg';
import kid3 from '../assets/images/kid3.jpg';

export default class ManageStudent extends Component {

  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.state = {
          dataSource: ds.cloneWithRows([
              {
                  name: 'Prashanth Madi',
                  image:kid1
              }, {
                  name: 'Prashant Pratap',
                  image:kid2
              }, {
                  name: 'Anand',
                  image:kid3
              }, {
                  name: 'David',
                  image:kid2
              }, {
                  name: 'John',
                  image:kid1
              }, {
                  name: 'Prashant Pratap',
                  image:kid2
              }, {
                  name: 'Anand',
                  image:kid3
              }
          ])
      };
  }

  _onPress(rowData) {
  }

    render() {
        return (
            <Wallpaper>
                <Header title="Manage Students" source={hamburgerImg}/>
                <View style={styles.container}>
                <ScrollView>
                    <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <UserListItem user={rowData}/>}/>
                </ScrollView>
                <FABButton/>
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
