import resultsData from "./data.json";
import ResultsAverage from "./components/ResultsAverage";
import ResultCard from "./components/ResultCard";
import Button from "./components/common/Button";

export default function App() {
  return (
    <article>
      <section>
        <p>Your Result</p>
        <div>
          {resultsData.reduce((sum, item) => sum + item.score, 0) /
            resultsData.length}
          <p>of 100</p>
        </div>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section>
        <h3>Summary</h3>
        {resultsData.map((item) => {
          console.log("Testing...", item.category);
          return (
            <ResultCard
              key={item.id}
              category={item.category}
              score={item.score}
              icon={item.icon}
            />
          );
        })}
        <Button text={"Continue"} />
      </section>
    </article>
  );
}
