export default function Footer() {
  const github = "dgpalmer";
  const linkedin = "dgpalmer";
  const email = "donovan@donovanpalmer.net";
  return (
    <footer>
      <div className="container">
        <div className="footer__styles">
          <div className="footer__socials">
            <a href="{{ github }}">github</a>
            <a href="{{ linkedin }}">linkedin</a>
            <a href="mailto:{ email }">email</a>
          </div>
          <div className="footer__copyright">
            <p className="text-sm">©2025 {github}</p>
            <p className="text-sm">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
