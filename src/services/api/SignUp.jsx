import { apiAccount } from "../URL/URL";


export const SignUp = async (account) => {
    await fetch(apiAccount,{
        method: 'POST',
        body: JSON.stringify(account),
        headers:{
            "Content-Type" : 'application/json',
            // "Accept" : '*/*'
        }
    })
    // api = await api.json();
    // localStorage.setItem("account-info", JSON.stringify(api));
}