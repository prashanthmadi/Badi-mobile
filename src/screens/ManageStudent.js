/* @flow */

import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet,
    ScrollView,
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'
import { List, ListItem } from 'react-native-elements'

import Header from '../components/common/Header';
import Wallpaper from '../components/common/Wallpaper';
import hamburgerImg from '../assets/images/hamburger.png';
import AppColors from 'AppColors';
import FABButton from '../components/navigation/FABButton';
import kid1 from '../assets/images/kid1.jpg';
import {Actions} from 'react-native-router-flux';


class ManageStudent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getStudentsList();
    }


    renderRow(rowData, sectionID) {
        return (
            <ListItem
                roundAvatar
                key={sectionID}
                title={rowData.get('firstName')}
                avatar={kid1}
                onPress={() =>Actions.drawer({ key: "studentDetail", type: 'replace', student: rowData })} 
            />
        )
    }


    render() {
        const {studentsList} = this.props;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        if (studentsList && studentsList.length !== 0) {
            return (
                <Wallpaper>
                    <Header title="Manage Students" source={hamburgerImg}/>
                    <View style={styles.container}>
                        <ScrollView>
                        <ListView dataSource={ds.cloneWithRows(studentsList)}
                            renderRow={this.renderRow}
                        />
                        </ScrollView>
                        <FABButton/>
                    </View>
                </Wallpaper>
            );
         }
         else{
              return (
                <View style={styles.container}>
                    <Text>empty list</Text>
                </View>
              )
         }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return {
        studentsList: state.studentsList
    }
}, mapDispatchToProps)(ManageStudent);