// Initialize Firebase
var config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxx"
};
firebase.initializeApp(config);



// Initialize Vue
new Vue({
    el: '#app',
    data: {
        brand: 'Todolist Vue.js',
        connected: false,
        email: '',
        password: '',
        authUser: null
    },
    methods:{
        register () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            this.connected = !this.connected
        },
        signIn () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            this.connected = !this.connected
        },
        googleLogin () {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider)
            .then(
                data => {
                    if(authUser = !null) {
                        this.connected = !this.connected
                    }
                }
             )
        },
        signOut () {
            firebase.auth().signOut()
            this.connected = !this.connected
        }
    },
    created() {
        firebase.auth().onAuthStateChanged(user => { this.authUser = user })
    }
})