const bucketlist_reducer = ( state = [], action ) => {
  switch (action.type) {
    case 'SELECT_COUNTRY':
      return [...state, action.country]
    default:
      return state
  }
}

export default bucketlist_reducer;
