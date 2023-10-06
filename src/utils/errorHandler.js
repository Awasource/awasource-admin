import { toast } from "react-toastify";
import ToastMessage from "../components/Toast/toast";
import { logoutHandler } from "./logoutHandler";

export const errorHandler = (error, text, showToast = true) => {
  if (showToast) {
    if (error?.response)
      return toast.error(
        <ToastMessage text={text} message={error.response.data.message} />
      );
    else return toast.error(<ToastMessage text={text} message={error?.message} />);
  } else {
    if (error?.message === "Unauthorized access" || error?.response?.data?.message === "Unauthorized access") {
      logoutHandler();
    }
  }
};