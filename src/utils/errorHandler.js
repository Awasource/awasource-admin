import { toast } from "react-toastify";
import ToastMessage from "../components/Toast/toast";

export const errorHandler = (error, text) => {
  if (error.response)
    return toast.error(
      <ToastMessage text={text} message={error.response.data.message} />
    );
  else return toast.error(<ToastMessage text={text} message={error.message} />);
};