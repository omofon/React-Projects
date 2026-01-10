import resultsData from "../public/src/data.json";
import ResultCard from "./components/ResultCard";
import Button from "./components/common/Button";

export default function App() {
  return (
    <main className="md:flex md:items-center md:justify-center md:min-h-dvh bg-pale-blue">
      <article className="max-w-full md:max-w-lg lg:max-w-3xl min-h-dvh md:min-h-0 bg-white flex flex-col lg:flex-row gap-2 lg:gap-0 md:rounded-3xl lg:rounded-4xl md:shadow-xl overflow-hidden">
        <section className="lg:flex-1 bg-linear-to-b from-light-slate-blue to-light-royal-blue text-center flex flex-col justify-center items-center lg:justify-between gap-6 px-8 py-10 lg:px-14 lg:py-12 w-full rounded-b-3xl lg:rounded-4xl">
          <p className="lg:text-2xl lg:font-bold">Your Result</p>
          <div className="w-30 h-30 md:w-36 md:h-36 lg:w-48 lg:h-48 flex flex-col gap-1 items-center justify-center rounded-full bg-linear-to-b from-violet-blue to-persian-blue ">
            <h1 className="font-extrabold text-5xl lg:text-7xl">
              {(resultsData.reduce((sum, item) => sum + item.score, 0) /
                resultsData.length) |
                0}
            </h1>
            <p className="text-sm md:text-base lg:text-lg">of 100</p>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <h2 className="text-xl lg:text-3xl font-bold">Great</h2>
            <p className="leading-tight text-[16px] lg:text-lg max-w-65">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section className="lg:flex-1 flex flex-col gap-6 p-8 lg:p-10">
          <h3 className="text-dark-grey-blue text-xl lg:text-2xl font-bold">
            Summary
          </h3>
          <div className="flex flex-col gap-4">
            {resultsData.map((item) => {
              return (
                <ResultCard
                  key={item.id}
                  category={item.category}
                  score={item.score}
                  icon={item.icon}
                />
              );
            })}
          </div>
          <Button text={"Continue"} />
        </section>
      </article>
    </main>
  );
}
