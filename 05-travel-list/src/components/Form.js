import { useState } from "react";

export default function Form({ onAddItems, itemsCount }) {
  const [description, setDescription] = useState("");
  const [quantity, SetQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Input gaurd for item's
    if (!description) window.alert("Please provide an item name ");

    const newId = itemsCount + 1;

    const newItem = { id: newId, description, quantity, packed: false };

    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    SetQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => SetQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
