/******************banner ********************/
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');

    // Fonction pour gérer la classe de réduction
    function handleScroll() {
        if (window.scrollY > 100) { // Modifier la valeur selon vos besoins
            banner.classList.add('banner-shrink');
        } else {
            banner.classList.remove('banner-shrink');
        }
    }

    // Écouteur d'événements pour le défilement
    window.addEventListener('scroll', handleScroll);

    // Appel initial pour vérifier la position du défilement lors du chargement
    handleScroll();
});

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
/*document.addEventListener('DOMContentLoaded', () => {
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
*/


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
/*****************avion***************/
document.addEventListener('DOMContentLoaded', function() {
    const paperPlane = document.getElementById('paper-plane');
    const projetSection = document.querySelector('.projet');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkAnimation() {
        if (isElementInViewport(projetSection)) {
            paperPlane.style.animationPlayState = 'running';
        }
    }

    window.addEventListener('scroll', checkAnimation);
    checkAnimation(); 
});

/***********compétences*********/
document.addEventListener('DOMContentLoaded', () => {
    const levels = document.querySelectorAll('.level');
    levels.forEach(level => {
        const finalWidth = level.style.width;
        level.style.setProperty('--final-width', finalWidth);
    });
});

/************gallery*************/
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.modal .close');
    const prevButton = document.querySelector('.modal-navigation .prev');
    const nextButton = document.querySelector('.modal-navigation .next');
    let currentImages = [];
    let currentIndex = 0;

    // Tableau des projets avec leurs images et description
    const projects = {
        project1: {
            images: ['./src/images/photo/realisation/9_11zon.webp', './src/images/photo/realisation/49_11zon.webp', './src/images/photo/realisation/78.webp', './src/images/photo/realisation/IMG_6555.webp', './src/images/photo/realisation/IMG_6555.webp', './src/images/photo/realisation/IMG_6101.webp', './src/images/photo/realisation/IMG-6546.webp', './src/images/photo/realisation/mariage1.webp'],
            description: 'Photo portrait',
        },
        project2: {
            images: ['./src/images/photo/realisation/230.webp', './src/images/photo/realisation/245.webp', './src/images/photo/realisation/IMG_6220.webp', './src/images/photo/realisation/IMG_6273.webp', './src/images/photo/realisation/IMG-6253.webp', './src/images/photo/realisation/IMG-6238.webp', './src/images/photo/realisation/behourd.webp', './src/images/photo/realisation/IMG_0137.webp'],
            description: 'Photo sportive & événementielle',
        },
        project3: {
            images: ['./src/images/video/pub-colo.mp4'],
            description: 'Vidéo',
        },
        project4: {
            images: ['./src/images/photo/realisation/aprem_game_11zon.webp', './src/images/photo/realisation/chasseOoeuf_11zon.webp', './src/images/photo/realisation/compet_amicale_3.02_V4.webp', './src/images/photo/realisation/compet_amicale_2023_2.webp', './src/images/photo/realisation/country_line_4_11zon.webp'],
            description: 'Affiche',
        },
        project5: {
            images: ['./src/images/photo/realisation/IMG_9278.webp', './src/images/photo/realisation/IMG_9284.webp', './src/images/photo/realisation/439437204_326418840545592_3046911930542564764_n_11zon.webp'],
            description: 'Publicité',
        },
        project6: {
            images: ['./src/images/projets/ohmyfood_1.webp', './src/images/projets/ohmyfood_2.webp', './src/images/projets/sophie-bluel.webp', './src/images/projets/sophie-bluel_2.webp', './src/images/projets/sophie-bluel_3.webp', './src/images/projets/kasa_1.webp', './src/images/projets/kasa_3.webp', './src/images/projets/booki_1.webp', './src/images/projets/booki_2.webp'],
            description: 'Développement web',
        },
    };

    // Fonction pour ouvrir la modale avec un ensemble d'images ou une vidéo
    function openModal(media, description, index) {
        currentImages = media;
        currentIndex = index;
        modalDescription.textContent = description;
        showMedia(currentIndex);
        modal.style.display = 'block';
    }

    // Fonction pour afficher l'image ou la vidéo actuelle dans la modale
    function showMedia(index) {
        const media = currentImages[index];
        if (media.endsWith('.mp4')) {
            modalVideo.src = media;
            modalVideo.style.display = 'block';
            modalImage.style.display = 'none';
        } else {
            modalImage.src = media;
            modalImage.style.display = 'block';
            modalVideo.style.display = 'none';
        }
        modalDescription.textContent = `Image ${index + 1} sur ${currentImages.length}`;
    }

    // Fonction pour fermer la modale
    function closeModalWindow() {
        modal.style.display = 'none';
        // Stoppe la vidéo si elle est en cours de lecture
        if (modalVideo.style.display === 'block') {
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
    }

    // Fonction pour afficher l'image ou la vidéo précédente
    function showPrev() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showMedia(currentIndex);
    }

    // Fonction pour afficher l'image ou la vidéo suivante
    function showNext() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        showMedia(currentIndex);
    }

    // Ajout des événements de clic sur les items de la galerie
    galleryItems.forEach((item) => {
        const projectKey = item.getAttribute('data-project');
        const project = projects[projectKey];
        if (project) {
            item.addEventListener('click', () => openModal(project.images, project.description, 0));
        }
    });

    // Ajout des événements de clic pour la fermeture de la modale et la navigation
    closeModal.addEventListener('click', closeModalWindow);
    prevButton.addEventListener('click', showPrev);
    nextButton.addEventListener('click', showNext);

    // Fermer la modale en cliquant à l'extérieur de l'image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModalWindow();
        }
    });

    // Gestion des événements du clavier
    document.addEventListener('keydown', (event) => {
        if (modal.style.display === 'block') { // Vérifie si le modal est ouvert
            if (event.key === 'ArrowRight') {
                showNext();
            } else if (event.key === 'ArrowLeft') {
                showPrev();
            }
        }
    });
});

