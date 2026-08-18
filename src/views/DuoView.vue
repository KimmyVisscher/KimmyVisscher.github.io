<script setup>
const technologies = [
  'WCAG',
  'HTML',
  'CSS',
  'JavaScript',
  'Accessibility',
  'UX',
]

const improvements = [
  'Betere formulierstructuur',
  'Duidelijke labels',
  'Logische toetsenbordnavigatie',
  'Verbeterd kleurcontrast',
  'Duidelijke foutmeldingen',
  'Toegankelijke invoervelden',
]
</script>

<template>
  <div class="project-detail duo-project">
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
      <section class="case-hero duo-hero">
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
                Studieproject • Digitale toegankelijkheid
              </p>

              <h1>
                Project
                <span>DUO</span>
              </h1>

              <p class="case-lead">
                Een project gericht op het toegankelijker maken van een
                digitaal sollicitatieformulier, met aandacht voor WCAG,
                gebruiksvriendelijkheid en een duidelijke gebruikerservaring.
              </p>
            </div>

            <div class="case-meta">
              <div>
                <span>Organisatie</span>
                <strong>DUO</strong>
              </div>

              <div>
                <span>Type</span>
                <strong>Studieproject</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Digitale toegankelijkheid</strong>
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
      <section class="case-image-section duo-image-section">
        <div class="container">
          <div class="case-main-image duo-main-image">
            <img
              src="/projects/duo-interface.png"
              alt="Toegankelijk sollicitatieformulier voor Project DUO"
            />
          </div>
        </div>
      </section>

      <!-- OPDRACHT -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">01</p>
            <h2>De opdracht</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Tijdens mijn opleiding werkte ik aan een project rondom
              digitale toegankelijkheid voor DUO.
            </p>

            <p>
              Binnen het project stond een digitaal sollicitatieformulier
              centraal. De opdracht was om te onderzoeken hoe het formulier
              toegankelijker en gebruiksvriendelijker gemaakt kon worden.
            </p>

            <p>
              Daarbij werd gekeken naar gebruikers die bijvoorbeeld
              afhankelijk zijn van toetsenbordbediening,
              schermlezers of duidelijke visuele ondersteuning.
            </p>
          </div>
        </div>
      </section>

      <!-- WAAROM ACCESSIBILITY -->
      <section class="case-section case-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">02</p>
            <h2>De uitdaging</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Een formulier kan technisch werken, maar toch lastig of zelfs
              onmogelijk te gebruiken zijn voor een deel van de gebruikers.
            </p>

            <div class="challenge-grid">
              <div class="challenge-card">
                <span>01</span>

                <h3>Formuliervelden</h3>

                <p>
                  Invoervelden moeten duidelijke labels, instructies en
                  logische relaties hebben.
                </p>
              </div>

              <div class="challenge-card">
                <span>02</span>

                <h3>Toetsenbordbediening</h3>

                <p>
                  De volledige gebruikersflow moet ook zonder muis gebruikt
                  kunnen worden.
                </p>
              </div>

              <div class="challenge-card">
                <span>03</span>

                <h3>Visuele duidelijkheid</h3>

                <p>
                  Kleur, contrast en feedback moeten voldoende duidelijk
                  zijn voor verschillende gebruikers.
                </p>
              </div>

              <div class="challenge-card">
                <span>04</span>

                <h3>Foutafhandeling</h3>

                <p>
                  Wanneer invoer fout gaat, moet duidelijk worden uitgelegd
                  wat er verkeerd is en hoe dit opgelost kan worden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- AANPAK -->
      <section class="case-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">03</p>
            <h2>Mijn aanpak</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Ik keek niet alleen naar het uiterlijk van het formulier,
              maar juist naar hoe een gebruiker er daadwerkelijk doorheen
              navigeert.
            </p>

            <p>
              Op basis van toegankelijkheidsprincipes werden onderdelen van
              het formulier beoordeeld en verbeterd.
            </p>

            <p>
              Daarbij lag de nadruk op een duidelijke structuur, begrijpelijke
              invoervelden, correcte feedback en een logische volgorde van
              interactieve elementen.
            </p>

            <div class="feature-list">
              <div
                v-for="improvement in improvements"
                :key="improvement"
              >
                <span>✓</span>
                {{ improvement }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="case-gallery-section duo-gallery-section">
        <div class="container">
            <div class="duo-gallery">
            <div class="duo-gallery-main">
                <img
                src="/projects/duo-overview.png"
                alt="Project DUO - overzicht van het toegankelijke sollicitatieformulier"
                />
            </div>

            <div class="duo-gallery-secondary">
                <img
                src="/projects/duo-form.png"
                alt="Project DUO - detail van het sollicitatieformulier"
                />
            </div>
            </div>
        </div>
        </section>

      <!-- WCAG -->
      <section class="case-section duo-wcag-section">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">04</p>
            <h2>WCAG</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Digitale toegankelijkheid betekent voor mij dat een website
              of applicatie door zoveel mogelijk mensen zelfstandig gebruikt
              kan worden.
            </p>

            <p>
              Binnen het project heb ik kennisgemaakt met WCAG-richtlijnen
              en geleerd om toegankelijkheid niet als een losse controle aan
              het einde te zien, maar als onderdeel van het ontwerp- en
              ontwikkelproces.
            </p>

            <div class="wcag-values">
              <div>
                <span>01</span>
                <h3>Waarneembaar</h3>
                <p>
                  Informatie moet op verschillende manieren goed te begrijpen
                  zijn.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Bedienbaar</h3>
                <p>
                  Gebruikers moeten de interface kunnen bedienen met
                  verschillende invoermethoden.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Begrijpelijk</h3>
                <p>
                  Interactie en foutmeldingen moeten voorspelbaar en duidelijk
                  zijn.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Robuust</h3>
                <p>
                  De techniek moet goed samenwerken met verschillende browsers
                  en ondersteunende technologie.
                </p>
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
              Bij dit project stond niet de hoeveelheid technologie centraal,
              maar vooral hoe de techniek voor de gebruiker werd ingezet.
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

      <!-- RESULTAAT -->
      <section class="case-section case-soft">
        <div class="container case-content-grid">
          <aside>
            <p class="case-number">06</p>
            <h2>Wat ik leerde</h2>
          </aside>

          <div class="case-text">
            <p class="case-large-text">
              Dit project heeft mijn kijk op frontend development veranderd.
            </p>

            <p>
              Ik leerde dat een interface niet alleen mooi en technisch
              correct moet zijn. De manier waarop HTML, interactie,
              formulieren en visuele feedback worden opgebouwd heeft directe
              invloed op wie een applicatie wel of niet kan gebruiken.
            </p>

            <p>
              Die kennis heb ik later ook kunnen meenemen in andere projecten,
              waarin gebruiksvriendelijkheid en digitale toegankelijkheid een
              belangrijke rol speelden.
            </p>

            <blockquote class="project-quote">
              “Een digitale oplossing is pas echt goed wanneer zoveel mogelijk
              mensen haar zelfstandig kunnen gebruiken.”
            </blockquote>
          </div>
        </div>
      </section>

      <!-- NEXT -->
      <section class="next-project duo-next-project">
        <div class="container">
          <p>Volgend project</p>

          <router-link to="/projecten/timewise">
            <h2>
              TimeWise
              <span>→</span>
            </h2>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>