function HeroCard({ entry }) {
    return (
        <article className="relative">
            <img src={entry.poster} alt={`${entry.title} (${entry.year}) - ${entry.genre} movie poster`} />
        </article>
    )
}