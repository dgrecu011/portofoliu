<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>
      <div class="absolute right-0 -top-24 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.14),transparent_35%)]"></div>
    </div>

    <div class="relative mx-auto max-w-5xl px-5 pb-20 pt-8">
      <header class="mb-8 flex items-center justify-between gap-4">
        <div class="text-lg font-bold tracking-tight text-cyan-300">DG | Frontend</div>
        <nav class="hidden gap-6 text-sm font-semibold text-slate-300 md:flex">
          <a class="hover:text-cyan-300" href="#proiecte">Proiecte</a>
          <a class="hover:text-cyan-300" href="#despre">Despre</a>
          <a class="hover:text-cyan-300" href="#contact">Contact</a>
        </nav>
      </header>

      <main class="grid gap-8 rounded-2xl bg-slate-900/70 p-6 shadow-xl ring-1 ring-white/5 backdrop-blur md:grid-cols-[1.05fr_0.95fr]">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <img
              :src="avatar"
              alt="Portret Dionis Grecu"
              class="h-32 w-32 rounded-full object-cover ring-4 ring-cyan-300/60 shadow-lg shadow-cyan-400/20 sm:h-36 sm:w-36"
            />
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-400">Dionis Grecu</p>
              <p class="text-sm font-semibold text-slate-100">Junior Web Developer</p>
              <p class="text-xs text-slate-400">+37369856924 / dgrecu011@gmail.com</p>
            </div>
          </div>
          <span class="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
            Frontend Junior | Vue | HTML/CSS/JS
          </span>
          <h1 class="text-3xl font-bold leading-tight sm:text-4xl">
            Sunt Dionis Grecu si construiesc interfete web clare, rapide si curate.
          </h1>
          <p class="text-slate-300">
            Imbin design-ul modern cu implementari ordonate. Mai jos gasesti cateva proiecte practice si ce tehnologii folosesc zi de zi.
          </p>
          <div class="flex flex-wrap gap-3">
            <a class="btn-primary" href="#proiecte">Vezi proiectele</a>
            <a class="btn-ghost" href="#contact">Ia legatura</a>
          </div>
          <div class="flex flex-wrap gap-2 text-xs text-slate-300">
            <span class="chip">Tel: +37369856924</span>
            <span class="chip">Email: dgrecu011@gmail.com</span>
            <a class="chip underline decoration-cyan-400/60 decoration-2 underline-offset-4" href="https://github.com/dgrecu011" target="_blank" rel="noreferrer">github.com/dgrecu011</a>
          </div>
        </div>

        <div class="rounded-xl border border-white/5 bg-slate-800/70 p-5 shadow-lg ring-1 ring-cyan-400/10">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-400">Snapshot skillset</p>
              <h3 class="text-lg font-semibold text-white">Stiva curenta</h3>
            </div>
            <span class="text-sm font-semibold text-cyan-300">Disponibil</span>
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill" class="chip">
              {{ skill }}
            </span>
          </div>
          <div class="mt-5 flex items-center justify-between rounded-lg bg-slate-900/70 px-4 py-3 text-sm text-slate-300 ring-1 ring-white/5">
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-500">Focus</p>
              <p class="font-semibold text-white">UX simplu | cod curat</p>
            </div>
            <span class="rounded-md bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/30">
              Vue + Vite
            </span>
          </div>
        </div>
      </main>

      <section class="mt-10 grid gap-4 md:grid-cols-4">
        <div v-for="item in highlights" :key="item.title" class="rounded-xl border border-white/5 bg-slate-900/70 p-5 shadow-md ring-1 ring-white/5">
          <p class="text-sm font-semibold text-cyan-300">{{ item.title }}</p>
          <p class="mt-1 text-3xl font-bold">{{ item.value }}</p>
          <p class="text-sm text-slate-400">{{ item.desc }}</p>
        </div>
      </section>

      <section id="proiecte" class="mt-14 space-y-6">
        <div class="flex items-baseline justify-between">
          <h2 class="text-2xl font-semibold">Proiecte recente</h2>
          <span class="text-xs uppercase tracking-wide text-slate-400">Live &amp; responsive</span>
        </div>
        <div class="grid gap-5 md:grid-cols-2">
          <article
            v-for="project in projects"
            :key="project.title"
            class="group rounded-xl border border-white/5 bg-slate-900/70 p-5 shadow-md transition duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/10"
          >
            <p class="text-xs uppercase tracking-[0.25em] text-slate-400">{{ project.tag }}</p>
            <h3 class="mt-2 text-xl font-semibold">{{ project.title }}</h3>
            <p class="mt-2 text-sm text-slate-300">{{ project.desc }}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="t in project.stack" :key="t" class="chip">
                {{ t }}
              </span>
            </div>
            <a
              :href="project.url"
              target="_blank"
              rel="noreferrer"
              class="mt-4 inline-flex items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-100"
            >
              Vezi live ->
            </a>
          </article>
        </div>
      </section>

      <section id="despre" class="mt-14 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-xl border border-white/5 bg-slate-900/70 p-6 shadow-lg">
          <h2 class="text-2xl font-semibold">Despre mine</h2>
          <p class="mt-3 text-slate-300">
            Sunt Dionis Grecu, frontend developer la inceput de drum. Imi place sa structurez interfetele cu layout-uri clare, culori coerente si sa mentin codul ordonat. In proiectele mele urmaresc sa acopar atat partea de UI/UX, cat si logica de baza din JavaScript.
          </p>
          <p class="mt-3 text-slate-300">
            Caut un rol de junior in care sa cresc alaturi de o echipa, sa contribui la produse reale si sa invat bune practici moderne (testare, accesibilitate, design systems).
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tag in softSkills" :key="tag" class="chip">{{ tag }}</span>
          </div>
          <div class="mt-5 flex flex-wrap gap-3">
            <a class="btn-primary" href="#contact">Hai sa povestim</a>
            <a class="btn-ghost" href="#">Descarca CV</a>
          </div>
        </div>
        <div class="rounded-xl border border-white/5 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-900/40 p-6 shadow-lg ring-1 ring-cyan-400/10">
          <h3 class="text-lg font-semibold text-white">Proces de lucru</h3>
          <ol class="mt-3 space-y-3 text-sm text-slate-200">
            <li v-for="step in steps" :key="step.title" class="flex gap-3">
              <span class="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-xs font-bold text-cyan-200 ring-1 ring-cyan-400/40">
                {{ step.id }}
              </span>
              <div>
                <p class="font-semibold text-white">{{ step.title }}</p>
                <p class="text-slate-300">{{ step.desc }}</p>
              </div>
            </li>
          </ol>
          <div class="mt-4 rounded-lg bg-slate-900/80 p-4 text-xs font-mono text-slate-200 ring-1 ring-white/10">
            <p class="text-cyan-300">snippet.vue</p>
            <pre class="mt-2 whitespace-pre-wrap text-[11px] leading-5 text-slate-100">
const state = reactive({ design: 'curat', ux: 'clar', livrare: 'rapida' })
const done = computed(() => state.design && state.ux && state.livrare)
</pre>
          </div>
        </div>
      </section>

      <section class="mt-14 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-xl border border-white/5 bg-slate-900/70 p-6 shadow-lg">
          <h3 class="text-lg font-semibold">Tooling preferat</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <span v-for="tool in tools" :key="tool" class="chip">
              {{ tool }}
            </span>
          </div>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <div v-for="feat in features" :key="feat.title" class="rounded-lg border border-white/5 bg-slate-950/70 p-4 ring-1 ring-white/5">
              <p class="text-sm font-semibold text-cyan-200">{{ feat.title }}</p>
              <p class="mt-1 text-sm text-slate-300">{{ feat.desc }}</p>
            </div>
          </div>
        </div>
        <div class="rounded-xl border border-white/5 bg-slate-900/70 p-6 shadow-lg ring-1 ring-cyan-400/10">
          <h3 class="text-lg font-semibold">Timeline scurt</h3>
          <div class="mt-4 space-y-3">
            <div v-for="item in timeline" :key="item.year" class="flex gap-3 rounded-lg border border-white/5 bg-slate-950/60 p-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/20 text-sm font-bold text-cyan-200 ring-1 ring-cyan-400/30">
                {{ item.year }}
              </div>
              <div>
                <p class="text-sm font-semibold text-white">{{ item.title }}</p>
                <p class="text-sm text-slate-300">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="mt-14">
        <div class="rounded-xl border border-white/5 bg-slate-900/70 p-6 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 class="text-2xl font-semibold">Contact</h2>
              <p class="text-sm text-slate-300">Deschis pentru colaborari sau internship. Scrie-mi si iti raspund rapid.</p>
            </div>
            <div class="flex gap-2">
              <a class="btn-primary" :href="projects[0].url" target="_blank" rel="noreferrer">Deschide un proiect</a>
              <a class="btn-ghost" href="mailto:dgrecu011@gmail.com">Trimite email</a>
            </div>
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="chip">
              Email:
              <a class="ml-1 underline decoration-cyan-400/70 decoration-2 underline-offset-4" href="mailto:dgrecu011@gmail.com">
                dgrecu011@gmail.com
              </a>
            </span>
            <span class="chip">LinkedIn: adauga profilul tau aici</span>
          </div>
        </div>
      </section>

      <footer class="mt-10 text-center text-sm text-slate-400">
        (c) {{ new Date().getFullYear() }} Dionis Grecu | Portofoliu Frontend
      </footer>
    </div>
  </div>
</template>

<script setup>
import avatar from './poza/image.png';
const projects = [
  {
    title: 'Tehnica IT',
    tag: 'Landing | Practica',
    desc: 'Pagina de prezentare pentru servicii IT, cu focus pe claritate si CTA-uri vizibile.',
    url: 'https://dgrecu011.github.io/tehnica-it/',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Magazin1',
    tag: 'E-commerce mock',
    desc: 'Mini shop cu lista de produse si layout responsiv.',
    url: 'https://dgrecu011.github.io/Magazin1/',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

const skills = ['Vue 3', 'TypeScript', 'Tailwind', 'HTML5', 'CSS Grid/Flex', 'REST', 'Git/GitHub', 'Vite'];

const highlights = [
  { title: 'Proiecte live', value: '2', desc: 'Landing & mini e-commerce gata de vazut.' },
  { title: 'Timp build', value: '<1s', desc: 'Hot reload Vite in dev.' },
  { title: 'Focus UX', value: '100%', desc: 'Layout-uri clare, CTA-uri vizibile.' },
  { title: 'Disponibilitate', value: 'Imediat', desc: 'Gata de colaborare.' },
];

const softSkills = ['Comunicare clara', 'Autodidact', 'Documentatie', 'Disciplina', 'Feedback rapid'];

const steps = [
  { id: 1, title: 'Definire scop', desc: 'Clarific user flow si mesajele importante.' },
  { id: 2, title: 'Wireframe & stil', desc: 'Structura responsiva, culori si spatiere coerente.' },
  { id: 3, title: 'Implementare & QA', desc: 'Vue + Tailwind, teste rapide pe mobile/desktop.' },
];

const tools = ['VS Code', 'Vite', 'Vue Devtools', 'ESLint', 'Postman', 'Figma', 'GitHub'];

const features = [
  { title: 'Accesibilitate', desc: 'Contrast bun, focus states, semantic corect.' },
  { title: 'Performanta', desc: 'Bundle mic, imagini optimizate, caching default Vite.' },
  { title: 'UX clar', desc: 'CTA-uri vizibile si copy concis pentru utilizator.' },
  { title: 'Responsive', desc: 'Grid-uri fluide si verificari pe breakpoints mici.' },
];

const timeline = [
  { year: '2025', title: 'Portofoliu live', desc: 'Focus pe proiecte demo publice.' },
  { year: '2024', title: 'Web basics', desc: 'HTML, CSS, JS si primele proiecte statice.' },
  { year: '2023', title: 'Start frontend', desc: 'Primii pasi in JS si styling modern.' },
];
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:brightness-105;
}
.btn-ghost {
  @apply inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-100;
}
.chip {
  @apply inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200;
}
</style>




