import React, {Component} from 'react';

import {Scene, Router} from 'react-native-router-flux';
import LoginScreen from './screens/login';
import HomeScreen from './screens/home';
import SingUp from './screens/signup';

var Parse = require('parse/react-native');

function setup() : ReactClass < {} > {

    Parse.initialize("131627da-2461-4b90-904c-350b02a118c3");
    Parse.serverURL = 'http://parsesampleapp.azurewebsites.net/parse';

    class Badi extends Component {


        isLoggedIn() {

          // const user = await Parse.User.currentAsync();

            Parse.User.currentAsync()
            .then(currentUser => console.log("user " + currentUser))
            .catch(error => console.log(error.message));
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
