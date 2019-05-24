import { combineReducers } from 'redux';

import country_reducer from './country_reducer.js';
import bucketlist_reducer from './bucketlist_reducer.js';

export default combineReducers({
  countries: country_reducer,
  bucketlist: bucketlist_reducer
});
