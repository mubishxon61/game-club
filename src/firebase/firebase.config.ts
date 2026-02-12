import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDfXGGWsSbfENlMvSlZ4EK-OL0w4IPyW4",
    authDomain: "game-club-865f3.firebaseapp.com", 
    projectId: "game-club-865f3",
    storageBucket: "game-club-865f3.firebasestorage.com",
    messagingSenderId: "720497263037",
    appId: "1:720497263037:web:cc42a9d0409e8698ff12d4"                     
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)