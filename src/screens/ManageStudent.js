/* @flow */

import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Header from '../components/common/Header';
import Wallpaper from '../components/common/Wallpaper';
import hamburgerImg from '../assets/images/hamburger.png';
import UserListItem from '../components/common/UserListItem';
import AppColors from 'AppColors';
import FABButton from '../components/navigation/FABButton';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'

class ManageStudent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getStudentsList();
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
                        <ListView dataSource={ds.cloneWithRows(studentsList)}
                            renderRow={(rowData) => <UserListItem student={rowData} />}
                        />
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