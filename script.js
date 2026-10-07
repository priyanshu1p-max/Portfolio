const skills = [
  { name: 'Java', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Intermediate' },
  { name: 'JDBC', level: 'Intermediate' },
  { name: 'Servlet', level: 'Intermediate' },
  { name: 'JSP', level: 'Intermediate' },
  { name: 'Hibernate', level: 'Intermediate' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'Python', level: 'Basic' },
  { name: 'Git', level: 'Intermediate' },
];

const services = [
  {
    title: 'Frontend Development',
    description: 'Responsive user interfaces using HTML, CSS, JavaScript, and Tailwind to create smooth user experiences.',
    icon: '⚡',
  },
  {
    title: 'Java Backend',
    description: 'Building database-driven applications with Java, Servlets, JSP, JDBC, and MVC logic for real-world solutions.',
    icon: '🧩',
  },
  {
    title: 'Database & API Logic',
    description: 'Designing efficient data flows, integrations, and application logic with MySQL and structured backend patterns.',
    icon: '🔗',
  },
];

const journey = [
  {
    title: 'Java Full Stack Learner',
    period: '2024 - Present',
    description: 'Focused on Java backend development, web application architecture, and full-stack implementation workflows.',
  },
  {
    title: 'Frontend & UI Practice',
    period: '2024',
    description: 'Improved design and interaction skills using HTML, CSS, JavaScript, and Tailwind for polished interfaces.',
  },
  {
    title: 'Database & Problem Solving',
    period: '2023',
    description: 'Built core understanding of SQL, data handling, and practical project execution through structured learning.',
  },
];

const projects = [
  {
    title: 'Bank Management System',
    description: 'A secure banking application built with Java, Servlets, JSP, JDBC, and MySQL for efficient account management and data handling.',
    technology: ['Java', 'Servlet', 'JSP', 'JDBC', 'MySQL'],
    category: 'Java',
    year: '2025',
    impact: 'Core Java project',
    accent: 'from-blue-500 to-cyan-400',
    link: '#',
  },
  {
    title: 'Employee Salary Prediction',
    description: 'Predictive modeling solution using Python to estimate expected employee salary based on key features and historical patterns.',
    technology: ['Python', 'Machine Learning', 'Jupyter'],
    category: 'Python',
    year: '2024',
    impact: 'AI solution',
    accent: 'from-violet-500 to-purple-600',
    link: '#',
  },
  {
    title: 'Quiz Application',
    description: 'Interactive quiz platform built using HTML, CSS, and JavaScript with instant score tracking and smooth user interactions.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    category: 'JavaScript',
    year: '2025',
    impact: 'Frontend app',
    accent: 'from-amber-400 to-orange-500',
    link: '#',
  },
  {
    title: 'Property Dealer Web App',
    description: 'Responsive web interface for property listing and browsing, created to present listings in a clean and engaging way.',
    technology: ['Java', 'Hibernate', 'Springboot' ,'React.js'],
    category: 'Java',
    year: '2026',
    impact: 'Full Stack Project',
    accent: 'from-emerald-500 to-teal-500',
    link: '#',
  },
  {
    title: 'AI Study Buddy',
    description: 'Student-focused assistant concept designed to support learning routines, study planning, and quick knowledge access.',
    technology: ['Python', 'AI', 'JavaScript'],
    category: 'Python',
    year: '2025',
    impact: 'Study productivity',
    accent: 'from-pink-500 to-rose-500',
    link: '#',
  },
];

const stats = [
  { value: '2+', label: 'Years Learning' },
  { value: '5+', label: 'Projects Built' },
  { value: '12', label: 'Skills' },
];

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const themeBtn = document.getElementById('themeBtn');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const projectSearch = document.getElementById('projectSearch');
const projectsContainer = document.getElementById('projectsContainer');
const skillsContainer = document.getElementById('skillsContainer');
const heroStats = document.getElementById('heroStats');
const servicesContainer = document.getElementById('servicesContainer');
const journeyContainer = document.getElementById('journeyContainer');

function renderStats() {
  if (!heroStats) return;

  heroStats.innerHTML = stats
    .map(
      (stat) => `
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-800">
          <div class="text-2xl font-black text-slate-900 dark:text-white">${stat.value}</div>
          <div class="mt-1 text-xs text-slate-500 dark:text-slate-400">${stat.label}</div>
        </div>
      `
    )
    .join('');
}

function renderServices() {
  if (!servicesContainer) return;

  servicesContainer.innerHTML = services
    .map(
      (service) => `
        <div class="reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-900/30">${service.icon}</div>
          <h3 class="text-xl font-bold">${service.title}</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">${service.description}</p>
        </div>
      `
    )
    .join('');
}

function renderJourney() {
  if (!journeyContainer) return;

  journeyContainer.innerHTML = journey
    .map(
      (item, index) => `
        <div class="reveal flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div class="flex flex-col items-center">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">${index + 1}</div>
            ${index !== journey.length - 1 ? '<div class="mt-2 h-full w-px bg-slate-300 dark:bg-slate-700"></div>' : ''}
          </div>
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">${item.period}</p>
            <h3 class="mt-2 text-2xl font-bold">${item.title}</h3>
            <p class="mt-3 text-slate-600 dark:text-slate-300">${item.description}</p>
          </div>
        </div>
      `
    )
    .join('');
}

function renderSkills() {
  if (!skillsContainer) return;

  skillsContainer.innerHTML = skills
    .map(
      (skill) => `
        <div class="reveal rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
          <div class="flex items-center justify-between">
            <span class="text-lg font-bold">${skill.name}</span>
            <span class="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">${skill.level}</span>
          </div>
          <div class="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div class="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style="width: ${skill.level === 'Advanced' ? 90 : skill.level === 'Intermediate' ? 75 : 55}%"></div>
          </div>
        </div>
      `
    )
    .join('');
}

function renderProjects(projectList) {
  if (!projectsContainer) return;

  if (projectList.length === 0) {
    projectsContainer.innerHTML = `
      <div class="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
        No matching projects found.
      </div>
    `;
    return;
  }

  projectsContainer.innerHTML = projectList
    .map(
      (project) => `
        <article class="reveal group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <div class="h-36 bg-gradient-to-br ${project.accent} p-5">
            <div class="flex items-center justify-between">
              <span class="rounded-full bg-white/20 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">${project.category}</span>
              <span class="text-xs font-medium text-white/90">${project.year}</span>
            </div>
            <h3 class="mt-10 text-2xl font-bold text-white">${project.title}</h3>
          </div>

          <div class="p-6">
            <p class="text-slate-600 dark:text-slate-300">${project.description}</p>

            <div class="mt-5 flex flex-wrap gap-2">
              ${project.technology
                .map(
                  (item) => `<span class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">${item}</span>`
                )
                .join('')}
            </div>

            <div class="mt-6 flex items-center justify-between">
              <span class="text-sm font-medium text-blue-600 dark:text-blue-400">${project.impact}</span>
              <a href="${project.link}" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Explore
                <span>→</span>
              </a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function applyFilters() {
  if (!projectSearch) return;

  const searchTerm = projectSearch.value.trim().toLowerCase();
  const activeBtn = document.querySelector('.filterBtn.active');
  const selectedCategory = activeBtn ? activeBtn.dataset.category : 'All';

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.technology.some((tech) => tech.toLowerCase().includes(searchTerm));

    return matchesCategory && matchesSearch;
  });

  renderProjects(filteredProjects);
}

function updateFilterButtons(activeButton) {
  const buttons = document.querySelectorAll('.filterBtn');

  buttons.forEach((button) => {
    const active = button === activeButton;
    button.classList.toggle('active', active);
    button.classList.toggle('bg-slate-900', active);
    button.classList.toggle('text-white', active);
    button.classList.toggle('dark:bg-blue-600', active);
    button.classList.toggle('dark:text-white', active);
    button.classList.toggle('border', !active);
    button.classList.toggle('border-slate-300', !active);
    button.classList.toggle('bg-white', !active);
    button.classList.toggle('text-slate-700', !active);
    button.classList.toggle('dark:border-slate-700', !active);
    button.classList.toggle('dark:bg-slate-900', !active);
    button.classList.toggle('dark:text-slate-200', !active);
  });
}

function setTheme(theme) {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    if (themeBtn) themeBtn.textContent = '☀️';
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    if (themeBtn) themeBtn.textContent = '🌙';
  }
}

function setupRevealAnimations() {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-6');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => {
    el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
    observer.observe(el);
  });
}

function setupNavigationHighlight() {
  const sectionIds = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('text-blue-600', active);
          link.classList.toggle('dark:text-blue-400', active);
          link.classList.toggle('font-semibold', active);
        });
      });
    },
    { threshold: 0.5 }
  );

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('flex-col');
    mobileMenu.classList.toggle('absolute');
    mobileMenu.classList.toggle('top-16');
    mobileMenu.classList.toggle('right-6');
    mobileMenu.classList.toggle('rounded-xl');
    mobileMenu.classList.toggle('border');
    mobileMenu.classList.toggle('border-slate-200');
    mobileMenu.classList.toggle('bg-white');
    mobileMenu.classList.toggle('dark:border-slate-700');
    mobileMenu.classList.toggle('dark:bg-slate-900');
    mobileMenu.classList.toggle('p-4');
    mobileMenu.classList.toggle('shadow-lg');
  });
}

if (themeBtn) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();

    if (formStatus) {
      formStatus.textContent = `Thanks ${name || 'there'}! Your message has been sent successfully.`;
    }

    contactForm.reset();
  });
}

if (projectSearch) {
  projectSearch.addEventListener('input', applyFilters);
}

document.querySelectorAll('.filterBtn').forEach((button) => {
  button.addEventListener('click', () => {
    updateFilterButtons(button);
    applyFilters();
  });
});

renderStats();
renderServices();
renderJourney();
renderSkills();
renderProjects(projects);
setupRevealAnimations();
setupNavigationHighlight();

