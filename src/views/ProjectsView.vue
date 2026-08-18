<script setup>
const projects = [
  {
    title: 'Gemeente Emmen',
    description:
      'Generieke raadpleegschil voor het digitaal toegankelijk en bruikbaar houden van XML-bestanden.',
    tags: ['Python', 'JavaScript', 'RPA', 'XML'],
    image: '/projects/emmen.jpg',
    link: '/projecten/gemeente-emmen',
    category: 'Afstudeerproject',
  },
  {
    title: 'OWNER Dashboard',
    description:
      'Dynamisch realtime dashboard met KPI’s, kaartvisualisaties en bedrijfsdata.',
    tags: ['PHP', 'Laravel', 'Vue', 'Leaflet'],
    image: '/projects/owner.svg',
    link: '/projecten/owner-dashboard',
    category: 'Software Development',
  },
  {
    title: 'What Remains of Us',
    description:
      'Cinematische WOII-game in Unreal Engine met verhaalgedreven gameplay en betekenisvolle keuzes.',
    tags: ['Unreal Engine', 'Blueprints', 'Game Design'],
    image: '/projects/game.png',
    link: '/projecten/what-remains-of-us',
    category: 'Game Development',
  },
  {
    title: 'Project DUO',
    description:
      'Project gericht op digitale toegankelijkheid en het toegankelijk maken van een sollicitatieformulier.',
    tags: ['WCAG', 'Accessibility', 'UX'],
    image: '/projects/duo-form.png',
    link: '/projecten/duo',
    category: 'Accessibility',
  },
  {
    title: 'TimeWise',
    description:
      'Educatieve applicatie waarbij augmented reality wordt ingezet binnen het onderwijs.',
    tags: ['AR', 'Web', 'Education'],
    image: '/projects/timewise.png',
    link: '/projecten/timewise',
    category: 'Studieproject',
  },
  {
    title: 'Oceanview Island',
    description:
      'Mijn eerste volledig afgeronde gameproject en het project waardoor mijn interesse in game development ontstond.',
    tags: ['Game Development', 'Unity'],
    image: '/projects/oceanview-1.png',
    link: '/projecten/oceanview',
    category: 'Game Development',
  },
]
</script>

<template>
  <div class="projects-page">
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
      <section class="projects-page-hero">
        <div class="container">
          <p class="section-label">
            Portfolio
          </p>

          <h1>
            Mijn projecten
          </h1>

          <p class="projects-page-intro">
            Een selectie van projecten waar ik tijdens mijn opleiding,
            stages en eigen ontwikkeling aan heb gewerkt. Van software
            development en digitale toegankelijkheid tot game development.
          </p>
        </div>
      </section>

      <section class="all-projects">
        <div class="container">
          <div class="all-projects-grid">
            <router-link
              v-for="project in projects"
              :key="project.title"
              :to="project.link"
              class="large-project-card"
            >
              <div class="large-project-image">
                <img
                  :src="project.image"
                  :alt="project.title"
                />
              </div>

              <div class="large-project-body">
                <p class="project-category">
                  {{ project.category }}
                </p>

                <div class="project-title-row">
                  <h2>
                    {{ project.title }}
                  </h2>

                  <span>↗</span>
                </div>

                <p class="project-description">
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
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>