function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
"use strict"

const stars = document.querySelector('.stars');
for (let i = 0; i < 400; i++) {
  stars.innerHTML += '<div class="star"></div>';
  const star = document.getElementsByClassName('star');
  let left = Math.random() * 100,
      top = Math.random() * 100,
      width = Math.random() * 1.5,
      height = width,
      delay = Math.random() * 5,
      dur = Math.random() * 5 + 2;
  star[i].style.width = width + 'vw';
  star[i].style.height = height + 'vw';
  star[i].style.top = top + '%';
  star[i].style.left = left + '%';
  star[i].style.animationDelay = delay + 's';
  star[i].style.animationDuration = dur + 's';
}
