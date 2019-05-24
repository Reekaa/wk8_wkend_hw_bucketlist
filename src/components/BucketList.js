import React from 'react';
import List from './List.js';

const BucketList = (props) => {

  const singleItem = props.bucketlist.map((country, index) => {
    return (
      <List
        bucketlist = {country}
        key = {index}
      />
    )
  })

  return (
    <div>
      {singleItem}
    </div>
  )

}

export default BucketList;
