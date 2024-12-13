import { useState } from "react";

export default function Form({ onDisplayItems, items }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (items.length === 10) {
      alert("You can add only 10 items");
      return;
    }
    if (!description) return;
    const newItems = { quantity, description, packed: false, id: Date.now() };
    console.log(newItems);
    onDisplayItems(newItems);
    setQuantity(1);
    setDescription("");
  }
  return (
    <div className="form">
      <p>What do you need for your 😍 trip?</p>
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>ADD</button>
      </form>
    </div>
  );
}
