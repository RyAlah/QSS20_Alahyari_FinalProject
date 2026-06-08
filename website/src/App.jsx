import './App.css'

const figures = [
  {
    src: '/hudsonrace1.png',
    caption: 'Percentage Point Change in Racial Demographics by Transit Proximity (2010–2020)',
  },
  {
    src: '/race_pct_change_maps.png',
    caption: 'Choropleth Maps: Racial % Point Change Across Hudson County Census Tracts (2010–2020)',
  },
  {
    src: '/coefficient_plot_controlled.png',
    caption: 'Coefficient Plot: Transit Access Effect on Racial Change (Controlling for Income & Distance to CBD)',
  },
  {
    src: '/regression_table_minimal_v6.png',
    caption: 'Regression Table: OLS Results by Racial Group',
  },
  {
    src: '/mediation_all_plot_v7.png',
    caption: 'Mediation Analysis: Transit Coefficients Before and After Economic Mediators',
  },
]

export default function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <div className="hero-inner">
          <h1>Ryan Alahyari</h1>
          <p className="subtitle">Government Student &middot; Dartmouth College</p>
          <a
            className="github-btn"
            href="https://github.com/RyAlah/QSS20_Alahyari_FinalProject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
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
            View Project on GitHub
          </a>
        </div>
      </header>

      <section className="section about">
        <h2>About</h2>
        <p>
          I am a student at Dartmouth College studying Government. This portfolio showcases my
          research project investigating how proximity to public transit infrastructure &mdash;
          specifically the PATH train and Hudson-Bergen Light Rail (HBLR) &mdash; relates to racial
          demographic shifts in Hudson County, NJ between 2010 and 2020.
        </p>
      </section>

      <section className="section project">
        <h2>Project: Transit Access &amp; Racial Demographics in Hudson County, NJ</h2>
        <p>
          Using U.S. Census data and spatial analysis, this project examines whether census tracts
          near transit stations experienced different patterns of racial demographic change compared
          to tracts without transit access. The analysis incorporates OLS regression, mediation
          analysis, and choropleth mapping to explore the relationship between transit infrastructure
          and neighborhood composition.
        </p>
      </section>

      <section className="section figures">
        <h2>Figures</h2>
        <div className="figures-grid">
          {figures.map((fig) => (
            <figure key={fig.src} className="fig-card">
              <img src={fig.src} alt={fig.caption} />
              <figcaption>{fig.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          &copy; 2025 Ryan Alahyari &middot;{' '}
          <a href="https://github.com/RyAlah" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}
