const country_reducer = ( state = [], action ) => {
  switch (action.type) {
    case 'COUNTRIES_DATA':
      return [...state, ...action.countriesData]
    
    default:
      return state
  }
}

export default country_reducer;
