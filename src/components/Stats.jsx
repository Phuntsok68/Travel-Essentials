export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <div className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </div>
    );
  }
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <div className="stats">
      <p>
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : `You have ${totalItems} items on your list, and you already packed
        ${packedItems} (${percentage})%`}
        </em>
      </p>
    </div>
  );
}
