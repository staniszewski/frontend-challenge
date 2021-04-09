import { createContext, useReducer } from 'react';
import { initContext }  from './StoreConfig';
import Reducer from './Reducer'

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initContext);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}

export const AppContext = createContext();

export default Store;