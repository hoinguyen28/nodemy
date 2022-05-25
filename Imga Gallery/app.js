var images = document.querySelectorAll('.card__img img');
var nextLeft = document.querySelector('.gallery__next--left');
var nextRight = document.querySelector('.gallery__next--right');
var close = document.querySelector('.gallery__close');
var galleryImg = document.querySelector('.gallery__img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

function showGallery() {
  currentIndex == 0
    ? nextLeft.classList.add('hide')
    : nextLeft.classList.remove('hide');
  currentIndex == images.length - 1
    ? nextRight.classList.add('hide')
    : nextRight.classList.remove('hide');
  galleryImg.src = images[currentIndex].src;
  gallery.classList.add('show');
}

images.forEach((img, index) => {
  img.addEventListener('click', function () {
    currentIndex = index;
    showGallery();
  });
});

close.addEventListener('click', function () {
  gallery.classList.remove('show');
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove('show');
  }
});

nextLeft.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});

nextRight.addEventListener('click', function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
});
