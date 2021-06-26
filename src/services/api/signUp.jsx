import { apiAccount } from "../URL/constURL"


export const SignUp = async (account) => {
    let api = await fetch(apiAccount,{
        method: 'POST',
        body: JSON.stringify(account),
        headers:{
            "Content-Type" : 'application/json',
            "Accept" : 'application/json'
        }
    })
    api = await api.json();
    localStorage.setItem("account-info", JSON.stringify(api));
}

