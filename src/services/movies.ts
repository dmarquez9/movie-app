import request from "@/utils/request";

import type { MovieApiResponse } from "@/types/movies";

enum MovieListType {
  NowPlaying = "now_playing",
  Popular = "popular",
}

export default async function getMovies(
  type: MovieListType = MovieListType.NowPlaying
) {
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
