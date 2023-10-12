import { Item } from "./Item";
export const List = ({ items, onDeleteItems, onUpdateItems, onClearItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
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
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearItems()}>Clear list</button>
      </div>
    </div>
  );
};
