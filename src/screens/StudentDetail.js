import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import Header from '../components/common/Header';
import Wallpaper from '../components/common/Wallpaper';
import hamburgerImg from '../assets/images/hamburger.png';
import FABButton from '../components/navigation/FABButton';
import {Actions} from 'react-native-router-flux';

class StudentDetail extends Component {
    assignParent = () => {
        console.warn('Button has been pressed!');
    };

    generateReport = (student) => {
        Actions.drawer({key: "createReport", type: 'replace',student:student});
    };

    render() {
        return (
            <Wallpaper>
                <Header title={this.props.student.get('firstName')} source={hamburgerImg} />
                <View style={styles.container}>
                    <Text> Name : {this.props.student.get('firstName')} {this.props.student.get('lastName')}</Text>
                    <View style={styles.buttonContainer}>
                        <Button onPress={this.assignParent} title="Assign Parent" color="#9E9E9E" accessibilityLabel="Assign Parent" />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button onPress={() => this.generateReport(this.props.student)} title="Generate Report" color="#9E9E9E" accessibilityLabel="Assign Parent" />
                    </View>
                </View>
            </Wallpaper>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    buttonContainer:{
        padding:10
    }
});
//make this component available to the app
export default StudentDetail;
