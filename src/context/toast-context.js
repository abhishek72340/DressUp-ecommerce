import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const toastContext = createContext();
const ToastProvider = ({ children }) => {
    const toastify = {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };
    const notifySuccess = (content) => toast.success(content, toastify);
    const notifyError = (content) => toast.error(content, toastify);
    const notifyWarn = (content) => toast.warn(content, toastify);
    return (
        <toastContext.Provider value={{ notifySuccess, notifyError,notifyWarn }}>
            {children}
        </toastContext.Provider>
    )
};
const useToast = () => useContext(toastContext);
export { useToast, ToastProvider };