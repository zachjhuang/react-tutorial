import { getDatabase, onValue, ref, update } from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDX1mBtFE4wPSl0RLaP_qrviVvNl_EpoNU",
    authDomain: "react-tutorial-1fe9b.firebaseapp.com",
    databaseURL: "https://react-tutorial-1fe9b-default-rtdb.firebaseio.com",
    projectId: "react-tutorial-1fe9b",
    storageBucket: "react-tutorial-1fe9b.appspot.com",
    messagingSenderId: "1038089437403",
    appId: "1:1038089437403:web:49551b2beefd9cef5b8cfe",
    measurementId: "G-50G8XY8C3W"

};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => (
        onValue(ref(database, path), (snapshot) => {
            setData(snapshot.val());
        }, (error) => {
            setError(error);
        })
    ), [path]);

    return [data, error];
};

const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
        update(ref(database, path), value)
            .then(() => setResult(makeResult()))
            .catch((error) => setResult(makeResult(error)))
    }, [database, path]);

    return [updateData, result];
};

export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
    const [user, setUser] = useState();

    useEffect(() => (
        onAuthStateChanged(getAuth(firebase), setUser)
    ), []);

    return [user];
};