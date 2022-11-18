const selectIsLogin = state => state.auth.isLogin;

const selectUserName = state => state.auth.user.name;

const selectIsFetchingCurrent = state => state.auth.IsFetchingCurrentUser;

const authSelectors = {
    selectIsLogin,
    selectUserName,
    selectIsFetchingCurrent,
};

export default authSelectors;