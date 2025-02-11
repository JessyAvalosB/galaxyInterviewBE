import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig.json'

dotenv.config();

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
