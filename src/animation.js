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
    let currentDescriptions = [];
    let currentIndex = 0;

    // Tableau des projets avec leurs images et descriptions
    const projects = {
        project1: {
            images: ['./src/images/photo/realisation/9_11zon.webp', './src/images/photo/realisation/49_11zon.webp', './src/images/photo/realisation/78.webp', './src/images/photo/realisation/IMG_6555.webp', './src/images/photo/realisation/IMG_6555.webp', './src/images/photo/realisation/IMG_6101.webp', './src/images/photo/realisation/IMG-6546.webp', './src/images/photo/realisation/mariage1.webp'],
            descriptions: ['Portait de fraterie', 'Photographie de famille', 'Portrait parent-enfant', 'Portrait', 'Photo portrait 5', 'Portrait', 'Photographie de couple', 'Photographie en duo'],
        },
        project2: {
            images: ['./src/images/photo/realisation/230.webp', './src/images/photo/realisation/245.webp', './src/images/photo/realisation/IMG_6220.webp', './src/images/photo/realisation/IMG_6273.webp', './src/images/photo/realisation/IMG-6253.webp', './src/images/photo/realisation/IMG-6238.webp', './src/images/photo/realisation/behourd.webp', './src/images/photo/realisation/IMG_0137.webp'],
            descriptions: ['Gala de danse', 'public et danseur en osmose', 'Portrait de musicien', 'Portrait de musicien rythmé', 'Instant musique', 'Sourire de joie', 'combat de béhourd', 'affrontement médiéval'],
        },
        project3: {
            images: ['./src/images/video/pub-colo.mp4'],
            descriptions: ['Vidéo de la colonie danse qui s\'est édroulé à Chilhac et Goudet en juillet 2024. Les danseuses et danseurs ont occupé la scène pour le plaisir du public et la fête a duré au cours de la soirée'],
        },
        project4: {
            images: ['./src/images/photo/realisation/aprem_game_11zon.webp', './src/images/photo/realisation/chasseOoeuf_11zon.webp', './src/images/photo/realisation/compet_amicale_3.02_V4.webp', './src/images/photo/realisation/country-line.png', './src/images/photo/realisation/compet_amicale_2023_2.webp'],
            descriptions: ['Affiche Gaming organisée par l\'association La Clandestine', 'Affiche  de la chasse aux oeufs', 'Affiche de la compétition de danse qui s\'est tenu à Landos', 'Flyer pour une association de Line Dance', 'Affiche de la compétition amicale de danse en janvier 2023'],
        },
        project5: {
            images: ['./src/images/photo/realisation/IMG_9278.webp', './src/images/photo/realisation/IMG_9284.webp', './src/images/photo/realisation/439437204_326418840545592_3046911930542564764_n_11zon.webp', './src/images/photo/realisation/carte-rom.webp'],
            descriptions: ['shooting pour Siga Pita, restaurant ', 'Des pitas en veux-tu en voilà !', 'photo utilisées pour l\'ouverture de Siga Pita', 'carte de visite pour un entrepreneur en coaching sportif'],
        },
        project6: {
            images: ['./src/images/photo/projets/ohmyfood_1.webp', './src/images/photo/projets/ohmyfood_2.webp', './src/images/photo/projets/sophie-bluel.webp', './src/images/photo/projets/sophie-bluel_2.webp', './src/images/photo/projets/sophie-bluel_3.webp', './src/images/photo/projets/kasa_1.webp', './src/images/photo/projets/kasa_3.webp'],
            descriptions: ['Projet mené au cours de ma formation, pour le dévéloppement web pour la création d\'une application de commande et réservation en ligne de repas dans différents établissements', 'Projet mené au cours de ma formation, pour le dévéloppement web pour la création d\'une application de commande et réservation en ligne de repas dans différents établissements', 'Projet mené au cours de ma formation, pour le développement d\'un site internet pour une architecte d\'intérieur', 'Projet mené au cours de ma formation, pour le développement d\'un site internet pour une architecte d\'intérieur', 'Projet mené au cours de ma formation, pour le développement d\'un site intrenet pour une architecte d\'intérieur, avec la possibilité de se connecter à un compte utilisateur pour la modification du site', 'Projet mené au cours de ma formation, pour le développement d\'une application de réservation de logements et d\'activités', 'Présenation d\'un logement, pour réservation'],
        },
    };

    // Fonction pour ouvrir la modale avec un ensemble d'images et descriptions
    function openModal(media, descriptions, index) {
        currentImages = media;
        currentDescriptions = descriptions;
        currentIndex = index;
        showMedia(currentIndex);
        modal.style.display = 'block';
    }

    // Fonction pour afficher l'image ou la vidéo actuelle dans la modale
    function showMedia(index) {
        const media = currentImages[index];
        const description = currentDescriptions[index];
        if (media.endsWith('.mp4')) {
            modalVideo.src = media;
            modalVideo.style.display = 'block';
            modalImage.style.display = 'none';
        } else {
            modalImage.src = media;
            modalImage.style.display = 'block';
            modalVideo.style.display = 'none';
        }
        modalDescription.textContent = description; // Affiche la description correspondante
    }

    // Fonction pour fermer la modale
    function closeModalWindow() {
        modal.style.display = 'none';
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
            item.addEventListener('click', () => openModal(project.images, project.descriptions, 0));
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


/************fusée************/
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner la section de contact
    const contactSection = document.getElementById('contact');
    
    // Sélectionner la fusée
    const rocket = document.getElementById('rocket');

    // Fonction pour observer l'intersection
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe pour déclencher l'animation
                rocket.classList.add('animate-rocket');
                
                // Une fois l'animation déclenchée, on arrête d'observer
                observer.unobserve(entry.target);
            }
        });
    };

    // Options de l'observer (ici on regarde si 50% de la section est visible)
    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    // Créer l'observer et observer la section de contact
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(contactSection);
});

