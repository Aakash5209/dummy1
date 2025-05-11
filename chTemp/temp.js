
function authenticateUser(username,password){
    return new Promise((res,rej)=>{
        if(username=='chanchal' && password=='pagal_dust'){
            res('authentiacted user')
        }else{
            rej('authenticated fail')
        }
    })
}

function checlkSubscription(){
    const hasSubscription  = true
    return new Promise((res,rej)=>{
        if(hasSubscription){
            res()
        }
        else{
            rej()
        }

    })


}

authenticateUser('chanchal','pagal_dust')
.then(mssge=>{
    console.log(mssge)
    checlkSubscription()
    .then(()=>console.log('subscription is active'))
    .catch(()=>console.log('not active'))

})
.catch(err=>console.log(err))








