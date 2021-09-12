import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD3EcixPkULi6lAxSCtyEVHxJfVRFNMjfw',
  authDomain: 'signal-clone-8c290.firebaseapp.com',
  projectId: 'signal-clone-8c290',
  storageBucket: 'signal-clone-8c290.appspot.com',
  messagingSenderId: '760323270288',
  appId: '1:760323270288:web:b6bd137efa65dc215a1a15',
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
