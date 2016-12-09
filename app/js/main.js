
$(document).ready(function(){

	// mask
	$(".mask").mask("+7(999) 999-99-99");

	// placeholder
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		.attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});

// fancybox
$(".modal-form").fancybox({
	'hideOnContentClick': true,
	fitToView: true,
	minWidth : 230,
	padding : 0,
	margin: [50, 5, 15, 5],
	closeBtn : true

});


// mini-slider
// $('.small-img > div').on('click', function(e) {
// 	e.preventDefault();
// 	var 
// 	$this = $(this),
// 	container = $this.closest('.item'),
// 	display = container.find('.main-photo-slide'),
// 	path = $this.find('img').attr('src'),
// 	duration = 300;

// 	if (!$this.hasClass('active')) {
// 		$this.addClass('active').siblings().removeClass('active');
// 		display.find('img').fadeOut(duration, function() {
// 			$(this).attr('src', path).fadeIn(duration);
// 		});
// 	}
// });


// scroll
$('a.scr-js[href^="#"]').on('click', function(event) {

	var target = $( $(this).attr('href') );

	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top 
		}, 600);
	}

});

// val-notebook
noteModel('.button-js');


// steps-change
$('.steps').on('click', 'li:not(.active)', function() {

	var $this_cl = $(this);
	if ($(this).closest('.steps').find('li').eq(1).hasClass('active')) {
		noteModel($this_cl);	
	}
	var n = $(this).closest('li').index();

	$('.section-3').find('.container').removeClass('active').css({opacity: '0',display: 'none'}); 
	$('.section-3 .container').eq(n).addClass('active').css('display', 'block').animate({opacity: '1'}, 1000);

	if ($('.section-3 form > .container:last-child').hasClass('active')) {
		$('.section-3').addClass('bg');
	}
});



// val-notebook function
function noteModel($mod) {
	$(document).on('click', $mod, function(e) {

		var val = $('.c1').val();
		var val2 = $('.c2').val();
		$('.next-block .next-block-item:first-child').find('p span').html('');
		$('.next-block .next-block-item:first-child').find('p span').html('');
		$('.next-block .next-block-item:first-child').find('p span').append(val +' ' + val2);

	});
};


// change-container COUNT
$(document).on('click', '.section-3 .button', function(e) {

	if (!($(this).closest('.container').index() == '3')) {
		e.preventDefault();
		var numb = $(this).closest('.container').index();
		$('.section-3').find('.container').removeClass('active').css({opacity: '0',display: 'none'}); 
		$('.section-3 .container').eq(numb+1).addClass('active').css('display', 'block').animate({opacity: '1'}, 1000);
		if ($('.section-3 form > .container:last-child').hasClass('active')) {
			$('.section-3').addClass('bg');
		}
	};

});




// toggle-left OFFICE
$('.hightl').on('click', function(e) {
	e.preventDefault(); 
	$(this).toggleClass('active');

	var effect = 'slide';

	var options = { direction: 'left' };

	var duration = 500;

	$(this).next().toggle(effect, options, duration);

});






// load resize FLAG
var flag = true;
$(window).on('load resize', function() {

	if (window.innerWidth > 767) {

		if (flag) {
			flag = false;	
			var el = $('.section-5 .item-notebook').height();
			var item = $('.section-5 .item-notebook').length;
			for (var i = 0;  i < item; i++) {
				var elem = $('.section-5 .item-notebook').eq(i);
				el = el + 50
				console.log(el);
				elem.css({
					height: el
				});
			}

			var el2 = $('.section-2 .item-notebook').height();
			var item2 = $('.section-2 .item-notebook').length;
			for (var i = 0;  i < item2; i++) {
				var elem2 = $('.section-2 .item-notebook').eq(i);
				el2 = el2 + 50; 	
				elem2.css({
					height: el2
				});
			}

		}

	} else {
		flag = true;	
		fl = true;	
		$('.section-5 .item-notebook').removeAttr('style');
		$('.section-2 .item-notebook').removeAttr('style');
	};


	get_border('.section-2 .item-notebook', '.notebook');
	get_border('.section-5 .item-notebook', '.js-border');
	
});

// function Border
function get_border($opt, $opt2) {
	var width =	$($opt).width();
	$('<style>'+$opt2+'>div:after{border-right-width: '+width+'px !important;}</style>').appendTo( "head" );
}






$(".carousel").owlCarousel({
	loop:true,

	navText: ["",""],
	dotsEach: true,
	center: true,
	margin: 30,
	// activeClass: 'qqq',
	touchDrag: false,
	mouseDrag: false,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			stagePadding: 0,
			nav:true
		},
		768:{
			items:1,
			stagePadding: 100,
			nav:true
		},
		900:{
			items:1,
			stagePadding: 200,
			nav:true
		},
		1100:{
			items:1,
			stagePadding: 300,
			nav:true
		},
		1300:{
			items:1,
			nav:true,
			stagePadding: 350,
			loop:true
		},
		1600:{
			items:1,
			nav:true,
			stagePadding: 500,
			loop:true
		}
	}
});





var th = null;
var sections = $('.sec'), nav = $('.menu'), nav_height = nav.outerHeight();
$(window).on('scroll', function () {




	var cur_pos = $(this).scrollTop();

	sections.each(function() {
		var top = $(this).offset().top-40,
		bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');

			$(this).addClass('active');

			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');

		}
	});


	$('.write').html(nav.find('a.active').attr('data-write'));
	var head_1 = $('header').height();
	if($(window).scrollTop() > head_1){
		$('.menu').addClass('block');
		$('.ico-up').addClass('fix');
	} else {
		$('.menu').removeClass('block');
		$('.ico-up').removeClass('fix');
	}


	

});









$( nav.find('a') ).mouseenter(function() {
	th = $('.write').html();	
	var this_1 = $(this);
	if (!(this_1.hasClass('active'))) {
		$('.write').animate({opacity: '0'}, 0, function() {
			$(this).html(this_1.attr('data-write')).animate({opacity: '1'}, 0);
		});
	}
})
.mouseleave(function() {

	$('.write').html(th);
	if ($(this).hasClass('active')) {
		$('.write').html($(this).attr('data-write'));
	}
});



nav.find('a').on('click', function () {
	var $el = $(this), id = $el.attr('href');

	$('html, body').animate({
		scrollTop: $(id).offset().top-40
	}, 500);

	return false;
});




$('.up-js').on('click', function(e) {
	e.preventDefault(); 
	$('html, body').animate({
		scrollTop: 0
	}, 700);
});



$('.js-name').on('click', function(e) {
	e.preventDefault(); 
	$('.prod-js').val($(this).prev().text());
});







$('.choose').on('click', '.choose-item', function(e) {
	e.preventDefault(); 
	$(this).addClass('active').siblings().removeClass('active');
	$('.js-val-problem').val($(this).find('b').text()); 

	var clo = $(this).closest('.container').index();
	$('.section-3').find('.container').removeClass('active').css({opacity: '0',display: 'none'}); 
	$('.section-3 .container').eq(clo+1).addClass('active').css('display', 'block').animate({opacity: '1'}, 1000);
});


var owl = $(".carousel-2");



owl.owlCarousel({
	loop:true,
	margin:0,
	autoHeight:true,
	navText: ["",""],
	dots: true,
	dotsEach: true,
	touchDrag: false,
	mouseDrag: false,
	responsiveClass:true,

	responsive:{
		0:{
			items:1,
			nav:true
		},
		740:{
			items:1,
			nav:true
		},
		1000:{
			items:1,
			nav:true,
			loop:true
		}
	}
});











});







ymaps.ready(init);
var myMap, 
myPlacemark;

function init(){ 
	myMap = new ymaps.Map ("map-canvas", {
		center: [55.660049, 37.619585],
		zoom: 17
	}); 
	
	

	var myPlacemark = new ymaps.Placemark([55.660049, 37.619585], {
		hintContent: ''
	}, 
	{
		preset: 'twirl#redDotIcon' 
	});


	myMap.geoObjects.add(myPlacemark);
}
