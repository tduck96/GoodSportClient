import  { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '/Users/thomasduckworth/Desktop/DogSports/client/src/hooks/useRefreshToken.js';
import useAuth from '/Users/thomasduckworth/Desktop/DogSports/client/src/hooks/useAuth.js';
import Spin from './layout/Spin';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        }

        !auth?.token ? verifyRefreshToken() : setIsLoading(false);


    }, [])

    useEffect(() => {
       
    }, [isLoading])

    return (
    <>
     {isLoading
     ? <Spin />
    : <Outlet />
    }
    </>
    )
}

export default PersistLogin