$(document).ready(function() {
    console.log( "ready!" );
    $.ajax("README.md").done(function(data) {
    	alert(data);
    }).fail(function(){
    	alert("Could not get data");
    });
});