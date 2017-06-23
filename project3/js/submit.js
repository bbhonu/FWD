var database = firebase.database();
var storageRef = database.ref();

document.getElementById("sendname").addEventListener("click", postToBoard);
boardname = document.getElementById("boardname");
boardscore = document.getElementById("boardscore");

function postToBoard() {

	$("#theboard").slideDown(1000);

    var name = $("#name").val();

    storageRef.push({
    name: name,
    counter: counter
    });



}

storageRef.on("child_added", function(snapshot){
			console.log(snapshot.val());
			var name=snapshot.val().name;
			var counter=snapshot.val().counter;
			boardname.innerHTML += "<p>"+name+"</p>";
			boardscore.innerHTML += "<p>"+counter+"/9</p>";

});