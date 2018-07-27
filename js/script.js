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
    }
})