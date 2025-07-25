"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function TestimonialsCarousel({testimoniallist}) {
  return (
    <>
      <div className="Testimonials-slider-wrapper verticalSlider">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={16}
          grabCursor={true}
          loop={true}
          autoHeight={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
          }}
          className="Testimonials-slider"
        >
          {testimoniallist.map((item) => (
             <SwiperSlide key={item.id}>
              <div className="single-feedback-item">
                <p>
                  {item.comment}
                </p>
                <div className="client-info d-flex align-items-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/testimonials/${item.image}`}
                    className="rounded-circle"
                    alt="User"
                  />
                  <div className="title">
                    <h3>{item.name}</h3>
                    <span>{item.rank}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
