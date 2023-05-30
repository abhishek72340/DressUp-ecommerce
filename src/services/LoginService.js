import axios from "axios"

export default function LoginService(userDetails) {
    return  axios.post('/api/auth/login', {
        email: userDetails.email,
        password: userDetails.password
    })
}