// Exercise 1
const addition = (a, b) => {
  return a + b
}

// Exercise 2
const randomNumber = () => {
  return Math.floor(Math.random() * 101)
}

// Exercise 3
class Person {
  constructor(name) {
    this.name = name
  }

  greet = () => {
    console.log('Hello, ' + this.name)
  }
}

const manolo = new Person('Manolo')

// HTML interactions
const exercise1Btn = document.getElementById('exercise1-btn')
exercise1Btn.addEventListener('click', (e) => {
  const result = addition(12, 24)
  console.log(result)
})

const exercise2Btn = document.getElementById('exercise2-btn')
exercise2Btn.addEventListener('click', (e) => {
  const result = randomNumber()
  console.log(result)
})

const exercise3Btn = document.getElementById('exercise3-btn')
exercise3Btn.addEventListener('click', (e) => {
  manolo.greet()
})
