import { faqs } from "../data/faqs";
import Item from "./Item";

export default function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item
          title={faq.title}
          text={faq.text}
          number={index + 1}
          key={index}
        />
      ))}
    </div>
  );
}
