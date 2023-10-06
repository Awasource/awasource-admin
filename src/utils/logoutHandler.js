import { AWASOURCE_STORE_KEY } from "../constants";

export const logoutHandler = () => {
  try {
    const auth = localStorage.getItem(`${AWASOURCE_STORE_KEY}auth`);
      const oldAuth = JSON.parse(auth);
      if (auth) {
        localStorage.setItem(`${AWASOURCE_STORE_KEY}auth`, JSON.stringify({ ...oldAuth, isAuthenticated: false }))
      }
      window.location.replace("/?logged-in=false");
  } catch (error) {
    console.error(error);
  }
};