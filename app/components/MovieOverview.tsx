type MovieOverviewProps = {
  title: string;
  releaseDate: string;
  overview: string;
};

function MovieOverview(props: MovieOverviewProps) {
  const { title, releaseDate, overview } = props;
  return (
    <>
      <div className="flex items-center gap-8 mb-4 lg:max-w-2xl">
        <h4 className="text-6xl font-bold tracking-wider leading-tight font-poppins">
          {title}
        </h4>
        <span className="bg-white/10 border-2 border-solid border-white/40 px-6 py-2 rounded text-lg font-light">
          {new Date(releaseDate).getFullYear()}
        </span>
      </div>
      <p className="text-lg font-light lg:max-w-3xl">{overview}</p>
    </>
  );
}

export default MovieOverview;
