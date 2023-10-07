import { Item } from "./Item";
export const List = () => {
  return (
    <div className="list">
      <ul>
        <Item />
      </ul>
      <div className="actions">
        <select value="">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
};
