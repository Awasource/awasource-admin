import { authSlice as slice } from '../slices/authSlice';
import { dispatch } from '../store';
import { loginApi, verifyApi } from '../../apis';
import { errorHandler } from '../../utils/errorHandler';

export function login(payload, successCallback) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data, status } = await loginApi(payload);
      if (data && status === "success" && typeof successCallback === "function") {
        dispatch(slice.actions.loginSuccess(data));
        successCallback();
      } else {
        errorHandler(status, "Authentication failed!");
      }
    } catch (err) {
      errorHandler(err, "Authentication failed!");
      dispatch(slice.actions.hasError(err));
    }
  };
}

export function verify(payload, successCallback) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data, status } = await verifyApi(payload);
      if (data && status === "success" && typeof successCallback === "function") {
        dispatch(slice.actions.verifySuccess(data));
        successCallback();
      } else {
        errorHandler(status, "Authentication failed!");
      }
    } catch (err) {
      errorHandler(err, "Authentication failed!");
      dispatch(slice.actions.hasError(err));
    }
  };
}

export function logout() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      dispatch(slice.actions.logoutSuccess());
    } catch (err) {
      errorHandler(err, "Log out action failed!");
      dispatch(slice.actions.hasError(err));
    }
  };
}

export function endAuthLoading() {
  return () => {
    dispatch(slice.actions.endLoading());
  };
}
