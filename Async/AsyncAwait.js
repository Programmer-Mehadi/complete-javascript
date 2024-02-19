const fetchData = async () => {
  console.log("Start Fetching...")
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  console.log(data)
  console.log("End Fetching...")
}

console.log("Call fetchData")
fetchData()
