//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Actions} from 'react-native-router-flux';

import {ActionCreators} from '../actions'
import Header from '../components/common/Header';
import Wallpaper from '../components/common/Wallpaper';
import hamburgerImg from '../assets/images/hamburger.png';
import FABButton from '../components/navigation/FABButton';

// create a component
class CreateReport extends Component {

     constructor(props) {
        super(props);
    }

      componentWillMount() {
        this.props.getQuestionsList();
    }

    render() {
        const {questionList} = this.props;
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        if (questionList && questionList.length !== 0) {
            return (
                <Wallpaper>
                    <Header title={this.props.student.get('firstName')} source={hamburgerImg} />
                    <View style={styles.container}>
                        <ListView dataSource={ds.cloneWithRows(questionList)}
                                renderRow={(rowData) => <Text>{rowData.get('Text')}</Text>}
                            />
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return {
        questionList: state.questionList
    }
}, mapDispatchToProps)(CreateReport);