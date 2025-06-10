import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__logo">
          <Link aria-label="Home" href="/">
            <Image
              alt="logo"
              fetchPriority="high"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="w-auto h-20"
              src="/images/logo.webp"
            />
          </Link>
        </div>
        <div className="header__nav">
          <nav>
            <Link className="button" href="/#interests" role="button">
              interests
            </Link>
            <Link className="button" href="/#skills" role="button">
              skills
            </Link>
            <Link className="button" href="/#current" role="button">
              xp
            </Link>
            <Link
              className="button button--cv__sm"
              href="/cv"
              role="button"
            >
              cv
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
