function animateElement(animationName) {
  const animatedElm = document.getElementById('animated-element');
  animatedElm.classList.remove(animationName);
  void animatedElm.offsetWidth;
  animatedElm.classList.add(animationName);
}
