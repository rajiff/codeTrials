import React from 'react'

export default class WelcomeView extends React.Component {
	constructor(props) {
		super(props);

		this.styles = {
			welcomeBox: {
				padding: 20,
				margin: 10,
				background: '#f3f5f7',
				textAlign: 'center',
				color: '#565656'
			}
		}
	}

	render() {
		return (
			<div style={this.styles.welcomeBox}>
				<h2>{'Welcome View'}</h2>
			</div>
		)
	}
}