import { MovieDetailResponse } from '@/types/movie-detail'
import { MovieResults } from '@/types/movies'
import { Movie } from '@/types/movies'

export function mapMovieDetailResponse(response: MovieDetailResponse): Movie {
  return {
    id: String(response.id),
    poster: response.poster_path,
    overview: response.overview,
    releaseDate: response.release_date,
    title: response.original_title,
    backdropPath: response.backdrop_path,
    rating: response.vote_average,
    totalRatings: response.vote_count,
  }
}

export function mapMovieResults(results: MovieResults): Movie {
  return {
    id: String(results.id),
    poster: results.poster_path,
    overview: results.overview,
    releaseDate: results.release_date,
    title: results.original_title,
    backdropPath: results.backdrop_path,
    rating: results.vote_average,
    totalRatings: results.vote_count,
  }
}
