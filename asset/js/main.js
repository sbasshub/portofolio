// menu show
const showMenu = (toggleiD, navID) => {
    const toggle = document.getElementById(toggleiD),
        nav = document.getElementById(navID);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};

showMenu("nav-toggle", "nav-menu");

// active and remove menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    // active link
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");

    // remove menu mobile
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// alert button
function myAlert() {
    alert("Thank You");
    window.location = '/index.html?#home';
    location.reload();
    // alert('Alert For your User!') ? "" : location.reload();
    // if(!alert('Alert For your User!')){window.location.reload();}
    //   alert("Thank You!");
    //   window.location.reload();
}

// get refresh
// document.getElementById('getID').onclick = function() {
//     location.href = '../index.html'
// }

// scrool reveal anomation
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

// SCROLL HOME
sr.reveal(".home__title", {});
sr.reveal(".button", {
    delay: 200
});
sr.reveal(".home__social-icon", {
    interval: 200
});

// SCROLL ABOUT
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", {
    delay: 200
});
sr.reveal(".about__text", {
    delay: 400
});

// SCROLL SKILLS
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {
    delay: 200
});
sr.reveal(".skills__data", {
    interval: 200
});
sr.reveal(".skills__img", {
    delay: 400
});

// SCROLL WORK
sr.reveal(".work__img", {
    interval: 200
});

// SCROLL CONTACT
sr.reveal(".contact__input", {
    interval: 200
});