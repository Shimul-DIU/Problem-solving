const array=[1,2,3,3,4,8,8,7,4]
// const unique=array.filter((item,index)=>{
//   return array.indexOf(item)===index
// })
// console.log(array)
// console.log(unique)
const unique=[]
array.forEach((item)=>{
  if(!(unique.includes(item))){
    unique.push(item)
  }
})
console.log(unique)