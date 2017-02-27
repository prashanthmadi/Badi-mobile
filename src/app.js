import React, {Component} from 'react';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import {Actions} from 'react-native-router-flux';

import {serverURL,appId} from './env';
import AppNavigation from './components/navigation/AppNavigation';

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
                <AppNavigation/>
              </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;
