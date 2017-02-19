import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';

var LoginScreen = require('./login');


var Parse = require('parse/react-native');

function setup(): ReactClass < {} > {

  // Parse.initialize("YOUR_APP_ID");
  // Parse.serverURL = 'http://YOUR_PARSE_SERVER:1337/parse';


    class Badi extends Component {
        render() {
            return ( <LoginScreen> </LoginScreen>);
        }
    }

    return Badi;
}

module.exports = setup;
