//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {Card,Slider} from 'react-native-elements'

// create a component
class SkillInsertItem extends Component {

    static defaultProps = {
        value: 0,
    };

    socialLegend = ["Skill has been Presented","Child Needs Imporvement","Child is progressing at a satisfactory pace","Child has mastered the skill"];
    practicalLegend = ["Present","Practice","Master"];
    state = {
        value: this.props.value,
    };

    getLegend(type){
        if(type==="social"){
            return this.socialLegend;
        }else{
            return this.practicalLegend; 
        }
    }

    render() {
        const {question} = this.props;

        return (
             <Card title={question.get('Text')}>
                <Slider
                    value={this.state.value}
                    minimumTrackTintColor="green"
                    maximumTrackTintColor="red"
                    thumbTintColor="green"
                    minimumValue = {0}
                    maximumValue ={this.getLegend(question.get('Category')).length-1}
                    step = {1}
                    onSlidingComplete={(value) => this.setState({value:value})} />
                <Text>{this.getLegend(question.get('Category'))[this.state.value]}</Text>
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SkillInsertItem;
