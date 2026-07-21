console.log("Abhinaw is a Hacker")
console.log("rohan is hacker")
setTimeout(()=>
{
    console.log("i am inside timeout")
},2000)
console.log("the end")
const loadScript =(src,callback)=>
{
   let sc =document.createElement("script") ;
   sc.src=src;
   sc.onload=callback("Harry")
   document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
console.log(arg)
