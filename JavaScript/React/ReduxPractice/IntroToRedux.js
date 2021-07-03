//createStore() 
const store = Redux.createStore(
    (state = 5) => state
  );
  
  //Get State from Redux store
  const currentState = store.getState()