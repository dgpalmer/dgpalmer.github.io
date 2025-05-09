export default function Footer() {
  const github = "dgpalmer";
  const linkedin = "dgpalmer";
  const email = "donovan@donovanpalmer.net";
  return (
    <footer classNameName="footer">
      <div className="section">
        <div className="footer--styles">
          <div className="footer--socials">
            <a href="{ github }" target="_blank">
              github
            </a>
            <a href="{ linkedin }" target="_blank">
              linkedin
            </a>
            <a href="mailto:{ email }">email</a>
          </div>
          <div className="footer--copyright">
            <p className="text-sm">©2025 {github}</p>
            <p className="text-sm">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
