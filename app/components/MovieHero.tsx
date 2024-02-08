import { Movie } from "@/types/movies";

import BackgroundImage from "./BackgroundImage";
import Container from "./Container";
import MovieOverview from "./MovieOverview";
import CircularProgressBar from "./CircularProgressBar";

type MovieHeroProps = Movie;

function MovieHero(props: MovieHeroProps) {
  const { title, backdropPath, overview, releaseDate, rating } = props;
  return (
    <BackgroundImage
      src={`https://image.tmdb.org/t/p/original${backdropPath}`}
      alt={title}
      className="min-h-[calc(100vh-60px)] pb-20 flex items-end"
      as="section"
    >
      <Container className="text-white">
        <div className="flex items-end gap-8">
          <div className="flex-1">
            <MovieOverview
              title={title}
              releaseDate={releaseDate}
              overview={overview}
            />
          </div>
          <div>
            <div className="bg-white rounded-lg w-80 text-black">
              <div className="p-4">
                <CircularProgressBar value={rating} />
              </div>
              <div className="bg-slate-100 rounded-b-lg p-4">your rating</div>
            </div>
          </div>
        </div>
      </Container>
    </BackgroundImage>
  );
}

export default MovieHero;
