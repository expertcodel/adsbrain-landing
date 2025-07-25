"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
export default function SingleBookCarousel({bookList}) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
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
      className="singleBook-slider customSwiper"
    >
      {bookList.length > 0 && bookList.map((book, i) => (
        <SwiperSlide key={i}>
          <div className="get-instant-courses-inner-area bg-blank">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="get-instant-courses-content ps-0">
                  <span className="sub-title">{book.author}</span>
                  <h2>{book.title}</h2>
                  <p  className="line-clamp-4">
{book.sub_title}
                  </p>
                  <div className="position-relative w-100 d-flex align-items-center">
                    <Link href={`/checkout/${book.slug}`} className="default-btn me-2">
                      View more <FontAwesomeIcon icon={faAngleRight} />
                      <span />
                    </Link>
                    {/* <button onClick={() => setBookdetail(book)} className="default-btn">
                      Buy Now <FontAwesomeIcon icon={faAngleRight} />
                      <span />
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="get-instant-courses-image">
                  <img width={670} height={800} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/course/featured/${book.image}`} className="main-image" alt="image" />
                  <div className="shape7" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape4.png" alt="image" />
                  </div>
                  <div className="shape6" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape6.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="shape5" data-speed="0.06" data-revert="true">
              <img src="/images/shape/shape5.png" alt="image" />
            </div>
          </div>
        </SwiperSlide>
      ))}


    </Swiper>
  );
}