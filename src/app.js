import React, {Component} from 'react';
import { Provider } from 'react-redux'
import {Actions} from 'react-native-router-flux';
var Parse = require('parse/react-native');

import {serverURL,appId} from './env';
import Store from './store';
import AppNavigation from './components/navigation/AppNavigation';

const store = Store();

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
                <AppNavigation/>
              </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;
