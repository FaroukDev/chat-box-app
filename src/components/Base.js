import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdMJBItjpAPTr8mfNRUOpn4FKlCKx-zPk",
    authDomain: "chat-box-app-930fe.firebaseapp.com",
    databaseURL: "https://chat-box-app-930fe.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())


export { firebaseApp }

export default base