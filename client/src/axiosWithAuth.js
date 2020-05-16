import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token,
        },
    })
}

export default axiosWithAuth;

// We are going to create an Axios configuration that attaches an 
// Authorization: <token> header to requests. Whenever the app needs 
// to exchange data with a protected endpoint, it imports this module, 
// instead of the usual import axios from "axios";.

// After user logs in with name/pw, Login.js/submitLogin saves token
// to localStorage with: 
//      localStorage.setItem('token', results.data.payload);
