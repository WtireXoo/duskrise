let text = 'DuskRise Introduction';
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById('typeEffect').innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

// boze moj maria by to skarala tu vsetko



