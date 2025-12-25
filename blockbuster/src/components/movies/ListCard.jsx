import calculateRuntime from "../../utils/movieRuntime";

function ListCard({ entry }) {
  return (
    <article className="list-card">
      <section className="list-card-image-wrapper">
        <img
          src={entry.poster}
          alt={`Movie poster for ${entry.title}`}
          className="list-card-image"
        />
        <div className="list-card-badge">
          {entry.watched ? "Watched" : "Not watched"}
        </div>
      </section>

      <section className="list-card-content">
        <h3 className="list-card-title">{entry.title}</h3>

        <div className="list-card-meta">
          <span className="meta-match">{`${entry.rating * 10}% Match`}</span>
          <span className="meta-year">{entry.year}</span>
          <span className="meta-director">{entry.director}</span>
          <span className="meta-duration">
            {calculateRuntime(entry.runtime)}
          </span>
        </div>

        <p className="list-card-description">{entry.description}</p>

        <div className="list-card-genres">
          <span className="genre-tag">{entry.genre}</span>
        </div>
      </section>
    </article>
  );
}

export default ListCard;
