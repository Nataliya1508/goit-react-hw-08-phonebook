import { useDispatch, useSelector } from "react-redux";
import  getUserName  from 'redux/auth/authSelectors';
import { logOut } from "redux/auth/authOperations";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(getUserName);

    const handleClick = () => {
        dispatch(logOut());
    };

    return (
        <div>
            <h2>Welcome to your page
                <span>{userName}</span>
            </h2>
            <button type="button" onClick={handleClick}>
                LOG OUT
            </button>
        </div>
    );
};

export default UserMenu;