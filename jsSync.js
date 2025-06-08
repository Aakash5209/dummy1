
// function mulBy2(arr){
//     return arr.map(num=>{
//        return num*2
//     })

// }
// console.log(mulBy2([1,2,3,4,5]))
// let op = mulBy2([1,2,3,4,5])
// console.log(op)

// function getEven(arr){
//     return arr.filter(num=>num%2===0)
// }
// console.log(getEven([1,2,3,4,5]))

// function getSum(arr){
//     return arr.reduce((acc,cur)=>{
//        return acc+cur
//     })
// }
// console.log(getSum([1,2,3,4,5]))

// let arr = [1,2,3,4,5,6]
// op = 12

// function getEvenSum(arr){
//     let evenArr = arr.filter(num=>num%2===0)
//     return evenArr.reduce((acc,cur)=>acc+cur,0)
// }
// function getEvenSum(arr){
//     return arr.filter(num=>num%2==0).reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getEvenSum(arr))

// function ProductSqNum(arr){
//     return arr.map(num=>num*num).filter(num=>num%2==0).reduce((acc,cur)=>acc*cur,1)
// }
// console.log(ProductSqNum([0,2,3,4,5]))

// function joinString(arr){
//     return arr.reduce((acc,cur)=>acc+ " "+cur)
// }

// console.log(joinString(["hello","aman"]))

// let arr1 = [1,2,3,4,5]
// let arr2 = [4,5,6,7,8,9]
// // op - [1,2,3,6,7,8,9]

// function notCommon (arr1,arr2){
//     let op1 = arr1.filter(num=>!arr2.includes(num))
//     let op2 = arr2.filter(num=>!arr1.includes(num))
//     return [...op1,...op2]

// }
// console.log(notCommon(arr1,arr2))



// function freqObj(arr){
//     return arr.reduce((acc,cur)=>{
//         if(acc[cur]){
//             acc[cur]++
//         }else{
//             acc[cur]=1
//         }
//         return acc;
//     },{})
// }

// console.log(freqObj(['apple','apple','cherry','cherry','banana']))



// function customMap(arr,cb){
//     let res = []
//     for(let i =0;i<arr.length;i++){
//         // let op = cb(arr[i])
//         // res.push(op)
//         res.push(cb(arr[i]))
//     }
//     return res;
// }

// console.log(customMap([1,2,3,4,5],(num)=>num*4))

// function customFIlter(arr,cb){
//     let res = []
//     for(let i =0;i<arr.length;i++){
//         if(cb(arr[i])){
//             res.push(arr[i])
//         }
        
//     }
//     return res;
// }

// console.log(customFIlter([1,2,3,4,5],(num)=>num%2==0))

// function customReduce(arr,cb,init){
//     let acc = init;
   
//     for(let i =0;i<arr.length;i++){
//       acc =cb(acc,arr[i])
        
//     }
//     return acc;
// }

// // console.log(customReduce([1,2,3,4,5],(x,y)=>x+y,0))
// function addCB(x,y){
//     return x+y
// }
// // console.log(customReduce([1,2,3,4,5,6],(x,y)=>addCB(x,y),0))
// console.log(customReduce([1,2,3,4,5,6],addCB,0))


// function arrayWithSq(arr){
//   return arr.map(num=>{
//     // return [num,num*num]
//     let arr = []
//     arr.push(num)
//     arr.push(num*num)
//     return

//   })
// }

// console.log(arrayWithSq([1,2,3,4,5]))


// function mapTransform3(arr){
//   return arr.map(str=>{
//     return {fName:str.toUpperCase(),len:str.length}
//   })
// }

// console.log(mapTransform3(['apple','banana','cherry']))


// function transform2(arr){
//   return arr.map(num=>()=>num*num)
// }

// // console.log(transform2([1,2,3,4,5,6]))
// let op = transform2([1,2,3,4,5,6])
// const res = op.map(f=>f())
// console.log(res)

// function getArrproduct (arr){

//   return arr.map(subArr=>subArr.reduce((acc,cur)=>acc*cur),1)
// }
// console.log(getArrproduct([[1,2,3,4,5,6,0],[4,5,6],[6,7]]))

// function evenWithOdd(arr){
//   return arr.reduce((acc,cur)=>{
//     if(cur%2==0){
//       acc[0].push(cur)
//     }else{
//       acc[1].push(cur)
//     }
//     return acc
//   },[[],[]])
// }

// console.log(evenWithOdd([1,2,3,4,5,6,7]))



// obj1 ={
//   name:"aman"
// }
// obj2 ={
//   age:32
// }

// let finalObj ={
//   ...obj1,
//   ...obj2
// }

// console.log(finalObj)

arr =[1,2,3,45]
arr2=[3,3,4,5,6]
final = [...arr,...arr2]
console.log(final)