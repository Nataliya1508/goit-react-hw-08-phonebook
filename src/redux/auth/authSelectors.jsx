const getIsLogin = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.IsFetchingCurrentUser;

const authSelectors = {
    getIsLogin,
    getUserName,
    getIsFetchingCurrent,
};

export default authSelectors;