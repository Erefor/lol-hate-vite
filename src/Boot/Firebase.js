import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyClMHJDb3aWMcbyvZD7i0jD14yDvrYhfuM',
    authDomain: 'prueba-379df.firebaseapp.com',
    databaseURL: 'https://prueba-379df-default-rtdb.firebaseio.com',
    projectId: 'prueba-379df',
    storageBucket: 'prueba-379df.appspot.com',
    messagingSenderId: '1003715560659',
    appId: '1:1003715560659:web:04415b788a99b362918026',
    measurementId: 'G-P6HV0DG0D7'
}
const app = initializeApp(firebaseConfig)
const database = getDatabase()

export default  { app, database }
