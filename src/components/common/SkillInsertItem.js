import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {Card,Slider} from 'react-native-elements'

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
		const { question, input: { onChange }} = this.props;

        slideComplete = (value) => {
            this.setState({ value: value });
            onChange(value);
        };

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
                    onSlidingComplete={slideComplete} />
                <Text>{this.getLegend(question.get('Category'))[this.state.value]}</Text>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default SkillInsertItem;
