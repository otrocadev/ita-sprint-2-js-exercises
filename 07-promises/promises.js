// Exercise 1
const promise1 = new Promise((res) => {
  setTimeout(() => {
    res('Hello, world')
  }, 2000)
})

// Exercise 2
const exercise2Btn = document.getElementById('exercise2-btn')
exercise2Btn.addEventListener('click', (e) => {
  promise1.then((res) => console.log(res))
})

// Exercise 3
const sayHello = async (input) => {
  return new Promise((res, err) => {
    if (input === 'Hello') {
      setTimeout(() => {
        res('The input is well written, congrats!')
      }, 2000)
      return
    }
    err('The input is not "Hello"')
  })
}

const exercise3Btn = document.getElementById('exercise3-btn')
exercise3Btn.addEventListener('click', (e) => {
  sayHello('Hola')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

  sayHello('Hello')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
})

// Exercise 4
const waitForResult = async () => {
  const result = await promise1
  return result
}

const exercise4Btn = document.getElementById('exercise4-btn')

exercise4Btn.addEventListener('click', (e) => {
  waitForResult().then((res) => console.log(res))
})

// Exercise 5

const exercise5Btn = document.getElementById('exercise5-btn')

exercise5Btn.addEventListener('click', (e) => {
  try {
    waitForResult().then((res) => console.log(res))
  } catch (error) {
    console.log(error)
  }
})

// Exercise 6

const promise6a = new Promise((res) => {
  setTimeout(() => {
    res('I have waited for 2 seconds...')
  }, 2000)
})

const promise6b = new Promise((res) => {
  setTimeout(() => {
    res('Well, I have waited for 3...')
  }, 3000)
})

const exercise6Btn = document.getElementById('exercise6-btn')

exercise6Btn.addEventListener('click', (e) => {
  Promise.all([promise6a, promise6b]).then((results) => {
    console.log(results)
  })
})
