 async function getData()
{
return new Promise((resolve, Reject)=>
{
    setTimeout(() => {
        resolve(455)
    },3500 );
})
}

console.log("loading modules")
console.log("something else")
console.log("load data")
let data =getData()


async function main() {
    console.log("loading modules")
console.log("something else")
console.log("load data")
console.log("ANHINANW")

}
async function getData(params) {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
console.log(x)
}
