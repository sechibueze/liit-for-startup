const details = document.querySelectorAll('details');
const detailsArr = Array.from(details);
const toggleItem = ({ target }) => {

  detailsArr.forEach(item => {
    if (item.hasAttribute('open')) {
      console.log('item : ', item)
      item.removeAttribute('open');
    }
  });

  target.toggleAttribute('open');

}
detailsArr.forEach(element => element.addEventListener('click', toggleItem));
