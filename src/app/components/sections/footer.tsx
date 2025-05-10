export default function Footer() {
  const github = "dgpalmer";
  const linkedin = "dgpalmer";
  const email = "donovan@donovanpalmer.net";
  return (
    <footer>
      <div className="container">
        <div className="footer__socials">
          <ul>
            <li>
              <a href="{{ github }}">github</a>
            </li>
            <li>
              <a href="{{ linkedin }}">linkedin</a>
            </li>
            <li>
              <a href="mailto:{ email }">email</a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">
          <p className="text-sm">©2025 {github}</p>
          <p className="text-sm">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
