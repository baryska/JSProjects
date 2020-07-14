'use strict'
console.log('funguju')

//na stlačení klávesy vybere audio s odpovídajícím data-key (queryselector attribute v hranatých závorkách)
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return // zastaví funkci, pokud nenajde odpovídající data-key
  audio.currentTime = 0; //vynuluje čas, umožňuje přehrávat audio rychle za sebou
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return //ukončí funkci, pokud název tranzice není 'transform (je tam několik tranzic - barva, stín apod.)
  this.classList.remove('playing') //nelze použít s arrow funkcí
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //událost transitionend - konec tranzice definované v CSS (dálka tranzice je také definovaná v CSS)

window.addEventListener('keydown', playSound)