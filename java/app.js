const modal = document.querySelector('.modal');
const openModal = document.querySelector('.card_button');
const closeModal = document.querySelector('.close_button');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})
