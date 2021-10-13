(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  (() => {
    const ref = {
      openModalBtn: document.querySelector('[data-modal-desc]'),
      closeModalBtn: document.querySelector('[data-modal-close-dsec]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    ref.openModalBtn.addEventListener('click', toggleModal1);
    ref.closeModalBtn.addEventListener('click', toggleModal1);
  
    function toggleModal1() {
      ref.modal.classList.toggle('is-hidden');
    }
  })();