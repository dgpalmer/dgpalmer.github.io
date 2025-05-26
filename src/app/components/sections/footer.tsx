import Icon from '../icon';
import socials from '../../content/socials.json';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer__socials">
          <ul>
            {socials.map((social) => (
              <li key={`social-${social.key}`}>
                <Icon
                  alt={social.alt}
                  href={social.href}
                  icon={social.icon}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__copyright">
          <div className="flex flex-col">
            <p className="text-sm">© {year} Donovan Palmer</p>
            <p className="text-sm">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
