const Reducer = (state, action) => {
  switch (action.type){
    case 'UPDATE_SEARCH_VALUE':
      return {
        ...state,
         search: { 
           searchValue: action.payload
        }
      }
    default: return state;
  }
}

export default Reducer;