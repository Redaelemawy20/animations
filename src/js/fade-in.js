function animateElement() {
  const animatedElm = document.getElementById('animated-element');
  animatedElm.classList.remove('fade-in');
  void animatedElm.offsetWidth;
  animatedElm.classList.add('fade-in');
}
