import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ handleClose }) {
  return (
    <div className="modal">
      <div onClick={handleClose} className="overlay"></div>
      <div className="modal-container">
        <div className="modal-content">
          <h2>Hello Modal</h2>
          <p>hello! welcome here.</p>
        </div>
        <button className="close-modal" onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  );
}