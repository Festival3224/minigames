import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCk0dil9HD8Je5aMzhK3XCerK9k1Mt2OxI',
  authDomain: 'minigames-festival3224.firebaseapp.com',
  projectId: 'minigames-festival3224',
  storageBucket: 'minigames-festival3224.firebasestorage.app',
  messagingSenderId: '1098774483021',
  appId: '1:1098774483021:web:7bd2c3ff7f516a95a34c04',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
