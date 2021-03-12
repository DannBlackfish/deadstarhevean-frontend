import axios from 'axios'

const service = axios.create({
    baseURL: "https://deadstarhevean.herokuapp.com"
})

export default service