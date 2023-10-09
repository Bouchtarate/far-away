export const State = ({ percentage }) => {
  if (!percentage)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have X items on your list, and you already packed X (X}%)
          `}
      </em>
    </footer>
  );
};
