import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import  getIsLogin  from "redux/auth/authSelectors";
import styles from "./Navigation.module.css";

const Navigation = () => {
    const IsLogin = useSelector(getIsLogin);

    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? styles.active : styles.link)}
                to="/">Home</NavLink>
            
            {IsLogin && (
                <NavLink
                    className={({ isActive }) => (isActive ? styles.active : styles.link)}
                    to="/contacts"
                >
                    Phonebook
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;