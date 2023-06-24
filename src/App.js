
import './App.css';
import FakeStore from './components/FakeStore';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { fakeStoreReducer } from './components/reducers/fakeStoreReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import cartReducer from './components/reducers/cartReducer';
import { BrowserRouter as Router, Switch,Route, } from 'react-router-dom';
import Carts from './components/Carts';
import NavBar from './components/NavBar';

function App() {
  const rootReducer = combineReducers({
    fakeStore: fakeStoreReducer,
    carts: cartReducer,
  })

  const store = createStore(rootReducer,applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/cart">
              <Carts />
            </Route>
            <Route exact path="/">
              <FakeStore />
            </Route>
          </Switch>
        </div>
      </Router>
   </Provider>
  );
}

export default App;
