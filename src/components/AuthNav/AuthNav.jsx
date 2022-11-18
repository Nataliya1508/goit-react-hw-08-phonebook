import { NavLink } from 'react-router-dom';

const AuthNav = () => {
    return (
        <div>
            <NavLink to="/registration">
                <button type="button">
                    SIGN UP
                </button>
            </NavLink>
            <NavLink to="/login">
                <button type="button">
                    LOG IN
                </button>
            </NavLink>
        </div>
    
    );
};


export default AuthNav;