const scrollTo = (e) => {
  e.preventDefault();
  const { target } = e;
  if (!target.classList.contains('cta')) {
    toggleNavlinks();
  }

  const pos = `#${target.href.split('#')[1]}`;
  window.scrollTo({
    behavior: 'smooth',
    top: document.querySelector(pos).offsetTop
  });
}

const Links = Array.from(document.querySelectorAll('a[href*="#"]'));
Links.forEach(link => {
  link.addEventListener('click', scrollTo, false);
});


const scrollToTop = e => {
  window.scrollTo({
    behavior: 'smooth',
    top: document.body.offsetTop
  });
}
window.onscroll = e => {
  // console.log('scrolled', document.documentElement.scrollTop);
  const backToTop = document.querySelector('#scroll-top');
  if (document.documentElement.scrollTop > 100) {
    backToTop.style.display = 'block';
    backToTop.addEventListener('click', scrollToTop);
  } else {
    backToTop.style.display = 'none';
  }
}