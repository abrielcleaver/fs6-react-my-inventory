import { client } from './client';

export async function getUser() {

  return client.auth.session();
}

// signs new user in and puts an auth token in local storage in the browser
export async function signupUser(email, password){
  const response = await client.auth.signUp({ email, password });
    
  return response.user;
}

// signs existing user in and puts an auth token in local storage in the browser
export async function signInUser(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

// removes the token from local storage and redirects user home
export async function logout() {
  await client.auth.signOut();

  return window.location.href = '/';
}
