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
        <i className="flag icon"> </i>
          Countries to visit
        <i className="flag icon"> </i>
      </div>
      <BucketListContainer />
    </div>
  );
}

export default App;
