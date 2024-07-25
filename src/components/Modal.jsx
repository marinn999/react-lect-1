import { useEffect } from "react";

const Modal = ({ children, handleClose, title = "Default modal" }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    console.log("Modal window is opened with UseEffect");

    return () => {
      console.log("Modal window is closed");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  const handleBackdropClick = (e) => {
    console.log(e.target);
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div onClick={handleBackdropClick} style={backdrop}>
      <div style={modalStyles}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={handleClose}>x</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

const backdrop = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyles = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "5px",
  width: "500px",
  maxWidth: "100%",
};
