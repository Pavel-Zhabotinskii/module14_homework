
let number;

const p = new Promise((resolve, reject) => {
  setTimeout(()=> {
    number = Math.floor(Math.random() * 100);
    if (number % 2 == 0){
      resolve (number)
    } else {
      reject (number)
    }
  }, 3000)
})

p.then(n =>console.log(`Завершено успешно. Сгенерированное число — ${n}`))
p.catch(error => console.log(`Завершено с ошибкой. Сгенерированное число — ${error}`));