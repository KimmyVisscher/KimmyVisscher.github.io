<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const projects = [
  {
    title: 'Gemeente Emmen',
    description:
      'Generieke raadpleegschil voor het digitaal toegankelijk en bruikbaar houden van XML-bestanden.',
    tags: ['Python', 'JavaScript', 'RPA'],
    image: '/projects/emmen.jpg',
  },
  {
    title: 'OWNER Dashboard',
    description:
      'Dynamisch dashboard voor realtime data, KPI’s, kaartvisualisaties en bedrijfsinzichten.',
    tags: ['PHP', 'Laravel', 'Vue'],
    image: '/projects/owner.svg',
  },
  {
    title: 'What Remains of Us',
    description:
      'Cinematische WOII-game in Unreal Engine met focus op verhaal, keuzes en interactieve gameplay.',
    tags: ['Unreal Engine', 'Game Design'],
    image: '/projects/game.png',
  },
]

const skills = [
  'PHP',
  'Laravel',
  'JavaScript',
  'Vue',
  'Python',
  'WCAG',
  'Git',
  'Unreal Engine',
]
</script>

<template>
  <div class="site">
    <header class="navbar">
      <div class="container navbar-inner">
        <a href="#home" class="brand">
          <span class="brand-mark">KV</span>
          <span class="brand-name">Kimmy Visscher</span>
        </a>

        <button
          class="menu-button"
          aria-label="Menu openen"
          @click="menuOpen = !menuOpen"
        >
          ☰
        </button>

        <nav :class="{ open: menuOpen }">
          <a href="#home" @click="menuOpen = false">Home</a>
          <a href="#projecten" @click="menuOpen = false">Projecten</a>
          <a href="#ervaring" @click="menuOpen = false">Ervaring</a>
          <a href="#over-mij" @click="menuOpen = false">Over mij</a>
          <a href="#contact" @click="menuOpen = false">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <!-- HERO -->
      <section id="home" class="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <p class="eyebrow">HBO-ICT • Software Development</p>

            <h1>
              Kimmy
              <span>Visscher</span>
            </h1>

            <h2>Software developer with a creative side.</h2>

            <p class="hero-description">
              Ik bouw digitale oplossingen die technologie,
              gebruiksvriendelijkheid en creativiteit combineren.
              Van slimme applicaties tot toegankelijke interfaces.
            </p>

            <div class="hero-buttons">
              <a href="#projecten" class="button button-primary">
                Bekijk mijn werk
                <span>→</span>
              </a>

              <a href="#contact" class="button button-secondary">
                Neem contact op
              </a>
            </div>
          </div>

          <div class="hero-image-wrapper">
            <div class="hero-blob"></div>

            <div class="hero-image">
              <img
                src="/kimmy.png"
                alt="Kimmy Visscher"
              />
            </div>

            <div class="hero-decoration decoration-one"></div>
            <div class="hero-decoration decoration-two"></div>
          </div>
        </div>
      </section>

      <!-- PROJECTEN -->
      <section id="projecten" class="section projects-section">
        <div class="container">
          <div class="section-header">
            <div>
              <p class="section-label">Portfolio</p>
              <h2>Uitgelichte projecten</h2>
            </div>

            <router-link
            to="/projecten"
            class="text-link"
            >
            Bekijk alle projecten →
            </router-link>
          </div>

          <div class="projects-grid">
            <article
              v-for="project in projects"
              :key="project.title"
              class="project-card"
            >
              <div class="project-image">
                <img
                  :src="project.image"
                  :alt="project.title"
                />
              </div>

              <div class="project-body">
                <div class="project-title-row">
                  <h3>{{ project.title }}</h3>
                  <span>↗</span>
                </div>

                <p>
                  {{ project.description }}
                </p>

                <div class="tags">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- ERVARING + SKILLS -->
      <section id="ervaring" class="section experience-section">
        <div class="container experience-grid">
          <div>
            <p class="section-label">Mijn achtergrond</p>
            <h2>Ervaring & opleiding</h2>

            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-marker"></div>

                <div class="timeline-year">
                  2026
                </div>

                <div class="timeline-content">
                  <h3>HBO-ICT afgerond</h3>
                  <p>NHL Stenden Hogeschool • Emmen</p>
                  <span>Bachelor of Science</span>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker"></div>

                <div class="timeline-year">
                  2026
                </div>

                <div class="timeline-content">
                  <h3>Afstuderen bij Gemeente Emmen</h3>
                  <p>
                    Ontwikkeling van een generieke raadpleegschil voor
                    digitale XML-archieven.
                  </p>
                  <span>Afstudeerproject</span>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker"></div>

                <div class="timeline-year">
                  2024 — 2025
                </div>

                <div class="timeline-content">
                  <h3>Software Development bij OWNER</h3>
                  <p>
                    Ontwikkeling van een realtime dashboard met Laravel,
                    Vue en Leaflet.
                  </p>
                  <span>Stage</span>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker"></div>

                <div class="timeline-year">
                  2021 — heden
                </div>

                <div class="timeline-content">
                  <h3>Wildlands Adventure Zoo</h3>
                  <p>
                    Werkervaring binnen horeca, service en gastbeleving.
                  </p>
                  <span>Bijbaan</span>
                </div>
              </div>
            </div>
          </div>

          <div class="skills-panel">
            <p class="section-label">Technologie</p>
            <h2>Skills</h2>

            <div class="skills-grid">
              <div
                v-for="skill in skills"
                :key="skill"
                class="skill-card"
              >
                <span class="skill-dot"></span>
                {{ skill }}
              </div>
            </div>

            <div class="skills-note">
              <p>
                Ik werk graag op het snijvlak van development,
                toegankelijkheid, usability en creatief ontwerp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- OVER MIJ -->
      <section id="over-mij" class="section about-section">
        <div class="container about-grid">
          <div class="about-visual">
            <span class="flower">✿</span>
          </div>

          <div class="about-content">
            <p class="section-label">Even voorstellen</p>
            <h2>Over mij</h2>

            <p class="about-intro">
              Ik ben Kimmy, een software developer die techniek graag
              combineert met creativiteit en gebruiksvriendelijkheid.
            </p>

            <p>
              Tijdens mijn opleiding heb ik gewerkt aan verschillende
              technische projecten, van dashboards en webapplicaties tot
              digitale toegankelijkheid en game development.
            </p>

            <p>
              Ik vind het vooral leuk om oplossingen te bedenken die niet
              alleen technisch goed werken, maar ook prettig en logisch
              aanvoelen voor de gebruiker.
            </p>

            <p class="signature">
              Nieuwsgierig, creatief en altijd iets nieuws aan het maken.
            </p>
          </div>

          <div class="about-values">
            <div class="value">
              <span>✦</span>
              <p>Oplossingsgericht & leergierig</p>
            </div>

            <div class="value">
              <span>♡</span>
              <p>Focus op toegankelijkheid</p>
            </div>

            <div class="value">
              <span>✎</span>
              <p>Creatief & detailgericht</p>
            </div>

            <div class="value">
              <span>◎</span>
              <p>Samenwerken & communiceren</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="contact-section">
        <div class="container contact-inner">
          <div>
            <p class="section-label">Contact</p>
            <h2>Laten we samenwerken!</h2>
            <p>
              Sta je open voor een samenwerking of heb je een interessante
              vacature? Stuur me gerust een bericht.
            </p>
          </div>

          <div class="contact-actions">
            <a
              href="mailto:kimmyvisscher.business@gmail.com"
              class="contact-link"
            >
              ✉
              <span>
                kimmyvisscher.business@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/kimmyvisscher"
              target="_blank"
              class="contact-link"
            >
              in
              <span>LinkedIn</span>
            </a>

            <a href="/cv-kimmy-visscher.pdf" class="button button-primary">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container footer-inner">
        <p>© {{ new Date().getFullYear() }} Kimmy Visscher</p>

        <p>
          Gemaakt met ♥ en waarschijnlijk te veel koffie
        </p>
      </div>
    </footer>
  </div>
</template>