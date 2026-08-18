<script setup>
const technologies = [
  'Unity',
  'Game Development',
  'Level Design',
  'Gameplay Programming',
  'UI Design',
]

const features = [
  'Volledig speelbare game',
  'Eigen gamewereld',
  'Level design',
  'Gameplay mechanics',
  'UI & menu’s',
  'Zelfstandig ontwikkeld',
]
</script>

<template>
  <div class="project-detail oceanview-project">
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
      <section class="case-hero oceanview-hero">
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
                Game Development • Persoonlijk project
              </p>

              <h1>
                Oceanview
                <span>Island</span>
              </h1>

              <p class="case-lead">
                Mijn eerste volledig afgeronde gameproject en het project
                waarmee mijn interesse in game development echt begon.
              </p>
            </div>

            <div class="case-meta">
              <div>
                <span>Type</span>
                <strong>Gameproject</strong>
              </div>

              <div>
                <span>Engine</span>
                <strong>Unity</strong>
              </div>

              <div>
                <span>Rol</span>
                <strong>Game Developer</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Gameplay & level design</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HERO IMAGE -->
      <section class="case-image-section oceanview-image-section">
        <div class="container">
          <div class="case-main-image oceanview-main-image">
            <img
              src="/projects/oceanview-1.png"
              alt="Oceanview Island game"
            />
          </div>
        </div>
      </section>

      <!-- CONCEPT -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">01</p>
            <h2>Het begin</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Oceanview Island was het eerste gameproject dat ik volledig
              van begin tot eind heb afgemaakt.
            </p>

            <p>
              Het project ontstond als eindopdracht tijdens de HAVO.
              Ik wilde iets maken dat verder ging dan een standaard
              presentatie of verslag en besloot daarom een complete game
              te ontwikkelen.
            </p>

            <p>
              Tijdens het bouwen ontdekte ik hoeveel verschillende kanten
              game development heeft: programmeren, gameplay, level design,
              interface en visuele keuzes komen allemaal samen.
            </p>
          </div>
        </div>
      </section>

      <!-- UITDAGING -->
      <section class="case-section oceanview-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">02</p>
            <h2>De uitdaging</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Het grootste doel was simpel: een idee daadwerkelijk omzetten
              naar een speelbare en afgeronde game.
            </p>

            <div class="challenge-grid">
              <div class="challenge-card">
                <span>01</span>

                <h3>Van idee naar game</h3>

                <p>
                  Het concept moest worden vertaald naar echte gameplay,
                  levels en interacties.
                </p>
              </div>

              <div class="challenge-card">
                <span>02</span>

                <h3>Zelfstandig leren</h3>

                <p>
                  Veel onderdelen van Unity en game development moest ik
                  tijdens het project zelf ontdekken.
                </p>
              </div>

              <div class="challenge-card">
                <span>03</span>

                <h3>Alles combineren</h3>

                <p>
                  Gameplay, interface en level design moesten uiteindelijk
                  samen aanvoelen als één geheel.
                </p>
              </div>

              <div class="challenge-card">
                <span>04</span>

                <h3>Project afronden</h3>

                <p>
                  Niet alleen beginnen met ideeën, maar daadwerkelijk tot
                  een speelbare eindversie komen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GAME -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">03</p>
            <h2>De game</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Tijdens het project bouwde ik stap voor stap mijn eigen
              speelbare wereld in Unity.
            </p>

            <p>
              Ik werkte aan de omgeving, gameplaymechanics, interface en
              verschillende onderdelen die nodig waren om de game als
              complete ervaring te laten werken.
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
      <section class="oceanview-gallery-section">
        <div class="container">
            <div class="oceanview-gallery-two">
            <div class="oceanview-gallery-image">
                <img
                src="/projects/oceanview-1.png"
                alt="Oceanview Island gameplay"
                />
            </div>

            <div class="oceanview-gallery-image">
                <img
                src="/projects/oceanview-2.png"
                alt="Oceanview Island gamewereld"
                />
            </div>
            </div>
        </div>
        </section>

      <!-- TECH -->
      <section class="case-section oceanview-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">04</p>
            <h2>Technologie</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Oceanview Island was mijn eerste echte kennismaking met
              game development.
            </p>

            <div class="technology-list oceanview-technology-list">
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

      <!-- RESULTAAT -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">05</p>
            <h2>Wat het betekende</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Het belangrijkste resultaat was niet alleen de game zelf,
              maar dat ik ontdekte hoe leuk ik het vind om interactieve
              werelden te bouwen.
            </p>

            <p>
              Oceanview Island gaf mij de motivatie om verder te gaan met
              game development en later complexere projecten te bedenken en
              ontwikkelen.
            </p>

            <p>
              Daarmee is dit misschien niet mijn technisch meest uitgebreide
              project, maar wel één van de projecten die het meest bepalend
              is geweest voor mijn ontwikkeling.
            </p>

            <blockquote class="project-quote oceanview-quote">
              “Oceanview Island was het project waardoor een schoolopdracht
              veranderde in een echte interesse in game development.”
            </blockquote>
          </div>
        </div>
      </section>

      <!-- BACK TO PROJECTS -->
      <section class="next-project oceanview-next-project">
        <div class="container">
          <p>Einde van de selectie</p>

          <router-link to="/projecten">
            <h2>
              Bekijk alle projecten
              <span>→</span>
            </h2>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>