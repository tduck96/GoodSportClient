import  { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';
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