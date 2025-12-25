import calculateRuntime from "../../utils/movieRuntime";

function HeroCard({ entry }) {
  return (
    <article className="hero-card">
      <img
        src={entry.poster}
        alt={`Movie poster for ${entry.title}`}
        class="hero-image"
      />
      <div class="hero-gradient"></div>

      <section class="hero-content">
        <div className="hero-title">
          <h1 class="hero-logo">{entry.title}</h1>
          <span>{entry.genre}</span>
        </div>

        <div class="hero-metadata">
          <span class="rating">{`${entry.rating * 10}% Match`}</span>
          <span class="year">{entry.year}</span>
          <span class="duration">{calculateRuntime(entry.runtime)}</span>
          <span className="watched">{entry.watched}</span>
        </div>

        <div className="hero-director">{entry.director}</div>
        <p class="hero-description">{entry.description}</p>

        <div class="hero-buttons">
          <button class="btn btn-play">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button class="btn btn-info">
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            More Info
          </button>
        </div>
      </section>
    </article>
  );
}

export default HeroCard;
