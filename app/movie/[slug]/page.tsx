import { getMovies, getMovieDetails } from "@/services/movies";

export async function generateStaticParams() {
  const movies = await getMovies();

  return movies.map((movie) => ({
    slug: String(movie.id),
  }));
}

type MoviePageProps = {
  params: {
    slug: string;
  };
};

export default async function MoviePage({ params }: MoviePageProps) {
  const movie = await getMovieDetails(params.slug);
  return <div>{movie.title}</div>;
}
