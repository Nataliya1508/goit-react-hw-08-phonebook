import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import selectIsLogin from "redux/auth/authSelectors";

const PublicRoute = ({ children }) => {
    const isLogin = useSelector(selectIsLogin);
    return !isLogin ? children : <Navigate to="/contacts" />
}

export default PublicRoute;