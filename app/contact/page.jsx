"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/components/Button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_72rpqqd",
        "template_z3xpadf",
        form,
        "HsBCxCtib-6n_PGtl"
      );

      setSent(true);
      form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="inner-page contact-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="contact-hero section-shell">

        <div className="contact-hero-content">

          <div className="eyebrow">Start a project</div>

          <h1>
            Let&apos;s make
            <span> something happen.</span>
          </h1>

          <p>
            Have an idea, a business problem or simply want to improve
            your digital presence? Tell us what you&apos;re thinking.
            We&apos;ll take it from there.
          </p>

          <div className="contact-hero-note">
            <span className="contact-live-dot"></span>
            Currently accepting new projects
          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="contact-hero-art">

          <div className="contact-art-glow"></div>

          <div className="contact-orbit orbit-contact-one"></div>
          <div className="contact-orbit orbit-contact-two"></div>

          <div className="contact-art-brand">
            <small>LET&apos;S</small>
            <strong>TALK</strong>
          </div>

          <span className="contact-star contact-star-one">✦</span>
          <span className="contact-star contact-star-two">✧</span>
          <span className="contact-star contact-star-three">✦</span>

        </div>

      </section>


      {/* =========================================
          MAIN CONTACT AREA
      ========================================= */}

      <section className="section-shell contact-main">

        {/* LEFT INFORMATION */}

        <div className="contact-sidebar">

          <div className="eyebrow">Get in touch</div>

          <h2>
            Let&apos;s start with
            <span> your idea.</span>
          </h2>

          <p>
            Every project starts with a conversation. Tell us what
            you&apos;re looking for, what you&apos;re trying to solve,
            or simply what you have in mind.
          </p>


          {/* EMAIL */}

          <div className="contact-detail">

            <span className="contact-detail-number">01</span>

            <div>
              <small>EMAIL</small>

              <a href="mailto:starovatech@gmail.com">
                starOvatech@gmail.com
              </a>
            </div>

          </div>

          <div className="contact-detail">

            <span className="contact-detail-number">02</span>

            <div>
              <small>PHONE</small>

              <a href="tel:+919960045758">
                +91 99600 45758
              </a>
            </div>

          </div>


          {/* SERVICES */}

          <div className="contact-detail">

            <span className="contact-detail-number">03</span>

            <div>
              <small>WHAT WE DO</small>

              <p>
                Web Development · Branding · Data Analysis ·
                Dashboards
              </p>
            </div>

          </div>


          {/* RESPONSE */}

          <div className="contact-detail">

            <span className="contact-detail-number">04</span>

            <div>
              <small>RESPONSE</small>

              <p>
                We&apos;ll review your enquiry and get back to you
                as soon as possible.
              </p>
            </div>

          </div>


          {/* SOCIAL STYLE TAG */}

          <div className="contact-tag">
            <span>WEB</span>
            <b>+</b>
            <span>DATA</span>
            <b>+</b>
            <span>DESIGN</span>
          </div>

        </div>


        {/* FORM */}

        <div className="contact-form-wrapper">

          <div className="form-top">

            <div>
              <span className="form-small-label">
                PROJECT ENQUIRY
              </span>

              <h3>
                Tell us what you&apos;re
                <span> building.</span>
              </h3>
            </div>

            <span className="form-number">01—05</span>

          </div>


          <form
            className="contact-form-new"
            onSubmit={handleSubmit}
          >

            {/* NAME + EMAIL */}

            <div className="contact-form-row">

              <label>
                <span>Name</span>

                <input
                  name="name"
                  required
                  placeholder="Your name"
                />
              </label>


              <label>
                <span>Email</span>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="starovatech@gmail.com"
                />
              </label>

            </div>


            {/* SERVICE */}

            <label>
              <span>What do you need?</span>

              <select
                name="service"
                defaultValue="Website Development"
              >
                <option>Website Development</option>
                <option>Logo & Brand Identity</option>
                <option>Web Redesign</option>
                <option>BI Developer</option>
                <option>Data Cleaning</option>
                <option>Data Analysis</option>
                <option>Dashboard Development</option>
                <option>Other</option>
              </select>
            </label>


            {/* BUDGET */}

            <label>
              <span>Project budget</span>

              <select
                name="budget"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a range
                </option>

                <option>Under Rs.2000</option>
                <option>Rs.2500 — Rs.5000</option>
                <option>Rs.5500 — Rs.10,000</option>
                <option>Rs.10,500 — Rs.20,000</option>
                <option>Rs.20,000+</option>
              </select>
            </label>


            {/* MESSAGE */}

            <label>
              <span>Project details</span>

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Tell us about your business, your idea and what you want to achieve..."
              />
            </label>


            {/* SUBMIT */}

            <div className="form-submit-area">

              <Button type="submit">
                Send enquiry <span>↗</span>
              </Button>

              <p>
                By sending this enquiry, you&apos;re starting a
                conversation — no pressure, no complicated process.
              </p>

            </div>


            {sent && (
              <div className="success-message-new">
                <span>✓</span>

                <div>
                  <strong>Message received.</strong>

                  <p>
                    Thanks! We&apos;ll get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
            )}

          </form>

        </div>

      </section>


      {/* =========================================
          BOTTOM CTA STRIP
      ========================================= */}

      <section className="section-shell contact-bottom">

        <div className="contact-bottom-glow"></div>

        <div className="contact-bottom-content">

          <div className="eyebrow">
            starOva technologies
          </div>

          <h2>
            Good things start
            <span> with a conversation.</span>
          </h2>

        </div>

      </section>

    </div>
  );
}