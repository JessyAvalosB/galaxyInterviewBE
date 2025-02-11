import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyA0CpCPCcJcwxE2bz6ulF3DLmVGrQkyy2c",
    authDomain: "galaxy-interview.firebaseapp.com",
    databaseURL: "https://galaxy-interview-default-rtdb.firebaseio.com",
    projectId: "galaxy-interview",
    storageBucket: "galaxy-interview.firebasestorage.app",
    messagingSenderId: "612683979648",
    appId: "1:612683979648:web:5dfc23b087ae8ffa793f65",
    measurementId: "G-MCJN096R05"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
