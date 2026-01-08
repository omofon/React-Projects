import resultsData from "./data.json";
import ResultCard from "./components/ResultCard";
import Button from "./components/common/Button";

export default function App() {
  return (
    <article className="max-w-full min-h-dvh bg-pale-blue flex flex-col gap-2">
      <section className="bg-linear-to-b from-light-slate-blue to-light-royal-blue text-center flex flex-col justify-center items-center gap-5 px-15 py-10 w-full rounded-b-4xl">
        <p>Your Result</p>
        <div className="w-30 h-30 flex flex-col gap-1 items-center justify-center rounded-full bg-linear-to-b from-violet-blue to-persian-blue ">
          <h1 className="font-extrabold text-5xl">
            {(resultsData.reduce((sum, item) => sum + item.score, 0) /
              resultsData.length) |
              0}
          </h1>
          <p className="text-sm">of 100</p>
        </div>
        <h2 className="text-xl font-medium">Great</h2>
        <p className="leading-tight">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section className="flex flex-col gap-6 px-10 py-10">
        <h3 className="text-dark-grey-blue text-xl font-bold">Summary</h3>
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
