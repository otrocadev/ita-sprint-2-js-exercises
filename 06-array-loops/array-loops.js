let names = ['Anna', 'Bernat', 'Clara']

let numbers = [1, 2, 3, 4, 5, 6]

let obj = {
  nom: 'Ona',
  edat: 25,
  ciutat: 'Barcelona',
}

// HTML interactions
const exercise1Btn = document.getElementById('exercise1-btn')
exercise1Btn.addEventListener('click', (e) => {
  names.forEach((name) => console.log(name))
})

const exercise2Btn = document.getElementById('exercise2-btn')
exercise2Btn.addEventListener('click', (e) => {
  for (const element of names) console.log(element)
})

const exercise3Btn = document.getElementById('exercise3-btn')
exercise3Btn.addEventListener('click', (e) => {
  const evenNumbers = numbers.filter((evenNumber) => evenNumber % 2 === 0)
  console.log(evenNumbers)
})

const exercise4Btn = document.getElementById('exercise4-btn')
exercise4Btn.addEventListener('click', (e) => {
  for (const key in obj) console.log(key + ': ' + obj[key])
})

const exercise5Btn = document.getElementById('exercise5-btn')
exercise5Btn.addEventListener('click', (e) => {
  for (const number of numbers) {
    if (number === 5) break
    console.log(number)
  }
})

const exercise6Btn = document.getElementById('exercise6-btn')
exercise6Btn.addEventListener('click', (e) => {
  for (const name of names) {
    console.log(names.indexOf(name) + ': ' + name)
  }
})
