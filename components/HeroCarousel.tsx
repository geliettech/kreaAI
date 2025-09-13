"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function HeroCarousel() {
  return (
    <section className="py-16">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="rounded-lg overflow-hidden"
      >
        {/* IMAGE SLIDE */}
        <SwiperSlide>
          <div className="flex h-[400px] bg-[url('/announce-wan-2-2-image.webp')] bg-no-repeat bg-cover bg-center">
            <div className="flex flex-col justify-end w-full p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">
                    WAN 2.2 Image generation
                  </h2>
                  <p className="mt-2 text-sm">
                    Generate complex images with the brand new...
                  </p>
                </div>

                <button className="bg-white text-black px-4 py-2 rounded-3xl">
                  Try WAN 2.2
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* VIDEO SLIDE */}
        <SwiperSlide>
          <div className="relative h-[400px] flex overflow-hidden">
            <video
              src="/OSSKreaFlux1_video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col justify-end p-6 w-full text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">WAN 2.2 Video showcase</h2>
                  <p className="mt-2 text-sm">
                    Experience advanced AI video generation...
                  </p>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-3xl">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
