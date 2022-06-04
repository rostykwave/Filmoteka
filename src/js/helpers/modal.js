(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")///no-body-scrolling while modal open
    refs.modal.classList.toggle("is-hidden");
  }
})();


// body.modal-open {
//   overflow: hidden;
// }

// .backdrop.is-hidden .modal {
//   -webkit-transform: translate(-50%, -50%) scale(0.5);
//           transform: translate(-50%, -50%) scale(0.5);
//   opacity: 0;
// }

// .backdrop.is-hidden {
//   opacity: 0;
//   visibility: hidden;
//   pointer-events: none;
// }