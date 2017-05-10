
$(document).ready(function(){

	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {

		$( ".menu" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();

	});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});


$(".journeyTile").click(function() {
        window.location.href='journey.html';
    });
$(".creativeTile").click(function() {
        window.location.href='team.html';
    });
$(".contactTile").click(function() {
        window.location.href='contact.html';
    });





	
});