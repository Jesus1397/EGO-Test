import React from "react";
import "../styles/Sidebar.css";

const Backdrop: React.FC<{ show: boolean; onClick: () => void }> = ({
  show,
  onClick,
}) => {
  return show ? <div className="backdrop" onClick={onClick}></div> : null;
};

export default Backdrop;
