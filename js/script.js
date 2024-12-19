




  
 
  
// Form validation (Contact page)
const contactForm = document.getElementById('contact-form'); // Remplace querySelector par getElementById
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire pour validation

    // Utilise getElementById pour récupérer les valeurs des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Vérifie si les champs sont vides
    if (!name || !email || !message) {
      alert('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    // Vérifie si l'email est valide
    if (!validateEmail(email)) {
      alert('Veuillez saisir une adresse email valide.');
      return;
    }

    // Si tout est valide, affiche un message de confirmation
    alert('Merci pour votre message !');
    contactForm.reset();
  });
}

// Fonction pour valider l'email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submit-btn');
  if (!submitButton) {
    console.error("Le bouton avec l'ID 'submit-btn' est introuvable dans le DOM.");
  } else {
    submitButton.addEventListener('click', function () {
    // Les réponses correctes
    const correctAnswers = {
      q1: 'Tunisie',
      q2: 'Tunisie',
      q3: 'Tunisie',
      q4: 'Tunisie',
      q5: 'Turquie',
      q6: 'Tunisie',
      q7: 'Tunisie',
      q8: 'Tunisie',
      q9: 'Tunisie',
      q10: 'Tunisie',
    };
  
    let score = 0; // Initialisation du score
    const totalQuestions = Object.keys(correctAnswers).length;
    const corrections = []; // Pour afficher les corrections
  
    // Parcours des réponses correctes
    for (let question in correctAnswers) {
      const options = document.getElementsByName(question);
      let answered = false;
  
      for (let option of options) {
        if (option.checked) {
          answered = true;
  
          if (option.value === correctAnswers[question]) {
            score++;
          } else {
            // Ajoute la correction si la réponse est fausse
            corrections.push(
              `<li>Question ${question.slice(1)}: Faux. La bonne réponse est <strong>${correctAnswers[question]}</strong>.</li>`
            );
            option.nextElementSibling.style.color = 'red';
          }
        }
      }
  
      if (!answered) {
        corrections.push(`<li>Question ${question.slice(1)}: Non répondue.</li>`);
      }
    }
  
    // Affiche les résultats
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const correctionsElement = document.getElementById('corrections');
  
    scoreElement.innerHTML = `Votre score est <strong>${score}/${totalQuestions}</strong>`;
    correctionsElement.innerHTML = corrections.join('');
    resultContainer.style.display = 'block';
  });
}});

  