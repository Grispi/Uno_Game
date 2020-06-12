import React from "react";
import ReactModal from "react-modal";
import classnames from "classnames";

ReactModal.setAppElement("#__next");

export default function Modal({ children, title, ...rest }) {
  return (
    <ReactModal {...rest}>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex items-start justify-between mb-4 text-lg md:text-xl text-center">
          <div className="flex justify-center w-full">
            <h1 className="text-red-700 text-lg font-bold text-center">
              {title}
            </h1>
          </div>
          <button
            onClick={rest.onRequestClose}
            className={classnames([
              "text-lg",
              "focus:outline-none focus:shadow-outline",
              "duration-150 ease-in-out transition",
            ])}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </ReactModal>
  );
}
