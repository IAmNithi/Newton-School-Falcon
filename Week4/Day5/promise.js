// promises 
const deliveryDays = 3;

let amazonPromise = new Promise((resolve, reject) => {
  
  if(deliveryDays <= 2){
    resolve('Delivered Succesfully!!!');
  } else {
    reject('Delvery Delayed!!!');
  }
  
});


amazonPromise
  .then((success) => {
  console.log(success);
})
  .catch((error) => {
  console.log(error);
})