import axios from 'axios'

const instance = axios.create({
    //baseURL: 'http://api.escove.com.br/',
    baseURL: 'https://reqres.in/api/',
    // timeout: 1000,

    headers: {
        // 'Authorization':token,
        // 'token': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'

    }
})
// console.log('instance  token', localStorage.getItem('token'))
// localStorage.removeItem('token')

instance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
        config.headers.token = `${token}`
    }

    return config
}, (err) => {
    return Promise.reject(err)
})

instance.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response.status === 401) {
        window.location = '#/account/login'
    }

    return Promise.reject(error)
})

export default instance
