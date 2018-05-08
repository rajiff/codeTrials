import { ActionTypes } from '../appActions';

let initialState = {
  techDomainColln: [],
  error: null
}

const AppReducers = function(previousState = initialState, action) {
	switch(action.type) {
		case ActionTypes.ADDED_NEW_TECH_DOMAIN: {
			return Object.assign({}, previousState, {
        techDomainColln: [...previousState.techDomainColln, action.payload.newTechDomain]
      })
		}
		case ActionTypes.LOADED_TECH_DOMAIN_COLLN: {
			return Object.assign({}, previousState, {
        techDomainColln: action.payload.techDomainColln
      })
		}
		case ActionTypes.GOT_ERROR: {
			return Object.assign({}, previousState, {
        error: action.payload.error
      })
		}
		default:
			return previousState;
	}
}

export {
	AppReducers as default
}