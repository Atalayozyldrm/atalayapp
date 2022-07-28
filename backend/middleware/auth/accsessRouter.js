const acsess = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    }
    console.log(req.isAuthenticated())

    res.json({
        message: "Giriş yap 😊!"
    })
}


export default acsess