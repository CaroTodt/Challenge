import axios from 'axios'
const baseUrl = 'http://localhost:8081/api/members'

let token = null

const setToken = newToken => {
	token = `bearer ${newToken}`
}

const getAll = () => {
	const config = {
		headers: { Authorization: token },
	}
	const request = axios.get(baseUrl,config)
	return request.then(response => response.data)
}

const create = data => {
	const config = {
				headers: { Authorization: token },
			}
	return axios.post(baseUrl, data,config);
};


export default { getAll, create, setToken}