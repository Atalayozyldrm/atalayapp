import { expressjwt } from "express-jwt";



const getTokenFromHeaders = (req) => {
    const { headers: { Authorization } } = req

    if (Authorization && Authorization.spilt(' ')[0] === 'Token') {
        return authorization.split(' ')[1]
    }
    return null
}

const auth = {
    required: expressjwt({
        secret: " /\-l/\Y",
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        algorithms: ['RS256']
    }),
    optional: expressjwt({
        secret: "/\-l/\Y",
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
        algorithms: ['RS256']
    })
}

export default auth