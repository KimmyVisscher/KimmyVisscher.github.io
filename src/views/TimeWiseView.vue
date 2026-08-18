<script setup>
const technologies = [
  'Augmented Reality',
  'Web Development',
  'UI / UX',
  'Education',
  'Prototype Development',
]

const features = [
  'Augmented reality',
  'Educatieve opdrachten',
  'Eigen lessen maken',
  'Interactieve leerervaring',
  'Webomgeving voor docenten',
  'Mobiele applicatie',
]
</script>

<template>
  <div class="project-detail timewise-project">
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
      <section class="case-hero timewise-hero">
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
                Studieproject • Educatie & AR
              </p>

              <h1>
                Time
                <span>Wise</span>
              </h1>

              <p class="case-lead">
                Een educatieve applicatie waarin augmented reality wordt
                ingezet om lessen interactiever te maken en leerlingen op
                een andere manier met lesmateriaal te laten werken.
              </p>
            </div>

            <div class="case-meta">
              <div>
                <span>Type</span>
                <strong>Studieproject</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Educatie & technologie</strong>
              </div>

              <div>
                <span>Concept</span>
                <strong>Augmented Reality</strong>
              </div>

              <div>
                <span>Rol</span>
                <strong>Developer</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HERO IMAGE -->
      <section class="case-image-section timewise-image-section">
        <div class="container">
          <div class="case-main-image timewise-main-image">
            <img
              src="/projects/timewise.png"
              alt="TimeWise educatieve applicatie"
            />
          </div>
        </div>
      </section>

      <!-- CONCEPT -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">01</p>
            <h2>Het concept</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              TimeWise combineert traditioneel onderwijs met interactieve
              augmented-reality-opdrachten.
            </p>

            <p>
              Het idee achter TimeWise was om leerlingen niet alleen naar
              lesmateriaal te laten kijken, maar ze actief met de inhoud te
              laten werken.
            </p>

            <p>
              Door middel van augmented reality kunnen digitale onderdelen
              worden toegevoegd aan een fysieke leeromgeving. Hierdoor
              ontstaat een interactieve ervaring waarin leerlingen zelf
              kunnen ontdekken en opdrachten kunnen uitvoeren.
            </p>
          </div>
        </div>
      </section>

      <!-- PROBLEEM -->
      <section class="case-section timewise-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">02</p>
            <h2>De uitdaging</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Technologie moest het onderwijs ondersteunen zonder de les
              onnodig ingewikkeld te maken.
            </p>

            <div class="challenge-grid">
              <div class="challenge-card">
                <span>01</span>

                <h3>Eenvoudig voor leerlingen</h3>

                <p>
                  De applicatie moest begrijpelijk blijven zonder uitgebreide
                  technische uitleg.
                </p>
              </div>

              <div class="challenge-card">
                <span>02</span>

                <h3>Bruikbaar voor docenten</h3>

                <p>
                  Docenten moesten zelf lesmateriaal en opdrachten kunnen
                  samenstellen.
                </p>
              </div>

              <div class="challenge-card">
                <span>03</span>

                <h3>AR zinvol inzetten</h3>

                <p>
                  Augmented reality moest daadwerkelijk iets toevoegen aan
                  het leerproces en niet alleen een visueel effect zijn.
                </p>
              </div>

              <div class="challenge-card">
                <span>04</span>

                <h3>Twee omgevingen</h3>

                <p>
                  De mobiele leerervaring en de webomgeving voor het maken
                  van lessen moesten logisch op elkaar aansluiten.
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
            <h2>De oplossing</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              TimeWise bestaat uit een leerervaring voor leerlingen en een
              omgeving waarin eigen lessen samengesteld kunnen worden.
            </p>

            <p>
              Hierdoor kan dezelfde basis worden gebruikt voor verschillende
              onderwerpen en lessen.
            </p>

            <p>
              De leerling gebruikt de applicatie om interactieve opdrachten
              uit te voeren, terwijl vanuit de webomgeving nieuw lesmateriaal
              kan worden voorbereid.
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
      <section class="timewise-gallery-section">
        <div class="container">
            <div class="timewise-gallery-two">
            <div class="timewise-gallery-image">
                <img
                src="/projects/timewise-main.png"
                alt="TimeWise applicatie"
                />
            </div>

            <div class="timewise-gallery-image">
                <img
                src="/projects/timewise-1.png"
                alt="TimeWise project"
                />
            </div>
            </div>
        </div>
        </section>

      <!-- WERKING -->
      <section class="case-section timewise-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">04</p>
            <h2>Hoe het werkt</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              De docent maakt de les. De leerling beleeft de les.
            </p>

            <div class="timewise-process">
              <div>
                <span>01</span>

                <div>
                  <h3>Les maken</h3>
                  <p>
                    Vanuit een webomgeving wordt een interactieve les
                    samengesteld.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <h3>Les openen</h3>
                  <p>
                    De leerling opent de bijbehorende activiteit in de
                    mobiele applicatie.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <h3>AR gebruiken</h3>
                  <p>
                    Digitale informatie wordt gecombineerd met de fysieke
                    omgeving.
                  </p>
                </div>
              </div>

              <div>
                <span>04</span>

                <div>
                  <h3>Opdrachten uitvoeren</h3>
                  <p>
                    De leerling ontdekt informatie en doorloopt de
                    bijbehorende opdrachten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TECHNOLOGIE -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">05</p>
            <h2>Technologie</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              TimeWise was voor mij vooral een kennismaking met de combinatie
              van interactieve technologie, webontwikkeling en onderwijs.
            </p>

            <div class="technology-list timewise-technology-list">
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
      <section class="case-section timewise-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">06</p>
            <h2>Wat ik leerde</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              TimeWise liet mij zien dat software niet alleen functioneel
              hoeft te zijn, maar ook een ervaring kan creëren.
            </p>

            <p>
              Tijdens het project leerde ik nadenken over verschillende
              soorten gebruikers. Een docent gebruikt de applicatie namelijk
              op een heel andere manier dan een leerling.
            </p>

            <p>
              Daarnaast was het een van de projecten waarin mijn interesse
              in interactieve toepassingen en creatieve softwareontwikkeling
              verder groeide.
            </p>

            <blockquote class="project-quote timewise-quote">
              “Technologie wordt interessant wanneer het mensen iets op een
              nieuwe manier laat ervaren.”
            </blockquote>
          </div>
        </div>
      </section>

      <!-- NEXT -->
      <section class="next-project timewise-next-project">
        <div class="container">
          <p>Volgend project</p>

          <router-link to="/projecten/oceanview-island">
            <h2>
              Oceanview Island
              <span>→</span>
            </h2>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>