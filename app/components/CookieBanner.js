'use client';

import { parseJson } from 'app/util/json.js';
import { getLocalStorage, setLocalStorage } from 'app/util/localStorage.js';
import { useEffect, useState } from 'react';
import style from './CookieBanner.module.scss';

export function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(true);

  useEffect(() => {
    const localStorageValue = getLocalStorage('cookiePolicy');
    if (localStorageValue) {
      setAreCookiesTermsAccepted(parseJson(localStorageValue));
    } else {
      setAreCookiesTermsAccepted(false);
    }
  }, []);

  return (
    <div
      className={`${style.cookieBanner} ${
        areCookiesTermsAccepted ? style.closed : style.open
      }`}
    >
      <div>Please Accept our Cookies.</div>
      <button
        className={style.cookieAcceptButton}
        onClick={() => {
          setLocalStorage('cookiePolicy', JSON.stringify(true));
          setAreCookiesTermsAccepted(true);
        }}
      >
        Accept
      </button>
    </div>
  );
}
