//*******************
// Parallax JS
//*******************


/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);


$(document).ready(function(){


	// start the parrallax scene
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);



	//mute audio button
	var audio = document.getElementById('background_audio');
	document.getElementById('mute').addEventListener('click', function (e)
	{
	    e = e || window.event;
	    audio.muted = !audio.muted;
	    e.preventDefault();
	}, false);


	//Background video
	//video play button
	$( "#play-video" ).click(function() {
		$(".vid-hide-slide").slideToggle();
		$(".vid-hide-fade").fadeToggle();
		$(".vid-hide").toggle();
		$(".button-pause").toggle();
		$( "#day-planner-widget" ).toggleClass( "day-planner-icons" );
		$('#bgvid').delay(200).fadeToggle();
		setTimeout(function (){
     		$('#bgvid').get(0).play();
         }, 200);
	});

	//video pause button
	$( "#pause-video" ).click(function() {
		$('#bgvid').get(0).pause();
		$(".vid-hide-slide").slideToggle();
		$(".vid-hide-fade").fadeToggle();
		$(".vid-hide").toggle();
		$("#bgvid").toggle();
		$( "#day-planner-widget" ).toggleClass( "day-planner-icons" );
		$(".button-pause").toggle();
	});
	//after video ends
	$("#bgvid").bind('ended', function(){
	 	$(".vid-hide-slide").slideToggle();
		$(".vid-hide-fade").fadeToggle();
		$(".vid-hide").toggle();
		$("#bgvid").toggle();
		$( "#day-planner-widget" ).toggleClass( "day-planner-icons" );
		$(".button-pause").toggle();
	 });

	$( ".button-mute" ).click(function() {
		$(".button-mute").toggleClass( "button-unmute" );
	});


	//Sticky Nav
    $("#main-nav-container").sticky({topSpacing:0});


	//pulsate the play button
	pulsate();
	function pulsate() {
	$(".button-video").
	  animate({opacity: 1}, 500, 'linear').
	  animate({opacity: 0.6}, 500, 'linear', pulsate);
	}	


	header_resize();

    
    $(window).resize($.throttle( 250, header_resize));
    function header_resize(){
		//header resize based on window height
		var winHeight = $(window).height() - 150;
		var winHeight = 720; // remove this line to match window height
		$(".river-rapids").css("height", winHeight);
	}

	$(window).scroll($.throttle( 50, header_scroll));
	function header_scroll(){
		var winHeight = $(window).height() - 150;
		var scrolledpx =  $(window).scrollTop();
		var opacity = 100 / $(window).scrollTop();
	    var header_squish = winHeight - $(window).scrollTop();
	    $(".river-rapids").css("height", header_squish);
	    $(".river-rapids").css("opacity", opacity);

	    //day planner scrolling position
	    if (scrolledpx > 1 || scrolledpx < 101) {
	    	$(".day-planner").css("top", 152 - scrolledpx );
	    };
	    if (scrolledpx > 50) {
	    	$(".day-planner").css("top", "101px");
	    };
	    if (scrolledpx < 50 ) {
			$(".river-rapids").css("opacity", "1");
	    };
	}



}); //end document ready

