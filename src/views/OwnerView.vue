<script setup>
const technologies = [
  'PHP',
  'Laravel',
  'Vue 3',
  'JavaScript',
  'MySQL',
  'Leaflet',
  'Axios',
  'Laravel Echo',
  'Pusher / Reverb',
  'GSAP',
]

const features = [
  'Interactieve kaart',
  'Groepering van locaties',
  'Realtime updates',
  'KPI-overzicht',
  'Recente units',
  'Highlight van nieuwe units',
  'Nieuws / ticker',
  'API-koppelingen',
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
                Stageproject • 2024 — 2025
              </p>

              <h1>
                OWNER
                <span>Dashboard</span>
              </h1>

              <p class="case-lead">
                Een intern realtime dashboard waarmee belangrijke
                bedrijfsinformatie, locaties, KPI’s en recente activiteit
                overzichtelijk op één scherm worden weergegeven.
              </p>
            </div>

            <div class="case-meta">
              <div>
                <span>Organisatie</span>
                <strong>OWNER</strong>
              </div>

              <div>
                <span>Rol</span>
                <strong>Software Developer stagiair</strong>
              </div>

              <div>
                <span>Periode</span>
                <strong>2024 — 2025</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Dashboard & realtime data</strong>
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
              src="/projects/owner-dashboard.png"
              alt="OWNER dashboard"
            />
          </div>
        </div>
      </section>

      <!-- OPDRACHT -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">01</p>

            <h2>
              De opdracht
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              OWNER wilde een centraal intern dashboard waarop belangrijke
              informatie uit het platform in één oogopslag zichtbaar werd.
            </p>

            <p>
              Binnen het platform was veel bedrijfsinformatie beschikbaar,
              maar deze informatie was verspreid over verschillende
              onderdelen en databronnen.
            </p>

            <p>
              Mijn opdracht was om een dashboard te ontwerpen en te
              ontwikkelen dat geschikt was voor intern gebruik en op een
              groot scherm kon worden weergegeven.
            </p>

            <p>
              Het dashboard moest niet alleen gegevens tonen, maar ook
              reageren op nieuwe activiteit binnen het platform.
            </p>
          </div>
        </div>
      </section>

      <!-- UITDAGING -->
      <section class="case-section case-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">02</p>

            <h2>
              De uitdaging
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              De grootste uitdaging was om verschillende soorten data
              overzichtelijk én realtime samen te brengen.
            </p>

            <div class="challenge-grid">
              <div class="challenge-card">
                <span>01</span>

                <h3>Veel verschillende data</h3>

                <p>
                  Het dashboard combineerde informatie over onder andere
                  units, organisaties, gebruikers, facturen, plaatsingen
                  en omgevingen.
                </p>
              </div>

              <div class="challenge-card">
                <span>02</span>

                <h3>Realtime updates</h3>

                <p>
                  Nieuwe activiteit moest direct zichtbaar worden zonder dat
                  de gebruiker de pagina handmatig hoefde te verversen.
                </p>
              </div>

              <div class="challenge-card">
                <span>03</span>

                <h3>Locaties visualiseren</h3>

                <p>
                  Verschillende locaties moesten op een interactieve kaart
                  worden geplaatst en logisch worden gegroepeerd.
                </p>
              </div>

              <div class="challenge-card">
                <span>04</span>

                <h3>Geschikt voor groot scherm</h3>

                <p>
                  Het dashboard moest in één oogopslag leesbaar blijven en
                  continu bruikbaar zijn op een intern scherm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- OPLOSSING -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">03</p>

            <h2>
              Mijn oplossing
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Ik ontwikkelde een dashboard waarin kaartdata, KPI’s en
              recente activiteit samenkwamen in één overzichtelijke
              interface.
            </p>

            <p>
              Centraal in het dashboard staat een interactieve kaart waarop
              locaties worden weergegeven. Locaties die dicht bij elkaar
              liggen worden gegroepeerd zodat de kaart overzichtelijk
              blijft.
            </p>

            <p>
              Naast de kaart worden recente units en meerdere KPI’s
              weergegeven. Het dashboard ontvangt realtime events zodat
              nieuwe activiteit automatisch zichtbaar wordt.
            </p>

            <div class="feature-list">
              <div
                v-for="feature in features"
                :key="feature"
              >
                <span>✓</span>
                {{ feature }}
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
                src="/projects/owner-overview.png"
                alt="Overzicht OWNER dashboard"
              />
            </div>

            <div>
              <img
                src="/projects/owner-map.png"
                alt="Kaartweergave OWNER dashboard"
              />
            </div>

            <div>
              <img
                src="/projects/owner-kpis.png"
                alt="KPI overzicht OWNER dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- TECH -->
      <section class="case-section case-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">04</p>

            <h2>
              Technologie
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Voor het dashboard combineerde ik Laravel met Vue en
              verschillende realtime- en visualisatietechnieken.
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

      <!-- TECHNISCHE DIEPGANG -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">05</p>

            <h2>
              Technische aanpak
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Achter de interface zat een combinatie van API-endpoints,
              databasequeries en realtime events.
            </p>

            <p>
              Met Laravel werden verschillende gegevens uit de database
              opgehaald en via API-endpoints beschikbaar gemaakt voor de
              frontend.
            </p>

            <p>
              Vue verzorgde de interface en Leaflet werd gebruikt voor de
              interactieve kaart. Met Axios werden gegevens opgehaald en met
              Laravel Echo en Pusher/Reverb werden realtime updates
              verwerkt.
            </p>

            <p>
              Nieuwe units konden direct op de kaart verschijnen en tijdelijk
              extra worden benadrukt, zodat recente activiteit meteen
              zichtbaar was.
            </p>
          </div>
        </div>
      </section>

      <!-- PROBLEMEN -->
      <section class="case-section case-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">06</p>

            <h2>
              Problemen & oplossingen
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Tijdens de ontwikkeling kwam ik verschillende technische
              uitdagingen tegen die ik stap voor stap heb opgelost.
            </p>

            <div class="challenge-grid">
              <div class="challenge-card">
                <span>01</span>

                <h3>Realtime payloads</h3>

                <p>
                  Bij realtime events liep ik tegen limieten van berichten
                  aan. Daarom moest ik kritisch kijken welke data daadwerkelijk
                  via events meegestuurd werd.
                </p>
              </div>

              <div class="challenge-card">
                <span>02</span>

                <h3>Latitude & longitude</h3>

                <p>
                  Ongeldige of ontbrekende coördinaten konden problemen
                  veroorzaken bij het renderen van kaartmarkers.
                </p>
              </div>

              <div class="challenge-card">
                <span>03</span>

                <h3>Databasequeries</h3>

                <p>
                  Bij samengestelde queries ontstonden onder andere problemen
                  met dubbele of ambigue kolomnamen zoals created_at.
                </p>
              </div>

              <div class="challenge-card">
                <span>04</span>

                <h3>Browserbeperkingen</h3>

                <p>
                  Functionaliteiten zoals autoplay en realtime interacties
                  moesten rekening houden met beveiligingsregels van moderne
                  browsers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- RESULTAAT -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">07</p>

            <h2>
              Resultaat
            </h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Het resultaat was een werkend intern dashboard dat actuele
              bedrijfsinformatie op een visuele en centrale manier
              samenbracht.
            </p>

            <p>
              Tijdens het project heb ik veel geleerd over het combineren
              van backendlogica, frontendontwikkeling, realtime communicatie
              en datavisualisatie.
            </p>

            <p>
              Het project liet mij vooral zien dat ik complexe technische
              onderdelen kan opdelen, testen en stap voor stap kan
              samenbrengen tot één werkende applicatie.
            </p>

            <blockquote class="project-quote">
              “Een dashboard is pas echt bruikbaar wanneer complexe data in
              één oogopslag begrijpelijk wordt.”
            </blockquote>
          </div>
        </div>
      </section>

      <!-- NEXT -->
      <section class="next-project">
        <div class="container">
          <p>Volgend project</p>

          <router-link to="/projecten/what-remains-of-us">
            <h2>
              What Remains of Us
              <span>→</span>
            </h2>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>