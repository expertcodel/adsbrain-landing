import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>

        {/* footer */}
        <footer className="footerMain heroBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-8 col-12 bodyContent">
                        <h1 className="mainHeading">Get Started Today!</h1>
                        <p>
                            Looking for a social media marketing agency near you? Choose Expert Code Lab and experience unmatched results. Contact us to learn how our services can transform your business.
                        </p>
                        <a className="default-btn-second" href="tel:7303798986">
                          BOOK A FREE CONSULTANT
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <figure>
                            <Image fill src="/images/footer-img.webp" alt="Get Started" className="img-fluid mx-auto d-block" />
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>
                            <i className="fa-regular fa-copyright" /> 2025 Expert Code Lab Pvt. Ltd., All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
}