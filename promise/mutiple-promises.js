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

myPromise1
  .then((res) => {
    console.log("Res: ", res)
    myPromise2
      .then((res2) => {
        console.log("Res: ", res2)
        myPromise3
          .then((res3) => {
            console.log("Res: ", res3)
          })
          .catch((error) => {
            console.log("Error3: ", error)
          })
      })
      .catch((error) => {
        console.log("Error2: ", error)
      })
  })
  .catch((error) => {
    console.log("Error1: ", error)
  })
