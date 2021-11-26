// const people = ['jane', 'james', 'john']

// const person = people[0]
// console.log(person)
// let person = 'jane'
// let person1 = 'james'
// let person2 = 'john'
// const items = { fruit: 'orange' }

// function showItem() {
//   let num1 = 5
//   let num2 = 10
//   let total = num1 + num2
//   return total
// }

// console.log(showItem())

// const showValue = () => {
//   let num1 = 5
//   const num2 = 10
//   const total = num1 * num2
//   return total
// }

const items = {
  fruit: 'apple',
  animal: 'goat',
  name: 'smith',
  age: '30',
}

// let num = 50
// let count = 50
// let big = 100

//  || , &&
// the && condition will run only if all the condition is true

// if (num > count && num > big) {
//   console.log(items.animal)
// } else {
//   console.log(items.fruit)
// }

// const battery = 49

// switch (battery) {
//   case 50:
//     console.log('your battery is half way down')
//     break
//   case 40:
//     console.log('your battery is at 40%')
//     break
//   case 30:
//     console.log('your battery is at 30%')
//     break
//   case 20:
//     console.log('your battery is at 20%')
//     break
//   case 10:
//     console.log('your battery is low, would you like charge')
//     break
//   default:
//     console.log('hello world')
//     break
// }

// do {
//   number--
//   console.log(number, 'hello class')
// } while (number > 10)

// for (let i = 100; i > 50; i--) {
//   console.log('i is ', i)
// }

// const person = 'williams'
// const check = person.length

// // console.log(check)

// const people = { friut: 8 }
// console.log(people.friut)

// const person = 'kane'
// const age = '30'
// const address = 'No 5 ayo street ikeja lagos'

// const personInfo = `his name is ${person}, and he is ${age}, and he stay's at ${address}`

// console.log(personInfo)

// const calc = `when you times 20 by 20 ${20 * 20}`

// console.log(calc)

// const person = [
//   { id: 1, man: 'peter' },
//   { id: 2, woman: 'anna' },
//   { id: 3, food: 'rice' },
//   { id: 4, secFood: 'beans' },
//   { id: 5, Number: 20 },
// ]

// const findItem = () => {
//   const myperson = person.filter((item) => {
//     return item.id > 3
//   })
//   return myperson
// }

// let last = findItem()[0].secFood
// last = 'yam'
// console.log(last)
// person.splice(1, 2)
// console.log(person)

// let item = person[5]
// const { fruit } = item
// console.log(fruit)
const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')
const value = document.querySelector('.value')

// add functionality
let num = 0
decrease.addEventListener('click', () => {
  num--
  colorChanger()
})

increase.addEventListener('click', () => {
  num++
  colorChanger()
})
reset.addEventListener('click', () => {
  num = 0
  colorChanger()
})

function colorChanger() {
  if (num < 0) {
    value.style.color = 'red'
  } else if (num > 0) {
    value.style.color = 'green'
  } else {
    value.style.color = 'black'
  }

  value.textContent = num
}
