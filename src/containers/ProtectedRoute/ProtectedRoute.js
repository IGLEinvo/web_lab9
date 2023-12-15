import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ element }) => {
    if (localStorage.getItem('email') === null || localStorage.getItem('email') === '') {
        return <Navigate to='/login'/>
    }

    return element;
};

export default ProtectedRoute;