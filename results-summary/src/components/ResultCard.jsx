import categoryStyles from "../utils/categoryStyles";

function ResultCard({ category, score, icon }) {
  const theme = categoryStyles[category];
  return (
    <div
      className={`w-full rounded-lg px-4 py-4 flex items-center justify-between ${theme}`}
    >
      <div className="flex gap-2 items-center">
        <img src={icon} alt={`${category} icon`} />
        <h4 className="font-medium">{category}</h4>
      </div>
      <div>
        <span className="text-dark-grey-blue mr-2">{score}</span>
        <p className="inline-flex">/ 100</p>
      </div>
    </div>
  );
}

export default ResultCard;
