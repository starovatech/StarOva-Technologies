import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Decorative glow */}
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="section-shell footer-main">

        {/* BRAND */}

        <div className="footer-brand">

          <div className="footer-logo-wrap">
            <img
              src="/images/logo/starOva.png"
              alt="starOva"
            />
          </div>

          <p>
            Building bold digital experiences through
            technology, design and data.
          </p>

          <div className="footer-brand-tags">
            <span>WEB</span>
            <b>+</b>
            <span>DATA</span>
            <b>+</b>
            <span>DESIGN</span>
          </div>

        </div>


        {/* LINKS */}

        <div className="footer-links">

          <div className="footer-column">

            <span className="footer-heading">
              EXPLORE
            </span>

            <Link href="/about">
              About
            </Link>

            <Link href="/solutions">
              Solutions
            </Link>

            <Link href="/contact">
              Contact
            </Link>

          </div>


          {/* CONTACT */}

          <div className="footer-column">

            <span className="footer-heading">
              CONTACT
            </span>

            <a href="mailto:starovatech@gmail.com">
              starOvatech@gmail.com
            </a>

            <a href="tel:+919876543210">
              +91 99600 45758
            </a>

            <Link href="/contact">
              Start a project <span>↗</span>
            </Link>

          </div>

        </div>

      </div>

      {/* =========================================
          BOTTOM
      ========================================= */}

      <div className="section-shell footer-bottom">

        <span>
          © {new Date().getFullYear()} starOva technologies. All rights reserved.
        </span>

        <div className="footer-bottom-right">

          <span>Technology</span>
          <b>×</b>
          <span>Business</span>

        </div>

      </div>

    </footer>
  );
}