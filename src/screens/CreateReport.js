//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView,ScrollView } from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Actions} from 'react-native-router-flux';
import { Icon } from 'react-native-elements'
import {Field, reduxForm} from 'redux-form';

import {ActionCreators} from '../actions'
import Header from '../components/common/Header';
import Wallpaper from '../components/common/Wallpaper';
import hamburgerImg from '../assets/images/hamburger.png';
import FABButton from '../components/navigation/FABButton';
import {FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import SkillInsertItem from '../components/common/SkillInsertItem';
import UserInput from '../components/common/UserInput';
import assessmentImg from '../assets/images/assessment.png';

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
                        <View style={styles.contentContainer}>
                            <ScrollView>
                                <ListView dataSource={ds.cloneWithRows(questionList)}
                                    renderRow={(question) => <SkillInsertItem question={question} />}
                                />
                            </ScrollView>
                        </View>
                        <View style={styles.bottomsheetContainer}>
                            <View style={styles.bottomsheet}>
                                <Field name="reportName" component={UserInput} source={assessmentImg} placeholder='Report Name' autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/>
                           <Icon name='rowing' />
                            </View>
                        </View>
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
    contentContainer:{
        flex:0.9
    },
    bottomsheetContainer:{
        flex:0.1
    },
    bottomsheet: {
        flex: 1,
        flexDirection: 'row'
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

createReportForm = reduxForm({
    form: 'createReport', // a unique identifier for this form
})(CreateReport);

export default connect((state) => {
    return {
        questionList: state.questionList
    }
}, mapDispatchToProps)(createReportForm);