// call back hell example

// function step1(cb){
//     setTimeout(()=>{
//         console.log("hi i m steps 1")
//         cb()
//     },1000)
// }

// function step2(cb){
//     setTimeout(()=>{
//         console.log("hi i m steps 2")
//         cb()
//     },2000)
// }

// function step3(cb){
//     setTimeout(()=>{
//         console.log("hi i m steps 1")
//         cb()
//     },3000)
// }

// function sayHello(){
//     console.log("hiii")
    //API call - get data from bs based on res


// }
// // sequential operation - 6sec // call backhell example


// step1(()=>{
    
//     step2(()=>{
//         step3(()=>console.log("all steps are done"))
//     })
// })

// // parallel operation  - 3sec // not a call backhell example

// step1(sayHello)
// step2(sayHello)
// step3(sayHello)



// Mitigate/Avoid Callback Hell

function step1(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("step 1")
            // resolve("step 1 done")
            // resolve()
            reject('step 1 not done')
            

        },1000)


    })
    return promise
}
function step2(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("step 2")
            // resolve("step2 done")
            reject()
            

        },2000)


    })
    return promise
}
function step3(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("step 3")
            resolve("step 3 done")
            // resolve()
            

        },3000)


    })
    return promise
}
// console.log(step3())
// consume promise
// step1()
// .then((res)=>{
//     console.log(res)
//     step2()
//     .then((res)=>{
//         console.log(res)
//         step3()
//         .then((res)=>console.log(res))
//     })

// })


// consume promise when resolve rej has no value

// sequentital operation using promise-> 6sec

// step1()
// .then(step2)
// .then(()=>step3())
// .then(()=>console.log("all stpes are done"))
// .catch((err)=>console.log(err))

// parallel opertaion - 3sec

// step1()
// .then(()=>console.log("step1 done good"))
// .catch((err)=>console.log(err))

// step2()
// .then(()=>console.log("step2 done good"))
// .catch((err)=>console.log(err))

// step3()
// .then(()=>console.log("step3 done good"))
// .catch((err)=>console.log(err))


// async function AllStepsSequential(){
//     // const st1 = 
//   const st1 =  await step1()
//   console.log(st1)
//   const st2 =  await step2()
//   console.log(st1)
//   const st3 =  await step3()
//   console.log(st1)

//     // await step1()
//     // await step2()
//     // await step3()
//     console.log("hiii")

// }


 function AllStepsParallel(){
    const promise = Promise.any([step1(),step2(),step3()])
    return promise
  

}
// console.log()

async function finalRes(){
   try{
    //  const [st1,st2,st3] = await AllStepsParallel()
     const st1 = await AllStepsParallel()
    console.log(st1)
    // console.log(st2)wq
    // console.log(st3)
   }catch(err){
    console.log(err)
   }

}
finalRes()

