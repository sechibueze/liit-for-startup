const toggleNavlinks = () => {
  const NavBarLinks = document.querySelector('.navbarlinks');

  NavBarLinks.classList.toggle('toggle');
}

const canInteract = () => {

  if (window.innerWidth < 640) {
    const Hamburger = document.querySelector('.hamburger');
    Hamburger.addEventListener('click', toggleNavlinks);
  }
}

window.addEventListener('load', canInteract);
window.addEventListener('resize', canInteract);