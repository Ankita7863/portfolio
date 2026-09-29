import React, { useState } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
  Sun,
  Moon,
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import {
  HERO_IMAGE,
  ABOUT_IMAGE,
  ABOUT_HIGHLIGHTS,
  CAREER_OBJECTIVE,
  EDUCATION_DATA,
  SKILL_CATEGORIES,
  PROJECTS_DATA,
  INTERESTS_DATA,
  LEARNING_TOPICS,
  ProjectItem,
} from './data/portfolioData';
import { ResilientImage } from './components/ResilientImage';
import {
  ProjectDetailModal,
  PlaceholderActionModal,
  PlaceholderModalType,
} from './components/PortfolioModals';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Interests', href: '#interests' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
];

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('all');
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [placeholderModal, setPlaceholderModal] = useState<PlaceholderModalType>(null);

  // Contact form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const filteredSkillCategories =
    selectedSkillCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedSkillCategory);

  const filteredProjects =
    selectedProjectFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((proj) => proj.category === selectedProjectFilter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gadavanteankitab148@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? 'bg-[#0B0C0E] text-[#F4F4F0]' : 'bg-[#F6F6F3] text-[#141413]'
      }`}
    >
      {/* Top Navigation Bar — Strict 3-Zone Contract */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-200 no-print ${
          isDark
            ? 'bg-[#0B0C0E]/90 border-white/10'
            : 'bg-[#F6F6F3]/90 border-black/8'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Single Text Element Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="font-display text-xl font-semibold tracking-tight whitespace-nowrap shrink-0"
          >
            Ankita
          </a>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 text-sm font-medium"
          >
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`whitespace-nowrap transition-colors py-1 border-b-2 border-transparent hover:border-[#2563EB] ${
                  idx >= 5 ? 'hidden xl:inline-block' : ''
                } ${
                  isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-[#575653] hover:text-[#141413]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isDark
                  ? 'border-white/15 text-slate-200 hover:bg-white/10'
                  : 'border-black/10 text-[#141413] hover:bg-black/5'
              }`}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors whitespace-nowrap"
            >
              Contact Me
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg border transition-colors cursor-pointer ${
                isDark
                  ? 'border-white/15 text-slate-200 hover:bg-white/10'
                  : 'border-black/10 text-[#141413] hover:bg-black/5'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Navigation */}
        {mobileMenuOpen && (
          <div
            className={`xl:hidden border-t px-5 py-4 ${
              isDark
                ? 'bg-[#121316] border-white/10'
                : 'bg-[#EFECE6] border-black/8'
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDark
                      ? 'hover:bg-white/10 text-slate-200'
                      : 'hover:bg-black/5 text-[#141413]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 1. HERO SECTION */}
        <section
          id="home"
          className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-current/8"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Editorial Hierarchy & Primary Actions */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular opacity-75">
                  <span>Karnataka, India</span>
                  <span aria-hidden="true">·</span>
                  <span>B.E. in Computer Science & Engineering</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#2563EB] font-medium">CGPA 8.16</span>
                </div>

                <div className="space-y-3">
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-balance">
                    Hi, I&apos;m Ankita
                  </h1>
                  <p className="text-lg sm:text-xl font-medium text-[#2563EB] tracking-tight">
                    Computer Science &amp; Engineering Student | Aspiring Software Developer
                  </p>
                </div>

                <p
                  className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                    isDark ? 'text-slate-300' : 'text-[#454440]'
                  }`}
                >
                  Passionate about technology, web development, databases, and building practical software solutions.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#projects');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors whitespace-nowrap shadow-xs"
                  >
                    View My Projects
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#contact');
                    }}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-colors whitespace-nowrap ${
                      isDark
                        ? 'border-white/20 text-white hover:bg-white/10'
                        : 'border-black/15 text-[#141413] hover:bg-black/5'
                    }`}
                  >
                    Contact Me
                  </a>

                  <button
                    onClick={() => setPlaceholderModal('resume')}
                    className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-mono-tabular font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      isDark
                        ? 'text-slate-300 hover:text-white hover:bg-white/5'
                        : 'text-[#575653] hover:text-[#141413] hover:bg-black/5'
                    }`}
                  >
                    [Download Resume]
                  </button>
                </div>

                {/* Key Proof Metrics Strip — Unboxed Tabular Alignment */}
                <div className="pt-6 border-t border-current/10 grid grid-cols-3 gap-6 max-w-lg">
                  <div>
                    <p className="font-mono-tabular text-2xl sm:text-3xl font-semibold tracking-tight">
                      8.16
                    </p>
                    <p className="text-xs opacity-70 mt-0.5">Current B.E. CGPA</p>
                  </div>
                  <div>
                    <p className="font-mono-tabular text-2xl sm:text-3xl font-semibold tracking-tight">
                      05
                    </p>
                    <p className="text-xs opacity-70 mt-0.5">Academic Software Projects</p>
                  </div>
                  <div>
                    <p className="font-mono-tabular text-2xl sm:text-3xl font-semibold tracking-tight">
                      05
                    </p>
                    <p className="text-xs opacity-70 mt-0.5">Core Tech Domains</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Abstract Technology Illustration */}
              <div className="lg:col-span-5">
                <div
                  className={`rounded-2xl overflow-hidden border p-3 transition-colors ${
                    isDark
                      ? 'bg-[#14161B] border-white/10'
                      : 'bg-[#EFECE6] border-black/8'
                  }`}
                >
                  <div className="rounded-xl overflow-hidden aspect-4/3 relative">
                    <ResilientImage
                      src={HERO_IMAGE}
                      alt="Abstract isometric software engineering, database architecture, and web development illustration"
                      className="w-full h-full object-cover"
                      fallbackTitle="Software & Database Architecture"
                      fallbackSubtitle="Java · Spring Boot · Python · MySQL · Web"
                      darkVariant={isDark}
                    />
                  </div>
                  <div className="px-2 pt-3 pb-1 flex items-center justify-between text-xs opacity-75 font-mono-tabular">
                    <span>Web · Backend · Databases · AI/ML</span>
                    <span>CSE Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT ME & CAREER OBJECTIVE SECTION */}
        <section
          id="about"
          className="py-20 sm:py-24 border-b border-current/8"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-14">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-mono-tabular text-[#2563EB] font-medium">
                01 · About Me
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                Building a Strong Foundation in Software Engineering &amp; Problem Solving
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Student Workspace Illustration & Career Objective */}
              <div className="lg:col-span-5 space-y-6">
                <div
                  className={`rounded-2xl overflow-hidden border p-3 ${
                    isDark
                      ? 'bg-[#14161B] border-white/10'
                      : 'bg-[#EFECE6] border-black/8'
                  }`}
                >
                  <div className="rounded-xl overflow-hidden aspect-4/3">
                    <ResilientImage
                      src={ABOUT_IMAGE}
                      alt="Professional student study and software development workspace illustration"
                      className="w-full h-full object-cover"
                      fallbackTitle="Computer Science & Engineering Student"
                      fallbackSubtitle="Academic Projects & Hands-on Coding"
                      darkVariant={isDark}
                    />
                  </div>
                  <div className="px-2 pt-3 pb-1 flex items-center justify-between text-xs opacity-75">
                    <span>Ankita · Computer Science &amp; Engineering</span>
                    <span className="font-mono-tabular">CGPA 8.16</span>
                  </div>
                </div>

                {/* Career Objective Box */}
                <div
                  className={`p-6 rounded-2xl border ${
                    isDark
                      ? 'bg-[#14161B] border-white/10'
                      : 'bg-[#EFECE6] border-black/8'
                  }`}
                >
                  <p className="text-xs font-mono-tabular text-[#2563EB] font-medium mb-2">
                    Career Objective
                  </p>
                  <blockquote className="font-display text-base sm:text-lg italic leading-relaxed">
                    &ldquo;{CAREER_OBJECTIVE}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Right Column: Narrative Bio & 8 Key Points Grid */}
              <div className="lg:col-span-7 space-y-8">
                <div
                  className={`space-y-4 text-base leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-[#3D3C38]'
                  }`}
                >
                  <p>
                    My name is <strong className="font-semibold text-current">Ankita</strong>. I am a Computer Science and Engineering student from Karnataka, India, currently pursuing my engineering degree.
                  </p>
                  <p>
                    I am interested in{' '}
                    <strong className="font-semibold text-current">
                      Web Development, Software Development, Database Management, Artificial Intelligence, and Machine Learning
                    </strong>
                    . I enjoy learning new technologies and building practical projects that help me improve my programming and problem-solving skills.
                  </p>
                  <p>
                    I am continuously developing my technical skills through academic projects, programming practice, online courses, and hands-on development.
                  </p>
                  <p>
                    My career goal is to become a skilled software professional and build useful, real-world technology solutions.
                  </p>
                </div>

                {/* 8 Key Student Profile Points */}
                <div className="pt-4 border-t border-current/10">
                  <h3 className="text-xs font-mono-tabular opacity-70 mb-4">
                    Key Profile Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ABOUT_HIGHLIGHTS.map((item, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border transition-colors ${
                          isDark
                            ? 'bg-[#14161B] border-white/8 hover:border-white/20'
                            : 'bg-white border-black/8 hover:border-black/20'
                        }`}
                      >
                        <p className="text-xs opacity-60 font-mono-tabular">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold mt-1">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EDUCATION SECTION */}
        <section
          id="education"
          className="py-20 sm:py-24 border-b border-current/8"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-mono-tabular text-[#2563EB] font-medium">
                  02 · Education
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                  Academic Qualification &amp; Milestones
                </h2>
              </div>
              <p className="text-sm opacity-75 max-w-md">
                Consistent academic track record from secondary schooling through undergraduate Computer Science and Engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {EDUCATION_DATA.map((edu, index) => (
                <article
                  key={edu.id}
                  className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-colors ${
                    isDark
                      ? 'bg-[#14161B] border-white/10 hover:border-white/20'
                      : 'bg-white border-black/8 hover:border-black/20'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono-tabular opacity-70">
                      <span>0{index + 1}</span>
                      <span>{edu.status}</span>
                    </div>

                    <h3 className="font-display text-xl font-semibold tracking-tight leading-snug">
                      {edu.degree}
                    </h3>

                    <p className="text-sm font-medium text-[#2563EB]">
                      {edu.institution}
                    </p>

                    <ul className="space-y-2 pt-2 text-xs sm:text-sm opacity-80 leading-relaxed">
                      {edu.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-current/10 flex items-baseline justify-between">
                    <span className="text-xs font-mono-tabular opacity-70">
                      {edu.scoreLabel}
                    </span>
                    <span className="font-mono-tabular text-2xl sm:text-3xl font-semibold text-[#2563EB]">
                      {edu.scoreValue}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TECHNICAL SKILLS SECTION */}
        <section
          id="skills"
          className="py-20 sm:py-24 border-b border-current/8"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-mono-tabular text-[#2563EB] font-medium">
                  03 · Technical Skills
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                  Categorized Technical Toolkit
                </h2>
                <p className="text-sm opacity-75 pt-1">
                  Organized clearly by domain — Languages, Web Technologies, Frameworks, Databases, and Tools &amp; Core Concepts.
                </p>
              </div>

              {/* Interactive Filter Controls */}
              <div
                className={`flex flex-wrap items-center gap-1 p-1.5 rounded-xl border ${
                  isDark
                    ? 'bg-[#14161B] border-white/10'
                    : 'bg-[#EFECE6] border-black/8'
                }`}
                role="tablist"
                aria-label="Filter skills by category"
              >
                <button
                  onClick={() => setSelectedSkillCategory('all')}
                  role="tab"
                  aria-selected={selectedSkillCategory === 'all'}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    selectedSkillCategory === 'all'
                      ? 'bg-[#2563EB] text-white shadow-xs'
                      : 'opacity-75 hover:opacity-100'
                  }`}
                >
                  All Categories
                </button>
                {SKILL_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedSkillCategory(cat.id)}
                    role="tab"
                    aria-selected={selectedSkillCategory === cat.id}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      selectedSkillCategory === cat.id
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkillCategories.map((cat, idx) => (
                <div
                  key={cat.id}
                  className={`p-6 sm:p-8 rounded-2xl border transition-colors ${
                    cat.id === 'tools-concepts' && selectedSkillCategory === 'all'
                      ? 'md:col-span-2'
                      : ''
                  } ${
                    isDark
                      ? 'bg-[#14161B] border-white/10'
                      : 'bg-white border-black/8'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-current/10">
                    <div>
                      <span className="text-xs font-mono-tabular text-[#2563EB]">
                        0{idx + 1} · {cat.skills.length}{' '}
                        {cat.skills.length === 1 ? 'Skill' : 'Skills'}
                      </span>
                      <h3 className="font-display text-2xl font-semibold mt-0.5">
                        {cat.category}
                      </h3>
                    </div>
                    <p className="text-xs opacity-70 max-w-xs">{cat.description}</p>
                  </div>

                  <div
                    className={`mt-5 grid gap-4 ${
                      cat.id === 'tools-concepts' && selectedSkillCategory === 'all'
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                        : 'grid-cols-1 sm:grid-cols-2'
                    }`}
                  >
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="py-2.5 border-b border-current/8 last:border-b-0"
                      >
                        <p className="font-semibold text-sm sm:text-base">
                          {skill.name}
                        </p>
                        <p className="text-xs opacity-70 mt-1 leading-relaxed">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PROJECTS SECTION */}
        <section
          id="projects"
          className="py-20 sm:py-24 border-b border-current/8"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-mono-tabular text-[#2563EB] font-medium">
                  04 · Academic &amp; Hands-On Projects
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                  Practical Software Solutions
                </h2>
                <p className="text-sm opacity-75 pt-1">
                  Hands-on projects built across Python, Java, JSP/Servlets, JDBC, Spring Boot, and MySQL. Click any project card to inspect full features.
                </p>
              </div>

              {/* Project Category Filter Tabs */}
              <div
                className={`flex flex-wrap items-center gap-1 p-1.5 rounded-xl border ${
                  isDark
                    ? 'bg-[#14161B] border-white/10'
                    : 'bg-[#EFECE6] border-black/8'
                }`}
                role="tablist"
                aria-label="Filter projects by stack"
              >
                {['All', 'Java & Web', 'Spring Boot', 'Python'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedProjectFilter(tab)}
                    role="tab"
                    aria-selected={selectedProjectFilter === tab}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      selectedProjectFilter === tab
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    {tab === 'All' ? 'All Projects (05)' : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {filteredProjects.map((project) => {
                const isNeonCard = project.themeVariant === 'dark-neon';
                const isWide =
                  project.id === 'smart-queue-management' ||
                  project.id === 'employee-salary-management';

                return (
                  <article
                    key={project.id}
                    onClick={() => setActiveProjectModal(project)}
                    className={`group rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                      isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                    } ${
                      isNeonCard
                        ? 'bg-[#080C14] text-slate-100 border-cyan-500/30 hover:border-cyan-400 shadow-lg shadow-cyan-950/20'
                        : isDark
                        ? 'bg-[#14161B] text-[#F4F4F0] border-white/10 hover:border-white/25'
                        : 'bg-white text-[#141413] border-black/8 hover:border-black/25'
                    }`}
                  >
                    <div className="space-y-5">
                      {/* Header metadata line (Unboxed, zero-pill) */}
                      <div className="flex items-center justify-between gap-2 text-xs font-mono-tabular">
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              isNeonCard
                                ? 'text-cyan-400 font-semibold'
                                : 'text-[#2563EB] font-semibold'
                            }
                          >
                            {project.index}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="opacity-75">{project.category}</span>
                        </div>
                        {isNeonCard && (
                          <span className="text-cyan-300 font-mono-tabular text-xs">
                            Live Queue Interface Style
                          </span>
                        )}
                      </div>

                      {project.imageUrl && (
                        <div
                          className={`rounded-xl overflow-hidden border aspect-16/9 ${
                            isNeonCard
                              ? 'border-cyan-500/25'
                              : 'border-current/10'
                          }`}
                        >
                          <ResilientImage
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                            fallbackTitle={project.title}
                            fallbackSubtitle={project.technologies.join(' · ')}
                            darkVariant={isNeonCard || isDark}
                          />
                        </div>
                      )}

                      <div>
                        <h3
                          className={`font-display text-2xl font-semibold tracking-tight transition-colors ${
                            isNeonCard
                              ? 'group-hover:text-cyan-300'
                              : 'group-hover:text-[#2563EB]'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm opacity-85 leading-relaxed">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Feature list */}
                      <div
                        className={`pt-4 border-t ${
                          isNeonCard ? 'border-cyan-500/20' : 'border-current/10'
                        }`}
                      >
                        <p className="text-xs font-mono-tabular opacity-60 mb-2.5">
                          Key Features:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:text-sm opacity-90">
                          {project.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                  isNeonCard ? 'bg-cyan-400' : 'bg-[#2563EB]'
                                }`}
                              />
                              <span className="truncate">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer: Technologies & Action Button */}
                    <div
                      className={`mt-6 pt-5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isNeonCard ? 'border-cyan-500/20' : 'border-current/10'
                      }`}
                    >
                      <div className="text-xs font-mono-tabular">
                        <span className="opacity-60 block mb-0.5">Technologies:</span>
                        <span
                          className={`font-medium ${
                            isNeonCard ? 'text-cyan-300' : 'text-[#2563EB]'
                          }`}
                        >
                          {project.technologies.join(' · ')}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProjectModal(project);
                        }}
                        className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono-tabular font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isNeonCard
                            ? 'bg-cyan-400/15 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400 hover:text-slate-950'
                            : isDark
                            ? 'bg-white/10 text-white hover:bg-[#2563EB]'
                            : 'bg-[#EFECE6] text-[#141413] hover:bg-[#2563EB] hover:text-white'
                        }`}
                      >
                        {project.placeholderLabel}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. AREAS OF INTEREST SECTION */}
        <section
          id="interests"
          className="py-20 sm:py-24 border-b border-current/8"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-12">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-mono-tabular text-[#2563EB] font-medium">
                05 · Areas of Interest
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                Core Domains &amp; Engineering Interests
              </h2>
              <p className="text-sm opacity-75 pt-1">
                Key areas of computer science where I focus my academic study, coding practice, and project development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INTERESTS_DATA.map((interest, idx) => (
                <div
                  key={interest.id}
                  className={`p-6 rounded-2xl border flex flex-col justify-between transition-colors ${
                    isDark
                      ? 'bg-[#14161B] border-white/10 hover:border-white/25'
                      : 'bg-white border-black/8 hover:border-black/25'
                  }`}
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono-tabular text-[#2563EB]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {interest.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                      {interest.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-current/10">
                    <p className="text-xs font-mono-tabular opacity-70">
                      {interest.focusAreas}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CONTINUOUS LEARNING & MY DEVELOPMENT JOURNEY */}
        <section
          id="learning"
          className="py-20 sm:py-24 border-b border-current/8"
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 space-y-16">
            {/* Continuous Learning Part */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <p className="text-xs font-mono-tabular text-[#2563EB] font-medium">
                  06 · Continuous Learning
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                  Online Courses &amp; Technical Practice
                </h2>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                  I am continuously learning through online courses, structured self-study, and hands-on technical practice to strengthen both my software engineering fundamentals and communication skills.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div
                  className={`rounded-2xl border divide-y ${
                    isDark
                      ? 'bg-[#14161B] border-white/10 divide-white/10'
                      : 'bg-white border-black/8 divide-black/8'
                  }`}
                >
                  {LEARNING_TOPICS.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono-tabular">
                          <span className="text-[#2563EB] font-semibold">
                            {item.index}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="opacity-70">{item.domain}</span>
                        </div>
                        <h3 className="font-semibold text-base sm:text-lg">
                          {item.topic}
                        </h3>
                        <p className="text-xs sm:text-sm opacity-75">
                          {item.focusDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* My Development Journey Subsection */}
            <div
              className={`rounded-2xl border p-8 sm:p-10 ${
                isDark
                  ? 'bg-[#14161B] border-white/15'
                  : 'bg-[#EFECE6] border-black/10'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <p className="text-xs font-mono-tabular text-[#2563EB] font-medium">
                    GitHub &amp; Development Workflow
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                    My Development Journey
                  </h3>
                  <p className="text-sm sm:text-base opacity-85 leading-relaxed">
                    I regularly practice programming, build academic software projects, explore modern frameworks like Spring Boot, and use Git &amp; GitHub for version control, code organization, and project management.
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setPlaceholderModal('github')}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono-tabular font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                      isDark
                        ? 'bg-white/5 border-white/15 hover:bg-white/15 text-white'
                        : 'bg-white border-black/15 hover:bg-black/5 text-[#141413]'
                    }`}
                  >
                    [GitHub Profile]
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlaceholderModal('linkedin')}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono-tabular font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                      isDark
                        ? 'bg-white/5 border-white/15 hover:bg-white/15 text-white'
                        : 'bg-white border-black/15 hover:bg-black/5 text-[#141413]'
                    }`}
                  >
                    [LinkedIn Profile]
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlaceholderModal('resume')}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono-tabular font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    [Download Resume]
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section id="contact" className="py-20 sm:py-28">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-mono-tabular text-[#2563EB] font-medium">
                    07 · Contact
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                    Get in Touch
                  </h2>
                </div>

                <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                  Whether you are a college faculty member reviewing my academic portfolio, a recruiter with internship or placement opportunities, or a fellow developer, feel free to send a message.
                </p>

                <div
                  className={`p-6 rounded-2xl border space-y-4 ${
                    isDark
                      ? 'bg-[#14161B] border-white/10'
                      : 'bg-white border-black/8'
                  }`}
                >
                  <div>
                    <p className="text-xs font-mono-tabular opacity-60">
                      Direct Email
                    </p>
                    <a
                      href="mailto:gadavanteankitab148@gmail.com"
                      className="text-sm sm:text-base font-mono-tabular font-semibold text-[#2563EB] hover:underline break-all mt-1 inline-block"
                    >
                      gadavanteankitab148@gmail.com
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <a
                      href="mailto:gadavanteankitab148@gmail.com"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors whitespace-nowrap"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Open Email Client
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                        isDark
                          ? 'border-white/15 hover:bg-white/10'
                          : 'border-black/15 hover:bg-black/5'
                      }`}
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          Email Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy Address
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div
                  className={`p-6 sm:p-10 rounded-2xl border ${
                    isDark
                      ? 'bg-[#14161B] border-white/10'
                      : 'bg-white border-black/8'
                  }`}
                >
                  {formSubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-2xl font-semibold">
                        Message Prepared for Ankita
                      </h3>
                      <p className="text-sm opacity-80 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold">{formState.name}</span>. You can now send your message directly via your email client or copy the message details below.
                      </p>
                      <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={`mailto:gadavanteankitab148@gmail.com?subject=${encodeURIComponent(
                            `Portfolio Inquiry from ${formState.name}`
                          )}&body=${encodeURIComponent(
                            `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
                          )}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          Send via Mail App
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setFormSubmitted(false);
                            setFormState({ name: '', email: '', message: '' });
                          }}
                          className="px-4 py-2.5 rounded-xl text-xs font-medium border border-current/15 hover:bg-current/5 transition-colors cursor-pointer"
                        >
                          Write Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-xs font-semibold mb-2"
                          >
                            Name
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            placeholder="Your full name"
                            className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors ${
                              isDark
                                ? 'bg-[#0B0C0E] border-white/15 focus:border-[#2563EB] text-white'
                                : 'bg-[#F6F6F3] border-black/12 focus:border-[#2563EB] text-[#141413]'
                            }`}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-xs font-semibold mb-2"
                          >
                            Email
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({ ...formState, email: e.target.value })
                            }
                            placeholder="you@example.com"
                            className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors ${
                              isDark
                                ? 'bg-[#0B0C0E] border-white/15 focus:border-[#2563EB] text-white'
                                : 'bg-[#F6F6F3] border-black/12 focus:border-[#2563EB] text-[#141413]'
                            }`}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-semibold mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          required
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          placeholder="Write your message regarding internships, placements, or academic projects..."
                          className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors resize-y ${
                            isDark
                              ? 'bg-[#0B0C0E] border-white/15 focus:border-[#2563EB] text-white'
                              : 'bg-[#F6F6F3] border-black/12 focus:border-[#2563EB] text-[#141413]'
                          }`}
                        />
                      </div>

                      {formError && (
                        <p className="text-xs text-rose-500 font-medium" role="alert">
                          {formError}
                        </p>
                      )}

                      <div className="flex items-center justify-between gap-4 pt-1">
                        <span className="text-xs opacity-65">
                          Recipient: gadavanteankitab148@gmail.com
                        </span>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Send Message
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className={`border-t py-10 no-print ${
          isDark ? 'border-white/10 bg-[#08090B]' : 'border-black/8 bg-[#EFECE6]'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="opacity-80">© 2026 Ankita. All Rights Reserved.</p>

          <div className="flex items-center gap-4 font-mono-tabular">
            <button
              type="button"
              onClick={() => setPlaceholderModal('github')}
              className="hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              [GitHub Profile]
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setPlaceholderModal('linkedin')}
              className="hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              [LinkedIn Profile]
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="mailto:gadavanteankitab148@gmail.com"
              className="hover:text-[#2563EB] transition-colors"
            >
              gadavanteankitab148@gmail.com
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ProjectDetailModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        isDark={isDark}
      />

      <PlaceholderActionModal
        type={placeholderModal}
        onClose={() => setPlaceholderModal(null)}
        isDark={isDark}
      />
    </div>
  );
}
