import TestimonialsCarousel from "./TestimonialsCarousel";
import AnimatedCounter from "./AnimatedCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default async function TestimonialOdometer({testimoniallist}) {
    return (
        <>
            {/* Start Funfacts And Feedback Area */}
            <div className="funfacts-and-feedback-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="feedback-content">
                                <span className="sub-title">Distance learning</span>
                                <h2>
                                Flexible Study at Your Own Pace, According to Your Own Needs
                                </h2>
                                <p>
                                    With the eLearniv, you can study whenever and wherever you choose. We have students in over 175 countries and a global reputation as a pioneer in the field of flexible learning. Our teaching also means, if you travel often or need to relocate, you can
                                    continue to study wherever you go.
                                </p>
                                <TestimonialsCarousel testimoniallist={testimoniallist} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="funfacts-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-funfacts-box">
                                            <h3>
                                                <AnimatedCounter target={1926} />
                                            </h3>
                                            <p>Finished Sessions</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-funfacts-box">
                                            <h3>
                                                <AnimatedCounter target={3279} />
                                            </h3>
                                            <p>Enrolled Learners</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-funfacts-box">
                                            <h3>
                                                <AnimatedCounter target={250} />
                                            </h3>
                                            <p>Online Instructors</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-funfacts-box">
                                            <h3>
                                                <AnimatedCounter target={100} />
                                                %
                                            </h3>
                                            <p>Satisfaction Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="video-box">
                                <div className="image">
                                    <img src="/images/video-img1.jpg" className="shadow" alt="image" />
                                </div>
                                <a href="#" target="_blank" className="video-btn popup-youtube">
                                    <FontAwesomeIcon icon={faPlay} />
                                </a>
                                <div className="shape10" data-speed="0.06" data-revert="true">
                                    <img src="/images/shape/shape9.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape2" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape2.png" alt="image" />
                </div>
                <div className="shape3" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape4" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape4.png" alt="image" />
                </div>
                <div className="shape9" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape8.svg" alt="image" />
                </div>
            </div>
            {/* End Funfacts And Feedback Area */}
        </>
    )
}