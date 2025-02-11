import {
    doc,
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';
import { db } from '../config/firebase';

const getDocRef = (collectionName: string, documentId: string) => {
    return doc(db, collectionName, documentId);
}

const getCollectionRef = (collectionName: string) => {
    return collection(db, collectionName);
}

export const getAllDocuments = async (collectionName: string) => {
    const documents = await getDocs(getCollectionRef(collectionName));
    if (documents.empty) {
        return [];
    }
    return documents.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export const getDocumentById = async (collectionName: string, id: string) => {
    const document = await getDoc(getDocRef(collectionName, id));
    if (!document.exists()) {
        return null;
    }
    return { id: document.id, ...document.data() };
}

export const createDocument = async (collectionName: string, data: any) => {
    const newDoc = await addDoc(getCollectionRef(collectionName), data);
    if (!newDoc.id) return null;
    return { id: newDoc.id, ...data };
}

export const updateDocument = async (collectionName: string, id: string, data: any) => {
    const updatedDoc = await updateDoc(getDocRef(collectionName, id), data);
    return { id, ...data }
}

export const deleteDocument = async (collectionName: string, id: string) => {
    await deleteDoc(getDocRef(collectionName, id));
    return id;
}
