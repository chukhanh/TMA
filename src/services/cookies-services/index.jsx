import * as Cookies from 'js-cookie.js';

const CookiesServices = (() => {
  const _getCookies = (name) => {
    return Cookies.get(name);
  };

  const _setCookies = (name, value) => {
    if (name === 'token') {
      Cookies.set(name, `${value}`, { expires: 6 });
    } else Cookies.set(name, `${value}`);
  };

  const _clearCookies = (name)=> {
    Cookies.remove(name);
  };

  return {
    getCookies: _getCookies,
    setCookies: _setCookies,
    clearCookies: _clearCookies,
  };
})();

export default CookiesServices;
