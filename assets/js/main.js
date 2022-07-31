function Open() {
	document.getElementById("Dropdown").classList.toggle("show");
	var open = document.getElementsByClassName("menu-open")[0];
	var close = document.getElementsByClassName("menu-close")[0];
	var logo = document.getElementById("logo");
	open.style.display = 'none';
	logo.style.display = 'none';
	close.style.display = 'block';
}

function Close() {
	document.getElementById("Dropdown").classList.toggle("show");
	var open = document.getElementsByClassName("menu-open")[0];
	var close = document.getElementsByClassName("menu-close")[0];
	var logo = document.getElementById("logo");
	open.style.display = 'block';
	logo.style.display = 'block';
	close.style.display = 'none';
}

$( document ).ready(function() {

	function Image_Pub() {
		var article1 = document.getElementById("article1");
		var image = document.getElementById("img-article1");

		var window_pos = window.pageYOffset + window.innerHeight/2;
		var image_pos = window.pageYOffset + image.offsetHeight/2;
		var image_wight = image.offsetHeight
		var publicity_height = article1.offsetHeight;
		var top_image = article1.offsetTop + publicity_height*0.05;
		var bottom_image = top_image + publicity_height;

		if (window_pos < top_image) 
			image.style.bottom = '-'+ (image_wight) + 'px';
		else if (window_pos < bottom_image - image_wight) 
			image.style.bottom = '-'+ (image_pos) + 'px';
		else {
			image.style.bottom = '-'+ (publicity_height) + 'px';
		}
			
	}
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var position = (barra * 1.5);
		$('#logo').css({'background-position': '50%' + position + 'px'});
		});

		Image_Pub()

	window.addEventListener("scroll", Image_Pub);
});