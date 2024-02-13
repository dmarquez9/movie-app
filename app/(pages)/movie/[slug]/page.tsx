import MovieHero from '@/components/MovieHero'
import { Tabs, Tab } from '@/components/Tabs'
import { getMovies, getMovieDetails } from '@/services/movies'

export const dynamicParams = true

export async function generateStaticParams() {
  const movies = await getMovies()

  return movies.map((movie) => ({
    slug: String(movie.id),
  }))
}

type MoviePageProps = {
  params: {
    slug: string
  }
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie = await getMovieDetails(params.slug)
  return (
    <>
      <MovieHero {...movie} />
      <div className="relative z-10 -mt-8">
        <Tabs>
          <Tab label="Overview">Hola</Tab>
          <Tab label="Cast">Hola</Tab>
        </Tabs>
        hola
      </div>
    </>
  )
}
