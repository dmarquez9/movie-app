import Link from "next/link";
import { Movie } from "@/types/movies";

import Container from "../Container";
import BackgroundImage from "../BackgroundImage";
import MovieOverview from "../MovieOverview";

const NowPlayingItem = ({ item }: { item: Movie }) => {
  return (
    <BackgroundImage
      as={Link}
      className="h-[75vh] pb-20 flex items-end"
      src={`https://image.tmdb.org/t/p/original${item.backdropPath}`}
      alt={item.title}
      href={`/movie/${item.id}`}
    >
      <Container className="text-left text-white">
        <MovieOverview
          title={item.title}
          releaseDate={item.releaseDate}
          overview={item.overview}
        />
      </Container>
    </BackgroundImage>
  );
};

export default NowPlayingItem;
