import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import{
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBXwLKgELOXyH9Vpl759yTYqN7BCs0-B6c",
    authDomain: "crwn-clothing-db-8ff05.firebaseapp.com",
    projectId: "crwn-clothing-db-8ff05",
    storageBucket: "crwn-clothing-db-8ff05.appspot.com",
    messagingSenderId: "767138155006",
    appId: "1:767138155006:web:9151e609e59b71009cd8af"
};

const friebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
}