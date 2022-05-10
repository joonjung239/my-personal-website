const header = document.querySelector('.navbar-dark');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarDark');
    }
}


const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
