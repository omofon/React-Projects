function ResultCard({ category, score, icon }) {
  <div className="w-full rounded-md px-4 py-6 items-center justify-between">
    <div>
      <img src={icon} alt={`${category} icon`} />
      <h4>{category}</h4>
    </div>
    <div>
      <span>{score}</span>
      <p>/ 100</p>
    </div>
  </div>;
}

export default ResultCard;
