import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, SetQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Input gaurd for item's
    if (!description) window.alert("Please provide an item name ");

    const newId = items[items.length - 1].id + 1;

    const newItem = { id: newId, description, quantity, packed: false };

    setItems([...items, newItem]);

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

function PackingList({ items, setItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} items={items} setItems={setItems} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, items, setItems }) {
  function removeItem() {
    const updatedItems = items.filter((i) => i.id !== item.id);
    setItems([...updatedItems]);
  }

  function handlePacked(e) {
    const checkedStatus = e.target.checked;
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, packed: checkedStatus };
      }

      return i;
    });

    setItems([...updatedItems]);
  }

  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={handlePacked} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={removeItem}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const packedItems = items.filter((item) => item.packed);
  const packedPercentage =
    items.length > 0
      ? Math.round((packedItems.length / items.length) * 100)
      : 0;

  return (
    <footer className="stats">
      <em>
        💼 You have {items.length} items in your list, and you already packed{" "}
        {packedItems.length}({packedPercentage}%)
      </em>
    </footer>
  );
}
