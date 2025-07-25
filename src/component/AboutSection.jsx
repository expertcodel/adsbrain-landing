"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleUp, faChalkboardTeacher, faClockRotateLeft, faGamepad, faLightbulb, faRobot, faUser, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default  function AboutSection({ bgClass="" }) {
    const pathname = usePathname();
    return (
        <>
            {/* Start About Area */}
            <div className={`about-area ${bgClass} ptb-100`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className="image wow animate__animated animate__fadeInLeft">
                                            <img src="/images/about/about-img1.webp" alt="About Us" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className="image wow animate__animated animate__fadeInDown">
                                            <img src="/images/about/about-img2.webp" alt="About Us" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className="image wow animate__animated animate__fadeInUp">
                                            <img src="/images/about/about-img3.webp" alt="About Us" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className="image wow animate__animated animate__fadeInRight">
                                            <img src="/images/about/about-img4.webp" alt="About Us" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">About Us</span>
                                <h2>
                                    Transforming Education Through Innovation, Technology, and AI
                                </h2>
                                <p>
                                    Our guiding principles are Teaching, Tutoring and Training. Doing Research Assessment & Analysis (DRAA) (OPC) Pvt Ltd, bring education, technology, innovation, and AI together to transform learning experiences.
                                    {
                                        pathname === "/about-us" && (
                                            <>
                                                {" "}At DRAA, we understand that the landscape of education and technology is constantly evolving. To keep pace with these changes, we specialize in designing game-based learning modules that not only engage but also enhance competition, creativity, and student-centric learning. Our guiding principles drive us to create cutting-edge solutions that empower students and educators alike, fostering an environment where learning is dynamic, interactive, and impactful.
                                            </>
                                        )
                                    }
                                </p>
                                <ul className="features-list">
                                    <li>
                                        <span>
                                            <em><FontAwesomeIcon icon={faLightbulb} /></em> Innovative Learning Models
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <em><FontAwesomeIcon icon={faGamepad} /></em> Exam-Based Education
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <em><FontAwesomeIcon icon={faRobot} /></em> AI-Powered Solutions
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <em><FontAwesomeIcon icon={faChalkboardTeacher} /></em> Engaging & Competitive Training
                                        </span>
                                    </li>
                                </ul>
                                {pathname !== "/about-us" && (
                                    <Link href="tel:7303798986" className="default-btn me-2">
                                        Enroll Now <FontAwesomeIcon icon={faAngleRight} />
                                        <span />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape1" data-speed="0.06" data-revert="true">
                    <img src="/images/shape/shape1.png" alt="image" />
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
            </div>
            {/* End About Area */}
        </>
    )
}