
import { createBrowserHistory } from 'history';

export const getAccount = localStorage.getItem('account-login-info');

export const removeAccount = localStorage.removeItem('account-login-info');

export const history = createBrowserHistory();