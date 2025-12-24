export const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    runtime: 142,
    director: "Frank Darabont",
    poster: "https://via.placeholder.com/200x300/4A5568/FFFFFF?text=Shawshank",
    watched: true
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    runtime: 152,
    director: "Christopher Nolan",
    poster: "https://via.placeholder.com/200x300/1F2937/FFFFFF?text=Dark+Knight",
    watched: false
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    runtime: 154,
    director: "Quentin Tarantino",
    poster: "https://via.placeholder.com/200x300/991B1B/FFFFFF?text=Pulp+Fiction",
    watched: true
  },
  {
    id: 4,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    runtime: 142,
    director: "Robert Zemeckis",
    poster: "https://via.placeholder.com/200x300/065F46/FFFFFF?text=Forrest+Gump",
    watched: false
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    runtime: 148,
    director: "Christopher Nolan",
    poster: "https://via.placeholder.com/200x300/7C2D12/FFFFFF?text=Inception",
    watched: true
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    runtime: 136,
    director: "Wachowski Brothers",
    poster: "https://via.placeholder.com/200x300/14532D/FFFFFF?text=Matrix",
    watched: false
  },
  {
    id: 7,
    title: "Goodfellas",
    year: 1990,
    genre: "Crime",
    rating: 8.7,
    runtime: 145,
    director: "Martin Scorsese",
    poster: "https://via.placeholder.com/200x300/7C2D12/FFFFFF?text=Goodfellas",
    watched: true
  },
  {
    id: 8,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
    runtime: 169,
    director: "Christopher Nolan",
    poster: "https://via.placeholder.com/200x300/1E3A8A/FFFFFF?text=Interstellar",
    watched: false
  },
  {
    id: 9,
    title: "The Departed",
    year: 2006,
    genre: "Crime",
    rating: 8.5,
    runtime: 151,
    director: "Martin Scorsese",
    poster: "https://via.placeholder.com/200x300/92400E/FFFFFF?text=Departed",
    watched: true
  },
  {
    id: 10,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    runtime: 155,
    director: "Ridley Scott",
    poster: "https://via.placeholder.com/200x300/78350F/FFFFFF?text=Gladiator",
    watched: false
  }
];
```

## What You'll Build (In Order)

### 1. Display all movies (30 min)
- Grid layout
- Show poster, title, year, rating
- Map through the data

### 2. Filter by genre (45 min)
- Dropdown or buttons for genres
- Filter state
- Display filtered results

### 3. Filter by watched status (30 min)
- "All", "Watched", "Not Watched" buttons
- Learn to combine filters

### 4. Sort options (45 min)
- Sort by: Rating (high to low), Year (newest first), Title (A-Z), Runtime
- Dropdown selector
- Array.sort()

### 5. Search by title (30 min)
- Text input
- Filter as you type
- Case-insensitive search

### 6. Show stats (30 min)
- Total movies
- Average rating
- Total watched
- Use `.reduce()` and `.filter()`

### 7. Toggle watched status (45 min)
- Click button to mark watched/unwatched
- Update state
- Learn state immutability

## Component Structure
// ```
// App
// ├── Stats (total movies, avg rating, watched count)
// ├── FilterBar
// │   ├── GenreFilter (dropdown)
// │   ├── WatchedFilter (buttons)
// │   ├── SortSelect (dropdown)
// │   └── SearchBar (input)
// └── MovieGrid
//     └── MovieCard (individual movie)

// ```