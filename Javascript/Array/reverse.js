const numbers = [4, 5, 6, 7, 8, 9]
// const reverse=numbers.reverse()
// console.log(numbers)
// console.log(reverse)


const reverse = []
// numbers.forEach((item)=>{
//   reverse.unshift(item)
// })
// console.log(numbers)
// console.log(reverse)



// for(let i=0;i<numbers.length;i++){
//   reverse.unshift(numbers[i])
// }
// console.log(numbers)
// console.log(reverse)

// for (i = numbers.length - 1; i >= 0; i--) {
//   reverse.push(numbers[i])
// }
// console.log(numbers)
// console.log(reverse)

let i=0
while(i<numbers.length){
  reverse.unshift(numbers[i])
  i++;
}
console.log(numbers)
console.log(reverse)


