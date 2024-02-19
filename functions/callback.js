// Function that takes a callback function as an argument
function fetchData(callback) {
  // Simulate asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    const data = "This is the fetched data"
    // Invoke the callback function and pass the fetched data as an argument
    callback(data)
  }, 2000) // Simulate a 2-second delay
}

// Callback function to handle the fetched data
function processData(data) {
  console.log("Data received:", data)
}

// Call the fetchData function and pass the processData function as a callback
fetchData(processData)
