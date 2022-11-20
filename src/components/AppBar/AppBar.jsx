import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import  getIsLogin  from 'redux/auth/authSelectors';

// const AppBar = () => {
//     const isLogin = useSelector(getIsLogin);
//     return (
//         <header>
//             <Navigation />
//             {isLogin ? <UserMenu /> : <AuthNav />}
//         </header>
//     );
// };

const AppBar = () => {
  const isLogin = useSelector(getIsLogin);
  return (
    <header>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;