import Api from './api'

export default {

    login (data) {
        return Api.post('/login', data)
    },
    logout () {
        return Api.post('/logout')
    }
}
