import NowPlaying from "@/components/NowPlaying";
import getMovies from "@/services/movies";

async function getNowPlayingMovies() {
  const nowPlayingMovies = await getMovies();

  return nowPlayingMovies;
}

// async function getPopularMovies() {
//   const res = await fetch("http://localhost:3000/api/movie?type=popular", {
//     next: { revalidate: 60 * 60 * 24 },
//   });
//   return res.json();
// }

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  return <NowPlaying items={nowPlayingMovies} />;
}
