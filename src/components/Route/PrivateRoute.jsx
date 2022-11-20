import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import getIsLogin from "redux/auth/authSelectors";

const PrivateRoute = ({ children }) => {
    const isLogin = useSelector(getIsLogin);
    return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
