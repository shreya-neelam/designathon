import axios from 'axios';

const BASE_URL = "http://localhost:8000";

class UserService {
    getAllUsers(token) {
        return axios.get(BASE_URL + '/', 
        { headers: {"Authorization" : `Bearer ${token}`} });
    }

    createUser(userDetailsRequest, token) {
        return axios.post(BASE_URL + '/user_details', userDetailsRequest,
        { headers: {"Authorization" : `Bearer ${token}`} });
    }

    updateUser(userId, userDetailsRequest, token) {
        return axios.put(BASE_URL + '/user_details/' + userId, userDetailsRequest,
        { headers: {"Authorization" : `Bearer ${token}`} });
    }

    deleteUser(userId, token) {
        return axios.delete(BASE_URL + '/user_details/delete', 
        { 
            headers: {"Authorization" : `Bearer ${token}`},
            params: { user_id: userId }
        });
    }

    userLogin(formData) {
        return axios.put(BASE_URL + '/token', formData);
    }
}

export default new UserService();
