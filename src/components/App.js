import Heading from "./Heading";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";
export default function App() {
  const [items, setItems] = useState([]);
  function handleDisplayItems(item) {
    setItems((current) => [...current, item]);
  }
  function handleToggleItem(id) {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItems(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }
  function handleClearItems() {
    if (items.length === 0) {
      alert("There is no items to delete");
      return;
    }
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Heading />
      <Form onDisplayItems={handleDisplayItems} items={items} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItems={handleDeleteItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
