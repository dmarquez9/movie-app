import fetcher from "@/utils/fetch";
import NowPlaying from "@/components/NowPlaying";

async function getNowPlayingMovies() {
  const nowPlayingMovies = await fetcher("/api/movie", {
    next: { revalidate: 60 * 60 * 24 },
  });

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
