import {createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [registerInfo, setRegisterInfo] = useState({});
    const [userId, setUserId] = useState({});
    const [locations, setLocations] = useState({});
 
    return (
        <AuthContext.Provider value={{ auth, setAuth,
         userId, setUserId,
         registerInfo, setRegisterInfo,
         locations, setLocations
         }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;