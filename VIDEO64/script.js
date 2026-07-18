/*let a=6;
let fact=1;

for(let i=1;i<=a;i++)
{
    fact=fact*i;
}
console.log(fact)
*/
const readline = require ('readline').createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }
);
readline.question("Enter a number:",(input)=>
{
    let a= parseInt(input);

let arr =Array.from({length:a},(_ ,i)=>i+1);

let fact= arr.reduce((acc,val )=> acc*val,1)
console.log(`factoral of ${a} is ${fact}`);
readline.close()
})
