import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import HeroCard from "./components/movies/HeroCard";
import ListCard from "./components/movies/ListCard";
import { movies } from "./data/movies";

export default function App() {
  return (
    <>
      <Header />
      <main className="mt-10">
        <div
          className="
    grid
    grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
    gap-4
    mb-10
  "
        >
          {movies
            .filter((movie) => movie.watched)
            .map((movie) => (
              <ListCard key={movie.id} entry={movie} />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
