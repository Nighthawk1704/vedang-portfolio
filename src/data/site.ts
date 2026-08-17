/* ============================================================
   Vedang Sai Rath — portfolio content model · SOURCE OF TRUTH
   ------------------------------------------------------------
   Everything the site displays lives here. Content is drawn from
   Vedang's résumé + notes. Items still in [brackets] are the few
   fields awaiting input (see TODO markers).
   ============================================================ */

export type NavItem = { label: string; href: string; key: string };

export const nav: NavItem[] = [
  { label: "Index", href: "/", key: "index" },
  { label: "Building", href: "/building", key: "building" },
  { label: "Reading", href: "/reading", key: "reading" },
  { label: "Captures & Collections", href: "/captures-collections", key: "captures" },
  { label: "Now", href: "/now", key: "now" },
  { label: "Hello", href: "/contact", key: "contact" },
];

export const identity = {
  name: "Vedang",
  fullName: "Vedang Sai Rath",
  tagline: "a notebook, mostly.",
  taglineStruck: "a portfolio,",
  vol: "VOL. 01",
  city: "New Delhi, India",
  email: "vedangrath@gmail.com",
  linkedin: "https://linkedin.com/in/vedang-sai-rath",
  github: "https://github.com/Nighthawk1704",
  resume: "/resume/Vedang_Sai_Rath.pdf",
};

// Hero — authored as HTML so you control the highlighter + script clause.
export const hero = {
  html: `I like building the <mark class="hl">surfaces</mark> people actually touch — and the <mark class="hl">systems</mark> underneath that make them trustworthy. <span class="script-clause">— front end to retrieval, I like the whole stack.</span>`,
  hint: "scroll like you'd flip a page.",
};

export const shortVersion = {
  role: "Software Engineer",
  blurb:
    "I ship production front ends in Next.js, build REST/GraphQL back ends in Node and FastAPI, automate the data pipelines around them, and lately build RAG systems that answer with citations — and I care whether the thing actually got faster and easier to use.",
  stack: [
    "TypeScript", "Python", "Java", "Go",
    "React", "Next.js", "Node.js", "FastAPI",
    "GraphQL", "PostgreSQL", "Docker", "RAG / LLMs",
  ],
  shipped: [
    { title: "PHP → Next.js migration", note: "40% faster page loads, 90+ Lighthouse" },
    { title: "Compliance crawler", note: "10,000+ records/day validated from 50+ live sources" },
    { title: "Regulatory Change Radar", note: "clause-level diffs, answered with citations" },
  ],
};

export type Project = {
  slug: string;
  meta: string;
  title: string;
  status: string;
  body: string;
  caption: string;
  photo: "p1" | "p2" | "p3"; // gradient fallback tint if img is empty
  img?: string;              // /projects/<file>. Drop a real photo here to replace the mockup.
  featured: boolean;
  repo?: string;             // GitHub link. Keep "#" to hide the link until you have a URL.
};

export const projects: Project[] = [
  {
    slug: "regulatory-change-radar",
    meta: "Personal · 2026 → Now",
    title: "Regulatory Change Radar",
    status: "/ In progress · RAG",
    body:
      "A system that ingests versioned regulatory and sanctions documents, detects clause-level changes between versions, and answers grounded questions with citations to the exact source — and returns “insufficient context” when retrieval confidence is low. Python, FastAPI, a vector DB, and an LLM, tuned to never bluff. Still actively building.",
    caption: "clause-level diffs, cited.",
    photo: "p1",
    img: "/projects/regulatory-change-radar.svg",
    featured: true,
    repo: "#", // TODO: repo URL
  },
  {
    slug: "kyc2020-migration",
    meta: "KYC2020 · Nov 2025 → May 2026",
    title: "Migrating a compliance platform to Next.js",
    status: "/ SDE Intern",
    body:
      "Led the PHP → Next.js migration of the company site, wiring GraphQL alongside the existing REST APIs for leaner data fetching — 40% faster page loads and 90+ Lighthouse. Then built the unglamorous glue around it: Node APIs with caching and retries, and a Java/Selenium/Playwright crawler pulling 10,000+ compliance records a day from 50+ live sources.",
    caption: "40% faster, 90+ lighthouse.",
    photo: "p2",
    // Your real screenshot: save it as public/projects/kyc2020.png and change this to "/projects/kyc2020.png"
    img: "/projects/kyc2020.svg",
    featured: true,
    repo: "#",
  },
  {
    slug: "cro-opportunity-engine",
    meta: "Personal · 2025",
    title: "CRO Opportunity Engine",
    status: "/ Shipped · LLM",
    body:
      "Scrapes live Shopify store data — stock levels, reviews, descriptions — and uses an LLM to identify and rank conversion-optimization opportunities by impact, confidence, and effort. TypeScript, Next.js, OpenRouter, and Cheerio doing the reading.",
    caption: "ranked by impact × confidence.",
    photo: "p3",
    img: "/projects/cro-opportunity-engine.svg",
    featured: true,
    repo: "#",
  },
  {
    slug: "pysandbox",
    meta: "Personal · 2025",
    title: "PySandbox",
    status: "/ Shipped · Infra",
    body:
      "A secure Python code-execution sandbox: Docker-based isolation, resource limits, timeout handling, and a comprehensive test suite for the nasty edge cases. FastAPI in front, containers doing the dangerous part.",
    caption: "run untrusted code, safely.",
    photo: "p1",
    img: "/projects/pysandbox.svg",
    featured: false,
    repo: "#",
  },
  {
    slug: "cvnt-site",
    meta: "CVNT · Aug 2025 → Nov 2025",
    title: "A production site that moves at 60fps",
    status: "/ Frontend Intern",
    body:
      "Built the production website on Next.js 14 App Router with SSR and dynamic OG image generation, then made it feel alive: 20+ animated sections with GSAP and Framer Motion, holding a steady 60fps across devices. Shipped a reusable Tailwind component library that took dev velocity up 35%.",
    caption: "twenty sections, still 60fps.",
    photo: "p2",
    // Your real screenshot: save it as public/projects/cvnt.png and change this to "/projects/cvnt.png"
    img: "/projects/cvnt.svg",
    featured: false,
  },
  {
    slug: "ideomethod-dashboards",
    meta: "Ideomethod · May 2025 → Aug 2025",
    title: "Dashboard modules, tightened",
    status: "/ Frontend Intern",
    body:
      "Built dashboard modules in React, Next.js, and TypeScript with REST integration, error handling, and caching. Refactored 15+ components and cut API calls by 40% through state optimization and request caching — the quiet kind of win that only shows up in the network tab.",
    caption: "40% fewer calls.",
    photo: "p3",
    img: "/projects/ideomethod-dashboards.svg",
    featured: false,
  },
  {
    slug: "cetpa-chatbot",
    meta: "CETPA · Jul 2024 → Feb 2025",
    title: "The first thing I felt proud of — a chatbot",
    status: "/ ML Intern",
    body:
      "My first internship: a conversational chatbot in Python with TensorFlow, NLTK, and Flask, reaching 89% intent-classification accuracy. Designed the SQLite schema and wrote the queries behind persistence and analytics. The first time something I built actually talked back.",
    caption: "89% intent accuracy.",
    photo: "p1",
    img: "/projects/cetpa-chatbot.svg",
    featured: false,
  },
];

export type TimelineItem = { date: string; body: string; note?: string };

export const timeline: TimelineItem[] = [
  { date: "2022", body: "started B.Tech in Electronics &amp; Communication at GGSIPU, New Delhi.", note: "where it began" },
  { date: "Jul 2024", body: "first internship — ML at CETPA. built a chatbot that hit 89% intent accuracy.", note: "my first taste" },
  { date: "2025", body: "three roles back to back — frontend at Ideomethod, then CVNT, then SDE." },
  { date: "Nov 2025", body: "SDE Intern at KYC2020: led the PHP → Next.js migration.", note: "currently here" },
  { date: "2026", body: "graduating; going deeper on RAG, systems, and reverse engineering." },
];

export type Book = { title: string; author: string; status: string };

export const books: Book[] = [
  { title: "The Power of Your Subconscious Mind", author: "Joseph Murphy", status: "reading" },
  { title: "Manifest", author: "Roxie Nafousi", status: "finished" },
  { title: "Psycho-Cybernetics", author: "Maxwell Maltz", status: "next up" },
];

export type Quote = { src: string; quote: string; attribution: string; react: string; mark?: boolean };

export const quotes: Quote[] = [
  {
    src: "From — The Power of Your Subconscious Mind",
    quote: "The feeling of wealth produces wealth.",
    attribution: "— Joseph Murphy",
    react: "a whole mindset in five words.",
    mark: true,
  },
]; // Add more passages you kept here.

export const now = {
  updated: "August 2026",
  tagline: "a page that goes out of date on purpose.",
  intro:
    "Final year of a B.Tech, wrapping up an SDE internship in RegTech, and spending the edges of the day on the things that make me a sharper engineer. Here's the honest snapshot.",
  categories: [
    {
      title: "Building",
      items: [
        "Regulatory Change Radar — grounded RAG that answers with citations (in progress)",
        "wrapping the PHP → Next.js migration at KYC2020",
        "this notebook of a portfolio",
        "polishing CRO Opportunity Engine &amp; PySandbox",
      ],
    },
    {
      title: "Reading",
      items: [
        "The Power of Your Subconscious Mind — Joseph Murphy",
        "just finished Manifest — Roxie Nafousi",
        "Psycho-Cybernetics — Maxwell Maltz (next up)",
      ],
    },
    {
      title: "Thinking about",
      items: [
        "how to be better — improve and optimise what I do",
        "where product meets systems, and living at that seam",
        "retrieval that refuses to bluff",
      ],
    },
    {
      title: "Learning",
      items: ["Reverse Engineering", "Cryptography", "DSA", "RAG &amp; LLMs, deeper"],
    },
  ],
  // Secondary row — the rest of the desk
  tools: ["Claude Code", "Cursor", "VS Code", "Docker", "Postman", "Git"],
  where: "New Delhi, India — finishing B.Tech (ECE) at GGSIPU, class of 2026.",
  // NOTE: assumption — edit/remove if you'd rather not signal availability.
  openTo: "full-time SDE roles from mid-2026 — product + systems work, especially anything touching RAG / LLMs.",
  close: "→ come back in a month; it'll be wrong by then.",
};

// Footer polaroid gallery — real photos + captions
export type GalleryPhoto = { src: string; caption: string };
export const gallery: GalleryPhoto[] = [
  { src: "/captures/IMG_6624.jpeg", caption: "post-op, they stayed." },
  { src: "/captures/IMG_5101.jpeg", caption: "mum & the dog." },
  { src: "/captures/IMG_6623.jpeg", caption: "a good sky." },
  { src: "/captures/IMG_5144.jpeg", caption: "good boy." },
  { src: "/captures/IMG_6625.jpeg", caption: "sun patrol." },
];
