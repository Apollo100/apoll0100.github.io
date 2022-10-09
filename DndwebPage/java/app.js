const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

const themeBtn = document.querySelectorAll('.theme');

const handleThemeChange = (e) => {
    const theme = e.currentTarget.dataset.theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('customTheme', theme)
}

themeBtn.forEach(t => t.addEventListener('click', handleThemeChange))

window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem("customTheme");
    theme && document.documentElement.setAttribute('data-theme', theme);
})

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

