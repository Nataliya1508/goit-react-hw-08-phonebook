import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import getIsLogin from "redux/auth/authSelectors";

const PublicRoute = ({ children }) => {
    const isLogin = useSelector(getIsLogin);
    return !isLogin ? children : <Navigate to="/contacts" />
}

export default PublicRoute;