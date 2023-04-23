
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Userdashboard = () => {
  toast.success("🦄 User Login Successfully...!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (
    <>
    <ToastContainer/>
    <div>Userdashboard</div>
    </>
  )
}
