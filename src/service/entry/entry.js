import axios from "axios"
import Cookies from "universal-cookie"

const cookie = new Cookies()

const token = cookie.get("acsess_token")

const getAll = () => {
    const entry = axios.get("/api/entry/entry", {
        headers: {
            "Authorization": token
        }
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => { console.log(err) })
}

export default getAll