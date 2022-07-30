import Cookie from "universal-cookie";

const cookie = new Cookie()


const token = cookie.get("acsess_token")

const authCon = () => {
  if (token) return true
  return false
}

export default authCon