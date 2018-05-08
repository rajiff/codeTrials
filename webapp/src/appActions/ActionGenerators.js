import ActionTypes from './ActionTypes';
import request from 'superagent';

const onAddNewTechDomain = function(newTechDomain) {
  return function(dispatch) {
    return request
      .post('/techdomains')
      .send(newTechDomain)
      .then((res) => {
        // SUCCESS
        dispatch(onAddedNewTechDomain(res.body));
      })
      .catch((err) => {
        // ERROR
        dispatch(onErrorInRequest(`Request failed ${err}`));
      })
  }
}

const onLoadTechDomainCollection = function(options) {
  return function(dispatch) {
    return request
      .get('/techdomains')
      .then((res) => {
        // SUCCESS
        dispatch(onLoadedTechDomainCollection(res.body));
      })
      .catch((err) => {
        // ERROR
        dispatch(onErrorInRequest(`Request failed ${err}`));
      })
  }
}

const onLoadedTechDomainCollection = function(techDomainColln) {
  const action = {
    type: ActionTypes.LOADED_TECH_DOMAIN_COLLN,
    payload: { techDomainColln },
    error: false
  };
  return action;
}

const onAddedNewTechDomain = function(newTechDomain) {
  const action = {
    type: ActionTypes.ADDED_NEW_TECH_DOMAIN,
    payload: { newTechDomain },
    error: false
  };
  return action;
}

const onErrorInRequest = function(err) {
  const action = {
    type: ActionTypes.GOT_ERROR,
    payload: { error: err },
    error: true
  };
  return action;
}

export {
  onErrorInRequest,
  onAddNewTechDomain,
  onAddedNewTechDomain,
  onLoadTechDomainCollection,
  onLoadedTechDomainCollection
}