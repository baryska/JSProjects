'use strict'

const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


const setDate = () => {
  const now = new Date(); //bere časové údaje z počítače
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; //musím přidat 90 stupňů, protože v CSS jsem transform nastavila na +90deg, aby ručičky byly na 12.
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}


setInterval(setDate, 1000)

