import React from 'react';
import TechDomainList from './TechDomainList';

import { ActionGenerators } from '../../appActions';
import { connect } from 'react-redux';

class TechDomainsHome extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h2>Technology Domains</h2>
				<TechDomainList />
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
    onAddTechDomain: (newTechDomain) => {
      dispatch(ActionGenerators.onAddNewTechDomain(newTechDomain));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TechDomainsHome);