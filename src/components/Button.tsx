import React, { useContext } from "react";
import { ContextModal } from "../context/contextModal";

const Button: React.FC = () => {
  const modal = useContext(ContextModal);

  return (
    <button
      className="source__button"
      onClick={modal?.setModal.bind(null, true)}
    >
      <p>+</p>
      <p>Add new data in source</p>
    </button>
  );
};

export { Button };
