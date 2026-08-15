<script setup>
const technologies = [
  'Python',
  'JavaScript',
  'XML',
  'RPA',
  'Elasticsearch',
  'WCAG',
]
</script>

<template>
  <div class="project-detail">
    <header class="navbar">
      <div class="container navbar-inner">
        <router-link to="/" class="brand">
          <span class="brand-mark">KV</span>
          <span class="brand-name">Kimmy Visscher</span>
        </router-link>

        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/projecten">Projecten</router-link>
          <router-link to="/#ervaring">Ervaring</router-link>
          <router-link to="/#over-mij">Over mij</router-link>
          <router-link to="/#contact">Contact</router-link>
        </nav>
      </div>
    </header>

    <main>
      <!-- HERO -->
      <section class="case-hero">
        <div class="container">
          <router-link
            to="/projecten"
            class="back-link"
          >
            ← Terug naar projecten
          </router-link>

          <div class="case-hero-grid">
            <div>
              <p class="section-label">
                Afstudeerproject • 2026
              </p>

              <h1>
                Gemeente
                <span>Emmen</span>
              </h1>

              <p class="case-lead">
                Een generieke raadpleegschil waarmee bestaande
                XML-bestanden digitaal toegankelijk en bruikbaar blijven,
                zonder de oorspronkelijke brondata te wijzigen.
              </p>
            </div>

            <div class="case-meta">
              <div>
                <span>Organisatie</span>
                <strong>Gemeente Emmen</strong>
              </div>

              <div>
                <span>Rol</span>
                <strong>Afstudeerder HBO-ICT</strong>
              </div>

              <div>
                <span>Periode</span>
                <strong>2026</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Software Development</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HERO IMAGE -->
      <section class="case-image-section">
        <div class="container">
          <div class="case-main-image">
            <img
              src="/projects/emmen-interface.jpg"
              alt="Raadpleegschil Gemeente Emmen"
            />
          </div>
        </div>
      </section>

      <!-- INTRO -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">
              01
            </p>

            <h2>
              De opdracht
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Binnen de Gemeente Emmen bestond de behoefte om oudere
              XML-bestanden ook in de toekomst eenvoudig te kunnen
              raadplegen.
            </p>

            <p>
              De oorspronkelijke applicaties waarin deze gegevens werden
              gebruikt, blijven niet onbeperkt beschikbaar. Daardoor
              ontstaat het risico dat gegevens technisch nog wel aanwezig
              zijn, maar voor medewerkers nauwelijks meer praktisch
              toegankelijk zijn.
            </p>

            <p>
              Mijn afstudeeropdracht richtte zich daarom op het ontwerpen
              en realiseren van een generieke raadpleegschil. Deze
              oplossing moest XML-bestanden kunnen ontsluiten zonder de
              oorspronkelijke bronbestanden te wijzigen.
            </p>
          </div>
        </div>
      </section>

      <!-- CHALLENGE -->
      <section class="case-section case-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">
              02
            </p>

            <h2>
              De uitdaging
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              De oplossing moest niet alleen technisch werken, maar ook
              generiek, veilig en gebruiksvriendelijk zijn.
            </p>

            <div class="challenge-grid">
              <div class="challenge-card">
                <span>01</span>
                <h3>Verschillende XML-structuren</h3>
                <p>
                  De raadpleegschil moest kunnen omgaan met verschillende
                  datasets en documentstructuren.
                </p>
              </div>

              <div class="challenge-card">
                <span>02</span>
                <h3>Brondata behouden</h3>
                <p>
                  Bestaande archiefbestanden mochten niet worden aangepast
                  of beschadigd.
                </p>
              </div>

              <div class="challenge-card">
                <span>03</span>
                <h3>Snel kunnen zoeken</h3>
                <p>
                  Medewerkers moesten grote hoeveelheden informatie
                  praktisch kunnen doorzoeken.
                </p>
              </div>

              <div class="challenge-card">
                <span>04</span>
                <h3>Digitale toegankelijkheid</h3>
                <p>
                  De interface moest overzichtelijk en toegankelijk zijn
                  voor verschillende gebruikers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SOLUTION -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">
              03
            </p>

            <h2>
              Mijn oplossing
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Ik ontwikkelde een generieke interface waarin dossiers en
              documenten centraal kunnen worden gezocht, bekeken en
              geraadpleegd.
            </p>

            <p>
              De gebruikersinterface is bewust rustig en functioneel
              gehouden. Gebruikers kunnen zoeken en filteren, resultaten
              bekijken en vanuit een detailweergave documenten openen.
            </p>

            <p>
              Daarbij werd de oorspronkelijke brondata intact gehouden.
              De raadpleegschil functioneert als een afzonderlijke laag
              waarmee bestaande gegevens toegankelijk kunnen blijven.
            </p>

            <div class="feature-list">
              <div>
                <span>✓</span>
                Zoeken en filteren
              </div>

              <div>
                <span>✓</span>
                Paginering
              </div>

              <div>
                <span>✓</span>
                Detailweergave
              </div>

              <div>
                <span>✓</span>
                Beveiligde documenttoegang
              </div>

              <div>
                <span>✓</span>
                Logging
              </div>

              <div>
                <span>✓</span>
                Herstelacties
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SCREENSHOTS -->
      <section class="case-gallery-section">
        <div class="container">
          <div class="case-gallery">
            <div class="case-gallery-large">
              <img
                src="/projects/emmen-overzicht.jpg"
                alt="Overzicht van de raadpleegschil"
              />
            </div>

            <div>
              <img
                src="/projects/emmen-detail.jpg"
                alt="Detailweergave raadpleegschil"
              />
            </div>

            <div>
              <img
                src="/projects/emmen-search.jpg"
                alt="Zoekfunctionaliteit raadpleegschil"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- TECH -->
      <section class="case-section case-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">
              04
            </p>

            <h2>
              Technologie
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Voor het project heb ik verschillende technieken gecombineerd
              om zowel de verwerking als de raadpleegfunctionaliteit te
              realiseren.
            </p>

            <div class="technology-list">
              <span
                v-for="technology in technologies"
                :key="technology"
              >
                {{ technology }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- RESULT -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">
              05
            </p>

            <h2>
              Resultaat
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Het resultaat is een werkend prototype waarmee XML-data via
              een gebruiksvriendelijke interface kan worden geraadpleegd.
            </p>

            <p>
              Tijdens het project heb ik de oplossing technisch gevalideerd
              en gekeken naar aspecten zoals zoeken, filtering,
              documenttoegang, logging, beveiliging en de herbruikbaarheid
              van de gekozen aanpak.
            </p>

            <blockquote class="project-quote">
              “Techniek is pas waardevol wanneer de informatie ook
              daadwerkelijk bruikbaar blijft voor de mensen die ermee
              moeten werken.”
            </blockquote>
          </div>
        </div>
      </section>

      <!-- NEXT -->
      <section class="next-project">
        <div class="container">
          <p>Volgend project</p>

          <router-link to="/projecten">
            <h2>
              OWNER Dashboard
              <span>→</span>
            </h2>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>