const promise = new Promise((resolve,reject) => {
  //resolve('this is my resolved data');
  reject('something went wrong');
});

promise.then((data) => {
  console.log (data);
}).catch((error) =>{
  console.log('error ', error);
});