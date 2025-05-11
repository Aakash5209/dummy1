
// promise

// const promise = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log('hi i m set time out')
//         // resolve()
//         reject()

//     },2000)

// })

// // consume
// promise
// .then(()=>console.log("mission done"))
// .catch(error=>console.log(error))

function getEven(num){

    return promise = new Promise((resolve,reject)=>{
        if(num%2===0){
            resolve("number is even")
        }else{
           
            reject("number is odd")
        }
    })

    // return promise

}

// consume -> .then /.catch OR async await
// getEven(4)
// .then((result)=>console.log(result))
// .catch(err=>console.log(err))

async function consumePro(num){
    try{
        const res = await getEven(num)
        console.log("hi i m waitning")
        console.log(res)

    }catch(err){
        console.log(err)
    }
   

}

consumePro(4)