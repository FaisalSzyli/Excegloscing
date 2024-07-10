// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

list.forEach((item) => {
  item.addEventListener("click", function () {
    navigation.classList.remove("active");
    main.classList.remove("active");
  });
});



// neww
const texts = ['Welcome to Excegloscing Class', 'Explore our achievements', 'Discover our journey'];
let index = 0;
let letterIndex = 0;
let isDeleting = false;
const welcomeText = document.getElementById('welcome-text');

function typeText() {
    const currentText = texts[index];
    if (isDeleting) {
        welcomeText.textContent = currentText.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        welcomeText.textContent = currentText.substring(0, letterIndex + 1);
        letterIndex++;
    }

    let speed = 150;

    if (isDeleting) {
        speed /= 2;
    }

    if (!isDeleting && letterIndex === currentText.length) {
        isDeleting = true;
        speed = 1000;  
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;  
        speed = 500;  
    }

    setTimeout(typeText, speed);
}

document.addEventListener('DOMContentLoaded', typeText);
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:ichangkasep29@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
    window.location.href = mailtoLink;
});


document.querySelectorAll('.member-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hovered');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hovered');
  });
});

 

 // Inisialisasi ScrollReveal untuk animasi scroll
const scrollEffect = ScrollReveal({
    distance: '50px',
    duration: 2500,
    reset: false // Mengubah reset menjadi false untuk efek yang lebih permanen
});

    // Menggunakan ScrollReveal untuk berbagai elemen
    scrollEffect.reveal('.topbar', {delay: 100, origin: 'bottom'});
    scrollEffect.reveal('.mission', {delay: 200, origin: 'right'});
    scrollEffect.reveal('.mission-item', {delay: 300, origin: 'left'});
    scrollEffect.reveal('.advantages', {delay: 350, origin: 'bottom'});
    scrollEffect.reveal('.advantages-item', {delay: 400, origin: 'right'});
    scrollEffect.reveal('.members', {delay: 450, origin: 'left'});
    scrollEffect.reveal('.member-card', {delay: 500, origin: 'bottom'});
    scrollEffect.reveal('.gallery', {delay: 550, origin: 'top'});
