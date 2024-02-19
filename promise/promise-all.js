// create a promise

const myPromise1 = new Promise((resolve, reject) => {
  /*
   Promise can only be resolved or rejected once.
   resolve response will get the then callback and reject response will get the catch callback 
   */
  resolve({
    success: true,
    message: "Resolve the promise 1.",
  })
  // reject({
  //   success: false,
  //   message: "Reject the promise 1.",
  // })
})

const myPromise2 = new Promise((resolve, reject) => {
  /*
   Promise can only be resolved or rejected once.
   resolve response will get the then callback and reject response will get the catch callback 
   */
  // resolve({
  //   success: true,
  //   message: "Resolve the promise 2.",
  // })
  reject({
    success: false,
    message: "Reject the promise 2.",
  })
})

const myPromise3 = new Promise((resolve, reject) => {
  /*
   Promise can only be resolved or rejected once.
   resolve response will get the then callback and reject response will get the catch callback 
   */
  resolve({
    success: true,
    message: "Resolve the promise 3.",
  })
  // reject({
  //   success: false,
  //   message: "Reject the promise 3.",
  // })
})

Promise.all([
  myPromise1.catch((error) => error),
  myPromise2.catch((error) => error),
  myPromise3.catch((error) => error),
])
  .then((res) => {
    console.log("Res: ", res)
  })
  .catch((error) => {
    console.log("Error1: ", error)
  })
