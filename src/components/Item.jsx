import { useState } from "react";

export const Item = ({
  id,
  packed,
  quantity,
  description,
  onDeleteItems,
  onUpdateItems,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => onUpdateItems(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItems(id)}>❌</button>
    </li>
  );
};
