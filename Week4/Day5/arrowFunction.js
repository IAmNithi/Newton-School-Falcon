// arrow functions

function add(a, b){
    console.log(a+b);
  }
  
  const add2 = (a, b) => console.log(a+b);
  
  
  add(10, 20);
  
  add2(20, 30);
  
  let arr = [1,2,10,4,5,6];
  
  for(let i =0;i< arr.length; i++){
    if(arr[i] % 2 == 0){
      console.log(arr[i] +' is a even number');
    } else {
      console.log(arr[i] +' is a odd number');
    }
  }
  
  arr.forEach((data, index) => {
    if(data % 2 == 0){
      console.log(data +' is a even number');
    } else {
      console.log(data +' is a odd number');
    }
    console.log(arr[index+=2]);
    
  })