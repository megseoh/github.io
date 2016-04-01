$(document).ready(function() {
    console.log( "ready!" );
    $.get("README.md", function(data) {

    	alert(data);

    });
});