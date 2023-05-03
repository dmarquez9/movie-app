import { MovieDetailResponse } from "@/types/movie-detail";
import { Movie } from "@/types/movies";

export function mapMovieDetailResponse(response: MovieDetailResponse): Movie {
  return {
    id: String(response.id),
    poster_path: response.poster_path,
    adult: response.adult,
    overview: response.overview,
    release_date: response.release_date,
    genre_ids: response.genres,
    original_title: response.original_title,
    original_language: response.original_language,
    title: response.title,
    backdrop_path: response.backdrop_path,
    popularity: response.popularity,
    vote_count: response.vote_count,
    video: response.video,
    vote_average: response.vote_average,
  };
}
