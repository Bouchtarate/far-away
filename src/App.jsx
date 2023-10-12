import { AddForm } from "./components/AddForm";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { State } from "./components/State";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  return (
    <div className="app">
      <Header />
      <AddForm onAddItems={handleAddItems} />
      <List items={items} />
      <State />
    </div>
  );
}
