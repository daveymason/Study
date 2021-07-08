const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const incAction =  () => {
  return { type: INCREMENT };
}

const decAction = () => {
  return { type: DECREMENT };
}

const store = Redux.createStore(counterReducer)