let arr=[2,4,6,8,11,23]
console.log(arr , typeof arr); 
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
arr[2] = 5666;
console.log(arr[2])
let a1 =[1,2,3]
let a2 =[4,5,6]
let a3 =[7,8,9]
 console.log( a1,a2,a3)
 console.log(a1+a2+a3)
 console.log(a1*a2*a3)
let obj =
{
    a:1,
    a:2,
    c:3
}
for (const key in obj)
{
       
}
let Arr =[1,13,5,7,11];
let newArr = []
for (let index=0;index<arr.length;index++)
{
    const element = arr[index];
    newArr.push(element**2)
}
console.log(newArr)