# Movie App - Netflix Style UI

A modern movie browsing application built with React and Vite, featuring a Netflix-inspired dark theme with smooth animations and responsive design.

## 🎬 Features

- **Netflix-Style UI** - Dark theme with frosted glass navbar, smooth transitions, and modern card designs
- **Movie Grid** - Responsive grid layout displaying movies with hover effects and shadow animations
- **Search Functionality** - Search for movies with real-time filtering
- **Pagination** - Browse through pages of movies with active state highlighting
- **Loading Animation** - Custom CSS-based spinning loader (no GIFs)
- **Favorites** - Heart icon for marking favorite movies (like/unlike state)
- **Smooth Scrolling** - Auto scroll to top when changing pages
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool & dev server
- **React Router DOM 7** - Client-side routing
- **CSS3** - Custom Netflix-style styling with animations
- **JavaScript ES6+**

## 📁 Project Structure

```
movie-app/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Main home page with search, grid, pagination
│   │   └── Favorites.jsx     # Favorites page
│   ├── component/
│   │   └── Moviebox.jsx      # Individual movie card component
│   ├── services/
│   │   └── movieData.js      # API calls for fetching movies
│   ├── styles/
│   │   └── app.css           # Netflix-style global styles
│   ├── App.jsx               # Main app wrapper with navbar
│   └── main.jsx              # React entry point
├── public/                   # Static assets
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
- Fetches movies based on page number or search query
- Displays loading spinner, error messages, or movie grid
- Auto-scrolls to top on page change with smooth animation

### `Moviebox.jsx`
- Renders individual movie card with poster image
- Displays title and release year
- Heart icon for marking favorites
- Hover overlay with gradient effect

### `App.jsx`
- Root component with navbar
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

## 🔗 API Integration

The app uses `movieData.js` service module for:
- `getMovieData(pageNumber)` - Fetch movies by page
- `searchMovieData(query)` - Search for movies

### Test Data
During development, a test array of 10 random movies is used with placeholder poster images from TMDB.

## 🚧 Future Enhancements

- [ ] Movie detail page with full information
- [ ] User authentication for saved favorites
- [ ] Genre filtering
- [ ] Sort options (rating, release date, etc.)
- [ ] Movie reviews and ratings
- [ ] Watchlist functionality
- [ ] Dark/Light theme toggle

## 📄 License

This project is part of a learning portfolio.

## 👤 Author

Created as a Netflix-inspired movie browsing application using React and modern CSS techniques.
