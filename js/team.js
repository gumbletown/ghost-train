
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


    $(".teamOverviewCD").click(function() {
        $('html, body').animate({
            scrollTop: $("#strip-CD").offset().top
        }, 2000);
    });

    $(".teamOverviewCo").click(function() {
        $('html, body').animate({
            scrollTop: $("#strip-Co").offset().top
        }, 2000);
    });

    $(".teamOverviewMu").click(function() {
        $('html, body').animate({
            scrollTop: $("#strip-Mu").offset().top
        }, 2000);
    });

    $(".teamOverviewPr").click(function() {
        $('html, body').animate({
            scrollTop: $("#strip-Pr").offset().top
        }, 2000);
    });

    	
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });


    $("#toTop").click(function() {
        $('html, body').animate({
            scrollTop: $("#header-logo").offset().top
        }, 1000);
    });


});


