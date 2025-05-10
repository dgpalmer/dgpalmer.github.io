import Image from "next/image";

interface IconProps {
  icon: string;
  href: string;
  alt: string;
}

export const Icon = (props: IconProps) => {
  console.log(`icon: ${props.icon}`);
  console.log(`href: ${props.href}`);
  console.log(`alt: ${props.alt}`);
  return (
    <div className="icon">
      <a href={props.href}>
        <Image src={props.icon} width={20} height={20} alt={props.alt} />
      </a>
    </div>
  );
};
