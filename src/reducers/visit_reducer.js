const visitedReducer = (state = [], action) => {
  switch (action.type) {
    case 'VISIT':
      return [...state, action.country]
    default:
      return state;
  }
}

export default visitedReducer;
