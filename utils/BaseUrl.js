import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN,
    withCredentials: true,
    timeout: 4000
})

export default instance