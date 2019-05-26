import React from 'react';
import Country from './Country';

const VisitList = (props) => {

  const visitedCountry = props.visited.map((country, index) => {
    return(
      <Country
        name={country.name}
        capital={country.capital}
        flag={country.flag}
        key={index}
      />
    )
  })

  return(
    <div>
      {visitedCountry}
    </div>
  )
}

export default Country;
