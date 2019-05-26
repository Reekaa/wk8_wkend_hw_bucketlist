import React from 'react';

const Country = (props) => {

  const {name, capital, flag} = props.bucketlist;

  return(
    <div className="ui card">
      <img alt="img" height="150" width="290" src={flag} />
      <div className="content">
        <h3>Country: {name} </h3>
        <h4>Capital: {capital} </h4>
      </div>
      <div class="extra content">
        <span class="right floated star">
          <i class="star icon"></i>
          <a>Visited</a>
        </span>
      </div>
    </div>
  )

}

export default Country;
