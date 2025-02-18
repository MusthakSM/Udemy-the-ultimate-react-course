import { useState } from "react";

const initialItems = [];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleItemPacking(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          item.packed = !item.packed;
          return { ...item, packed: !item.packed };
        }
        return item;
      })
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} itemsCount={items.length} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onHanldePicked={handleItemPacking}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItems, itemsCount }) {
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

function PackingList({ items, onDeleteItem, onHanldePicked }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onHanldePicked={onHanldePicked}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onHanldePicked }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onHanldePicked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list!.. 🚀</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed);
  const numPackedItems = packedItems.length;
  const packedPercentage =
    items.length > 0 ? Math.round((numPackedItems / numItems) * 100) : 0;

  const allPacked = packedPercentage === 100 ? true : false;

  return (
    <footer className="stats">
      <em>
        {allPacked
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items in your list, and you already packed ${numPackedItems}(${packedPercentage}%)`}
      </em>
    </footer>
  );
}
