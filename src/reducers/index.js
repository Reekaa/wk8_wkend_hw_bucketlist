import { combineReducers } from 'redux';

import country_reducer from './country_reducer.js';
import bucketlist_reducer from './bucketlist_reducer.js';
import visit_reducer from './visit_reducer.js'

export default combineReducers({
  countries: country_reducer,
  bucketlist: bucketlist_reducer,
  visited: visit_reducer
});
