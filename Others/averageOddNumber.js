const arry=[4,5,6,7,8,9,66,77,55,76,55,88]
let sum=0
const odd=arry.filter((item)=>{
  if (item % 2 !== 0){
    sum+=item
    return item
  }

})
console.log(`Array is : ${arry}`)
console.log(`Odd numbers are : ${odd}`)
console.log(`Average of odd number : ${sum/odd.length}`)

