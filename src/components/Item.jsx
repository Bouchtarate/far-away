export const Item = ({ id, packed, quantity, description }) => {
  return (
    <li>
      <input type="checkbox" />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
};
