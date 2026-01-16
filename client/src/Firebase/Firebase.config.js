import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDueAPFbGisz2qBi2c0XVANEX5wEqp5FFw',
  authDomain: 'solosphere-909e4.firebaseapp.com',
  projectId: 'solosphere-909e4',
  storageBucket: 'solosphere-909e4.firebasestorage.app',
  messagingSenderId: '541986682220',
  appId: '1:541986682220:web:f19d221f1680c23f7d2f49',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
