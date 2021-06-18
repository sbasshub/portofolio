// menu show 
const showMenu = (toggleiD, navID) => {
    const toggle = document.getElementById(toggleiD),
    nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// active and remove menu 
const navLink = document.querySelectorAll('.nav__link')

function linkAction() { 
    // active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // remove menu mobile 
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))