// Exercise 1
const processFunction = (number, callback) => {
  callback(number)
}

// Exercise 2
const calculator = (a, b, callback) => {
  return callback(a, b)
}

const addition = (a, b) => {
  return a + b
}

// Exercise 3
const waitAndWave = (name, callback) => {
  setTimeout(() => {
    callback(name)
  }, 2000)
}

const wave = (name) => {
  console.log(`How are you doing, ${name} ?`)
}

// Exercise 4
const processElements = (numbers = [], callback) => {
  numbers.forEach((number) => {
    callback(number)
  })
}

const screamNumber = (number) => {
  console.log(`YOUR NUMBER IS ${number}!!!!`)
}

// Exercise 5
const processString = (word, callback) => {
  const capitalizedWord = word.toUpperCase()
  callback(capitalizedWord)
}

const showWord = (word) => {
  console.log(`Your capitalized word is ${word}`)
}

// HTML interactions
const exercise2Btn = document.getElementById('exercise2-btn')
exercise2Btn.addEventListener('click', (e) => {
  const result = calculator(2, 5, addition)
  console.log(result)
})

const exercise3Btn = document.getElementById('exercise3-btn')
exercise3Btn.addEventListener('click', (e) => {
  waitAndWave('John', wave)
})

const exercise4Btn = document.getElementById('exercise4-btn')
exercise4Btn.addEventListener('click', (e) => {
  processElements([2, 4, 6, 8], screamNumber)
})

const exercise5Btn = document.getElementById('exercise5-btn')
exercise5Btn.addEventListener('click', (e) => {
  processString('hello', showWord)
})
