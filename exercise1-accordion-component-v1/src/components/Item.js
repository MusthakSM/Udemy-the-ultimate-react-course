import { useState } from "react";

export default function Item({ title, number, curOpen, onOpen, children }) {
  const isOpen = number === curOpen;

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onOpen(isOpen ? null : number)}
    >
      <p className="number">{number < 9 ? `0${number}` : number}</p>
      <p className="title">{title}</p>
      <p className="icon">{!isOpen ? "+" : "-"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
