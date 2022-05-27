import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import reducers
import loginReducer from "./reducers/admin";

const reducers = combineReducers({
    Admin: loginReducer
})

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);

// const store = createStore(reducers, applyMiddleware(thunk));

export default store;