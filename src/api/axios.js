import axios from 'axios';
const BASE_URL = 'https://goodsportruff.azurewebsites.net/api';

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type' : 'application/json',
},
    credentials: 'include',
    withCredentials: true
    
})

export const axiosPrivate = axios.create({
    baseURL : BASE_URL, 
    headers: { 'Content-Type' : 'application/json',
},
    withCredentials: true
}  
);  