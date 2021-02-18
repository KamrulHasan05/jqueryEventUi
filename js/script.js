$(document).ready(function(){
	// alert("welcome to jq");
	// alert message generate
	$('#btn').click(function(){
		alert("Hello Jquery. to become easy for me");
	});

	// hide

	$('#hide').click(function(){
		$('#h2').hide("slow");
	});

	// show

	$('#show').click(function(){
		$('#h2').show("fast");
	});

	// Toggle

	$('#toggle').click(function(){
		$('#h2').toggle(1000);
	});

	// fadeout

	$('#fadeout').click(function(){
		$('#h3').fadeOut(2000);
	});

	// fadeIn
	$('#fadein').click(function(){
		$('#h3').fadeIn(2000);
	});

	// fadeToggle
	$('#fadetoggle').click(function(){
		$('#h3').fadeToggle(2000);
	});

	// fadeTo
	$('#fadeto').click(function(){
		$('#h3').fadeTo(1000, .5);
	});


	// slideToggle/accordian
	$('.panel').click(function(){
		$('.content').slideToggle(1000);
	});

	// draggable
	$( "#draggable" ).draggable();

	// accordion
	$( "#accordion" ).accordion({
		collapsible:true
	});

	// autocomplete
	var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
      "Rony",
      "sathy",
      "sarim",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    // datepicker
    $( "#datepicker" ).datepicker();
});