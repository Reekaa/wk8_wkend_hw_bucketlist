import React from 'react';
import Country from './Country.js';

const BucketList = (props) => {

  const singleCountry = props.bucketlist.map((country, index) => {
    return (
      <Country bucketlist={country} key={index} />
    )
  })

  return (
    <div className="bucketlist">
      {singleCountry}
    </div>
  )

}

export default BucketList;
