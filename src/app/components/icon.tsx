import Image from 'next/image';

interface IconProps {
  icon: string;
  href: string;
  alt: string;
}

const Icon = (props: IconProps) => {
  return (
    <div className="icon">
      <a href={props.href} role="button">
        <Image src={props.icon} width={20} height={20} alt={props.alt} />
      </a>
    </div>
  );
};

export default Icon;
