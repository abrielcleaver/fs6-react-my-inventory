import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './Components/HomePage';
import DetailPage from './Components/DetailPage';
import ListPage from './Components/ListPage';
import CreatePage from './Components/CreatePage';

import './App.css';
import { logout } from './services/fetch-utils';

function App() {
  // track the user in state
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));


  async function handleLogout() {
    // call the logout function
    await logout();
    // clear the user in state
    setUser('');
  }

  return (
    <Router>
      <div className='App'>
        <header>
          {/* if there is a user in state, render out a link to the greenhouse, 
            the create page, and add a button to let the user logout */}
          {
            user && <>
              <NavLink to="/greenhouse">Greenhouse</NavLink>
              <NavLink to="/create">Gardener&apos;s Page</NavLink>
              <button onClick={handleLogout}>logout</button>
            </>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {/* if there is a user, redirect to the greenhouse. Otherwise, render the home page. 
                Note that the HomePage will need a function called setUser that can set the user state in App.js */}
              { user 
                ? <Redirect to="/greenhouse" />
                : <HomePage setUser={setUser} />
              }
            </Route>
            <Route exact path="/greenhouse">
              {/* if there is a user, render the greenhouse list. Otherwise, redirect to the home route/auth page */}
              {
                user 
                  ? <ListPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/greenhouse/:id">
              {/* if there is a user, render the detail page. Otherwise, redirect to the home route/auth page */}
              {
                user ? <DetailPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/create">
              {/* if there is a user, render the create page. Otherwise, redirect to the home route/auth page */}
              {
                user ? <CreatePage />
                  : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
