import { AddForm } from "./components/AddForm";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { State } from "./components/State";
import { useState } from "react";

export default function App() {
  const initialItems = [
    {
      id: 1,
      description: "Passport",
      quantity: 2,
      packed: false,
    },
    {
      id: 2,
      description: "Socks",
      quantity: 12,
      packed: false,
    },
    {
      id: 3,
      description: "Chargers",
      quantity: 1,
      packed: false,
    },
  ];
  const [items, setItems] = useState(initialItems);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleUpdateItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className="app">
      <Header />
      <AddForm onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItems={handleDeleteItems}
        onUpdateItems={handleUpdateItems}
      />
      <State />
    </div>
  );
}
