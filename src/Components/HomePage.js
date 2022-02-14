import React, { useState } from 'react';
import { signInUser, signupUser } from '../services/fetch-utils';

export default function HomePage({ setUser }) {
// add state needed here
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');

  // what happens on submit?
  async function handleSignIn(e) {
    e.preventDefault();
      
    // sign the user in using the form state
    const user = await signInUser(email, password);

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, 
    // this should automatically redirect the user to the board game list
    setUser(user);
  }
    
  async function handleSignUp() {
    // sign the user up using the form state
    const user = await signupUser(email, password);

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, 
    // this should automatically redirect the user to the greenhouse plant list
    setUser(user);
  }

  return (
    <div className='auth'>
      <h1><em>WELCOME TO GREENHOUSE</em></h1>
      {/* on submit, sign the user in using the function defined above */}
      <form onSubmit={handleSignIn}>
        <label>
            Email
          {/* we sync up react state with the input. input ALWAYS gets it value from react state.
               whenever state changes, this input will update--NO MATTER HOW THAT STATE CHANGED.
          */}
          {/* controlled input */}
          {/* on change, update the form state for email */}
          <input required type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input required type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <button>Sign In</button>
        {/* on clicking sign up, sign the user up using the function defined above */}
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}