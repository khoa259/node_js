import expressJWT from 'express-jwt'
export const checkAuth = function (req,res,next){
    const isAdmin = true
    if(isAdmin){
        console.log("xin chào người ae")
        next();
    }else{
        console.log("lỗi rồi")
    }
}
 
// check admin router
export const requiredSigin =  expressJWT({
    algorithms: ['HS256'],
    secret: '12345',
    requestProperty: "auth"
});

export const isAuth = (request, response,  next) => {
    const status = request.profile._id == request.auth._id;
    if(!status){
        response.status(401).json({
            message:"bạn không có quyền truy cập"
        })
    }
    next();
};


export const isAdmin =  (request, response, next) => {
    if(request.profile.role == 0 ){
        response.status(401).json({
            message : "bạn ko phải là admin"
        })
    }
    next();
}
