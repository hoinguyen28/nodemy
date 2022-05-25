var btnOpen = document.querySelector('.card__open');
var modal = document.querySelector('.card__modal');
var iconClose = document.querySelector('.card__icon');
var btnClose = document.querySelector('.card__btn');

function toggleModal() {
  modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
