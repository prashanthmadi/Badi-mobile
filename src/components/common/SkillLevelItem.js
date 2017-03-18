//import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Row,
  Text,
  Button,
  View,
  Divider
} from '@shoutem/ui';
// create a component
class SkillLevelItem extends Component {
    render() {
        return (
            <Row>
                <View styleName="vertical">
                    <Text numberOfLines={1}>{this.props.question.get('Text')}</Text>
                    <View styleName="horizontal flexible">
                        <Button styleName="confirmation">
                            <Text>P</Text>
                        </Button>
                        <Button styleName="confirmation dark">
                            <Text>N</Text>
                        </Button>
                        <Button styleName="confirmation dark">
                            <Text>S</Text>
                        </Button>
                        <Button styleName="confirmation dark">
                            <Text>M</Text>
                        </Button>
                    </View>
                </View>
            <Divider styleName="line" />
            </Row>
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
export default SkillLevelItem;
