import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {

    const { setAuth} = useAuth();
    

    const refresh = async () => {

        const response = await axios.post('/AuthHandler/refresh-token', {
            withCredentials: true
        })


        setAuth({ 
            role: response.data.role, 
            token: response.data.token,
            refreshTok: response.data.refreshToken,
            id: response.data.id,
            userId: response.data.userId
        });

         return response.data.token;
         
    }
    return refresh;
}

export default useRefreshToken