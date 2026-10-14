
import Head from "next/head";
import { useState } from "react";

const clothes = [
  {
    name: "Vintage Graphic Tee",
    category: "VINTAGE / TOPS",
    price: 28,
    tag: "ONE OF ONE",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The Broken-In Denim",
    category: "VINTAGE / DENIM",
    price: 45,
    tag: "THRIFT FIND",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Everyday Vintage",
    category: "VINTAGE / STYLE",
    price: 35,
    tag: "RARE FIND",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The Classic Layer",
    category: "VINTAGE / OUTERWEAR",
    price: 55,
    tag: "GOOD AS NEW",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    event: "Comedy show",
    date: "",
    details: "",
  });

  function submitBooking(e) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Booking inquiry for Keegan Bell — ${booking.event}`
    );

    const body = encodeURIComponent(
      `Hey Keegan!\n\nI'd like to inquire about booking you.\n\n` +
        `Name: ${booking.name}\n` +
        `Email: ${booking.email}\n` +
        `Event: ${booking.event}\n` +
        `Date: ${booking.date || "Flexible"}\n\n` +
        `Details:\n${booking.details}\n`
    );

    window.location.href =
      `mailto:BOOKING_EMAIL_HERE?subject=${subject}&body=${body}`;
  }

  function inquireAboutItem(item) {
    const subject = encodeURIComponent(`Interested in: ${item.name}`);
    const body = encodeURIComponent(
      `Hey Thrifted by the Bell!\n\n` +
        `I'm interested in the ${item.name} listed at $${item.price}.\n\n` +
        `Is it still available?\n\nMy size / questions:\n`
    );

    window.location.href =
      `mailto:SHOP_EMAIL_HERE?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Head>
        <title>Thrifted by the Bell | Keegan Bell — Portland, Oregon</title>
        <meta
          name="description"
          content="Meet Keegan Bell, Portland comedian and thrift enthusiast. Book a comedy show, discover vintage clothing, and shop Thrifted by the Bell."
        />
        <meta name="theme-color" content="#f5f0e7" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="site">
        <div className="announcement">
          PORTLAND, OREGON <span>✳</span> COMEDY, CLOTHES & GOOD FINDS
        </div>

        <header className="navbar">
          <a href="#home" className="wordmark">
            THRIFTED
            <br />
            <span>BY THE BELL.</span>
          </a>

          <nav>
            <a href="#about">THE GUY</a>
            <a href="#shop">THE THRIFT</a>
            <a href="#book">BOOK KEegan</a>
          </nav>

          <a href="#shop" className="nav-cta">
            SHOP FINDS ↗
          </a>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="green-dot" />
                YOUR LOCAL GUY, NOT YOUR LOCAL GURU
              </div>

              <h1>
                GOOD
                <br />
                <span className="outline">TASTE.</span>
                <br />
                BAD
                <br />
                <span className="highlight">INFLUENCE.</span>
              </h1>

              <p className="hero-description">
                Portland comedian. Professional thrifter.
                <br />
                Keegan Bell is making jokes and finding
                <br className="desktop-break" />
                clothes that deserve a second life.
              </p>

              <div className="hero-buttons">
                <a className="button button-dark" href="#book">
                  BOOK A SHOW <span>↗</span>
                </a>
                <a className="button button-outline" href="#shop">
                  SHOP VINTAGE <span>↓</span>
                </a>
              </div>

              <div className="hero-footnote">
                <span>KEEP PORTLAND WEIRD.</span>
                <span>KEEP YOUR OUTFIT WEIRDER.</span>
              </div>
            </div>

            <div className="hero-art">
              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=90"
                  alt="Live performance atmosphere"
                />
                <div className="image-overlay" />
                <div className="hero-sticker">
                  <span>100%</span>
                  <br />
                  PRE-LOVED
                  <br />
                  NONSENSE
                </div>
                <div className="image-caption">
                  <span>KEEGAN BELL</span>
                  <span>PDX, OR ★</span>
                </div>
              </div>
              <div className="vertical-note">COMEDY IS CHEAPER THAN THERAPY*</div>
              <div className="starburst">✳</div>
            </div>

            <div className="hero-bottom">
              <span>SCROLL FOR THE GOOD STUFF ↓</span>
              <span>EST. IN THE PACIFIC NORTHWEST</span>
            </div>
          </section>

          <section className="ticker" aria-label="Brand highlights">
            <div className="ticker-track">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i}>
                  LAUGH A LITTLE <b>✳</b> BUY SECONDHAND <b>✳</b> SUPPORT
                  LOCAL <b>✳</b> REPEAT OUTFITS ARE COOL <b>✳</b>
                </span>
              ))}
            </div>
          </section>

          <section className="about section" id="about">
            <div className="section-label">
              <span>01 / MEET THE BELL</span>
              <span>THE MAN. THE MYTH. THE THRIFT RECEIPT.</span>
            </div>

            <div className="about-grid">
              <div>
                <p className="mini-label">SO, WHO'S KEEGAN?</p>
                <h2>
                  A LITTLE
                  <br />
                  <span>OFFBEAT.</span>
                  <br />
                  A LOT OF
                  <br />
                  CHARACTER.
                </h2>
              </div>

              <div className="about-text">
                <p className="big-paragraph">
                  Meet Keegan Bell — a Portland local with a mic in one hand
                  and an eye for secondhand gold.
                </p>
                <p>
                  Whether he's working a room with his comedy or hunting for
                  a piece of clothing with a little history, Keegan is all
                  about personality over perfection.
                </p>
                <p>
                  This is a home for the shows, the finds, and the people who
                  appreciate things with a little character.
                </p>
                <a href="#book" className="text-link">
                  GOT A SHOW FOR HIM? LET'S TALK ↗
                </a>
              </div>
            </div>
          </section>

          <section className="shop-section section" id="shop">
            <div className="section-label">
              <span>02 / THE THRIFT DEPARTMENT</span>
              <span>SECONDHAND. FIRST-CLASS PERSONALITY.</span>
            </div>

            <div className="shop-heading">
              <div>
                <p className="mini-label">CURATED BY KEEGAN</p>
                <h2>
                  THE GOOD
                  <br />
                  <span>FINDS.</span>
                </h2>
              </div>
              <p className="shop-intro">
                Vintage pieces, unexpected gems, and clothes with more
                stories than your last situationship.
                <br />
                <strong>Every piece has its own vibe.</strong>
              </p>
            </div>

            <div className="product-grid">
              {clothes.map((item, index) => (
                <article className="product-card" key={item.name}>
                  <div className="product-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <span className="product-tag">{item.tag}</span>
                    <span className="product-number">
                      ITEM {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="product-info">
                    <div>
                      <p className="product-category">{item.category}</p>
                      <h3>{item.name}</h3>
                    </div>
                    <span className="price">${item.price}</span>
                  </div>
                  <button
                    className="product-button"
                    onClick={() => inquireAboutItem(item)}
                  >
                    ASK ABOUT THIS PIECE <span>↗</span>
                  </button>
                </article>
              ))}
            </div>

            <div className="shop-note">
              <span>✳</span>
              THESE ARE SAMPLE LISTINGS — REAL INVENTORY COMING SOON.
              <span>✳</span>
            </div>
          </section>

          <section className="booking-section" id="book">
            <div className="booking-inner">
              <div className="booking-copy">
                <p className="mini-label">03 / BOOKING INQUIRIES</p>
                <h2>
                  GOT A
                  <br />
                  <span>MIC?</span>
                  <br />
                  GOT A
                  <br />
                  <span>ROOM?</span>
                </h2>
                <p>
                  Comedy clubs, private events, local shows, weird gigs —
                  send the details. Let's see if we can make something happen.
                </p>

                <div className="booking-details">
                  <div>
                    <span className="detail-icon">↗</span>
                    <div>
                      <strong>LIVE COMEDY</strong>
                      <small>Shows, lineups & guest spots</small>
                    </div>
                  </div>
                  <div>
                    <span className="detail-icon">✳</span>
                    <div>
                      <strong>PRIVATE EVENTS</strong>
                      <small>Tell us about your event</small>
                    </div>
                  </div>
                </div>
              </div>

              <form className="booking-form" onSubmit={submitBooking}>
                <div className="form-heading">
                  <span>BOOKING FORM / PDX</span>
                  <span>● OPEN FOR INQUIRIES</span>
                </div>

                <label>
                  YOUR NAME *
                  <input
                    required
                    value={booking.name}
                    onChange={(e) =>
                      setBooking({ ...booking, name: e.target.value })
                    }
                    placeholder="Who are we talking to?"
                  />
                </label>

                <label>
                  EMAIL ADDRESS *
                  <input
                    type="email"
                    required
                    value={booking.email}
                    onChange={(e) =>
                      setBooking({ ...booking, email: e.target.value })
                    }
                    placeholder="you@example.com"
                  />
                </label>

                <label>
                  WHAT ARE YOU PLANNING? *
                  <select
                    value={booking.event}
                    onChange={(e) =>
                      setBooking({ ...booking, event: e.target.value })
                    }
                  >
                    <option>Comedy show</option>
                    <option>Private event</option>
                    <option>Corporate event</option>
                    <option>Guest spot / lineup</option>
                    <option>Other opportunity</option>
                  </select>
                </label>

                <label>
                  EVENT DATE
                  <input
                    type="date"
                    value={booking.date}
                    onChange={(e) =>
                      setBooking({ ...booking, date: e.target.value })
                    }
                  />
                </label>

                <label>
                  TELL US THE DETAILS *
                  <textarea
                    required
                    rows="4"
                    value={booking.details}
                    onChange={(e) =>
                      setBooking({ ...booking, details: e.target.value })
                    }
                    placeholder="Venue, location, audience, budget, anything we should know..."
                  />
                </label>

                <button className="button button-lime submit-button" type="submit">
                  SEND BOOKING INQUIRY <span>↗</span>
                </button>

                <p className="form-footnote">
                  This opens your email app with the inquiry ready to send.
                </p>
              </form>
            </div>
          </section>

          <section className="closing-banner">
            <span>GOOD JOKES.</span>
            <span className="closing-star">✳</span>
            <span>GREAT FINDS.</span>
            <span className="closing-star">✳</span>
            <span>NO BORING STUFF.</span>
          </section>
        </main>

        <footer className="footer">
          <a href="#home" className="wordmark footer-logo">
            THRIFTED
            <br />
            <span>BY THE BELL.</span>
          </a>
          <div className="footer-center">
            INDEPENDENTLY FUNNY. INTENTIONALLY THRIFTED.
            <br />
            PORTLAND, OREGON
          </div>
          <a href="#book" className="footer-link">
            GET IN TOUCH ↗
          </a>
          <div className="copyright">
            © {new Date().getFullYear()} THRIFTED BY THE BELL. MADE WITH
            CHARACTER.
          </div>
        </footer>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
        }

        body {
          margin: 0;
          background: #f5f0e7;
          color: #20211c;
          font-family: "DM Sans", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input,
        select,
        textarea {
          font: inherit;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
          outline: 3px solid #c5ef58;
          outline-offset: 3px;
        }

        img {
          display: block;
          width: 100%;
        }

        .site {
          overflow: hidden;
          width: 100%;
        }

        .announcement {
          min-height: 33px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          background: #22231f;
          color: #f5f0e7;
          font: 10px "DM Mono", monospace;
          letter-spacing: 1.4px;
          text-align: center;
          padding: 7px 12px;
        }

        .announcement span {
          color: #c5ef58;
        }

        .navbar {
          height: 88px;
          padding: 0 6.1%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #d9d3c8;
          gap: 25px;
        }

        .wordmark {
          font: 700 23px/0.9 "Space Grotesk", sans-serif;
          letter-spacing: -1.8px;
          flex-shrink: 0;
        }

        .wordmark span {
          color: #718c34;
        }

        .navbar nav {
          display: flex;
          align-items: center;
          gap: clamp(18px, 3vw, 45px);
        }

        .navbar nav a,
        .nav-cta {
          font: 10px "DM Mono", monospace;
          letter-spacing: 0.8px;
        }

        .navbar nav a:hover,
        .footer-link:hover {
          color: #718c34;
        }

        .nav-cta {
          background: #c5ef58;
          padding: 14px 17px;
          border: 1px solid #20211c;
          transition: transform 0.2s;
        }

        .nav-cta:hover,
        .button:hover {
          transform: translateY(-2px);
        }

        .hero {
          min-height: 670px;
          padding: 72px 8% 28px;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          align-items: center;
          column-gap: 5%;
          position: relative;
        }

        .hero-copy {
          position: relative;
          z-index: 2;
        }

        .eyebrow,
        .mini-label,
        .section-label,
        .hero-footnote,
        .hero-bottom,
        .vertical-note,
        .image-caption,
        .product-category,
        .product-tag,
        .product-number,
        .shop-note,
        .form-heading,
        .form-footnote,
        .footer-center,
        .copyright {
          font-family: "DM Mono", monospace;
        }

        .eyebrow {
          font-size: 10px;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 27px;
        }

        .green-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #87a743;
        }

        .hero h1 {
          font: 700 clamp(62px, 8vw, 112px)/0.83 "Space Grotesk",
            sans-serif;
          letter-spacing: -7px;
          margin: 0;
        }

        .outline {
          color: transparent;
          -webkit-text-stroke: 2px #20211c;
        }

        .highlight {
          display: inline-block;
          background: #c5ef58;
          padding: 0 9px 7px 4px;
          margin-top: 6px;
        }

        .hero-description {
          font-size: 14px;
          line-height: 1.9;
          margin: 28px 0 25px;
          color: #55564d;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .button {
          min-height: 49px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 23px;
          font: 11px "DM Mono", monospace;
          letter-spacing: 0.4px;
          border: 1px solid #20211c;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
        }

        .button-dark {
          background: #20211c;
          color: #f5f0e7;
        }

        .button-outline {
          background: transparent;
        }

        .button-outline:hover {
          background: #e7e0d4;
        }

        .hero-footnote {
          margin-top: 48px;
          max-width: 360px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          font-size: 8px;
          letter-spacing: 0.3px;
          color: #737369;
        }

        .hero-art {
          position: relative;
          padding: 0 13px 15px 0;
        }

        .hero-image {
          height: 485px;
          position: relative;
          overflow: hidden;
          background: #b8a58e;
          border: 1px solid #20211c;
        }

        .hero-image img {
          height: 100%;
          object-fit: cover;
          filter: saturate(0.7);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 45%,
            rgba(20, 20, 17, 0.68) 100%
          );
        }

        .hero-sticker {
          position: absolute;
          top: 20px;
          right: 18px;
          width: 105px;
          height: 105px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #c5ef58;
          transform: rotate(9deg);
          text-align: center;
          font: 9px/1.35 "DM Mono", monospace;
          border: 1px solid #20211c;
        }

        .hero-sticker span {
          font: 700 26px "Space Grotesk", sans-serif;
        }

        .image-caption {
          position: absolute;
          bottom: 19px;
          left: 20px;
          right: 20px;
          color: white;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .vertical-note {
          position: absolute;
          right: -17px;
          top: 90px;
          writing-mode: vertical-rl;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .starburst {
          position: absolute;
          bottom: -25px;
          left: -35px;
          font-size: 76px;
          color: #718c34;
          line-height: 1;
        }

        .hero-bottom {
          grid-column: 1 / -1;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 35px;
          padding-top: 18px;
          border-top: 1px solid #d9d3c8;
          color: #737369;
          font-size: 8px;
          letter-spacing: 0.8px;
        }

        .ticker {
          overflow: hidden;
          white-space: nowrap;
          background: #c5ef58;
          border-top: 1px solid #20211c;
          border-bottom: 1px solid #20211c;
          padding: 15px 0;
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 32s linear infinite;
        }

        .ticker-track span {
          flex-shrink: 0;
          font: 700 14px "Space Grotesk", sans-serif;
          letter-spacing: 1px;
          padding-right: 20px;
        }

        .ticker-track b {
          padding: 0 15px;
          font-size: 18px;
        }

        @keyframes ticker {
          to {
            transform: translateX(-50%);
          }
        }

        .section {
          padding: 88px 8%;
        }

        .section-label {
          padding-bottom: 15px;
          border-bottom: 1px solid #d9d3c8;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: #747469;
          font-size: 8px;
          letter-spacing: 0.6px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.75fr;
          gap: 12%;
          padding-top: 55px;
          align-items: center;
        }

        .mini-label {
          font-size: 9px;
          letter-spacing: 1px;
          color: #718c34;
          margin: 0 0 20px;
        }

        .about h2,
        .shop-heading h2,
        .booking-copy h2 {
          font: 700 clamp(48px, 6.5vw, 84px)/0.94 "Space Grotesk",
            sans-serif;
          letter-spacing: -5px;
          margin: 0;
        }

        .about h2 span,
        .shop-heading h2 span {
          color: #718c34;
        }

        .about-text {
          max-width: 440px;
          font-size: 13px;
          line-height: 1.9;
          color: #66665d;
        }

        .about-text .big-paragraph {
          color: #20211c;
          font: 600 21px/1.45 "Space Grotesk", sans-serif;
          letter-spacing: -0.5px;
        }

        .text-link {
          display: inline-block;
          margin-top: 20px;
          padding-bottom: 7px;
          border-bottom: 1px solid #718c34;
          font: 10px "DM Mono", monospace;
          color: #526b22;
        }

        .shop-section {
          background: #eae4d8;
        }

        .shop-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          padding: 45px 0 35px;
        }

        .shop-intro {
          max-width: 340px;
          color: #626257;
          font-size: 13px;
          line-height: 1.9;
          margin: 0 0 6px;
        }

        .shop-intro strong {
          color: #20211c;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
        }

        .product-card {
          min-width: 0;
        }

        .product-image {
          height: 310px;
          position: relative;
          overflow: hidden;
          background: #d3cabc;
          border: 1px solid #d3cabb;
        }

        .product-image img {
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #c5ef58;
          padding: 7px 8px;
          font-size: 8px;
          color: #20211c;
        }

        .product-number {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(245, 240, 231, 0.92);
          padding: 6px 8px;
          font-size: 8px;
        }

        .product-info {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          align-items: start;
          padding: 15px 0 12px;
        }

        .product-category {
          color: #77766b;
          font-size: 8px;
          letter-spacing: 0.3px;
          margin: 0 0 7px;
        }

        .product-info h3 {
          font: 600 15px "Space Grotesk", sans-serif;
          margin: 0;
        }

        .price {
          font: 600 15px "Space Grotesk", sans-serif;
        }

        .product-button {
          width: 100%;
          min-height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          background: transparent;
          border: 1px solid #bcb6aa;
          cursor: pointer;
          font: 9px "DM Mono", monospace;
          transition: background 0.2s;
        }

        .product-button:hover {
          background: #c5ef58;
          border-color: #20211c;
        }

        .shop-note {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 33px;
          font-size: 8px;
          letter-spacing: 0.5px;
          text-align: center;
          color: #77766b;
        }

        .shop-note span {
          color: #718c34;
          font-size: 15px;
        }

        .booking-section {
          background: #22231f;
          color: #f5f0e7;
          padding: 90px 8%;
        }

        .booking-inner {
          display: grid;
          grid-template-columns: 0.9fr 1fr;
          gap: 12%;
          max-width: 1180px;
          margin: auto;
          align-items: start;
        }

        .booking-copy .mini-label {
          color: #c5ef58;
        }

        .booking-copy h2 {
          font-size: clamp(58px, 7vw, 92px);
        }

        .booking-copy h2 span {
          color: #c5ef58;
        }

        .booking-copy > p:not(.mini-label) {
          max-width: 370px;
          color: #c1c0b6;
          font-size: 13px;
          line-height: 1.9;
          margin-top: 28px;
        }

        .booking-details {
          display: grid;
          gap: 20px;
          margin-top: 38px;
        }

        .booking-details > div {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .detail-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          color: #c5ef58;
          border: 1px solid #5c5d50;
          font-size: 17px;
        }

        .booking-details strong,
        .booking-details small {
          display: block;
        }

        .booking-details strong {
          font: 10px "DM Mono", monospace;
          margin-bottom: 5px;
        }

        .booking-details small {
          color: #a4a397;
          font-size: 11px;
        }

        .booking-form {
          background: #f5f0e7;
          color: #20211c;
          padding: clamp(22px, 4vw, 40px);
        }

        .form-heading {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 8px;
          letter-spacing: 0.2px;
          border-bottom: 1px solid #d9d3c8;
          padding-bottom: 20px;
          margin-bottom: 22px;
        }

        .form-heading span:last-child {
          color: #607d2a;
        }

        .booking-form label {
          display: block;
          margin-bottom: 17px;
          font: 9px "DM Mono", monospace;
          letter-spacing: 0.5px;
        }

        .booking-form input,
        .booking-form select,
        .booking-form textarea {
          width: 100%;
          display: block;
          margin-top: 9px;
          padding: 13px 12px;
          border: 1px solid #d4cec2;
          border-radius: 0;
          background: #faf7f0;
          color: #20211c;
          font: 12px "DM Sans", sans-serif;
          outline-offset: 2px;
        }

        .booking-form textarea {
          resize: vertical;
          min-height: 100px;
        }

        .booking-form input::placeholder,
        .booking-form textarea::placeholder {
          color: #969388;
        }

        .submit-button {
          width: 100%;
          background: #c5ef58;
          color: #20211c;
          justify-content: space-between;
        }

        .form-footnote {
          color: #77766b;
          font-size: 8px;
          line-height: 1.7;
          margin: 13px 0 0;
        }

        .closing-banner {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 17px;
          padding: 30px 15px;
          border-bottom: 1px solid #d9d3c8;
          font: 700 clamp(12px, 2vw, 20px) "Space Grotesk", sans-serif;
          letter-spacing: -0.5px;
        }

        .closing-star {
          color: #718c34;
        }

        .footer {
          padding: 35px 6.1% 20px;
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          align-items: center;
          gap: 20px;
        }

        .footer-logo {
          font-size: 19px;
        }

        .footer-center {
          text-align: center;
          font-size: 8px;
          line-height: 1.9;
          color: #77766b;
        }

        .footer-link {
          text-align: right;
          font: 10px "DM Mono", monospace;
        }

        .copyright {
          grid-column: 1 / -1;
          border-top: 1px solid #d9d3c8;
          padding-top: 17px;
          margin-top: 10px;
          font-size: 8px;
          color: #77766b;
          text-align: center;
        }

        @media (min-width: 1500px) {
          .hero,
          .section,
          .booking-section {
            padding-left: max(8%, calc((100% - 1250px) / 2));
            padding-right: max(8%, calc((100% - 1250px) / 2));
          }
        }

        @media (max-width: 950px) {
          .hero {
            padding-left: 5%;
            padding-right: 5%;
            column-gap: 4%;
          }

          .hero h1 {
            font-size: clamp(60px, 8.3vw, 80px);
            letter-spacing: -4px;
          }

          .hero-image {
            height: 410px;
          }

          .section,
          .booking-section {
            padding-left: 5%;
            padding-right: 5%;
          }

          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px 17px;
          }

          .product-image {
            height: 350px;
          }

          .booking-inner {
            gap: 6%;
          }
        }

        @media (max-width: 650px) {
          .announcement {
            font-size: 8px;
            letter-spacing: 0.6px;
          }

          .navbar {
            height: auto;
            min-height: 76px;
            padding: 16px 5%;
            flex-wrap: wrap;
            gap: 15px;
          }

          .wordmark {
            font-size: 21px;
          }

          .navbar nav {
            order: 3;
            width: 100%;
            justify-content: space-between;
            gap: 12px;
            padding-top: 12px;
            border-top: 1px solid #d9d3c8;
          }

          .navbar nav a {
            font-size: 9px;
          }

          .nav-cta {
            font-size: 9px;
            padding: 11px;
          }

          .hero {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            padding: 48px 6% 24px;
            gap: 38px;
          }

          .eyebrow {
            font-size: 8px;
            margin-bottom: 22px;
          }

          .hero h1 {
            font-size: clamp(64px, 16vw, 100px);
            letter-spacing: -5px;
          }

          .hero-description {
            font-size: 13px;
          }

          .desktop-break {
            display: none;
          }

          .hero-footnote {
            margin-top: 32px;
          }

          .hero-art {
            margin: 0 12px;
          }

          .hero-image {
            height: 420px;
          }

          .hero-bottom {
            margin-top: 0;
            font-size: 7px;
          }

          .section {
            padding: 60px 6%;
          }

          .section-label {
            font-size: 7px;
            line-height: 1.7;
          }

          .section-label span:last-child {
            text-align: right;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            padding-top: 35px;
          }

          .about h2,
          .shop-heading h2 {
            font-size: clamp(54px, 13vw, 76px);
            letter-spacing: -4px;
          }

          .about-text .big-paragraph {
            font-size: 19px;
          }

          .shop-heading {
            display: block;
            padding: 35px 0 25px;
          }

          .shop-intro {
            margin-top: 22px;
          }

          .product-grid {
            gap: 25px 12px;
          }

          .product-image {
            height: clamp(190px, 58vw, 310px);
          }

          .product-info {
            gap: 4px;
            flex-wrap: wrap;
          }

          .product-info h3 {
            font-size: 13px;
          }

          .product-category {
            font-size: 7px;
          }

          .price {
            font-size: 13px;
          }

          .product-button {
            font-size: 8px;
            padding: 0 7px;
          }

          .shop-note {
            font-size: 7px;
            line-height: 1.7;
          }

          .booking-section {
            padding: 60px 6%;
          }

          .booking-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .booking-copy h2 {
            font-size: clamp(68px, 15vw, 90px);
            letter-spacing: -4px;
          }

          .booking-form {
            padding: 22px 17px;
          }

          .closing-banner {
            gap: 9px;
            padding: 25px 8px;
          }

          .footer {
            padding: 30px 6% 18px;
            grid-template-columns: 1fr 1fr;
            gap: 22px 10px;
          }

          .footer-center {
            grid-column: 1 / -1;
            grid-row: 2;
            text-align: left;
          }

          .footer-link {
            grid-column: 2;
            grid-row: 1;
          }

          .copyright {
            font-size: 7px;
            line-height: 1.7;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .ticker-track {
            animation: none;
          }

          *,
          *::before,
          *::after {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
