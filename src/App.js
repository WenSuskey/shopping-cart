
import './App.css';
import FakeStore from './components/FakeStore';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { fakeStoreReducer } from './components/reducers/fakeStoreReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import cartReducer from './components/reducers/cartReducer';
import { BrowserRouter as Router, Link, Switch,Route, } from 'react-router-dom';
import Carts from './components/Carts';

function App() {
  const rootReducer = combineReducers({
    fakeStore: fakeStoreReducer,
    carts: cartReducer,
  })

  const store = createStore(rootReducer,applyMiddleware(thunk))

  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
  return (
    <Provider store={store}>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Store</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
