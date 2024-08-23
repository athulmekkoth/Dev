import React from "react";

const Notification = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export const showToast = (message, type = 'success') => {
    if (type === 'success') {
      toast.success(message, { transition: Bounce });
    } else if (type === 'error') {
      toast.error(message, { transition: Bounce });
    } else if (type === 'info') {
      toast.info(message, { transition: Bounce });
    } else if (type === 'warning') {
      toast.warning(message, { transition: Bounce });
    }
  };
  
  export default Notification