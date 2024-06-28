	document.getElementById('background-music').volume = 0.05; 
	var audio = document.getElementById("background-music");
	var playStopButton = document.getElementById("play-stop-button");
	playStopButton.addEventListener("click", togglePlayPause);

	audio.addEventListener("play", function() {
	playStopButton.textContent = "II";
	});

	audio.addEventListener("pause", function() {
	playStopButton.textContent = "▶";
	});

	function togglePlayPause() {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
};

let slideIndices = [0, 0, 0, 0, 0];
const carousels = document.querySelectorAll('.carousel');

function showSlides(carouselIndex) {
	const slides = carousels[carouselIndex].querySelectorAll('.slides img');
	for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
	}
	slideIndices[carouselIndex]++;
	if (slideIndices[carouselIndex] > slides.length) { slideIndices[carouselIndex] = 1; }
	slides[slideIndices[carouselIndex] - 1].classList.add('active');
	setTimeout(() => showSlides(carouselIndex), 3000);
}

function moveSlide(n, carouselIndex) {
	slideIndices[carouselIndex] += n;
	const slides = carousels[carouselIndex].querySelectorAll('.slides img');
	if (slideIndices[carouselIndex] > slides.length) { slideIndices[carouselIndex] = 1; }
	if (slideIndices[carouselIndex] < 1) { slideIndices[carouselIndex] = slides.length; }
	for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
	}
	slides[slideIndices[carouselIndex] - 1].classList.add('active');
}

for (let i = 0; i < carousels.length; i++) {
	showSlides(i);
}

