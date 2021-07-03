//createStore() 
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer)

//Get State from Redux store
const store = Redux.createStore(
    (state = 5) => state
  );
  
  const currentState = store.getState()