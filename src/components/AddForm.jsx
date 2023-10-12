import { useState } from "react";

export const AddForm = ({ onAddItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const handlerSubmit = (ev) => {
    ev.preventDefault();
    if (description !== "") {
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };
      setDescription("");
      setQuantity(1);
      onAddItems(newItem);
    }
  };
  return (
    <form className="add-form" onSubmit={handlerSubmit}>
      <h3>What do you need for your 🥳 trip ?</h3>
      <select value={quantity} onChange={(ev) => setQuantity(ev.target.value)}>
        {numbers.map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <button>ADD</button>
    </form>
  );
};
