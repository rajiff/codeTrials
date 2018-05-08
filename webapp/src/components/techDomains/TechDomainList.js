import React from 'react';

import Grid from 'material-ui/Grid';

export default class TechDomainList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div style={{flexGrow: 1, marginTop: 20}}>
				<Grid container spacing={16} direction={'row'} justify={'flex-start'} alignItems={'center'}>
					<Grid item xs={12} sm={9} md={8} lg={6} xl={5}>
						<h2>List of Technology Domains</h2>
					</Grid>
				</Grid>
			</div>
		)
	}
}