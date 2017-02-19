import React, {Component} from 'react';

import {Scene, Router} from 'react-native-router-flux';
import LoginScreen from './login';
import HomeScreen from './home';
import SingUp from './signup';

var Parse = require('parse/react-native');

function setup() : ReactClass < {} > {

    Parse.initialize("131627da-2461-4b90-904c-350b02a118c3");
    Parse.serverURL = 'http://parsesampleapp.azurewebsites.net/parse';

    class Badi extends Component {

        isLoggedIn() {
            Parse.User.currentAsync()
            .then(currentUser => console.warn("user " + currentUser))
            .catch(error => console.warn(error.message));
        }

        render() {
            this.isLoggedIn();
            return (
                <Router>
                    <Scene key="root">
                        <Scene key="loginScreen" component={LoginScreen} animation='fade' hideNavBar={true} initial={true}/>
                        <Scene key="singUp" component={SingUp} animation='fade' hideNavBar={true}/>
                        <Scene key="homeScreen" component={HomeScreen} animation='fade' hideNavBar={true}/>
                    </Scene>
                </Router>
            );
        }
    }

    return Badi;
}

module.exports = setup;
