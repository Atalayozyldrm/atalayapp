import jwt from "jsonwebtoken"

const acsess = (req, res, next) => {
    const authReq = req.get("Authorization")
    console.log(authReq)

    const token = jwt.verify(authReq, "secret")
    if (token) {
       return  next()
    }
   
    res.status(403).json({
        message: "Giriş yap 😊!"
    })
}


export default acsess