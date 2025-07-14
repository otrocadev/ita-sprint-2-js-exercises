// Exercise 1
const numbers = [1, 2, 3, 4]
const convertedNumbers = numbers.map((number) => Math.pow(number, 2))

// Exercise 2
const numbers2 = [1, 2, 3, 4]
const evenNumbers = numbers2.filter((evenNumber) => evenNumber % 2 === 0)

// Exercise 3
const numbers3 = [1, 10, 8, 11]
const filteredNumber = numbers3.find(
  (firstBiggerThan10) => firstBiggerThan10 > 10
)

// Exercise 4
const numbers4 = [13, 7, 8, 21]
const total = 0
const totalNumbers = numbers4.reduce(
  (accumulated, currentNumber) => accumulated + currentNumber,
  total
)

// Exercise 5
const numbers5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
const resultOfOperations = numbers5
  .filter((biggerThan10) => biggerThan10 > 10)
  .map((item) => item * 2)
  .reduce((accumulated, currentNumber) => accumulated + currentNumber, 0)

//Exercise 6
const numbers6 = [11, 12, 13, 14]
const results = [
  {
    method: 'every',
    response: '',
  },
  {
    method: 'some',
    response: '',
  },
]

const condition = (value) => value > 10

results[0].response = numbers6.every(condition)
results[1].response = numbers6.some(condition)

// HTML interactions
const exercise1Btn = document.getElementById('exercise1-btn')
exercise1Btn.addEventListener('click', (e) => {
  console.log(convertedNumbers)
})

const exercise2Btn = document.getElementById('exercise2-btn')
exercise2Btn.addEventListener('click', (e) => {
  console.log(evenNumbers)
})

const exercise3Btn = document.getElementById('exercise3-btn')
exercise3Btn.addEventListener('click', (e) => {
  console.log(filteredNumber)
})

const exercise4Btn = document.getElementById('exercise4-btn')
exercise4Btn.addEventListener('click', (e) => {
  console.log(totalNumbers)
})

const exercise5Btn = document.getElementById('exercise5-btn')
exercise5Btn.addEventListener('click', (e) => {
  console.log(resultOfOperations)
})

const exercise6Btn = document.getElementById('exercise6-btn')
exercise6Btn.addEventListener('click', (e) => {
  console.log(results)
})
