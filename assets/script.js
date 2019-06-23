$(document).ready(function() {

    var config = {
        apikey: "AIzaSyCYdQ9ZmFQNW_Nw7AeHX27lwHVBzfkxQrE ",
        authDomain: "train-scheduler-dd299.firebaseapp.com",
        databaseURL: "https://train-scheduler-dd299.firebaseio.com",
        projectId: "train-scheduler-dd299",
        storageBucket:"train-scheduler-dd299.appspot.com",
    }

    firebase.initialApp(config)

    var database = firebase.database()
})