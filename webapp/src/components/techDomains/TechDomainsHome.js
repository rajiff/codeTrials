import React from 'react';
import TechDomainList from './TechDomainList';

import { ActionGenerators } from '../../appActions';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

class TechDomainsHome extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div style={{flexGrow: 1, marginTop: 20}}>
				<Grid container spacing={16} direction={'row'} justify={'flex-start'} alignItems={'center'}>
					<Grid item xs={12}>
						<TechDomainList techDomains={this.props.techDomainColln}/>
					</Grid>
					<Grid container spacing={16} direction={'row'} justify={'flex-end'} alignItems={'flex-end'}>
						<Grid item>
							<Button variant="fab" color="primary" aria-label="add" style={{marginRight: 20}}>
		        		<AddIcon />
		      		</Button>
		      	</Grid>
					</Grid>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    techDomainColln: state.techDomainColln,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onTechDomainListLoad: () => {
  		dispatch(ActionGenerators.onTechDomainListLoad());
  	},
    onAddTechDomain: (newTechDomain) => {
      dispatch(ActionGenerators.onAddNewTechDomain(newTechDomain));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TechDomainsHome);