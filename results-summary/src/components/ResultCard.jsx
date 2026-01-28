import categoryStyles from "../utils/categoryStyles";

function ResultCard({ category, score, icon }) {
  const theme = categoryStyles[category];
  return (
    <div
      className={`w-full rounded-lg p-4 flex items-center justify-between lg:min-w-2xs ${theme}`}
    >
      <div className="flex gap-3 items-center">
        <img src={icon} alt={`${category} icon`} className="w-5 h-5" />
        <h4 className="font-bold text-lg">{category}</h4>
      </div>
      <div className="flex items-center">
        <span className="text-dark-grey-blue mr-2 font-bold">{score}</span>
        <span className="text-light-lavendar ml-2">/ 100</span>
      </div>
    </div>
  );
}

export default ResultCard;
