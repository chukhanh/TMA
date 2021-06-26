// import { apiAccount } from "../URL/URL";
export const SignIn = async (account) => {
    
    localStorage.setItem('accountLoginInfo', JSON.stringify(account));
}