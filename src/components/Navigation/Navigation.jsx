import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import  selectIsLogin  from "redux/auth/authSelectors";
import styles from "./Navigation.module.css";

const Navigation = () => {
    const IsLogin = useSelector(selectIsLogin);

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