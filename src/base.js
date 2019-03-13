import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBSo6Tqztw8ukSIeetSnf5769xJs-Mg8hQ",
    authDomain: "catch-of-the-day-patrick-66264.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-patrick-66264.firebaseio.com",
    projectId: "catch-of-the-day-patrick-66264",
    storageBucket: "catch-of-the-day-patrick-66264.appspot.com",
    messagingSenderId: "166640526215"

}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())


export { base };