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
            <a className="button" href="#interests" role="button">
              interests
            </a>
            <a className="button" href="#skills" role="button">
              skills
            </a>
            <a className="button" href="#current" role="button">
              xp
            </a>
            <a className="button" href="#repos" role="button">
              repos
            </a>
            <a
              className="button button--cv__sm"
              href="/cv"
              role="button"
            >
              cv
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
