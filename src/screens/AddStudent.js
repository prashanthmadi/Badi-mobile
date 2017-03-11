/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Wallpaper from '../components/common/Wallpaper';
import Header from '../components/common/Header';
import hamburgerImg from '../assets/images/hamburger.png';
import NewStudentForm from '../components/forms/NewStudentForm';
import { Actions } from 'react-native-router-flux';

export default class AddStudent extends Component {

    handleSubmit = (values) => {
        var Student = Parse.Object.extend("Student");
        var student = new Student();

        if (values.dob === "undefined") {
            dobirth = new Date();
        } else {
            dobirth = new Date(values.dob);
        }

        student.save({
            firstName: values.firstname,
            lastName: values.lastname,
            dob: dobirth
        }, {
            success: function(student) {
                Actions.drawer({key: 'manageStudent', type: 'replace'});
            },
            error: function(student, error) {
                console.warn(JSON.stringify(error));
            }
        });
    }

    render() {
        return (
            <Wallpaper>
                <Header title="Add Student" source={hamburgerImg}/>
                <View style={styles.container}>
                    <NewStudentForm onSubmit={this.handleSubmit}/>
                </View>
            </Wallpaper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80
    }
});
