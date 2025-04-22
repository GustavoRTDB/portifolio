document.addEventListener("DOMContentLoaded", function () {
    // Carrossel de imagens
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function updateCarousel() {
        images.forEach((img, i) => {
            img.classList.remove("active", "left", "right");

            if (i === currentIndex) {
                img.classList.add("active");
            } else if (i === (currentIndex - 1 + totalImages) % totalImages) {
                img.classList.add("left");
            } else if (i === (currentIndex + 1) % totalImages) {
                img.classList.add("right");
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    setInterval(nextImage, 5000);

    updateCarousel();

});
    
    // --------- Seção para adicionar outro código JS ---------
