import axios from 'axios'
// const baseURL = 'http://localhost:3001/persons'
const baseURL = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = newObject => {
    return axios.post(baseURL,newObject)
}

const dell = (delObject_id) => {
    return axios.delete(`${baseURL}/${delObject_id}`)
}

const put = (Object) => {
    const request = axios.put(`${baseURL}/${Object.id}`,Object)
    return request.then(response => response.data)
}

export default { dell, getAll, create, put }