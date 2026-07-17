// this is faulty caluculator of 
let random = Math.random()
console.log(random)
let a=prompt("Enter first number")
let c=prompt("Enter a operator")
let b=prompt("Enter second number")

let obj =
{
"+":"-",
"*":"+",
"-":"/",
"/":"**",
}
if(random>0.1)
{
    console.log(`The result of ${a}  ${c}  ${b}`)
    alert (`The result of ${eval(` ${a}  ${c}  ${b}`)}`)
}
else
{
    c=obj[c]
    alert (`The result of ${eval(` ${a}  ${c}  ${b}`)}`)
}