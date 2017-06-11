$(document).ready(function(){


	$('.on_off').css('display','none');
	$('.on, .off').css('text-indent','-10000px');

	$('.switch').each(function () {
		var pdiv = $("<div></div>");
		pdiv.addClass("switch-after");
		$(this).children().first().before(pdiv);
	});

	$('.pos-off .switch-after').css("left:-1px");


	$("input[name=on_off]").change(function() {
		var button = $(this).val();
		$(this).parent().parent().toggleClass("pos-off",350);
		if(button == 'on'){
			$(this).parent().parent().children().first().animate({"left":"-1px"},300);
		}
		if(button == 'off'){
			var wl = $(this).parent().parent().width();
			var	we =  $(this).parent().parent().children().first().width();
			we = wl-we;
			$(this).parent().parent().children().first().animate({"left":we },300);
		}

		$(this).parent().parent().toggleClass("pos-on");

	});

	$( function() {

		$("#master").slider({
			value: 46,
			orientation: "horizontal",
			range: "min",
			animate: true,
			max:98
		});
	});

	$( function() {
		$("#slider-vertical").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 70,
			value: 29

		});
	});

	$( function() {
		$( "#progressbar" ).progressbar({
			value: 66.5
		});

		var $arrow = $("<div  class = 'tooltip'>75%</div>");

		$( "#progressbar").find(".ui-progressbar-value" ).append($arrow);
	} );

	$( function() {
		$( "#datepicker" ).datepicker({
			inline: true,
			showOtherMonths:true,
			defaultDate:+5
		});
	} );

	$( function() {
		var icons = {
			header: "ui-icon-circle-arrow-e",
			activeHeader: "ui-icon-circle-arrow-s"
		};
		$( "#accordion" ).accordion({
			icons: icons,
			heightStyle: "content"
		});

	} );

	$( function() {
		$("#speed").selectmenu({
			delay: 450
		});
	});

	$( "#tabs" ).tabs({
		active: 2,
		activate: function (event, ui) {
			var indexActive = ui.newTab.index();
			var count = $(this).find("ul").children().length+1;

			$( this).find("li" ).each(function( ind ) {

				if (ind <indexActive){$(this).css('z-index', ind);}
				if(ind == indexActive){$(this).css('z-index', count+1);}
				if(ind > indexActive)	{$(this).css('z-index', count-ind);}


			});
			$(ui.newTab).addClass("ui-tabs-active");


		}



	});

	$( "#tabs").find("li" ).each(function( index ) {
		$(this).find(".number").text((index+1)+'.');




	});

	$("#tabs").find(".ui-tabs-acxtive").css('z-index',$("#tabs").find("ul").children().length+1);

	});


