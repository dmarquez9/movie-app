import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import { Movie } from "@/types/movies";

import { Poppins } from "next/font/google";

import Container from "./Container";

const poppins = Poppins({ weight: ["700"], subsets: ["latin"] });

const NowPlayingItem = ({ item }: { item: Movie }) => {
  return (
    <Link
      className="block relative"
      style={{ height: "75vh" }}
      href={`/movie/${item.id}`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt={item.original_title}
        fill
        className="object-cover object-top"
      />
      <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-t from-black to-transparent pb-20 flex items-end z-10">
        <Container className="text-left text-white">
          <div className="flex items-center gap-8 mb-4 lg:max-w-2xl">
            <h4
              className={cx(
                "text-6xl font-bold tracking-wider leading-tight",
                poppins.className
              )}
            >
              {item.title}
            </h4>
            <span className="bg-white/10 border-2 border-solid border-white/40 px-6 py-2 rounded text-lg font-light">
              {new Date(item.release_date).getFullYear()}
            </span>
          </div>
          <p className="text-lg font-light mb-12 lg:max-w-3xl">
            {item.overview}
          </p>
        </Container>
      </div>
    </Link>
  );
};

export default NowPlayingItem;
