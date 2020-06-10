class AuthenticationService{
    isLoggedIn = () => {
        if(sessionStorage.getItem('token')){
            return true;
        }
        return false;
    }
}

export default new AuthenticationService();