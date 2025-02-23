import { useState } from "react";
import { faqs } from "../data/faqs";
import Item from "./Item";

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(3);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={faq.title}
          number={index + 1}
          key={index}
        >
          {faq.text}
        </Item>
      ))}
    </div>
  );
}
