let count = 0;


const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const classes = e.currentTarget.classList;
    if (classes.contains('decrease')) {
      count--;
    } else if (classes.contains('reset')) {
      count = 0;
    } else if (classes.contains('increase')) {
      count++
    }
    if (count > 0) {
      value.style.color = 'green'
    } else if (count === 0) {
      value.style.color = 'black'
    } else {
      value.style.color = 'red'
    }
    value.textContent = count
  })
})