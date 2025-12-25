import { GiFrozenBlock } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header>
      <div>
        <GiFrozenBlock />
        <h1>BlockBuster</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Trending
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Movies
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              TV Series
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav-buttons">
        <button>
          <CiSearch />
        </button>
        <button>
          <RxHamburgerMenu />
        </button>
      </div>
    </header>
  );
}
