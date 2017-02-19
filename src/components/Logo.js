import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
    render() {
        return (
            <View style={this.container()}>
                <Image source={logoImg} style={this.image()}/>
                <Text style={styles.text}>Badi</Text>
            </View>
        );
    }

    image() {
        return {
					width: 25 *this.props.size,
					height: 25 *this.props.size
				}
    }

    container() {
        return{
            flex : this.props.size,
            alignItems : 'center',
            justifyContent : 'center'
        }
    }

}

const styles = StyleSheet.create({

    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20
    }
});
