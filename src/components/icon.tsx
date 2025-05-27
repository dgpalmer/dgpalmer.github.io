import Image from 'next/image';

interface IconProps {
  icon: string;
  href: string;
  alt: string;
}

const Icon = (props: IconProps) => {
  const title = `link to ${props.alt}`
  return (
    <div className="icon">
      <a href={props.href} role="button" title={title}>
        <Image src={props.icon} width={20} height={20} alt={props.alt} />
      </a>
    </div>
  );
};

export default Icon;
