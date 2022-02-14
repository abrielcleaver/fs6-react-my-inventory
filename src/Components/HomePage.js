import React, { useState } from 'react';
import { signInUser, signupUser } from '../services/fetch-utils';

export default function HomePage({ setCurrentUser }) {
// add state needed here
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');

  function clearForms() {
    setEmail('');
    setPassword('');
  }

  // what happens on submit?
  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signupUser(email, password);
   
    setCurrentUser(user);
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(email, password);
    setCurrentUser(user);
    clearForms();
  }

  return (
    <div className="home-page">
      <div>
        <h2>Welcome to Greenhouse</h2>
      </div>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          {/* we sync up react state with the input. Now, input ALWAYS gets it value from react state.
               whenever state changes, this input will update--NO MATTER HOW THAT STATE CHANGED.
          */}
          {/* controlled input */}
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input value={password} type='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input value={password} type='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
