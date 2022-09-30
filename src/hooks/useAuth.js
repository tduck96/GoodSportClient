import {useContext} from 'react';
import AuthContext from '/Users/thomasduckworth/Desktop/DogSports/client/src/context/AuthContext.js';

const useAuth = () => {

    return useContext(AuthContext);
}

export default useAuth;