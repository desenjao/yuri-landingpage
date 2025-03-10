let currentIndex = 0;
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const images = Array.from(document.querySelectorAll(".gallery img")); // Converter NodeList para Array

function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = images[currentIndex].src; // Atualiza a imagem no modal
}

function closeModal() {
    modal.style.display = "none";
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    modalImg.src = images[currentIndex].src; // Atualiza a imagem no modal
}
