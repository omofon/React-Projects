import calculateRuntime from "../../utils/movieRuntime";

function DetailedCard({ entry }) {
  return (
    <div className="section">
      <h2 className="section-title">Detailed Card</h2>

      <div
        className="
          grid grid-cols-[400px_1fr] gap-8 p-8
          bg-(--bg-secondary)
          border border-(--border-subtle)
          rounded-lg overflow-hidden
          transition-all duration-300
          hover:border-(--border-visible)
          hover:shadow-[0_12px_40px_var(--shadow-heavy)]
          max-lg:grid-cols-[300px_1fr] max-lg:gap-6 max-lg:p-6
          max-md:grid-cols-1 max-md:p-5
        "
      >
        {/* Poster */}
        <div className="relative max-md:max-w-75 max-md:mx-auto">
          <img
            src={entry.poster}
            alt={`Movie poster for ${entry.title}`}
            className="
              w-full aspect-2/3
              rounded-md object-cover
              shadow-[0_4px_16px_var(--shadow-medium)]
            "
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          {/* Header */}
          <div className="mb-6">
            <h2
              className="
                text-[2.5rem] font-bold mb-4
                text-(--text-primary)
                max-lg:text-[2rem]
                max-md:text-[1.8rem]
              "
            >
              {entry.title}
            </h2>

            <div className="flex items-center gap-4 mb-4 text-base">
              <span className="text-[1.2rem] font-semibold text-(--accent-green)">
                {`${entry.rating * 10}% Match`}
              </span>
              <span>{entry.year}</span>
              <span>{calculateRuntime(entry.runtime)}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base leading-[1.7] text-(--text-secondary) mb-6">
            {entry.description}
          </p>

          {/* Info Grid */}
          <div
            className="
              grid grid-cols-2 gap-4 mb-6 p-5
              bg-(--bg-tertiary)
              rounded-md
              max-md:grid-cols-1
            "
          >
            <div className="flex flex-col gap-1">
              <span className="text-[0.85rem] uppercase tracking-wide text-(--text-muted)">
                Director
              </span>
              <span className="text-base font-medium text-(--text-primary)">
                {entry.director}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[0.85rem] uppercase tracking-wide text-(--text-muted)">
                Genre
              </span>
              <span className="text-base font-medium text-(--text-primary)">
                {entry.genre}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[0.85rem] uppercase tracking-wide text-(--text-muted)">
                Watched
              </span>
              <span className="text-base font-medium text-(--text-primary)">
                {entry.watched ? "Yes" : "No"}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap max-md:flex-col">
            <button
              className="
                flex items-center justify-center gap-2
                px-9 py-3.5
                text-[1.1rem] font-semibold uppercase tracking-wide
                rounded
                bg-(--netflix-red)
                text-(--text-primary)
                shadow-[0_4px_12px_rgba(229,9,20,0.4)]
                transition-all duration-200
                hover:bg-(--netflix-red-dark)
                hover:-translate-y-0.5
                hover:shadow-[0_6px_16px_rgba(229,9,20,0.6)]
              "
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Now
            </button>

            <button
              className="
                flex items-center justify-center gap-2
                px-9 py-3.5
                text-[1.1rem] font-semibold uppercase tracking-wide
                rounded
                bg-(--btn-white)
                text-(--bg-primary)
                transition-all duration-200
                hover:bg-(--btn-white-hover)
              "
            >
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedCard;
