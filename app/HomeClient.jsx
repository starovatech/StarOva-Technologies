"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

import {
  Rocket,
  Building2,
  Code2,
  ShoppingBag,
  UserRound,
} from "lucide-react";

/*const projects = [
  {
    title: "Syntrad",
    category: "Business & Technology",
    description: "A modern digital platform for a technology-focused business.",
    className: "project-purple"
  },
  {
    title: "AmpLink Elite",
    category: "EV Technology",
    description: "A premium product experience built for smart EV charging.",
    className: "project-blue"
  },
  {
    title: "Nexa Commerce",
    category: "E-Commerce",
    description: "A polished shopping experience designed around clarity and conversion.",
    className: "project-mix"
  }
];*/

const faqs = [
  {
    q: "What type of websites does starOva build?",
    a: "We build business websites, landing pages, portfolios, service websites, product sites and custom web applications."
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We can redesign the visual system, improve responsiveness, restructure pages and modernize the overall user experience."
  },
  {
    q: "Do you build websites with Next.js?",
    a: "Yes. Next.js is one of our preferred technologies for fast, scalable and SEO-friendly modern websites."
  },
  {
    q: "Can you maintain the website after launch?",
    a: "Yes. We can help with updates, content changes, performance improvements, bug fixes and future feature development."
  }
];

export default function HomeClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className="hero section-shell">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="pulse-dot" />
            Digital solutions for ambitious businesses
          </div>

          <h1>
            We build digital
            <br />
            <span>experiences</span> that
            <br />
            make businesses stand out.
          </h1>

          <p className="hero-copy">
            StarOva creates modern websites, web applications, and digital solutions that combine sharp design with technology that works.
          </p>

          <div className="hero-actions">
            <Button href="/contact">Start a Project</Button>
            <Link href="/solutions" className="text-link">
              Explore our work <span>↗</span>
            </Link>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>10+</strong>
              <span>Projects delivered</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Responsive design</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Digital presence</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb-ring ring-one" />
          <div className="orb-ring ring-two" />
          <div className="orb-core">
            <div className="core-star">✦</div>
          </div>
          <div className="orb-line line-a" />
          <div className="orb-line line-b" />
          <div className="orb-line line-c" />
          <span className="orb-particle particle-a" />
          <span className="orb-particle particle-b" />
          <span className="orb-particle particle-c" />
        </div>
      </section>


      <section className="trust-strip">

        <span className="trust-heading">
          Built for modern businesses
        </span>

        <div className="trust-box">

          <div className="trust-item">
            <Rocket />
            <b>STARTUPS</b>
          </div>

          <div className="trust-item">
            <Building2 />
            <b>SMEs</b>
          </div>

          <div className="trust-item">
            <Code2 />
            <b>TECH</b>
          </div>

          <div className="trust-item">
            <ShoppingBag />
            <b>RETAIL</b>
          </div>

          <div className="trust-item">
            <UserRound />
            <b>PROFESSIONALS</b>
          </div>

        </div>

      </section>

      <section className="section-shell section-block what-we-do">

        {/* LEFT SIDE */}
        <div className="what-we-do-content">

          <div className="eyebrow">What we do</div>

          <h2>
            Digital solutions for{" "}
            <span>modern businesses.</span>
          </h2>

          <p>
            We build powerful digital experiences and turn business data
            into clear, useful insights. From websites and branding to
            data cleaning, analysis, and interactive dashboards.
          </p>

        </div>


        {/* RIGHT SIDE */}
        <div className="what-we-do-services">

          <div className="service-row">
            <span>01</span>
            <h3>Website Development</h3>
          </div>

          <div className="service-row">
            <span>02</span>
            <h3>Logo & Branding</h3>
          </div>

          <div className="service-row">
            <span>03</span>
            <h3>Data Analyst</h3>
          </div>

          <div className="service-row">
            <span>04</span>
            <h3>Bi Developer</h3>
          </div>

          <div className="service-row">
            <span>05</span>
            <h3>Bi Architecture</h3>
          </div>

        </div>

      </section>

      <section className="section-shell section-block story-section">

        {/* LEFT VISUAL */}
        <div className="story-visual">

          <div className="visual-label label-one">
            WEB
          </div>

          <div className="visual-label label-two">
            DATA
          </div>

          <div className="visual-label label-three">
            DESIGN
          </div>

          <div className="visual-main">
            <span>star</span>
            <strong>Ova</strong>
          </div>

          <div className="visual-ring ring-one"></div>
          <div className="visual-ring ring-two"></div>

          <div className="visual-star star-a">✦</div>
          <div className="visual-star star-b">✦</div>
          <div className="visual-star star-c">✧</div>

        </div>


        {/* RIGHT TEXT */}
        <div className="story-copy">

          <div className="eyebrow">Why starOva</div>

          <h2>
            Technology should make
            <span> business simpler.</span>
          </h2>

          <p>
            We combine creative design, modern development and data expertise
            to create digital solutions that make your business look better,
            work smarter and grow faster.
          </p>

          <div className="story-points">

            <div>
              <span>01</span>
              <p>
                <strong>Creative by design.</strong>
                <br />
                Websites and branding built around your identity.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                <strong>Smart with data.</strong>
                <br />
                Clean, analyse and visualise your business data.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                <strong>Built for growth.</strong>
                <br />
                Digital foundations that evolve with your business.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* <section className="section-shell section-block projects-section">
        <div className="section-heading">
          <div className="eyebrow">Selected work</div>
          <h2>Projects made to <span>stand out.</span></h2>
          <p>Every project starts with a business objective and ends with a digital experience people remember.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="center-action">
          <Button href="/projects" variant="outline">View all projects</Button>
        </div>
      </section> */}

      <section className="section-shell final-section">

        {/* FAQ SIDE */}
        <div className="final-faq">

          <div className="eyebrow">FAQ</div>

          <h2>
            Questions,
            <span> answered.</span>
          </h2>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div
                className={`faq-item ${openFaq === index ? "open" : ""
                  }`}
                key={item.q}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                >
                  <span>{item.q}</span>

                  <b>
                    {openFaq === index ? "−" : "+"}
                  </b>
                </button>

                {openFaq === index && (
                  <p>{item.a}</p>
                )}
              </div>
            ))}
          </div>

        </div>


        {/* CTA SIDE */}
        <div className="final-cta trust-box">

          <div className="cta-glow"></div>

          <div className="cta-content">

            <div className="eyebrow">
              Have an idea?
            </div>

            <h2>
              Let&apos;s turn it into
              <span> something exceptional.</span>
            </h2>

            <p>
              Tell us what you are building. We&apos;ll help
              you figure out the next step.
            </p>

            <Button
  href="https://wa.me/919960045758?text=Hi%20starOva%2C%20I%20would%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
>
  <span>Let&apos;s Talk</span>
  <b>↗</b>
            </Button>

          </div>

        </div>

      </section>
    </>
  );
}