import { GiFrozenBlock } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header
      className="
        w-full
        bg-(--bg-primary)
        text-(--text-primary)
        shadow-[0_2px_4px_var(--shadow-light)]
        sticky top-0 z-50
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          flex items-center justify-between
          px-4 py-3
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <GiFrozenBlock className="text-2xl text-(--netflix-red)" />
          <h1 className="text-xl font-bold tracking-wide">BlockBuster</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--accent-blue) transition-colors"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--accent-blue) transition-colors"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--accent-blue) transition-colors"
              >
                TV Series
              </a>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            className="
              p-2 rounded-full
              hover:bg-(--bg-tertiary)
              transition-colors
            "
          >
            <CiSearch className="text-lg text-(--text-primary)" />
          </button>
          <button
            className="
              p-2 rounded-full
              hover:bg-(--bg-tertiary)
              transition-colors
              md:hidden
            "
          >
            <RxHamburgerMenu className="text-lg text-(--text-primary)" />
          </button>
        </div>
      </div>
    </header>
  );
}
