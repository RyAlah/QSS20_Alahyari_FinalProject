import './App.css'

export default function App() {
  return (
    <div className="portfolio">

      {/* Nav */}
      <nav className="navbar">
        <span className="nav-logo">RyAlah <span className="nav-dot">// QSS20</span></span>
        <a
          className="nav-github"
          href="https://github.com/RyAlah/QSS20_Alahyari_FinalProject"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
              -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
              2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
              0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
              .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82
              .44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65
              3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38
              A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-tag">QSS 20 &mdash; Final Project</div>
        <h1 className="hero-title">
          Does Rail Transit Expansion<br />
          <span className="hero-accent">Impact Racial Demographics?</span>
        </h1>
        <p className="hero-sub">
          Ryan Alahyari &middot; Dartmouth College &middot; Government
        </p>
        <div className="hero-divider" />
      </header>

      {/* Research Question */}
      <section className="section">
        <div className="section-label">01 &mdash; Research Question</div>
        <h2>The Question</h2>
        <p>
          Rail transit projects are often championed as engines of economic development and urban
          revitalization. But who actually benefits — and who gets left behind? This project asks:
        </p>
        <blockquote className="callout">
          Does rail transit expansion impact racial demographics in surrounding neighborhoods?
          And if so, <em>how?</em>
        </blockquote>
      </section>

      {/* Context */}
      <section className="section">
        <div className="section-label">02 &mdash; Context</div>
        <h2>The Hudson-Bergen Light Rail</h2>
        <p>
          This project focuses on the <strong>Hudson-Bergen Light Rail (HBLR)</strong>, a light
          rail system that opened in phases throughout the 2000s in Hudson County, NJ. Using
          census tract-level data from the <strong>2010 and 2020 U.S. Census</strong> and American
          Community Surveys, I measure percentage point changes in racial demographics over that
          decade across five categories: <span className="tag">Black</span> <span className="tag">White</span> <span className="tag">Asian</span> <span className="tag">Hispanic</span> <span className="tag">Other</span>.
        </p>
      </section>

      {/* Methodology */}
      <section className="section">
        <div className="section-label">03 &mdash; Methodology</div>
        <h2>Grouping Tracts by Transit Access</h2>
        <p>
          To isolate the effect of the HBLR, I also account for the <strong>PATH</strong> — an
          established heavy rail line that runs through Hudson County. Each census tract is assigned
          to one of four groups based on proximity to HBLR and PATH stations:
        </p>
        <div className="groups-grid">
          <div className="group-card hblr">
            <div className="group-icon">🟢</div>
            <div className="group-name">HBLR Only</div>
            <div className="group-desc">Near HBLR stations, not PATH</div>
          </div>
          <div className="group-card path">
            <div className="group-icon">🔵</div>
            <div className="group-name">PATH Only</div>
            <div className="group-desc">Near PATH stations, not HBLR</div>
          </div>
          <div className="group-card both">
            <div className="group-icon">⚪</div>
            <div className="group-name">Near Both</div>
            <div className="group-desc">Near both HBLR and PATH stations</div>
          </div>
          <div className="group-card neither">
            <div className="group-icon">⬛</div>
            <div className="group-name">Near Neither</div>
            <div className="group-desc">Control group — no nearby rail access</div>
          </div>
        </div>
        <p className="note">
          Comparing the <strong>HBLR Only</strong> group against the <strong>Near Neither</strong>{' '}
          control group allows us to isolate the HBLR's effect from the PATH's long-established
          influence.
        </p>
      </section>

      {/* Maps */}
      <section className="section">
        <div className="section-label">04 &mdash; Spatial Overview</div>
        <h2>Mapping Racial Change Across Hudson County</h2>
        <p>
          The figure below shows five choropleth maps — one per racial group — displaying the
          percentage point change in population share for each census tract between 2010 and 2020.
          The <span className="line-green">green line</span> is the HBLR and the{' '}
          <span className="line-blue">blue line</span> is the PATH. Warmer colors indicate
          increases; cooler colors indicate decreases.
        </p>
        <figure className="fig-card wide">
          <img src="/race_pct_change_maps.png" alt="Choropleth maps of racial % point change by tract" />
          <figcaption>
            Figure 1 &mdash; Racial % Point Change by Census Tract (2010–2020). Each map represents
            one racial group. HBLR shown in green; PATH shown in blue.
          </figcaption>
        </figure>
      </section>

      {/* Regression */}
      <section className="section">
        <div className="section-label">05 &mdash; Analysis</div>
        <h2>OLS Regression Results</h2>
        <p>
          I run an OLS regression using the <strong>Near Neither</strong> group as the reference
          category (control), with the other three transit groups as treatments. The outcome variable
          is the percentage point change in each racial group's population share from 2010 to 2020.
          The model controls for baseline race, median income, and distance to the CBD.
        </p>
        <p>
          The results reveal two striking findings for the <strong>HBLR Only</strong> tracts:
        </p>
        <div className="findings-grid">
          <div className="finding-card negative">
            <div className="finding-race">Black Population</div>
            <div className="finding-result">Significant <strong>decrease</strong></div>
            <div className="finding-interp">
              Consistent with the literature on transit-induced displacement. The HBLR corridor
              shows a meaningful decline in Black population share relative to the control group.
            </div>
          </div>
          <div className="finding-card positive">
            <div className="finding-race">Hispanic Population</div>
            <div className="finding-result">Significant <strong>increase</strong></div>
            <div className="finding-interp">
              This result <em>contradicts</em> the existing literature, which typically predicts
              displacement of minority groups near new transit. The mechanism behind this increase
              warrants further investigation.
            </div>
          </div>
        </div>
        <figure className="fig-card">
          <img src="/coefficient_plot_controlled.png" alt="Coefficient plot of OLS regression results" />
          <figcaption>
            Figure 2 &mdash; Coefficient Plot: Effect of Transit Access on Racial % Point Change
            (controlling for baseline race, income, and distance to CBD). Points are coefficients;
            bars are 95% confidence intervals. Reference group: Near Neither.
          </figcaption>
        </figure>
      </section>

      <footer className="footer">
        <p>Ryan Alahyari &middot; Dartmouth College &middot; QSS 20</p>
        <a href="https://github.com/RyAlah/QSS20_Alahyari_FinalProject" target="_blank" rel="noopener noreferrer">
          View Full Project on GitHub &rarr;
        </a>
      </footer>

    </div>
  )
}
