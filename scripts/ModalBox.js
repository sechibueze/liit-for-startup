// Getting Started Modal Box

const modal = document.querySelector('.gs-modal');
const closeBtn = document.querySelector('.gs-closebtn');
const gsTriggers = document.querySelectorAll('.gstrigger');
const toggleModalBox = () => {
  modal.classList.toggle('show-gs-modal');
};
gsTriggers.forEach(gsBox => {
  gsBox.addEventListener('click', toggleModalBox);
});
closeBtn.onclick = () => {
  toggleModalBox();
}
