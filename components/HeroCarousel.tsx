"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Slide = {
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function HeroCarousel() {
  const slides: Slide[] = [
    {
      type: "image",
      src: "/announce-wan-2-2-image.webp",
      title: "WAN 2.2 Image generation",
      description: "Generate complex images with the brand new...",
      buttonText: "Try WAN 2.2",
    },
    {
      type: "video",
      src: "/OSSKreaFlux1_video.mp4",
      title: "WAN 2.2 Video showcase",
      description: "Experience advanced AI video generation...",
      buttonText: "Watch Demo",
    },
    
  ];

  return (
    <section className="w-full">
      <Swiper slidesPerView={2} loop className="rounded-lg overflow-hidden">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "image" ? (
              // IMAGE SLIDE
              <div
                className={`flex h-[400px] bg-[url('${slide.src}')] bg-no-repeat bg-cover bg-center`}
              >
                <div className="flex flex-col justify-center p-10 w-1/2 bg-black/40 text-white rounded-r-lg">
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  <p className="mt-2 text-sm">{slide.description}</p>
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            ) : (
              // VIDEO SLIDE
              <div className="relative h-[400px] flex overflow-hidden">
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex flex-col justify-center p-10 w-1/2 bg-black/50 text-white rounded-r-lg">
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  <p className="mt-2 text-sm">{slide.description}</p>
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
