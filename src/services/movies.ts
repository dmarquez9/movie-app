import request from "@/utils/request";

import type { MovieApiResponse, Movie } from "@/types/movies";
import { MovieDetailResponse } from "@/types/movie-detail";
import { mapMovieDetailResponse } from "@/transform/movies";

enum MovieListType {
  NowPlaying = "now_playing",
  Popular = "popular",
}

export async function getMovies(
  type: MovieListType = MovieListType.NowPlaying
): Promise<Movie[]> {
  try {
    const response = await request<MovieApiResponse>(`movie/${type}`, {
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.results) {
      throw Error();
    }

    const results =
      type === MovieListType.NowPlaying
        ? response.results.slice(0, 5)
        : response.results;

    return results;
  } catch (error) {
    throw new Error(`Failed to fetch data on getMovies ${type}`);
  }
}

export async function getMovieDetails(movieId: string): Promise<Movie> {
  try {
    const response = await request<MovieDetailResponse>(`movie/${movieId}`, {
      next: { revalidate: 60 * 60 * 24 },
    });
    return mapMovieDetailResponse(response);
  } catch (error) {
    throw new Error(`Failed to fetch data on getMovieDetails ${movieId}`);
  }
}
