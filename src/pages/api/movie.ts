import type { NextApiRequest, NextApiResponse } from "next";
import request from "@/utils/request";

import type {
  Movie,
  MovieApiResponse,
  MovieApiErrorResponse,
} from "@/types/movies";

enum MovieListType {
  NowPlaying = "now_playing",
  Popular = "popular",
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[] | MovieApiErrorResponse>
) {
  try {
    const movieListType =
      (req.query.type as MovieListType) || MovieListType.NowPlaying;
    const response = await request<MovieApiResponse>(`movie/${movieListType}`);

    if (!response.results) {
      throw Error();
    }

    const results =
      movieListType === MovieListType.NowPlaying
        ? response.results.slice(0, 5)
        : response.results;
    return res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      status_message: "Something went wrong",
    });
  }
}
