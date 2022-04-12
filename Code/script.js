// JavaScript Document

function toggleMenu() {
	var x = document.getElementById("dropdown-menu");
	if (x.style.display === "none") {
		x.style.display = "flex";
	}
	else {
		x.style.display = "none";
	}
	
	$(document).click(function() {
		x.style.display = "none";
	});
}

// Landing Page Image Slide =================================================================

let sliderImages = document.querySelectorAll('.image');
let image = document.querySelector('#landing-page');
let arrowLeft = document.querySelector('.left');
let arrowRight = document.querySelector('.right');
let imageArray = ['images/acer-aspire-7.jpg', 'images/apple-iphone-13.jpg', 'images/sony-playstation-5.jpg'];
let dots = document.querySelectorAll('.dot');
let current = 0;

// Clears all images
function reset(){
	for(let i = 0; i < sliderImages.length; i++){
		sliderImages[i].style.display = 'none';
		dots[i].style.backgroundColor = "rgba(255, 255, 255, 0.4)";
	}
}
// Initializes slider
function startSlide(){
	reset();
	sliderImages[0].style.display = 'block';
	image.style.backgroundImage = "url('"+imageArray[0]+"')";
	dots[0].style.backgroundColor = "#ffffff";
}

// Show previous slide
function slideLeft(){
	reset();
	sliderImages[current - 1].style.display = 'block';
	image.style.backgroundImage = "url('"+imageArray[current - 1]+"')";
	dots[current - 1].style.backgroundColor = "#ffffff";
	current--;
}

// Show next slide
function slideRight(){
	reset();
	sliderImages[current + 1].style.display = 'block';
	image.style.backgroundImage = "url('"+imageArray[current + 1]+"')";
	dots[current + 1].style.backgroundColor = "#ffffff";
	current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function(){
	if(current === 0){
		current = sliderImages.length;
	}
	slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function(){
	if(current === sliderImages.length - 1){
		current = -1;
	}
	slideRight();
});


startSlide();

// Landing Page Image Slide =================================================================



