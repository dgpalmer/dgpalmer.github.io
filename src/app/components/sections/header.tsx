import Image from "next/image";

const baseurl = "/";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__logo">
          <a aria-label="home" href="{ baseurl }">
            <Image
              alt="logo"
              fetchPriority="high"
              width="200"
              height="200"
              decoding="async"
              data-nimg="1"
              className="w-auto h-20"
              src="/dplogo.png"
            />
          </a>
        </div>
        <div className="header__nav">
          <nav>
            <a className="button" href="{ baseurl }/#interests">
              interests
            </a>
            <a className="button" href="{ baseurl }/#skills">
              skills
            </a>
            <a className="button" href="{ baseurl }/#current">
              xp
            </a>
            <a
              className="button button--cv__sm"
              target="_blank"
              href="{ baseurl }/files/DonovanPalmersResume2021.pdf"
            >
              cv
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
