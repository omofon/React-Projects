import calculateRuntime from "../../utils/movieRuntime";

function ListCard({ entry }) {
  return (
    <article
      className="
        relative cursor-pointer overflow-hidden
        rounded-md border border-transparent
        bg-(--bg-secondary)
        transition-all duration-300 ease-in-out
        hover:scale-105
        hover:bg-(--bg-tertiary)
        hover:border-(--border-visible)
        hover:shadow-[0_8px_24px_var(--shadow-heavy)]
        hover:z-10
      "
    >
      {/* Image */}
      <section className="relative w-full aspect-video overflow-hidden bg-(--bg-tertiary)">
        <img
          src={entry.poster}
          alt={`Movie poster for ${entry.title}`}
          className="
            w-full h-full object-cover
            transition-transform duration-300 ease-in-out
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute top-2 right-2
            bg-(--netflix-red)
            text-(--text-primary)
            px-2 py-1
            rounded
            text-[0.7rem] font-bold
            uppercase tracking-wide
          "
        >
          {entry.watched ? "Watched" : "Not watched"}
        </div>
      </section>

      {/* Content */}
      <section className="p-4">
        <h3
          className="
            text-[1.1rem] font-semibold mb-2
            text-(--text-primary)
            truncate
          "
        >
          {entry.title}
        </h3>

        <div className="flex items-center gap-3 mb-3 text-[0.85rem]">
          <span className="font-bold text-(--accent-green)">
            {`${entry.rating * 10}% Match`}
          </span>
          <span className="text-(--text-secondary)">{entry.year}</span>
          <span className="text-(--text-secondary)">
            {calculateRuntime(entry.runtime)}
          </span>
        </div>

        <p
          className="
            text-[0.9rem] leading-snug
            text-(--text-secondary)
            mb-3
            line-clamp-2
          "
        >
          {entry.description}
        </p>

        <div className="flex gap-2 flex-wrap">
          <span
            className="
              px-2.5 py-1
              text-[0.75rem]
              rounded-full
              bg-(--bg-tertiary)
              text-(--text-secondary)
              border border-(--border-subtle)
              transition-colors
              hover:bg-(--bg-primary)
              hover:border-(--border-visible)
            "
          >
            {entry.genre}
          </span>
        </div>
      </section>
    </article>
  );
}

export default ListCard;
