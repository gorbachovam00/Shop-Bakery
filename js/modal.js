const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

// const cards = document.querySelectorAll(".card");
// const radios = document.querySelectorAll('input[type="radio"]');

// cards.forEach((card, index) => {
//   card.addEventListener("click", () => {
//     radios[index].checked = true;
//   });
// });
