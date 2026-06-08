import './App.css'

export default function App() {
  return (
    <div className="portfolio">

      {/* Nav */}
      <nav className="navbar">
        <span className="nav-logo">Ryan Alahyari <span className="nav-dot">// QSS20</span></span>
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
        <div className="hero-tag">Dartmouth College &mdash; QSS 20 Final Project</div>
        <h1 className="hero-title">
          Does Rail Transit Expansion<br />
          <span className="hero-accent">Impact Racial Demographics?</span>
        </h1>
        <p className="hero-sub">
          A case study of the Hudson-Bergen Light Rail in Hudson County, NJ &mdash; 2010 to 2020
        </p>
        <div className="hero-divider" />
      </header>

      {/* Background */}
      <section className="section">
        <div className="section-label">01 &mdash; Background</div>
        <h2>Gentrification &amp; Transit</h2>
        <p>
          American cities have undergone dramatic demographic transformation since the late 20th
          century as urban areas have become increasingly desirable, displacing established
          lower-income minority communities. One study estimates that as many as{' '}
          <strong>500,000 Black Americans</strong> have been displaced since 1980 due to
          gentrification.
        </p>
        <p>
          Simultaneously, cities have invested heavily in expanding rail transit. While rail
          transit brings real community benefits, research has established a troubling link between
          new transit infrastructure and gentrification — by incentivizing high-end development,
          transit expansion can displace the very communities it aims to serve.
        </p>
        <blockquote className="callout">
          This study asks: does the Hudson-Bergen Light Rail, a system opened in phases throughout
          Hudson County, NJ during the 2000s, correlate with measurable racial demographic shifts
          from 2010 to 2020 — and if so, through what mechanisms?
        </blockquote>
      </section>

      {/* Data & Method */}
      <section className="section">
        <div className="section-label">02 &mdash; Data &amp; Methodology</div>
        <h2>Isolating the HBLR Effect</h2>
        <p>
          The analysis uses census tract-level data from the <strong>2010 and 2020 U.S. Census</strong>{' '}
          and American Community Surveys, measuring percentage point changes in racial composition
          across five groups: <span className="tag">Black</span> <span className="tag">White</span>{' '}
          <span className="tag">Asian</span> <span className="tag">Hispanic</span>{' '}
          <span className="tag">Other</span>.
        </p>
        <p>
          To isolate the HBLR's effect, each tract is also classified by proximity to the{' '}
          <strong>PATH</strong> — an established heavy rail line running through Hudson County.
          This produces four groups:
        </p>
        <div className="groups-grid">
          <div className="group-card hblr">
            <div className="group-icon">🟢</div>
            <div className="group-name">HBLR Only</div>
            <div className="group-desc">Near HBLR, not PATH — the key treatment group</div>
          </div>
          <div className="group-card path">
            <div className="group-icon">🔵</div>
            <div className="group-name">PATH Only</div>
            <div className="group-desc">Near PATH, not HBLR</div>
          </div>
          <div className="group-card both">
            <div className="group-icon">⚪</div>
            <div className="group-name">Near Both</div>
            <div className="group-desc">Near both HBLR and PATH</div>
          </div>
          <div className="group-card neither">
            <div className="group-icon">⬛</div>
            <div className="group-name">Near Neither</div>
            <div className="group-desc">Control group — no rail access</div>
          </div>
        </div>
        <p className="note">
          Comparing <strong>HBLR Only</strong> tracts to the <strong>Near Neither</strong> control
          allows us to measure the HBLR's effect independent of the PATH's long-established presence.
          An OLS regression controls for 2010 median household income and distance to Downtown Jersey City.
        </p>
      </section>

      {/* Maps */}
      <section className="section">
        <div className="section-label">03 &mdash; Spatial Overview</div>
        <h2>Racial Change Across Hudson County</h2>
        <p>
          The maps below display the percentage point change in each racial group's share of the
          population for every census tract in Hudson County from 2010 to 2020. The{' '}
          <span className="line-green">green line</span> is the HBLR;{' '}
          the <span className="line-blue">blue line</span> is the PATH.
          Warmer colors indicate increases; cooler colors indicate decreases.
        </p>
        <figure className="fig-card wide">
          <img src="/race_pct_change_maps.png" alt="Choropleth maps of racial % point change by census tract" />
          <figcaption>
            Fig. 1 &mdash; Racial % Point Change by Census Tract, 2010–2020. One map per racial group.
            HBLR in green; PATH in blue.
          </figcaption>
        </figure>

        <p style={{marginTop: '32px'}}>
          The bar chart below shows the mean percentage point change for each racial group broken
          out by transit proximity category, providing a high-level preview of the patterns the
          regression will test.
        </p>
        <figure className="fig-card">
          <img src="/hudsonrace1.png" alt="Bar chart of racial demographic change by transit proximity" />
          <figcaption>
            Fig. 2 &mdash; Mean Percentage Point Change in Racial Demographics by Transit Proximity Group (2010–2020).
          </figcaption>
        </figure>
      </section>

      {/* OLS Results */}
      <section className="section">
        <div className="section-label">04 &mdash; Regression Results</div>
        <h2>Key Findings</h2>
        <p>
          The OLS regression reveals two statistically significant findings for{' '}
          <strong>HBLR Only</strong> tracts relative to the control:
        </p>
        <div className="findings-grid">
          <div className="finding-card negative">
            <div className="finding-race">Black Population</div>
            <div className="finding-result">
              &minus;1.81 pp &mdash; Significant <strong>decrease</strong>
            </div>
            <div className="finding-interp">
              Consistent with the existing literature. The HBLR corridor shows a meaningful
              decline in the Black population share, suggesting the light rail may be contributing
              to displacement of Black residents — likely through rising housing costs.
            </div>
          </div>
          <div className="finding-card positive">
            <div className="finding-race">Hispanic Population</div>
            <div className="finding-result">
              +2.31 pp &mdash; Significant <strong>increase</strong>
            </div>
            <div className="finding-interp">
              This result <em>contradicts</em> the literature. Hispanic individuals had previously
              been identified as vulnerable to transit-induced displacement, but HBLR-only tracts
              show a significant increase in the Hispanic population share. The mechanism is unclear.
            </div>
          </div>
        </div>
        <p className="note">
          White and Asian populations showed no statistically significant change in HBLR-only tracts.
          Controls: 2010 median income and distance to the CBD both had significant effects across
          racial groups, broadly consistent with prior gentrification literature.
        </p>
        <figure className="fig-card" style={{marginTop: '28px'}}>
          <img src="/coefficient_plot_controlled.png" alt="Coefficient plot of OLS regression results" />
          <figcaption>
            Fig. 3 &mdash; Coefficient Plot: Effect of Transit Proximity on Racial % Point Change
            (controlling for baseline income and distance to CBD). Points are coefficients;
            bars are 95% confidence intervals. Reference group: Near Neither.
          </figcaption>
        </figure>
        <figure className="fig-card" style={{marginTop: '20px'}}>
          <img src="/regression_table_minimal_v6.png" alt="OLS regression results table" />
          <figcaption>
            Fig. 4 &mdash; OLS Regression Table: Full results by racial group (standard errors in parentheses).
          </figcaption>
        </figure>
      </section>

      {/* Mediation */}
      <section className="section">
        <div className="section-label">05 &mdash; Mediation Analysis</div>
        <h2>What's Driving the Change?</h2>
        <p>
          To probe the mechanisms behind these shifts, the study tests three potential mediators —{' '}
          <strong>income change</strong>, <strong>rental price change</strong>, and{' '}
          <strong>home value change</strong> — by re-running the regression with each added as a
          control. If a previously significant coefficient loses significance after adding a
          mediator, that variable is likely part of the causal pathway.
        </p>
        <p>
          Notably, the <strong>decrease in the Black population in HBLR-only tracts did not lose
          statistical significance</strong> after any of the three mediators were introduced. This
          suggests that rising cost of living alone may not fully explain Black displacement near
          the HBLR — non-economic factors such as cultural or social neighborhood shifts may also
          be at play.
        </p>
        <figure className="fig-card">
          <img src="/mediation_all_plot_v7.png" alt="Mediation analysis coefficient plots" />
          <figcaption>
            Fig. 5 &mdash; Transit Coefficients Before and After Mediators. Rows: income change,
            rent change, home value change. Green = significant (p &lt; 0.05); grey = not significant.
            Dark bars = without mediator; light bars = with mediator.
          </figcaption>
        </figure>
      </section>

      {/* Discussion */}
      <section className="section">
        <div className="section-label">06 &mdash; Discussion</div>
        <h2>What Does This Tell Us?</h2>
        <p>
          The findings paint a complex picture. The HBLR's correlation with declining Black
          population shares aligns with the transit-displacement literature, but the simultaneous
          increase in Hispanic population shares is a counterintuitive result that warrants further
          investigation. The mediation analysis also complicates the narrative — standard cost-of-living
          explanations don't fully account for the observed Black displacement, pointing toward
          mechanisms the existing literature has yet to fully explore.
        </p>
        <p>
          Some caveats apply: the PATH-only and near-both categories have small tract samples
          (due to few PATH stations in Hudson County), making those coefficients less reliable.
          Additionally, census tracts can be large enough to include both areas near and far from
          stations, which may underestimate transit effects. The phased opening of HBLR stations —
          correlated with distance to the CBD — also introduces a confound that couldn't be
          fully controlled for without introducing multicollinearity.
        </p>
        <p>
          Future work should examine additional economic and cultural mediators, and consider
          finer spatial units of analysis to better isolate station-level effects.
        </p>
      </section>

      <footer className="footer">
        <p>Ryan Alahyari &middot; Dartmouth College &middot; Government &middot; QSS 20</p>
        <a href="https://github.com/RyAlah/QSS20_Alahyari_FinalProject" target="_blank" rel="noopener noreferrer">
          View Full Project &amp; Code on GitHub &rarr;
        </a>
      </footer>

    </div>
  )
}
