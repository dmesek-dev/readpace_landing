import { PhoneFrame } from "@/components/PhoneFrame";
import { StoreBadges } from "@/components/StoreBadges";
import { StructuredData } from "@/components/StructuredData";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import {
  ArrowIcon,
  BookIcon,
  BrainIcon,
  CheckIcon,
  LockIcon,
  ScanIcon,
  TargetIcon,
  TimerIcon,
  iconMap,
} from "@/components/Icons";
import {
  facts,
  faqs,
  features,
  hasStoreLinks,
  pricing,
  screens,
  steps,
} from "@/content/site";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> A LITTLE MORE FROM EVERY PAGE
            </p>
            <h1 id="hero-heading">
              Find your pace.
              <br />
              Remember <em>more.</em>
            </h1>
            <p className="hero-description">
              Meet the reading speed app for your real books. Track your words
              per minute, see what sticks, and find the pace that feels like
              you.
            </p>
            <div className="hero-actions">
              <a className="button button-brand" href="/reading-speed-test">
                Find my reading speed <ArrowIcon aria-hidden="true" />
              </a>
              <a className="text-link" href="#how">
                Meet ReadPace <span aria-hidden="true">↘</span>
              </a>
            </div>
            <p className="microcopy">
              Free online WPM test. No account needed.
            </p>
            <div className="hero-promise">
              <div className="mini-books" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p>
                Your book. Your rhythm.
                <br />
                <strong>A little insight goes a long way.</strong>
              </p>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-orbit orbit-one" aria-hidden="true" />
            <div className="art-orbit orbit-two" aria-hidden="true" />
            <span className="art-star star-one" aria-hidden="true">
              ✳
            </span>
            <span className="art-star star-two" aria-hidden="true">
              ✳
            </span>
            <span className="art-note">
              A new chapter in
              <br />
              <em>your reading life.</em>
            </span>
            <PhoneFrame screen={screens.home} className="hero-phone" priority />
            <div className="insight-float">
              <span className="insight-icon">
                <BrainIcon aria-hidden="true" />
              </span>
              <div>
                <span>YOUR READING SWEET SPOT</span>
                <strong>
                  300–325 <small>WPM</small>
                </strong>
                <p>
                  <span className="tiny-dot" /> 100% recall in this reader’s
                  sessions
                </p>
              </div>
            </div>
            <span className="art-caption">
              REAL APP. ONE READER’S ACTUAL DATA.
            </span>
          </div>
        </section>
        <div className="benefit-strip shell" aria-label="ReadPace highlights">
          <span>
            <BookIcon aria-hidden="true" /> Made for printed books
          </span>
          <span>
            <TargetIcon aria-hidden="true" /> Reading speed + comprehension
          </span>
          <span>
            <LockIcon aria-hidden="true" /> Page photos stay on your phone
          </span>
        </div>
        <section id="how" className="section shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">LESS SETUP. MORE STORY.</p>
              <h2>
                Your next chapter.
                <br />
                Three simple steps.
              </h2>
            </div>
            <p>
              Keep reading the books you love.
              <br />
              ReadPace takes care of the numbers.
            </p>
          </div>
          <ol className="steps-grid">
            {steps.map((step, index) => {
              const Icon = [TimerIcon, ScanIcon, BrainIcon][index];
              return (
                <li key={step.n} className="step-card">
                  <div className="step-top">
                    <span className="step-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="step-number">{step.n}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <div
                    className={`step-visual step-visual-${index}`}
                    aria-hidden="true"
                  >
                    {index === 0 ? (
                      <>
                        <span className="timer-label">
                          A little time, just for reading
                        </span>
                        <span className="timer-digits">
                          12<span>:</span>48
                        </span>
                        <span className="timer-control">Ⅱ</span>
                      </>
                    ) : index === 1 ? (
                      <div className="scan-paper">
                        <span>One more page.</span>
                        <i />
                        <i />
                        <i />
                        <i />
                        <div className="scan-line" />
                        <b>
                          Words counted on your phone <CheckIcon />
                        </b>
                      </div>
                    ) : (
                      <div className="recall-preview">
                        <span>YOUR SESSION</span>
                        <div>
                          <strong>WPM</strong>
                          <span>+</span>
                          <strong>Recall</strong>
                        </div>
                        <p>The pace. And what stayed with you.</p>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
        <section id="sweet-spot" className="sweet-section">
          <div className="shell sweet-grid">
            <div>
              <p className="eyebrow">FAST IS GOOD. UNDERSTOOD IS BETTER.</p>
              <h2 id="sweet-spot-heading">
                There’s a pace
                <br />
                where it <em>clicks.</em>
              </h2>
              <p>
                Finishing a chapter feels good. Remembering it tomorrow feels
                even better. ReadPace connects your reading speed with your quiz
                scores to reveal your personal reading sweet spot.
              </p>
              <ul className="check-list">
                <li>
                  <CheckIcon aria-hidden="true" /> Discover the WPM band where
                  your recall peaks
                </li>
                <li>
                  <CheckIcon aria-hidden="true" /> See when going faster costs
                  you understanding
                </li>
                <li>
                  <CheckIcon aria-hidden="true" /> Unlock your first insight
                  after {facts.sweetSpotMinTestedSessions} tested sessions
                </li>
              </ul>
              <a href="#pricing" className="text-link light-link">
                Find your sweet spot with the free plan{" "}
                <ArrowIcon aria-hidden="true" />
              </a>
            </div>
            <figure className="sweet-chart">
              <div className="chart-header">
                <span>
                  <span className="chart-dot" /> THE BIG PICTURE
                </span>
                <TargetIcon aria-hidden="true" />
              </div>
              <h3>More speed. Or more story?</h3>
              <p>Recall by reading speed</p>
              <div className="chart-bars">
                {[
                  { label: "275–300", value: 60 },
                  { label: "300–325", value: 100 },
                  { label: "325–350", value: 50 },
                ].map((band, index) => (
                  <div
                    className={`chart-column ${index === 1 ? "is-peak" : ""}`}
                    key={band.label}
                  >
                    <strong>{band.value}%</strong>
                    <div
                      className="bar"
                      style={{ height: `${band.value * 1.55}px` }}
                    >
                      {index === 1 && (
                        <span>
                          YOUR
                          <br />
                          SWEET SPOT
                        </span>
                      )}
                    </div>
                    <span>{band.label}</span>
                  </div>
                ))}
              </div>
              <div className="chart-axis">READING SPEED · WORDS PER MINUTE</div>
              <figcaption>
                Example from the app’s captured data. Individual results vary;
                this is not a target or a prediction.
              </figcaption>
            </figure>
          </div>
        </section>
        <section id="features" className="section shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GET TO KNOW YOUR READING SELF</p>
              <h2>
                Small insights.
                <br />A richer reading habit.
              </h2>
            </div>
            <p>
              From the first page to the last chapter,
              <br />
              see your reading from a new angle.
            </p>
          </div>
          <div className="feature-showcase">
            <div className="feature-main">
              <div>
                <span className="eyebrow">YOUR PROGRESS, AT A GLANCE</span>
                <h3>
                  A reading habit
                  <br />
                  you can actually see.
                </h3>
                <p>
                  Your WPM over time, the books on your shelf, and the sessions
                  that brought you here.
                </p>
              </div>
              <PhoneFrame screen={screens.stats} className="stats-phone" />
            </div>
            <div className="feature-side">
              <div className="feature-quote">
                <BookIcon aria-hidden="true" />
                <p>
                  Keep the paper.
                  <br />
                  <em>Add perspective.</em>
                </p>
                <span>Made for physical books with Latin-script text.</span>
              </div>
              <div className="privacy-card">
                <LockIcon aria-hidden="true" />
                <h3>Your pages stay yours.</h3>
                <p>
                  Page photos are processed on your phone. Optional
                  comprehension quizzes send recognised text to an AI service.
                </p>
                <a className="text-link" href="/privacy">
                  How privacy works <ArrowIcon aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="feature-list">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.title}>
                  <Icon aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="try-section shell">
          <div>
            <p className="eyebrow">A LITTLE CURIOUS?</p>
            <h2>
              How fast <em>do</em> you read?
            </h2>
            <p>
              Take a short reading speed test and check what you remember. Your
              first WPM result is a good place to start.
            </p>
          </div>
          <div>
            <a className="button button-dark" href="/reading-speed-test">
              Try the free reading test <ArrowIcon aria-hidden="true" />
            </a>
            <span>No download. No sign-up. Just you and a short story.</span>
          </div>
        </section>
        <section id="pricing" className="section shell">
          <div className="center-heading">
            <p className="eyebrow">ROOM TO FIND YOUR RHYTHM</p>
            <h2>
              Start with a book.
              <br />
              And a free plan.
            </h2>
            <p>Get to know your pace before you decide to go further.</p>
          </div>
          <div className="pricing-grid">
            {[pricing.free, pricing.premium].map((plan, index) => (
              <article
                key={plan.name}
                className={`price-card ${index === 0 ? "price-free" : ""}`}
              >
                <div className="price-heading">
                  <h3>{plan.name}</h3>
                  <span>
                    {index === 0
                      ? "A GOOD PLACE TO START"
                      : "FOR YOUR WHOLE SHELF"}
                  </span>
                </div>
                <p className={`price ${index === 1 ? "price-premium" : ""}`}>
                  {plan.price}
                  {index === 0 && <span> / no time limit</span>}
                </p>
                <p className="price-note">{plan.note}</p>
                <ul className="check-list">
                  {plan.items.map((item) => (
                    <li key={item}>
                      <CheckIcon aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className={`button ${index === 0 ? "button-brand" : "button-outline"}`}
                  href="#get"
                >
                  {hasStoreLinks
                    ? index === 0
                      ? "Get ReadPace free"
                      : "Explore Premium in the app"
                    : "See app availability"}
                  <ArrowIcon aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            Premium prices appear in your local currency in the app.
            Subscriptions are managed through the App Store or Google Play.
          </p>
        </section>
        <section className="resources-section shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE READER’S NOTEBOOK</p>
              <h2>A few good things to know.</h2>
            </div>
          </div>
          <div className="resource-grid">
            <a href="/wpm-calculator">
              <span>THE NUMBERS</span>
              <h3>
                What is WPM?
                <br />
                Let’s work out yours.
              </h3>
              <p>
                Calculate words per minute from your word count and reading
                time.
              </p>
              <ArrowIcon aria-hidden="true" />
            </a>
            <a href="/average-reading-speed">
              <span>THE CONTEXT</span>
              <h3>
                What’s an average
                <br />
                reading speed?
              </h3>
              <p>
                A research-based guide to reading pace, and what your number
                means.
              </p>
              <ArrowIcon aria-hidden="true" />
            </a>
            <a href="/reading-speed-test">
              <span>THE STARTING POINT</span>
              <h3>
                One short story.
                <br />
                Your reading speed.
              </h3>
              <p>
                Try a timed passage, then answer three questions about what you
                read.
              </p>
              <ArrowIcon aria-hidden="true" />
            </a>
          </div>
        </section>
        <section id="faq" className="section shell faq-section">
          <div>
            <p className="eyebrow">BEFORE YOU TURN THE PAGE</p>
            <h2>
              Good questions.
              <br />
              Straight answers.
            </h2>
            <p>
              Still curious about something?
              <br />
              <a href="/support" className="text-link">
                We’re here to help <ArrowIcon aria-hidden="true" />
              </a>
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="get" className="get-section shell">
          <span className="get-star" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">YOUR NEXT GOOD CHAPTER STARTS HERE</p>
          <h2>
            Your book is waiting.
            <br />
            <em>Find your pace.</em>
          </h2>
          <p>
            {hasStoreLinks
              ? "Bring a little more understanding to the books you already love."
              : "ReadPace is coming to iOS and Android. Find your reading speed online while the app gets ready for its next chapter."}
          </p>
          <StoreBadges className="justify-center" />
          <a className="text-link" href="/reading-speed-test">
            {hasStoreLinks
              ? "Or try the free online reading test"
              : "Try the free online reading test now"}
            <ArrowIcon aria-hidden="true" />
          </a>
        </section>
      </main>
      <SiteFooter />
      <StructuredData />
    </>
  );
}
