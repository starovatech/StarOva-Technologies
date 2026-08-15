import Button from "@/components/Button";

export const metadata = {
  title: "About WEBNEXA | Digital, Web & Data Solutions",
  description:
    "Learn about WEBNEXA, a digital studio building modern websites, branding, data solutions, analytics and dashboards for growing businesses.",
};

export default function AboutPage() {
  return (
    <div className="inner-page about-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="about-hero section-shell">

        <div className="about-hero-content">

          <div className="eyebrow">About starOva</div>

          <h1>
            We build digital
            <span> experiences that matter.</span>
          </h1>

          <p>
            We started starOva with a simple idea: businesses should not have
            to choose between technology that looks good and technology that
            actually works.
          </p>

          <p>
            A website should communicate clearly. A brand should be
            recognizable. Data should not sit inside confusing spreadsheets
            without telling you anything useful.
          </p>

          <p>
            That is where starOva comes in. We bring design, development,
            branding and data together to create digital solutions around the
            real needs of a business.
          </p>

          <div className="about-hero-buttons">
            <Button href="/contact">
              Start a project <span>↗</span>
            </Button>

            <a href="/solutions" className="about-text-link">
              Explore projects ↓
            </a>
          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="about-hero-art">

          <div className="about-orbit orbit-a"></div>
          <div className="about-orbit orbit-b"></div>

          <div className="about-art-glow"></div>

          <div className="about-brand">
            <small>star</small>
            <strong>Ova</strong>
          </div>

          <span className="about-star star-1">✦</span>
          <span className="about-star star-2">✧</span>
          <span className="about-star star-3">✦</span>

          <div className="about-floating about-float-1">
            WEB
          </div>

          <div className="about-floating about-float-2">
            DATA
          </div>

          <div className="about-floating about-float-3">
            DESIGN
          </div>

        </div>

      </section>

      {/* =========================================
          WHAT WE DO
      ========================================= */}

      <section className="section-shell about-services">

        <div className="about-services-heading">

          <div className="eyebrow">What we do</div>

          <h2>
            From your first idea
            <span> to the final result.</span>
          </h2>

          <p>
            We work across web, design and data to help businesses create a
            stronger digital presence and make better use of their information.
          </p>

        </div>


        <div className="about-service-list">

          <div className="about-service">
            <span>01</span>

            <div>
              <h3>Website Development</h3>
              <p>
                Modern, responsive and performance-focused websites built to
                represent your business professionally and give your customers
                a smooth experience.
              </p>
            </div>

            <b>↗</b>
          </div>


          <div className="about-service">
            <span>02</span>

            <div>
              <h3>Logo & Brand Identity</h3>
              <p>
                Clean and memorable visual identities that give your business
                a consistent and recognizable presence across digital
                platforms.
              </p>
            </div>

            <b>↗</b>
          </div>


          <div className="about-service">
            <span>03</span>

            <div>
              <h3>Data Cleaning</h3>
              <p>
                We organize, clean and structure messy datasets so your
                information becomes reliable, usable and ready for analysis.
              </p>
            </div>

            <b>↗</b>
          </div>


          <div className="about-service">
            <span>04</span>

            <div>
              <h3>Data Analysis</h3>
              <p>
                We turn raw business data into meaningful insights, patterns
                and trends that can support smarter decisions.
              </p>
            </div>

            <b>↗</b>
          </div>


          <div className="about-service">
            <span>05</span>

            <div>
              <h3>Interactive Dashboards</h3>
              <p>
                Clear and interactive dashboards that bring important KPIs,
                metrics and business insights together in one place.
              </p>
            </div>

            <b>↗</b>
          </div>

        </div>

      </section>


      {/* =========================================
          APPROACH
      ========================================= */}

      <section className="section-shell about-approach">

        <div className="approach-visual">

          <div className="approach-number">
            01
          </div>

          <div className="approach-circle circle-one"></div>
          <div className="approach-circle circle-two"></div>

          <div className="approach-center">
            <span>IDEA</span>
            <b>→</b>
            <span>IMPACT</span>
          </div>

        </div>


        <div className="approach-content">

          <div className="eyebrow">Our approach</div>

          <h2>
            Simple process.
            <span> Strong results.</span>
          </h2>

          <p>
            Good digital work does not need to be complicated. We keep our
            process focused, transparent and centered around what your
            business actually needs.
          </p>


          <div className="process-list">

            <div>
              <span>01</span>
              <h3>Understand</h3>
              <p>
                We learn about your business, audience and goals.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Create</h3>
              <p>
                We turn the idea into a clear digital solution.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Refine</h3>
              <p>
                We test, improve and polish the details.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Launch</h3>
              <p>
                We deliver something ready for the real world.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          VALUES
      ========================================= */}

      <section className="section-shell about-values">

        <div className="about-values-heading">

          <div className="eyebrow">What matters to us</div>

          <h2>
            Built around
            <span> better work.</span>
          </h2>

        </div>


        <div className="values-grid">

          <article className="value-item">
            <span>01</span>

            <h3>Clarity</h3>

            <p>
              We believe good technology should be easy to understand,
              navigate and use.
            </p>
          </article>


          <article className="value-item">
            <span>02</span>

            <h3>Creativity</h3>

            <p>
              We avoid generic solutions and look for ideas that give every
              project its own personality.
            </p>
          </article>


          <article className="value-item">
            <span>03</span>

            <h3>Quality</h3>

            <p>
              From the smallest detail to the overall experience, we care
              about doing things properly.
            </p>
          </article>


          <article className="value-item">
            <span>04</span>

            <h3>Growth</h3>

            <p>
              We build with the future in mind, creating foundations that can
              evolve as your business grows.
            </p>
          </article>

        </div>

      </section>


      {/* =========================================
    WHY WEBNEXA + CTA
========================================= */}

      <section className="section-shell about-final">

        {/* LEFT — WHY WEBNEXA */}

        <div className="about-final-content">

          <div className="eyebrow">Why starOva technologies</div>

          <h2>
            More than just
            <span> another digital agency.</span>
          </h2>

          <p>
            We combine creative thinking with technical execution and
            data-driven thinking. We do not just ask how something should
            look — we ask why it exists, who it is for and what it should
            achieve.
          </p>

          <div className="difference-points">

            <div>
              <strong>01</strong>
              <span>Design + Development</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Web + Data</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Creative + Analytical</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Business + Technology</span>
            </div>

          </div>

        </div>


        {/* RIGHT — CTA */}

        <div className="about-final-cta trust-box">

          <div className="about-cta-glow"></div>

          <div className="about-cta-stars">
            <span>✦</span>
            <span>✧</span>
            <span>✦</span>
          </div>

          <div className="eyebrow">
            Let&apos;s build something
          </div>

          <h2>
            Your next digital
            <span> chapter starts here.</span>
          </h2>

          <p>
            Whether you need a website, a stronger brand or better
            insights from your data, let&apos;s talk about what you want
            to build.
          </p>

          <Button
            href="https://wa.me/919960045758?text=Hi%20Webnexa%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> Start a conversation</span>
            <b>↗</b>
          </Button>

        </div>

      </section>

    </div>
  );
}