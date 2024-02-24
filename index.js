// console.log("hello");

//spread operator:- it consist of three dots
// const mern=["react","node"];
// const stack=[...mern,"express","mongodb"];
// console.log(mern);
// console.log(stack);


//Rest Parameter:- it is similar like spread operator. used for indefinite no.of arguments as an array
/*
function fun(...args){
    let sum=0;
    for(let num of args){
        sum+=num;
    }
    console.log("sum =",sum);
}

fun(10,2,3,4,5);
*/


/*
let mern=["mognodb","express","react","node"];
let [a,b,...args]=mern;

console.log(a);
console.log(b);
console.log(args);

*/

//for of loop :- ye given array ke value ko print krta hai
/*
let arr=[10,20,30,40,50];

for(let num of arr){
    console.log(num);
}
*/

//for in loop :- ye given array ke index ko print krta hai 
/*
let arr=[10,20,30,40,50];
for(let num in arr){
    console.log(num);
}
*/


//object destructuring
/*
let name={
    fname:"md",
    lname:"imam"
}

let {fname,lname}=name;
console.log(fname);
console.log(lname);

*/

//Arraow function
/*
const myFun=()=>{
    console.log("hello world");
}

myFun();
*/

//Generator Function
/*
function* generate(){
    console.log("invoke 1st time")
    // yield 1;
    console.log("invoke 2nd time");
    yield 2;
}

let gen=generate();
let result=gen.next();
console.log(result);

*/





