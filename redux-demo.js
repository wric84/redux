const redux = require("redux");

//area reducer function that changes store, state is given default state so that it doesnt have error when initially runs
const counterReducer = (state = { counter: 0 }, action) => {
  //making our reducer more powerful by giving it multiple action types listening for
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//central data pointing to reducer
const store = redux.createStore(counterReducer);

// console.log(store.getState());

//function that fetches state
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//tells store to listen for changes in function
store.subscribe(counterSubscriber);

//dispatch is a method that dispatches an action. an action type
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
