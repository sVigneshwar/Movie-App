import React from 'react'
import Modal from 'react-modal'
import '../styles/moviebox-modal.css'

// Genre mapping
const GENRES = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
}

export default function MovieDetailsModal({ isOpen, onClose, movie, onFavoriteClick, isFavorite }) {
  
  // Helper functions
  const getGenreNames = () => {
    return movie.genre_ids
      ?.map(id => GENRES[id])
      .filter(Boolean)
      .join(', ') || 'N/A'
  }

  const getPosterUrl = () => {
    return movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://picsum.photos/seed/picsum/500/750'
  }

  const getBackdropUrl = () => {
    return movie.backdrop_path
      ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
      : getPosterUrl()
  }

  const getRating = () => {
    return movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'
  }

  const getYear = () => {
    return movie.release_date ? movie.release_date.split('-')[0] : 'N/A'
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Movie Details"
      className="movie-details-modal"
      overlayClassName="movie-modal-overlay"
      ariaHideApp={false}
    >
      <button className="modal-close-btn" onClick={onClose}>✕</button>

      {/* Backdrop */}
      <div className="modal-backdrop">
        <img src={getBackdropUrl()} alt={movie.title} />
        <div className="backdrop-gradient"></div>
      </div>

      {/* Modal Content */}
      <div className="modal-details-container">
        {/* Header with Poster */}
        <div className="modal-header">
          <div className="modal-poster">
            <img src={getPosterUrl()} alt={movie.title} />
          </div>
          
          <div className="modal-info">
            <h1 className="modal-title">{movie.title}</h1>
            
            {movie.original_title !== movie.title && (
              <p className="original-title">{movie.original_title}</p>
            )}

            <div className="movie-meta-info">
              <span className="rating">
                <span className="star">★</span> {getRating()}/10
              </span>
              <span className="separator">•</span>
              <span className="year">{getYear()}</span>
              <span className="separator">•</span>
              <span className="votes">({movie.vote_count?.toLocaleString() || 0})</span>
            </div>

            <div className="genres">
              {getGenreNames().split(', ').map(genre => (
                <span key={genre} className="genre-badge">{genre}</span>
              ))}
            </div>

            <p className="overview">{movie.overview}</p>

            <div className="modal-buttons">
              <button className="btn-play">▶ Watch Now</button>
              <button 
                className={`btn-favorite ${isFavorite ? 'active' : ''}`} 
                onClick={onFavoriteClick}
              >
                ♡ {isFavorite ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="modal-details-grid">
          <div className="detail-block">
            <span className="detail-label">Language</span>
            <span className="detail-value">{movie.original_language?.toUpperCase() || 'N/A'}</span>
          </div>
          <div className="detail-block">
            <span className="detail-label">Popularity</span>
            <span className="detail-value">{Math.round(movie.popularity) || 'N/A'}</span>
          </div>
          <div className="detail-block">
            <span className="detail-label">Status</span>
            <span className="detail-value">{movie.adult ? '18+' : 'PG'}</span>
          </div>
          <div className="detail-block">
            <span className="detail-label">Release Date</span>
            <span className="detail-value">{movie.release_date || 'N/A'}</span>
          </div>
        </div>
      </div>
    </Modal>
  )
}
