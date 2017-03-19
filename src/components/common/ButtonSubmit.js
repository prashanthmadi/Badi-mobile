import React, { Component } from 'react';
import { Button } from 'react-native-elements'

class ButtonSubmit extends Component {

	render() {
		return (
			<Button
				raised
				onPress={() => this.props.action()}
				title={this.props.type}/>
		);
	}
}

export default ButtonSubmit;
