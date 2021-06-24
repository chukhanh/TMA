import { apiAccount } from "../URL/URL";



export const SignIn = async (account) => {
    
    localStorage.setItem('account-login-info', JSON.stringify(account));
}