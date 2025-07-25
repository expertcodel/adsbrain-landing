import Link from "next/link";

export default function Header() {
  return (
    <>
        <header className="headerMain">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <img src="/images/logo.png" alt="Adsbrain" className="img-fluid" />
                    </Link>
                    <a className="btn customBtn callNowBtn" href="tel:7303798986">
                        <i className="fa-brands fa-whatsapp" /> +91 7303798986
                    </a>
                </div>
            </nav>
        </header>
    </>
  );
}