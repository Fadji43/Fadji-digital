/***************bulle***************/
document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble-need');

    bubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', createSmallBubbles);
    });

    function createSmallBubbles(event) {
        const bubble = event.target;
        for (let i = 0; i < 5; i++) {
            const smallBubble = document.createElement('div');
            smallBubble.classList.add('small-bubble');
            smallBubble.style.left = `${Math.random() * 100}%`;
            smallBubble.style.top = `${Math.random() * 100}%`;
            bubble.appendChild(smallBubble);

            setTimeout(() => {
                smallBubble.remove();
            }, 2000);
        }
    }
});
/*********carroussel************/
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showSlide(index) {
        const container = document.querySelector('.carousel-container');
        const totalSlides = slides.length;
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Auto-slide functionality (optional)
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});



/***********projet-dev***********/
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle-white-dashed');

    circles.forEach(circle => {
        let circleAnimation = null;

        function startCircleAnimation() {
            circleAnimation = anime({
                targets: circle,
                rotateZ: 360,
                duration: 5000,
                easing: "linear",
                loop: true
            });
        }

        function stopCircleAnimation() {
            if (circleAnimation) {
                circleAnimation.pause();
            }
        }

        // Démarrer l'animation du cercle lorsque la souris entre dans la zone de .etape
        circle.parentElement.addEventListener('mouseenter', startCircleAnimation);
        // Arrêter l'animation du cercle lorsque la souris quitte la zone de .etape
        circle.parentElement.addEventListener('mouseleave', stopCircleAnimation);
    });
});

/***********compétences*********/
document.addEventListener('DOMContentLoaded', () => {
    const levels = document.querySelectorAll('.level');
    levels.forEach(level => {
        const finalWidth = level.style.width;
        level.style.setProperty('--final-width', finalWidth);
    });
});


/**************presta************/
document.addEventListener('DOMContentLoaded', function() {
    const chevrons = document.querySelectorAll('.chevron-down');
    const details = document.querySelectorAll('.details');

    function toggleCategorie(categorieId, chevron) {
        const selectedCategorie = document.querySelector(`#${categorieId}`);

        if (selectedCategorie) {
            if (selectedCategorie.classList.contains('active')) {
                selectedCategorie.classList.remove('active');
                chevron.classList.remove('rotate');
            } else {
                document.querySelectorAll('.categorie').forEach(section => {
                    section.classList.remove('active');
                });
                document.querySelectorAll('.chevron-down').forEach(ch => {
                    ch.classList.remove('rotate');
                });
                selectedCategorie.classList.add('active');
                chevron.classList.add('rotate');
            }
        } else {
            console.error(`Element with ID ${categorieId} not found.`);
        }
    }

    chevrons.forEach(chevron => {
        chevron.addEventListener('click', function() {
            const categorieId = this.parentElement.getAttribute('data-categorie');
            toggleCategorie(categorieId, this);
        });
    });

    details.forEach(detail => {
        detail.addEventListener('click', function() {
            const chevron = this.nextElementSibling;
            const categorieId = this.parentElement.getAttribute('data-categorie');
            toggleCategorie(categorieId, chevron);
        });
    });
});

