function ResultCard({ category, score, icon }) {
  return (
    <div className="w-full rounded-md px-4 py-6 flex items-center justify-between">
      <div>
        <img src={icon} alt={`${category} icon`} />
        <h4>{category}</h4>
      </div>
      <div>
        <span className="text-dark-grey-blue mr-2">{score}</span>
        <p className="inline-flex">/ 100</p>
      </div>
    </div>
  );
}

export default ResultCard;
