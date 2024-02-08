import { Movie } from '@/types/movies'

import BackgroundImage from './BackgroundImage'
import Container from './Container'
import MovieOverview from './MovieOverview'
import RatingCard from './RatingCard'

type MovieHeroProps = Movie

function MovieHero(props: MovieHeroProps) {
  const { title, backdropPath, overview, releaseDate, rating, totalRatings } =
    props
  return (
    <BackgroundImage
      src={`https://image.tmdb.org/t/p/original${backdropPath}`}
      alt={title}
      className="min-h-[calc(100vh-60px)] pb-32 flex items-end"
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
            <RatingCard rating={rating} totalRatings={totalRatings} />
          </div>
        </div>
      </Container>
    </BackgroundImage>
  )
}

export default MovieHero
