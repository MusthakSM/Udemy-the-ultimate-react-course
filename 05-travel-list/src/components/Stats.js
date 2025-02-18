export default function Stats({ items }) {
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
