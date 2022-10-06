import  { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '/Users/thomasduckworth/Desktop/DogSports/client/src/hooks/useRefreshToken.js';
import useAuth from '/Users/thomasduckworth/Desktop/DogSports/client/src/hooks/useAuth.js';

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
     ? <p> Loading...</p>
    : <Outlet />
    }
    </>
    )
}

export default PersistLogin