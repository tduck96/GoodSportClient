import { Navigate } from "react-router-dom"
import axios from "../api/axios"
import useAuth from './useAuth'
import { useNavigate } from "react-router-dom"

const useLogout = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios.post('/AuthHandler/logout', {
                withCredentials: true
            });
        } catch(err) {
            console.error(err)
        }
        navigate('/');
    }

  return logout;
}

export default useLogout
