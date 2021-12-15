$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}


$(".item-question__head").click(function() {
	$(this).parent().toggleClass("active");
	$(this).siblings().slideToggle(200);
	$(this).parent().siblings(".item-question").removeClass("active");
	$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-main").is(":hidden")) {
			$(".menu-main").slideDown(200);
		} else {
			$(".menu-main").slideUp(200);
		}
		
	});

	$(".menu-main a").click(function() {
		$(".menu-main").slideUp(200);
		$(".sandwich").removeClass("active");
	});


	var custom_values = ['Студия', 1, 2, 3];

	$(".range-catalog_room .range-catalog__input").ionRangeSlider({
		grid: true,
		from: 'Студия',
		values: custom_values,
	});

	$(".range-catalog_floors .range-catalog__input").ionRangeSlider({
		type: "double",
		min: 1,
		max: 4,
		from: 1,
		grid: true,
		to: 4,
	});

	$(".range-catalog_area .range-catalog__input").ionRangeSlider({
		type: "double",
		min: 30,
		max: 100,
		from: 30,
		grid: true,
		to: 100,
	});

	$(".range-catalog_price .range-catalog__input").ionRangeSlider({
		type: "double",
		min: 2750000,
		max: 9200000,
		from: 2750000,
		grid: true,
		to: 9200000,
	});

	//слайдер

	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider-billbord').each(function(){
		var $slider = $(this);
		$controls_slider = $(this).siblings(".bottom-slider").find('.slider-controls');

		if ($slider.length) {
			var currentSlide;
			var slidesCount;
			var sliderCounter = document.createElement('div');
			sliderCounter.classList.add('slider__counter');

			var updateSliderCounter = function(slick, currentIndex) {
				currentSlide = slick.slickCurrentSlide() + 1;
				slidesCount = slick.slideCount;
				$(sliderCounter).html('<span>'+currentSlide + '/' +slidesCount+ '')
			};

			$slider.on('init', function(event, slick) {
				$(this).siblings(".bottom-slider").find('.slider-count').append(sliderCounter);
				updateSliderCounter(slick);
				$(this).siblings(".bottom-slider").find(".slider_number").text(slick.slideCount);
			});

			$slider.on('afterChange', function(event, slick, currentSlide) {
				updateSliderCounter(slick, currentSlide);
			});

			$slider.slick({
				arrows: true,
				dots: true,
				prevArrow: '<div class="slick-prev slick-arrow"><svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM61 9H1V7H61V9Z" fill="#438C87"/></svg><div/>',
				nextArrow: '<div class="slick-next slick-arrow"><svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z" fill="#438C87"/></svg><div/>',
				infinite: false,
				slidesToScroll: 1,
				slidesToShow: 1,
				appendArrows: $controls_slider,
				appendDots: $controls_slider
			});
		} 
	});

	$('.slider-advantages').each(function(){
		var $slider = $(this);
		$controls_slider = $(this).parent().siblings().find(".bottom-slider").find(".slider-controls");

		if ($slider.length) {
			var currentSlide;
			var slidesCount;
			var sliderCounter = document.createElement('div');
			sliderCounter.classList.add('slider__counter');

			var updateSliderCounter = function(slick, currentIndex) {
				currentSlide = slick.slickCurrentSlide() + 1;
				slidesCount = slick.slideCount;
				$(sliderCounter).html('<span>'+currentSlide + '/' +slidesCount+ '')
			};

			$slider.on('init', function(event, slick) {
				$(this).parent().siblings().find(".bottom-slider").find('.slider-count').append(sliderCounter);
				updateSliderCounter(slick);
				$(this).parent().siblings().find(".bottom-slider").find(".slider_number").text(slick.slideCount);
			});

			$slider.on('afterChange', function(event, slick, currentSlide) {
				updateSliderCounter(slick, currentSlide);
			});

			$slider.slick({
				arrows: true,
				dots: true,
				prevArrow: '<div class="slick-prev slick-arrow"><svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM61 9H1V7H61V9Z" fill="#438C87"/></svg><div/>',
				nextArrow: '<div class="slick-next slick-arrow"><svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z" fill="#438C87"/></svg><div/>',
				infinite: false,
				slidesToScroll: 1,
				slidesToShow: 2,
				appendArrows: $controls_slider,
				appendDots: $controls_slider,
				responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}
				]
			});
		} 
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

