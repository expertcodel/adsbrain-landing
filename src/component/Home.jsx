import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCalendar, faDesktop, faGlobe, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import HeroSilderCarousel from "@/component/HeroSilderCarousel.jsx";
import ThumbnailCourseCarousel from '@/component/ThumbnailCourseCarousel.jsx';
import AboutSection from "@/component/AboutSection.jsx";
import TestimonialOdometer from "@/component/TestimonialOdometer.jsx";
import SingleBookCarousel from "@/component/SingleBookCarousel.jsx";
export default function Home({sliderlist,bookList, testimoniallist,courselist}) {
  return (
      <>
        
        {/* Start Main Banner Area */}
        <div className="banner-wrapper-area">
            <div className="container heroSlider">
                <HeroSilderCarousel sliderlist={sliderlist}/>
                <div className="banner-inner-area">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="single-banner-box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faDesktop} />
                                </div>
                                <h3>10,000 Online Courses</h3>
                                <p>Lorem ipsum dolor sit amet consectets.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-banner-box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserFriends} />
                                </div>
                                <h3>Experts Teachers</h3>
                                <p>Lorem ipsum dolor sit amet consectets.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-banner-box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </div>
                                <h3>Lifetime Access</h3>
                                <p>Lorem ipsum dolor sit amet consectets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider" />
        </div>
        {/* End Main Banner Area */}

        <div className="bg-f5f7fa py-5"></div>
        {/* Start Courses Area */}
        <div className="courses-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Learn At Your Own Pace</span>
                    <h2>eLearniv Popular Courses</h2>
                    <p>
                        Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!
                    </p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ThumbnailCourseCarousel courselist={courselist} />
                    </div>
                </div>
            </div>
        </div>
        {/* End Courses Area */}

        <AboutSection bgClass="bg-f5f7fa" />

        <TestimonialOdometer testimoniallist={testimoniallist}/>

        {/* Start View All Courses Area */}
        <div className="view-all-courses-area bg-fef8ef pt-0">
            <div className="container-fluid px-md-0">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="view-all-courses-content">
                            <span className="sub-title">Distance learning</span>
                            <h2>Feel Like You Are Attending Your Classes Physically!</h2>
                            <p>
                                eLearniv training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes virtually by sitting in your comfort zone.
                            </p>
                            <Link href="tel:7303798986" className="default-btn me-2">
                                Enroll Now <FontAwesomeIcon icon={faAngleRight} />
                                <span />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="view-all-courses-image">
                            <img src="/images/man-with-laptop.webp" alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape1" data-speed="0.06" data-revert="true">
                <img src="/images/shape/shape1.png" alt="image" />
            </div>
            <div className="shape9" data-speed="0.06" data-revert="true">
                <img src="/images/shape/shape8.svg" alt="image" />
            </div>
        </div>
        {/* End View All Courses Area */}

        {/* Start Get Instant Courses Area */}
        <div className="get-instant-courses-area bg-ffffff py-5">
            <div className="container">
                <SingleBookCarousel bookList={bookList} />
            </div>
        </div>
        {/* End Get Instant Courses Area */}
        
      </>
  );
}
