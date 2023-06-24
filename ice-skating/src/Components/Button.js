import React from "react";
import "./button.css";

export default function Button({ onClick, text, className }) {
  return (
    <>
      <button className={className} type="button" onClick={onClick}>
        {text}
      </button>
    </>
  );
}
