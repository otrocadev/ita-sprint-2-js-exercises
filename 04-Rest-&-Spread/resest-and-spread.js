// Exercise 1
const numbers1 = [1, 2, 3, 5, 8]
const numbers2 = [2, 4, 6, 8, 10]

const allNumbers = [...numbers1, ...numbers2]

// Exercise 2
const addition = (...numbers) => {
  let total = 0
  for (let number of numbers) {
    total += number
  }
  return total
}

// Exercise 3
const fiatPanda2000 = {
  brand: 'FIAT',
  model: 'PANDA',
  engine: '2.0',
}

const fiatPanda2001 = { ...fiatPanda2000 }
fiatPanda2001.engine = '2.2'

// Exercise 4
const fruits = ['apple', 'bannana', 'pineapple', 'orange', 'strawberry']

const [fruit1, fruit2, ...allOtherFruits] = fruits

// Exercise 5
const multiply3Numbers = (a, b, c) => {
  return a * b * c
}

// Exercise 6
const stone = {
  color: 'gray',
  durability: '25',
}

const axe = {
  toolName: 'axe',
  use: 'cuting trees',
}

const stoneAxe = { ...stone, ...axe }

// HTML interactions
const exercise1Btn = document.getElementById('exercise1-btn')
exercise1Btn.addEventListener('click', (e) => {
  console.log(allNumbers)
})

const exercise2Btn = document.getElementById('exercise2-btn')
exercise2Btn.addEventListener('click', (e) => {
  const numbers = [1, 2, 3]
  console.log(addition(...numbers))
})

const exercise3Btn = document.getElementById('exercise3-btn')
exercise3Btn.addEventListener('click', (e) => {
  console.log(fiatPanda2000)
  console.log(fiatPanda2001)
})

const exercise4Btn = document.getElementById('exercise4-btn')
exercise4Btn.addEventListener('click', (e) => {
  console.log(`The first fruit is ${fruit1}`)
  console.log(`The second fruit is ${fruit2}`)
  console.log(`All the other fruits are ${allOtherFruits}`)
})

const exercise5Btn = document.getElementById('exercise5-btn')
exercise5Btn.addEventListener('click', (e) => {
  const numbersToMultiply = [1, 3, 4]
  console.log(multiply3Numbers(...numbersToMultiply))
})

const exercise6Btn = document.getElementById('exercise6-btn')
exercise6Btn.addEventListener('click', (e) => {
  console.log(stoneAxe)
})
