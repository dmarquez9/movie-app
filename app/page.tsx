import MoviesCarousel from "@/components/MoviesCarousel";
import { getMovies } from "@/services/movies";

export default async function Home() {
  const nowPlayingMovies = await getMovies();
  return <MoviesCarousel items={nowPlayingMovies} />;
}
