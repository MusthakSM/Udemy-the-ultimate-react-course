import { useState } from "react";

export default function Item({ title, text, number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <p className="number">{number < 9 ? `0${number}` : number}</p>
      <p className="title">{title}</p>
      <p className="icon">{!isOpen ? "+" : "-"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
