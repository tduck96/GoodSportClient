import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '/Users/thomasduckworth/Desktop/DogSports/client/src/hooks/useAuth.js';

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        (auth.role === allowedRoles) ?  <Outlet /> 
        : auth?.userName
            ? <Navigate to ='/unauthorized' state={{from: location}} replace />
            : <Navigate to ='/login' state={{from: location}} replace />
    );
}

export default RequireAuth;