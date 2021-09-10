// promise all

const promise1 = new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
  })
  
  const promise2 = new Promise((resolve, reject) => {
    resolve('Promise 2 resolved');
  })
  
  const promise3 = new Promise((resolve, reject) => {
    resolve('Promise 3 resolved');
  })
  
  Promise.all([
    promise1,
    promise2,
    promise3
  ]).then((messages) => {
    console.log(messages)
  })
  
  