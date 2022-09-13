import { expressjwt } from "express-jwt";

const getTokenFromHeaders = (req) => {
  const {
    headers: { Authorization },
  } = req;

  if (Authorization) {
    return Authorization;
  }
  return null;
};

const auth = {
  required: expressjwt({
    secret: "/-l/Y",
    userProperty: "payload",
    getToken: getTokenFromHeaders,
    algorithms: ["RS256"],
  }),
  optional: expressjwt({
    secret: "/-l/Y",
    userProperty: "payload",
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
    algorithms: ["RS256"],
  }),
};

export default auth;
