const mainLogo = document.querySelector('.main-logo h1');

const flickMainLogo = function() {
  let rand = (Math.floor(Math.random() * 4) * 20);
  mainLogo.style.backgroundPosition = `0 ${rand % 100}%`;
};

if (mainLogo !== null) {
  setInterval(flickMainLogo, 1200);
}
