/******************formulaire*********************/

  document.addEventListener('DOMContentLoaded', function() {
    // Initialiser EmailJS
    emailjs.init("T7L8aReI93hnLU4r9");

    // Récupérer le formulaire et ajouter un gestionnaire d'événements
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêcher le rechargement de la page
            const serviceID = 'service_nk72l4t';
            const templateID = 'template_1ifj3wj';

            emailjs.sendForm(serviceID, templateID, this)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message envoyé avec succès!');
            }, (err) => {
                console.log('FAILED...', err);  // Affiche plus de détails sur l'erreur
                alert('Échec de l\'envoi : ' + JSON.stringify(err));
            });
    });
} else {
    console.error("Le formulaire n'a pas été trouvé.");
}
});

