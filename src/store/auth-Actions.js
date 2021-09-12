import { authActions } from "./authSlice";

export const fetchUserData = () => {
  return (dispatch) => {
    const calculateRemainingTime = (expirationTime) => {
      const currentTime = new Date().getTime();
      const adjustedExpirationTime = new Date(expirationTime).getTime();
      const remainingDuration = adjustedExpirationTime - currentTime;
      return remainingDuration;
    };

    const retreiveStoredToken = () => {
      const storedToken = localStorage.getItem("token");
      const storedExpirationDate = localStorage.getItem("expirationTime");
      const remainingTime = calculateRemainingTime(storedExpirationDate);
      if (remainingTime < 3600) {
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");
        return null;
      }

      return { token: storedToken, duration: remainingTime };
    };

    const tokenData = retreiveStoredToken();
    let initialToken;
    if (tokenData) {
      initialToken = tokenData.token;
    }

    dispatch(
      authActions.login({ isLoggedIn: userIsLoggedIn, token: initialToken })
    );
  };
};
