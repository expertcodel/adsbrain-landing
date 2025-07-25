"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";
import heroBanner from "../utils/heroBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function HeroSilderCarousel({ sliderlist }) {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            }}
            pagination={{
                clickable: true,
            }}
            grabCursor={true}
            loop={true}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 1, spaceBetween: 8 },
                1280: { slidesPerView: 1, spaceBetween: 16 },
            }}
            className="hero-slider customSwiper"
        >
            {sliderlist.map((slide, i) => (
                <SwiperSlide key={i}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-wrapper-content">
                                <h1>{slide.title}</h1>
                                <p >
{slide.sub_title}
                                </p>
                                <div className="position-relative w-100 d-flex align-items-center">
                                    <Link href={`/checkout/${slide.slug}`} className="default-btn me-2">
                                        Buy Now <FontAwesomeIcon icon={faAngleRight} />
                                        <span />
                                    </Link>
                                    {/* <Link href={`/${slide.button_url_two}`} className="default-btn">
                                        {slide.button_text_two} <FontAwesomeIcon icon={faAngleRight} />
                                        <span />
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="banner-wrapper-image">
                                <img width={550} height={620} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/course/featured/${slide.image}`} alt={slide.title} />
                                <div className="banner-shape8" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape/banner-shape8.png" alt="image" />
                                </div>
                                <div className="banner-shape9" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape/banner-shape9.png" alt="image" />
                                </div>
                                <div className="banner-shape10" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape/banner-shape10.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}