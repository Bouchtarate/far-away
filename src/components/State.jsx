export const State = ({ itemsLength, packedLists }) => {
  if (!itemsLength)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  var calcTruePacking = 0;
  for (let i = 0; i < itemsLength; i++) {
    if (packedLists[i].packed === true) {
      calcTruePacking++;
    }
  }
  const getPercentage = (itemsLength, calcTruePacking) => {
    return Math.round((calcTruePacking * 100) / itemsLength);
  };
  return (
    <footer className="stats">
      <em>
        {itemsLength === calcTruePacking
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${itemsLength} items on your list, and you already packed ${calcTruePacking} (${getPercentage(
              itemsLength,
              calcTruePacking
            )}%)
          `}
      </em>
    </footer>
  );
};
