(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-gallery-open]'),
    closeModalBtn: document.querySelector('[data-modal-gallery-close]'),
    modal: document.querySelector('[data-modal-gallery]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
