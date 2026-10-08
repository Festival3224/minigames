import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  type User,
} from 'firebase/auth';

import { auth } from './firebase';

export async function loginWithEmailAndPassword(email: string, password: string): Promise<User> {
  /*   await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }); */

  const credential = await signInWithEmailAndPassword(auth, email, password);

  return credential.user;
}

export async function registerWithEmailAndPassword(
  email: string,
  password: string,
  username: string,
): Promise<User> {
  const credential = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(credential.user, {
    displayName: username,
  });

  return credential.user;
}
