import React from "react";

export default function Button({ onClick, text, className }) {
  return (
    <>
      <button className={className} type="button" onClick={onClick}>
        {text}
      </button>
    </>
  );
}
