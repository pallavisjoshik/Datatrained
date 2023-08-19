// console.log("I am an external file");
//you have save this file ctrl
let n = 0;
let n1 = 1;
let input = 5;
for (let i= 0; i<=input; i++){
    console.log(n);
    let result = n+n1;
    n=n1;
    n1= result;  
}