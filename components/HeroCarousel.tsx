"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HeroCarousel() {
  return (
    <section className="w-full">
      <Swiper slidesPerView={2} loop className="rounded-lg overflow-hidden">
        <SwiperSlide>
          <div className="flex bg-neutral-100 dark:bg-neutral-800 h-[400px]">
            <img src="/announce-wan-2-2-image.webp" alt="WAN 2.2" className="w-1/2 object-cover"/>
            <div className="flex flex-col justify-center p-10 w-1/2">
              <h2 className="text-4xl font-bold">WAN 2.2 Image generation</h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                Generate complex images with the brand new...
              </p>
              <button className="mt-4 bg-neutral-900 dark:bg-neutral-100 dark:text-black text-white px-4 py-2 rounded-lg">
                Try WAN 2.2
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex bg-neutral-100 dark:bg-neutral-800 h-[400px]">
            <img src="/flux.jpg" alt="FLUX 1" className="w-1/2 object-cover"/>
            <div className="flex flex-col justify-center p-10 w-1/2">
              <h2 className="text-4xl font-bold">FLUX 1 Krea</h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                We're making the weights to our FLUX Krea...
              </p>
              <button className="mt-4 bg-neutral-900 dark:bg-neutral-100 dark:text-black text-white px-4 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
