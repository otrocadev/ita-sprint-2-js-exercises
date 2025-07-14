// Exercise 1
const canDrive = (age) => {
  age > 18 ? console.log('You can drive') : console.log('You can not drive')
}

// Exercise 2
const biggerNumber = (number1, number2) => {
  number1 > number2
    ? console.log(
        `${number1} is bigger than ${number2}, so the first number is bigger`
      )
    : console.log(
        `${number1} is not bigger than ${number2}, so the second number is bigger`
      )
}

// Exercise 3.1
const numberSign = (number) => {
  number === 0
    ? console.log(`The number ${number} is zero!`)
    : number > 0
    ? console.log(`The number ${number} is bigger than zero`)
    : console.log(`The number ${number} is smaller than zero`)
}

// Exercise 3.2
const findMax = (a, b, c) => {
  let maxNumber = undefined
  a > b ? (maxNumber = a) : (maxNumber = b)
  c > maxNumber ? (maxNumber = c) : (maxNumber = maxNumber)
  console.log(maxNumber)
}

// Exercise 4
const isItEven = (numbers = []) => {
  for (let i = 0; i < numbers.length; i++) {
    const message = `The value of the position ${i} in the array is ${numbers[i]}, so it is an `
    numbers[i] % 2 == 0
      ? console.log(message + 'even number')
      : console.log(message + 'uneven number')
  }
}

// HTML interactions
const exercise1Btn = document.getElementById('exercise1-btn')
exercise1Btn.addEventListener('click', (e) => {
  canDrive(21)
  canDrive(16)
})

const exercise2Btn = document.getElementById('exercise2-btn')
exercise2Btn.addEventListener('click', (e) => {
  biggerNumber(12, 13)
  biggerNumber(222, 1)
})

const exercise31Btn = document.getElementById('exercise31-btn')
exercise31Btn.addEventListener('click', (e) => {
  numberSign(33)
  numberSign(0)
  numberSign(-1999)
})

const exercise32Btn = document.getElementById('exercise32-btn')
exercise32Btn.addEventListener('click', (e) => {
  findMax(22, 13, 24)
})

const exercise4Btn = document.getElementById('exercise4-btn')
exercise4Btn.addEventListener('click', (e) => {
  isItEven([12, 13, 25, 33])
})
