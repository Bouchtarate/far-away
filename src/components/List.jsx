import { useState } from "react";
import { Item } from "./Item";
export const List = ({ items, onDeleteItems, onUpdateItems, onClearItems }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            description={item.description}
            packed={item.packed}
            onDeleteItems={onDeleteItems}
            onUpdateItems={onUpdateItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(ev) => setSortBy(ev.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearItems()}>Clear list</button>
      </div>
    </div>
  );
};
