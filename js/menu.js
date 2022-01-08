(() => {
  const refs = {
    openModalBtn: document.querySelector('.header__menu-btn'),
    closeModalBtn: document.querySelector('.menu__close-btn'),
    modal: document.querySelector('.menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
