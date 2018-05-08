import { ActionTypes } from '../appActions';

let initialState = {
  techDomainColln: [],
  error: null
}

const AppReducers = function(previousState = initialState, action) {
	switch(action.type) {
		case ActionTypes.ADD_TECH_DOMAIN: {
			return Object.assign({}, previousState, {
        techDomainColln: action.payload.techDomainColln
      })
		}
		default:
			return previousState;
	}
}

export {
	AppReducers as default
}