import React from 'react';
import './App.css';
import CountryListContainer from './containers/CountryListContainer.js';
import BucketListContainer from './containers/BucketListContainer.js';

function App() {
  return (
    <div className="ui container">
      <h1>Bucket List</h1>
      <CountryListContainer />
      <div className="ui horizontal divider">
      <i className="purple flag icon"> </i>
        Countries to visit
      <i className="purple flag icon"> </i>
      </div>
      <BucketListContainer />
    </div>
  );
}

export default App;
