//Set database object
var database = firebase.database().ref(); // database is reference to database url in config code

//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
   

    var value = {
        "NAME": name,
        "MESSAGE": message
    }

    //Update database here
    database.push(value);
}

database.on('child_added', function(rowData){
    var row = rowData.val();
    var name  = row.NAME;
    var message = row.MESSAGE;
     $(".allMessages").append(name + " : " + message + "<br>");

})
