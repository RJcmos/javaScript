
let arr1=[1,2,3,4,5,6];
const arr2=[1,2,3,4,5,6,7];

//1.push
// let arrlength=arr.push(7);
// console.log(arr);
// console.log(arr.length);

// 3.slice and splice
// console.log(arr);
// let slicearr=arr.slice(2,5);
// console.log(slicearr);

// let arrsort=[1,6,3,5,7,8,3,10,9,45,12,22,11,4,333,232];
// let arrsort1=arrsort.sort();
// console.log(arrsort1);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arr.reduce( (accum, value) => {

// if(value%2!=0){

// accum +=value;

// }

// return accum;

// }, 0);

// console.log(sum);

////////////////////////
const ans = arr.reduce( (accum, value) => {

accum.push(value*2); 
return accum;
},[])


console.log(ans);