// create promise

const myPromise = new Promise((resolve, reject) => {
  /*
   Promise can only be resolved or rejected once.
   resolve response will get the then callback and reject response will get the catch callback 
   */
  // resolve({
  //   success: true,
  //   message: "Resolve the promise 1.",
  // })
  reject({
    success: false,
    message: "Reject the promise 1.",
  })
})

// call myPromise
myPromise
  .then((res) => {
    console.log("Res: ", res)
  })
  .catch((error) => {
    console.log("Error: ", error)
  })
