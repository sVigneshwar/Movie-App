# Movie App - Netflix Style UI

A modern movie browsing application built with React and Vite, featuring a Netflix-inspired dark theme with smooth animations, intelligent caching, and detailed movie modals.

## 🎬 Features

- **Netflix-Style UI** - Dark theme with frosted glass navbar, smooth transitions, and modern card designs
- **Movie Grid** - Responsive grid layout displaying movies with hover effects and shadow animations
- **Search Functionality** - Search for movies with real-time filtering
- **Pagination** - Browse through pages of movies with active state highlighting
- **API Caching** - Smart cache system that persists across navigation for faster data retrieval
- **Movie Details Modal** - Click any movie to view detailed information in a beautiful modal
- **Loading Animation** - Custom CSS-based spinning loader (no GIFs)
- **Favorites** - Heart icon for marking favorite movies with persistent storage
- **Smooth Scrolling** - Auto scroll to top when changing pages
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool & dev server
- **React Router DOM 7** - Client-side routing
- **React Modal** - Beautiful modal dialogs
- **Context API** - State management (Movies, Cache)
- **CSS3** - Custom Netflix-style styling with animations
- **TMDB API** - Movie data source

## 📁 Project Structure

```
movie-app/
├── src/
│   ├── pages/
│   │   ├── Home.jsx                # Main home page with search, grid, pagination
│   │   └── Favorites.jsx           # Favorites page
│   ├── component/
│   │   ├── Moviebox.jsx            # Individual movie card component
│   │   ├── MovieDetailsModal.jsx   # Movie details modal component
│   │   └── Navbar.jsx              # Navigation bar
│   ├── context/
│   │   ├── movieContext.jsx        # Movie favorites context
│   │   └── CacheContext.jsx        # API cache context
│   ├── services/
│   │   └── movieData.js            # API calls for fetching movies
│   ├── styles/
│   │   ├── app.css                 # Netflix-style global styles
│   │   └── moviebox-modal.css      # Movie details modal styles
│   ├── App.jsx                     # Main app wrapper with navbar
│   └── main.jsx                    # React entry point
├── public/                         # Static assets
├── package.json
├── vite.config.js
└── index.html
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

```bash
cd f:\Github\Movie-App\movie-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 🎨 Key CSS Features

### Navbar
- Frosted glass effect with backdrop blur
- Sticky positioning
- Netflix red accent color (`#e50914`)

### Movie Cards
- Smooth hover lift animation (`translateY(-6px)`)
- Shadow enhancement on hover
- Responsive grid (`240px` min width on desktop, `140px` on tablet)

### Loading Spinner
- Pure CSS animation (no GIFs)
- Netflix red rotating border
- Glow effect with custom shadow

### Pagination
- Hover lift effect with smooth transitions
- Active state in Netflix red
- Centered layout with flexbox

### Search Box
- Semi-transparent background with backdrop blur
- Inline search button
- Responsive width adjustment

## 🔍 Component Details

### `Home.jsx`
- Manages state for movies, loading, errors, and pagination
- Integrates **CacheContext** for intelligent API caching
- Fetches movies based on page number or search query
- Caches results by page and search query to avoid duplicate API calls
- Displays loading spinner, error messages, or movie grid
- Auto-scrolls to top on page change with smooth animation
- Handles cache persistence when navigating between pages

### `Moviebox.jsx`
- Renders individual movie card with poster image
- Displays title, release year, and hover states
- Heart icon for marking favorites (with persistent state)
- Integrated **MovieDetailsModal** for showing detailed information
- Click card to open detailed modal with full movie information

### `MovieDetailsModal.jsx`
- Beautiful modal dialog displaying comprehensive movie information:
  - **Header**: Movie title, original title (if different), rating, year, and vote count
  - **Poster & Backdrop**: High-quality images with gradient overlays
  - **Genres**: Display all genres with interactive badges
  - **Overview**: Full movie synopsis
  - **Action Buttons**: Watch Now & Save/Unsave favorites
  - **Details Grid**: Language, popularity, content rating, release date
- Netflix-inspired dark theme with smooth animations
- Fully responsive design for all screen sizes
- Genre mapping for 19+ movie categories

### `CacheContext.jsx`
- Global Context API provider for caching API responses
- Stores cached data in component memory (persists during session)
- Provides hooks: `getFromCache()`, `setInCache()`, `clearCache()`
- Prevents redundant API calls for same page/search query
- Integrated throughout the app via custom `useApiCache()` hook

### `MovieContext.jsx`
- Manages favorite movies state
- Provides: `addToFav()`, `removeFromFav()`, `isFav()`
- Allows toggling favorites from both cards and modals

### `App.jsx`
- Root component with **CacheProvider** wrapper
- Navigation bar with routes
- Routes to Home and Favorites pages

## 🎯 Color Scheme

| Color | Value | Usage |
|-------|-------|-------|
| Background | `#0b0b0b` | Main dark background |
| Panel | `#141414` | Card/container background |
| Muted | `#8b8b8b` | Secondary text color |
| Accent | `#e50914` | Netflix red (highlights, buttons, active states) |

## 📱 Responsive Breakpoints

- **Desktop**: Grid with `240px` minimum column width
- **Tablet** (≤900px): Grid with `140px` minimum column width
- **Mobile** (≤520px): Optimized for narrow screens

## ✨ Interactive Features

- **Search**: Type and submit to filter movies (hides pagination)
- **Clear Search**: Click "X" button to return to default view with pagination
- **Pagination**: Click page numbers (1-4) to load different pages
- **Favorites**: Click heart icon to like/unlike movies
- **Smooth Scrolling**: Auto-scroll to top when changing pages

## � Caching System

The app implements a smart **Context API-based caching system** that improves performance and user experience:

### How It Works
1. **Pagination Caching** - Results for each page (1-4) are cached after first fetch
2. **Search Caching** - Search results are cached by query string
3. **Session Persistence** - Cache persists while browsing (cleared on app reload)
4. **Zero Duplicate Requests** - Same page/query returns cached data instantly

### Benefits
- ⚡ **Faster Navigation** - Navigate between pages without re-fetching
- 📊 **Reduced API Calls** - Fewer requests to TMDB API
- 🔄 **Seamless UX** - Go back to favorites and return to cached page instantly
- 📱 **Better Mobile Performance** - Reduces data usage on limited connections

### Usage in Components
```jsx
const { getFromCache, setInCache, deleteCache } = useApiCache()

// Check cache first
const cachedData = getFromCache("popular", { page: pageNumber })
if (cachedData) {
  setMovies(cachedData)
  return
}

// Fetch and cache
const res = await getMovieData(pageNumber)
setInCache("popular", { page: pageNumber }, res)
```

## 🎬 Movie Details Modal

Click any movie card to open an elegant modal displaying:
- **Movie Poster & Backdrop** - High-quality images
- **Title & Metadata** - Original title, rating (★/10), year, vote count
- **Genres** - Interactive genre badges with 19+ categories
- **Synopsis** - Full movie overview/description
- **Action Buttons**:
  - **Watch Now** - Play button (placeholder for future functionality)
  - **Save** - Add/remove from favorites with live state
- **Additional Info** - Language, popularity score, content rating (18+/PG), release date
- **Netflix-Style Design** - Dark theme with red accents, smooth animations, and gradient overlays
- **Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)

## 🚧 Future Enhancements

- [ ] Cache TTL (Time-to-Live) - Auto-expire cached data after X minutes
- [ ] LocalStorage/SessionStorage - Persist cache even after page refresh
- [ ] Movie trailer integration - Play trailers in modal
- [ ] User authentication - Save favorites to database
- [ ] Genre filtering - Filter movies by selected genres
- [ ] Advanced sort options - Sort by rating, release date, popularity
- [ ] Movie reviews and user ratings - Community feedback section
- [ ] Enhanced watchlist - Create custom watchlists
- [ ] Dark/Light theme toggle - User preference persistence
- [ ] Movie recommendations - Similar movies suggestions
- [ ] Cast and crew information - Display actors and director details

## 📄 License

This project is part of a learning portfolio.

## 👤 Author

Created as a Netflix-inspired movie browsing application using React and modern CSS techniques.
