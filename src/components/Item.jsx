export default function Item({ item, onToggleItem, onDeleteItems }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        className="checkbox"
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      {item.quantity} {item.description}
      <span onClick={() => onDeleteItems(item.id)}> ❌</span>
    </li>
  );
}
