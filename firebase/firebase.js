import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    process.env.AUTH0_SECRET,
    process.env.AUTH0_BASE_URL,
    process.env.AUTH0_ISSUER_BASE_URL,
    process.env.AUTH0_CLIENT_ID,
    process.env.AUTH0_CLIENT_SECRET,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
