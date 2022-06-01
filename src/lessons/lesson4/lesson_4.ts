console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

async function sleep(ms: number) {
  return new Promise((res, rej) => {
    setTimeout(() => {

      console.log(ms);
      res()
    }, ms * 100)
  })
}

async function show() {
  await sleep(3)
  await sleep(2)
  await sleep(1)
}

show();

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const prom = new Promise(() => {
  console.log("Promise is created")
})
console.log(prom)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const prom2 = new Promise((resolve, reject) => {
  resolve('Promise Data')
})
prom2
  .then(data => console.log(data))

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const prom3 = new Promise((resolve, reject) => {
  reject('Promise Error')
})
prom3
  .catch(error => console.log(error))

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const prom4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Data')
  }, 3000)
})

prom4
  .then(console.log)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const prom6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("My name is")
  }, 1000)
})

function onSuccess(param: any) {
  return `${param} Sergei`
}

function print(arg: any) {
  console.log(arg)
}

prom6
  .then(data => {
    return onSuccess(data)
  })
  .then(data => {
    return print(data)
  })

async function prom61() {
  const promise = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("My name is")
    }, 5000)
  })
  const promise1 = onSuccess(promise)
  const promise2 = print(promise1)
}

prom61();


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const nameProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name: "Anna"})
  }, 2000)
})

const ageProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({age: 16})
  }, 3000)

})

const cityProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({city: 'Moscow'})
  }, 4000)
})

const prom7 = Promise.all([nameProm, ageProm, cityProm])
  .then(data => {
    const result = data.map((el: any) => Object.values(el)).join(' ')
    console.log(result)
  })

// let result;
//
// nameProm
//   .then((name: any) => {
//     result = name.name
//     ageProm.then(age => re)
//   })


// just a plug
export default () => {
};