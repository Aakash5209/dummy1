

// function mulBy2(arr){
//     return arr.map(num=>num*2)
// }

// console.log(mulBy2([1,2,3,4,5]))

// function getEven(arr){
//     return arr.filter(num=>num%2===0)
// }
// console.log(getEven([1,2,3,4,5]))


// function getSum(arr)
// {
//     return arr.reduce((acc,cur)=>acc+cur)
// }

// console.log(getSum([1,2,3,4,5]))


// function getSumBykey(arr,key){
//     const sqArr = arr.map(num=>num*num)
//     console.log(sqArr)
//     const lessThanKey = sqArr.filter(num=>num<key)
//     return lessThanKey.reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getSumBykey([1,2,3,4,5],16))

// function getSumBykey(arr,key){
//     return arr.map(num=>num*num).filter(num=>num<key).reduce((acc,cur)=>acc+cur,0)
   
// }

// console.log(getSumBykey([1,2,3,4,5],16))

// function getSumBykey(arr,key){
//     return arr.reduce((acc,cur)=>{
//         if(cur*cur<key){
//             acc+=cur*cur
//         }
//         return acc

//     },0)
   
// }

// console.log(getSumBykey([1,2,3,4,5],16))

// const students = [
//     {name:'aman',subject:[10,20,30]},
//     {name:'naman',subject:[30,20,30]},
//     {name:'chaman',subject:[40,20,30]},
//     {name:'karan',subject:[50,20,30]},
// ]


// function getMarksSum(arr){
//     return arr.map(std=>({
//         name:std.name,
//         total: std.subject.reduce((acc,cur)=>acc+cur,0)
//     }))

// }

// console.log(getMarksSum(students))

// const arr = [1,[2,3],[4,[5,[11,12]],[6],7]]
// // [4,[5],[6]]
// // op- [1,2,3,4,5,6,7]

// console.log(arr.flat(2))


// function getChunk(arr,key){
//     let res =[]
//     for(let i=0;i<arr.length;i+=key){
//         // let chunk = arr.slice(i,i+key)
//         // res.push(chunk)
//         res.push(arr.slice(i,i+key))
//     }
//     return res
// }
// console.log(getChunk([1,2,3,4,5,6,7],3))


// const myarr = [1,2,3,4,5]

// function customReduce(arr, cb){
//   let acc = 0;
// //   let y;
//   for (let i=0; i<arr[i];i++){
//       acc = cb(arr, arr[i], acc)
//   }
// //   console.log(y)
//   return acc
  
// }

// function Red(array, cur , acc){
//   acc = acc+cur;

//   return acc;
// }
// console.log(customReduce(myarr,(arr,cur, acc)=> Red(arr , cur, acc)))

// let arr = [1,2,3,4,5]
// function customMap(arr,cb){
//     let res = []
//     for(let i=0;i<arr.length;i++){
//         res.push(cb(arr[i]))
//     }
//     return res
// }
// console.log(customMap(arr,(num)=>num*3))

// function customFilter(arr,cb){
//     let res = []
//     for(let i=0;i<arr.length;i++){
//         if(cb(arr[i])){
//             res.push(arr[i])
//         }

//     }
//     return res
// }

// function customReduce(arr,cb,init){
//     let acc = init
//     for(let i=0;i<arr.length;i++){
//        acc = cb(acc,arr[i])
//     }
//     return acc
// }
// function cb (acc,cur){
//     return acc+cur
// }
// console.log(customReduce(arr,(acc,cur)=>cb(acc,cur),0))

// function getFreqT(arr){
//     let freq = {}
//     for(let i=0;i<arr.length;i++){
//         let key = arr[i]
//         if(freq[key]){
//             freq[key]++
//         }else{
//             freq[key] = 1;
//         }
//     }
//     return freq
// }
// function getFreq(arr){
//    return arr.reduce((acc,cur)=>{
//     if(acc[cur]){
//         acc[cur]++
//     }else{
//         acc[cur] =1
//     }
//     // acc[cur] = (acc[cur] || 0) + 1
//     return acc
//    },{})
// }

// console.log(getFreq(['apple','apple','cherry','banana']))


// let arr =[1,2,3,4,5,6]
// //op - [[2,4,6],[1,3,5]]

// function getEvenOdd(arr){
//     return arr.reduce((acc,cur)=>{
//         if(cur%2===0){
//             acc[0].push(cur)
//         }else{
//             acc[1].push(cur)
//         }
//         return acc

//     },[[],[]])
// }

// console.log(getEvenOdd(arr))


// function arrayWithSq(arr){
//     return arr.map(num=>[num,num*num])
// }

// function arrayWithSq(arr){
//     return arr.map(num=>{
//         let childArr =[]
//         childArr.push(num)
//         childArr.push(num*num)
//         return childArr
//     })
// }

// console.log(arrayWithSq([1,2,3,4,5]))


// function tranformArr(arr){
//     return arr.map(str=>({name:str,length:str.length}))
// }

// function tranformArr(arr){
//     return arr.map(str=>{
//         // return {name:str,length:str.length}
//         let obj = {}
//          obj.name=str
//          obj.length = str.length
//          return obj
    
//     })
// }

// console.log(tranformArr(['apple','abc','def','xyz']))

// function transformArr2(arr){
//     return arr.map(num=>()=>num*num)
// }

// // console.log(transformArr2([1,2,3,4,5]))

// let res = transformArr2([1,2,3,4,5])

// console.log(res)

// let finalOp =res.map(f=>f())
// console.log(finalOp)

// let arr = [[1,2],[3,4],[5,6]]
// function getProduct(arr){
//     return arr.map(subArr=>subArr[0]*subArr[1])
// }


// function getProduct(arr){
//     return arr.map(subArr=>subArr.reduce((acc,cur)=>acc*cur,1))
// }

// function flatArr(arr){
//     return arr.reduce((acc,cur)=>acc.concat(cur),[])
// }

// console.log(flatArr([[1,2,3],[4,5],[6,7]]))

// function countWordLength(arr,key){
//     return arr.filter(str=>str.length===key).length
// }

// function countWordLength(arr,key){
//     return arr.reduce((acc,cur)=>{
//         if(cur.length===key) acc++
//         return acc
//     },0)
// }
// console.log(countWordLength(['apple','chery','def','xyz'],5))