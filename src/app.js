import React, {Component} from 'react';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import {Scene, Router, Actions} from 'react-native-router-flux';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import SingUp from './screens/Signup';
import ManageStudent from './screens/ManageStudent';
import ManageClassRoom from './screens/ManageClassRoom';
import ParentToken from './screens/ParentToken';

import {serverURL,appId} from './env';
import NavigationDrawer from './components/navigation/NavigationDrawer';

var Parse = require('parse/react-native');
const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

function setup() : ReactClass < {} > {
    Parse.initialize(appId);
    Parse.serverURL = serverURL;
    window.Parse = Parse;

    class Root extends Component {

        async isLoggedIn() {
          const user = await Parse.User.currentAsync();
          if(user){
            Actions.drawer();
          }else{
            Actions.loginScreen();
          }
        }

         render() {
           this.isLoggedIn();

            return (
              <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="loginScreen" component={LoginScreen} animation='fade' hideNavBar={true} initial={true}/>
                        <Scene key="singUp" component={SingUp} animation='fade' hideNavBar={true}/>
                        <Scene key="drawer" component={NavigationDrawer} open={false} >
                            <Scene key="homeScreen" component={HomeScreen} animation='fade' hideNavBar={true}/>
                            <Scene key="manageStudent" component={ManageStudent} animation='fade' hideNavBar={true}/>
                            <Scene key="manageClassRoom" component={ManageClassRoom} animation='fade' hideNavBar={true}/>
                            <Scene key="parentToken" component={ParentToken} animation='fade' hideNavBar={true}/>
                        </Scene>
                    </Scene>
                </Router>
              </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;
