$(document).ready(function() {

   

    var config = {
        apikey: "AIzaSyCYdQ9ZmFQNW_Nw7AeHX27lwHVBzfkxQrE ",
        authDomain: "train-scheduler-dd299.firebaseapp.com",
        databaseURL: "https://train-scheduler-dd299.firebaseio.com",
        projectId: "train-scheduler-dd299",
        storageBucket:"train-scheduler-dd299.appspot.com",
    }

    firebase.initializeApp(config)

    var database = firebase.database()

    
    localStorage.removeItem('firebase_websocket_failure')
    
    $("#subBtn").on("click", function(event) {
        event.preventDefault()

        var trainName = $('#trainName').val().trim()
        var destination = $('#destination').val().trim()
        var trainTime = $('#trainTime').val().trim()
        var frequency = $('#frequency').val().trim()

        var newTrain = {
            name: trainName,
            destination: destination,
            start: trainTime,
            frequency: frequency
        }

        database.ref().push(newTrain)

        console.log("Train succesfully added")

        $('#trainName').val('')
        $('#destination').val('')
        $('#trainTime').val('')
        $('#frequency').val('')
    })

    database.ref().on('child_added', function(childSnapshot, prevChildKey) {
        
        console.log(childSnapshot.val())

        var trainName = childSnapshot.val().name
        var destination = childSnapshot.val().destination
        var trainTime = childSnapshot.val().start
        var frequency = childSnapshot.val().frequency

        var frequency

        var firstTime = 0

        var timeConverted = moment(firstTime, "HH:mm").subtract(1,'years')
        console.log(timeConverted)

        var currentTime = moment()
        console.log(timeConverted)

        var currentTime = moment()
        console.log('CURRENT TIME: ' + moment(currentTime).format('HH:mm'))

        var diffTime = moment().diff(moment(firstTimeConverted), "minutes")
        console.log('DIFFERENCE IN TIME: ' + diffTime)

        var tRemainder = diffTime % frequency
        console.log(tRemainder)

        var tMinutesTillTrain = trainfreq - tRemainder
        console.log('MINUTES TILL TRAIN: ' + moment(nextTrain).format('HH:mm'))

        $('#trains').append('<tr><td>' + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + moment(nextTrain).format('HH:mm') + "</td><td>" + tMinutesTillTrain + '</td></tr>')
    })
})