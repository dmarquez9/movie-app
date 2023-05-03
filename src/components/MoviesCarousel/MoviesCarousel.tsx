"use client";
import * as React from "react";
import Image from "next/image";
import cx from "classnames";
import { Carousel } from "react-responsive-carousel";

import { Movie } from "@/types/movies";
import Container from "@/components/Container";

import MoviesCarouselItem from "./MoviesCarouselItem";

const MoviesCarousel = ({ items }: { items: Movie[] }) => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  return (
    <>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        onChange={(index) => setCurrentSlide(index)}
        selectedItem={currentSlide}
        interval={3000}
        autoPlay
      >
        {items?.map((item) => (
          <MoviesCarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
      <div className="bg-black py-16">
        <Container className="flex items-center justify-center gap-8">
          {items?.map((item, index) => (
            <button
              className={cx(
                "rounded overflow-hidden flex-1 h-[300px] relative outline outline-3 outline-transparent hover:outline-white transition-all",
                { "outline-white": currentSlide === index }
              )}
              onClick={() => setCurrentSlide(index)}
              key={item.id}
            >
              <Image
                src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                alt={item.original_title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </Container>
      </div>
    </>
  );
};

export default MoviesCarousel;
