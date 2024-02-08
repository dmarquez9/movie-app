export type Movie = {
  id: string
  poster: string | null
  overview: string
  releaseDate: string
  title: string
  backdropPath: string
  rating: number
  totalRatings: number
}

export type MovieResults = {
  id: string
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export type MovieApiResponse = {
  page: number
  results: MovieResults[]
  dates?: {
    maximum: string
    minimum: string
  }
  total_pages: number
  total_results: number
}

export type MovieApiErrorResponse = {
  status_code: number
  status_message: string
}
