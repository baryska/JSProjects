const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

//náhodné číslo od 0 do 3
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
}

const changeButton = () => {

  const randomNumber = getRandomNumber()
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
}



btn.addEventListener('click', changeButton)