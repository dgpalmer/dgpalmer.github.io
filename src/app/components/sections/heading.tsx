import Image from 'next/image';
import Link from 'next/link';

export default function Heading() {
  return (
    <div id="heading" className="container heading">
      <div className="heading__styles">
        <div className="heading__content">
          <h1 id="page-title" className="heading__title">
            Donovan Palmer
          </h1>
          <p className="heading__text">father, husband, developer</p>
        </div>
        <div className="heading__image">
          <Image
            alt=""
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            src="/images/mugshot.webp"
          />
        </div>
      </div>
    </div>
  );
}
