

export const SignIn = async (account) => {
    // localStorage.removeItem("account-info");
    localStorage.setItem('account-login-info', JSON.stringify(account));
}