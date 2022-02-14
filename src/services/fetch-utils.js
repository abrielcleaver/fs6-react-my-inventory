import { client, checkError } from './client';

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

export async function createPlant(plant){
  const response = await client
    .from('greenhouse')
    .insert([plant]);

  return checkError(response);
}

export async function getPlants() {
  const response = await client
    .from('greenhouse')
    .select();


  return checkError(response);    
}

export async function getPlantById(id) {
  const response = await client
    .from('greenhouse')
    .select()
    .match({ id })
    .single();

  return checkError(response);    
}
