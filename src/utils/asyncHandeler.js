const asyncHandeler = (requestHandeler)=>{
    (req,res,next) =>{
        Promise.resolve(requestHandeler(req,res,next)).catch((err) => next(err))
    }
}


// const asyncHandeler = (fn)=> async (req,res,next)=>{
//     try{
//         await fn(req,res,next)

//     }catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

export {asyncHandeler}