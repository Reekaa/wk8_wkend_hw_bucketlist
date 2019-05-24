import React from 'react';

const List = (props) => {

  const {name, capital, flag} = props.bucketlist;

  return(
    <div className="ui raised card">
    <h1>Country: {name} </h1>
    <h2>Capital: {capital} </h2>
    <img alt="img" src={flag} />
    </div>
  )

}

export default List;
