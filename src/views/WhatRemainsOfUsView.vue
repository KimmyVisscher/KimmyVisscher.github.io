<script setup>
const technologies = [
  'Unreal Engine 5',
  'Blueprints',
  'Game Design',
  'Narrative Design',
  'Environment Design',
  'UI / UX',
]

const features = [
  'Verhaalgedreven gameplay',
  'Keuzes met gevolgen',
  'Interactiesysteem',
  'Journal / documenten',
  'Historische setting',
  'Meerdere eindes',
  'Cinematische presentatie',
  'Character-driven storytelling',
]
</script>

<template>
  <div class="project-detail game-project">
    <header class="navbar game-navbar">
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
      <section class="game-hero">
        <div class="game-overlay"></div>

        <img
          src="/projects/wrou-hero.png"
          alt="What Remains of Us"
          class="game-hero-background"
        />

        <div class="container game-hero-content">
          <router-link
            to="/projecten"
            class="back-link game-back-link"
          >
            ← Terug naar projecten
          </router-link>

          <div class="game-title-block">
            <p class="game-label">
              Unreal Engine 5 • Game Development
            </p>

            <h1>
              What Remains
              <span>of Us</span>
            </h1>

            <p class="game-lead">
              Een verhaalgedreven WOII-game over verzet, loyaliteit,
              schuld en de keuzes die mensen maken wanneer er geen
              eenvoudige goede of foute antwoorden bestaan.
            </p>

            <div class="game-meta">
              <div>
                <span>Type</span>
                <strong>Narrative Game</strong>
              </div>

              <div>
                <span>Engine</span>
                <strong>Unreal Engine 5</strong>
              </div>

              <div>
                <span>Rol</span>
                <strong>Game Designer & Developer</strong>
              </div>

              <div>
                <span>Studio</span>
                <strong>Studio KV</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONCEPT -->
      <section class="case-section game-case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">01</p>
            <h2>Het concept</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              What Remains of Us is een fictieve, historische game die
              zich afspeelt tijdens de Tweede Wereldoorlog.
            </p>

            <p>
              De speler beleeft het verhaal vanuit twee verschillende
              perspectieven: Esther de Vries, een jonge vrouw die betrokken
              raakt bij het Nederlandse verzet, en Hermann Müller, een Duitse
              soldaat die steeds meer begint te twijfelen aan wat er van hem
              wordt verwacht.
            </p>

            <p>
              De game draait niet alleen om actie, maar vooral om keuzes,
              menselijke relaties en morele conflicten. De speler krijgt
              situaties voorgeschoteld waarin de gevolgen niet altijd direct
              duidelijk zijn.
            </p>
          </div>
        </div>
      </section>

      <!-- PERSONAGES -->
      <section class="game-character-section">
        <div class="container">
          <div class="section-header game-section-header">
            <div>
              <p class="game-label">Characters</p>
              <h2>Twee perspectieven</h2>
            </div>
          </div>

          <div class="character-grid">
            <article class="character-card">
              <div class="character-image">
                <img
                  src="/projects/esther.png"
                  alt="Esther de Vries"
                />
              </div>

              <div class="character-content">
                <p class="character-role">
                  Nederlandse verzet
                </p>

                <h3>Esther de Vries</h3>

                <p>
                  Esther raakt steeds dieper betrokken bij het verzet en
                  moet beslissingen nemen die niet alleen haar eigen leven,
                  maar ook dat van anderen kunnen beïnvloeden.
                </p>
              </div>
            </article>

            <article class="character-card">
              <div class="character-image">
                <img
                  src="/projects/hermann.png"
                  alt="Hermann Müller"
                />
              </div>

              <div class="character-content">
                <p class="character-role">
                  Duitse soldaat
                </p>

                <h3>Hermann Müller</h3>

                <p>
                  Hermann begint als soldaat binnen het Duitse leger, maar
                  raakt steeds meer in conflict met zijn orders en zijn
                  eigen geweten.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- GAMEPLAY -->
      <section class="case-section game-dark-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">02</p>
            <h2>Gameplay</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              De gameplay ondersteunt het verhaal in plaats van andersom.
            </p>

            <p>
              De speler verkent omgevingen, spreekt met personages,
              verzamelt informatie en maakt keuzes die invloed kunnen hebben
              op latere gebeurtenissen.
            </p>

            <div class="feature-list game-feature-list">
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

      <!-- STRUCTUUR -->
      <section class="case-section game-case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">03</p>
            <h2>Verhaalstructuur</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              De speler wisselt tussen Esther en Hermann en ontdekt hoe
              hun verhalen langzaam naar elkaar toe bewegen.
            </p>

            <div class="story-timeline">
              <div class="story-step">
                <span>01</span>
                <div>
                  <h3>Esther</h3>
                  <p>
                    De speler begint in bezet Nederland en raakt betrokken
                    bij verschillende verzetsactiviteiten.
                  </p>
                </div>
              </div>

              <div class="story-step">
                <span>02</span>
                <div>
                  <h3>Hermann — 1941</h3>
                  <p>
                    Een flashback naar het Oostfront toont hoe Hermann
                    langzaam begint te twijfelen aan de wereld om hem heen.
                  </p>
                </div>
              </div>

              <div class="story-step">
                <span>03</span>
                <div>
                  <h3>De verhalen kruisen</h3>
                  <p>
                    Beide perspectieven komen uiteindelijk samen en eerdere
                    keuzes beïnvloeden hoe de relatie en het conflict zich
                    ontwikkelen.
                  </p>
                </div>
              </div>

              <div class="story-step">
                <span>04</span>
                <div>
                  <h3>Het einde</h3>
                  <p>
                    Afhankelijk van keuzes kunnen Esther en Hermann
                    verschillende eindes bereiken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SCREENSHOTS -->
      <section class="game-gallery-section">
        <div class="container">
          <div class="game-gallery">
            <div class="game-gallery-featured">
              <img
                src="/projects/wrou-gameplay.png"
                alt="Gameplay What Remains of Us"
              />
            </div>

            <div>
              <img
                src="/projects/wrou-village.png"
                alt="Bezet Nederlands dorp"
              />
            </div>

            <div>
              <img
                src="/projects/wrou-ui.png"
                alt="Interface What Remains of Us"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- KEUZES -->
      <section class="case-section game-dark-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">04</p>
            <h2>Keuzes & gevolgen</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              De speler krijgt geen simpele balk met “goed” of “slecht”.
            </p>

            <p>
              Beslissingen worden verwerkt in het verhaal en kunnen later
              invloed hebben op relaties, gebeurtenissen en het uiteindelijke
              einde.
            </p>

            <div class="ending-grid">
              <div class="ending-card">
                <span>Ending 01</span>
                <h3>Samen ontsnappen</h3>
                <p>
                  Esther en Hermann weten uiteindelijk samen aan de situatie
                  te ontsnappen.
                </p>
              </div>

              <div class="ending-card">
                <span>Ending 02</span>
                <h3>Hermann sterft</h3>
                <p>
                  Hermann offert zichzelf op terwijl Esther verder moet
                  leven met wat er is gebeurd.
                </p>
              </div>

              <div class="ending-card">
                <span>Ending 03</span>
                <h3>Esther wordt gevangen</h3>
                <p>
                  Esther overleeft het conflict niet en Hermann blijft achter
                  als getuige van de gevolgen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TECH -->
      <section class="case-section game-case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">05</p>
            <h2>Technologie</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              De game wordt ontwikkeld in Unreal Engine 5.
            </p>

            <p>
              Naast de technische implementatie werk ik ook aan game design,
              interacties, gebruikersinterface, levelconcepten en
              narrative design.
            </p>

            <div class="technology-list game-technology-list">
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

      <!-- DEVELOPMENT -->
      <section class="case-section game-dark-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">06</p>
            <h2>Development</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Het project groeit stap voor stap van concept naar een
              speelbare game.
            </p>

            <div class="challenge-grid game-challenge-grid">
              <div class="challenge-card">
                <span>01</span>
                <h3>Interaction System</h3>
                <p>
                  Een systeem waarmee de speler objecten en personages kan
                  detecteren en ermee kan interacteren.
                </p>
              </div>

              <div class="challenge-card">
                <span>02</span>
                <h3>Player HUD</h3>
                <p>
                  Een rustige HUD die belangrijke informatie toont zonder
                  de cinematografische ervaring te verstoren.
                </p>
              </div>

              <div class="challenge-card">
                <span>03</span>
                <h3>Journal</h3>
                <p>
                  Een journal waarin documenten, informatie en
                  verhaalcontext worden verzameld.
                </p>
              </div>

              <div class="challenge-card">
                <span>04</span>
                <h3>Vertical Slice</h3>
                <p>
                  De belangrijkste mechanics en sfeer worden gecombineerd
                  in een compacte speelbare demonstratie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- VISIE -->
      <section class="case-section game-case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">07</p>
            <h2>Mijn visie</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Ik wil dat de speler niet alleen ziet wat er gebeurt, maar
              zich afvraagt wat hij zelf zou hebben gedaan.
            </p>

            <p>
              Het project combineert mijn interesse in programmeren,
              storytelling, game design en visueel ontwerp. Daardoor kan ik
              binnen één project zowel technisch als creatief werken.
            </p>

            <blockquote class="project-quote game-quote">
              “Sommige keuzes veranderen niet de wereld. Ze veranderen
              alleen wat er van jou overblijft.”
            </blockquote>
          </div>
        </div>
      </section>

      <!-- NEXT -->
      <section class="next-project game-next-project">
        <div class="container">
          <p>Volgend project</p>

          <router-link to="/projecten/duo">
            <h2>
              Project DUO
              <span>→</span>
            </h2>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>