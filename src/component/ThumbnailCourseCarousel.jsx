"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function ThumbnailCourseCarousel({ courselist }) {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      autoplay={{
        delay: 30000000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      freeMode={true}
      grabCursor={true}
      loop={true}
      spaceBetween={16}
      slidesPerView={3}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 8 },
        1280: { slidesPerView: 3, spaceBetween: 16 },
      }}
      className="course-slider customSwiper"
    >
      {courselist.map((course, i) => (
        <SwiperSlide key={i}>
          <div className="single-courses-box">
            <div className="courses-image">
              <Link href={`/checkout/${course.slug}`} className="d-block image">
                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/course/featured/${course.image}`} alt="image" />
              </Link>
            </div>
            <div className="courses-content">
              <h3>
                <Link href={`/checkout/${course.slug}`}>
                  {course.title}
                </Link>
              </h3>
              <p>
                {course.sub_title}
              </p>

              <Link href={`/checkout/${course.slug}`} className="default-btn w-100">
                Buy Now <FontAwesomeIcon icon={faAngleRight} />
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
