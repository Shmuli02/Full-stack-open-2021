import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = newObject => {
    return axios.post(baseURL,newObject)
}

const dell = (delObject_id) => {
    return axios.delete(`${baseURL}/${delObject_id}`)
}

const put = (Object,id) => {
    return axios.put(`${baseURL}/${id}`,Object)
}

export default { dell, getAll, create, put }