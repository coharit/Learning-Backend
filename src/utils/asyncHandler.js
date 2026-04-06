//Method 2 using Promises(recommended)
//reqHandler is a function (Higher order function is used here)
const asyncHandler = (requestHandler) => {
   return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
    }
}


export {asyncHandler};







//Method 1 using trycatch and async await
/*const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res , next)
    } catch (error) {
        console.log(error).json({
            status : false,
            message : error.message,
        })   
    }
}
*/