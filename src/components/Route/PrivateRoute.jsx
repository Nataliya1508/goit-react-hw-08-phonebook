import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import selectIsLogin from "redux/auth/authSelectors";

const PrivateRoute = ({ children }) => {
    const isLogin = useSelector(selectIsLogin);
    return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
