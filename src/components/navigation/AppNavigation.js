/* @flow */

import React, { Component } from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

import LoginScreen from '../../screens/Login';
import HomeScreen from '../../screens/Home';
import SingUp from '../../screens/Signup';
import ManageStudent from '../../screens/ManageStudent';
import ManageClassRoom from '../../screens/ManageClassRoom';
import ParentToken from '../../screens/ParentToken';
import AddStudent from '../../screens/AddStudent';
import StudentDetail from '../../screens/StudentDetail';
import CreateReport from '../../screens/CreateReport';

import NavigationDrawer from './NavigationDrawer';

export default class AppNavigation extends Component {
  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene key="loginScreen" component={LoginScreen} animation='fade' hideNavBar={true} initial={true}/>
              <Scene key="singUp" component={SingUp} animation='fade' hideNavBar={true}/>
              <Scene key="drawer" component={NavigationDrawer} open={false} >
                  <Scene key="homeScreen" component={HomeScreen} animation='fade' hideNavBar={true} initial={true}/>
                  <Scene key="manageStudent" component={ManageStudent} animation='fade' hideNavBar={true} />
                  <Scene key="studentDetail" component={StudentDetail} animation='fade' hideNavBar={true} />
                  <Scene key="createReport" component={CreateReport} animation='fade' hideNavBar={true}/>
                  <Scene key="manageClassRoom" component={ManageClassRoom} animation='fade' hideNavBar={true}/>
                  <Scene key="parentToken" component={ParentToken} animation='fade' hideNavBar={true}/>
                  <Scene key="addStudent" component={AddStudent} animation='fade' hideNavBar={true}/>
            </Scene>
          </Scene>
      </Router>
    );
  }
}
