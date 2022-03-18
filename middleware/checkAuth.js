export const checkAuth = function (req,res,next){
    const isAdmin = true
    if(isAdmin){
        console.log("xin chào người ae")
        next();
    }else{
        console.log("lỗi rồi")
    }
}
 