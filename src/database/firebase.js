import { initializeApp } from 'firebase/app'
import { getFirestore, initializeFirestore, collection, getDocs, doc, setDoc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCJcTaNtcv_nOMfHqcpTbyBcExDLk8YcdA',
  authDomain: 'crud-reactnative-df3f2.firebaseapp.com',
  projectId: 'crud-reactnative-df3f2',
  storageBucket: 'crud-reactnative-df3f2.appspot.com',
  messagingSenderId: '219226377704',
  appId: '1:219226377704:web:d0203474ebb2c4832a285d',
  measurementId: 'G-1GT8Q9ZLEL'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
})

// ? obtener usuarios
export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'))
  const querySnapshotUsers = querySnapshot.docs.map((doc) => doc.data())
  return querySnapshotUsers
}

// ? crear usuarios
export const createUser = async (user) => {
  await addDoc(collection(db, 'users'), user)
}
