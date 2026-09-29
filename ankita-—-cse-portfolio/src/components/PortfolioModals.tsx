import React, { useEffect } from 'react';
import { X, Printer, CheckCircle2, Mail, Copy, Check } from 'lucide-react';
import {
  ProjectItem,
  CAREER_OBJECTIVE,
  EDUCATION_DATA,
  SKILL_CATEGORIES,
  PROJECTS_DATA,
  LEARNING_TOPICS,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectDetailModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  isDark,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const isNeonCard = project.themeVariant === 'dark-neon';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl transition-colors ${
          isNeonCard
            ? 'bg-[#090D16] text-slate-100 border border-cyan-500/30'
            : isDark
            ? 'bg-[#141413] text-[#F6F6F3] border border-white/10'
            : 'bg-[#F6F6F3] text-[#141413] border border-black/10'
        }`}
      >
        {/* Top bar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isNeonCard
              ? 'border-cyan-500/20 bg-[#0D1322]'
              : isDark
              ? 'border-white/10 bg-[#1C1C1A]'
              : 'border-black/8 bg-[#EFECE6]'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono-tabular">
            <span className={isNeonCard ? 'text-cyan-400' : 'text-[#2563EB]'}>
              Project {project.index}
            </span>
            <span aria-hidden="true">·</span>
            <span className="opacity-75">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          {project.imageUrl && (
            <div className="rounded-xl overflow-hidden border border-black/8 dark:border-white/10 aspect-16/9">
              <ResilientImage
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                fallbackTitle={project.title}
                fallbackSubtitle={project.technologies.join(' · ')}
                darkVariant={isNeonCard || isDark}
              />
            </div>
          )}

          <div>
            <h3
              id="project-modal-title"
              className="font-display text-2xl sm:text-3xl font-semibold tracking-tight"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base opacity-85 leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          <div
            className={`pt-5 border-t ${
              isNeonCard
                ? 'border-cyan-500/20'
                : isDark
                ? 'border-white/10'
                : 'border-black/8'
            }`}
          >
            <h4 className="text-xs font-semibold tracking-wide uppercase opacity-60 mb-3">
              Key Features & Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      isNeonCard ? 'text-cyan-400' : 'text-[#2563EB]'
                    }`}
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`pt-5 border-t ${
              isNeonCard
                ? 'border-cyan-500/20'
                : isDark
                ? 'border-white/10'
                : 'border-black/8'
            }`}
          >
            <h4 className="text-xs font-semibold tracking-wide uppercase opacity-60 mb-2">
              Technologies Used
            </h4>
            <p
              className={`text-sm font-mono-tabular ${
                isNeonCard ? 'text-cyan-300' : 'text-[#2563EB]'
              }`}
            >
              {project.technologies.join(' · ')}
            </p>
          </div>

          <div
            className={`p-4 rounded-xl text-xs leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              isNeonCard
                ? 'bg-cyan-950/40 border border-cyan-500/20 text-cyan-100'
                : isDark
                ? 'bg-white/5 border border-white/10 text-slate-300'
                : 'bg-[#EFECE6] border border-black/8 text-[#575653]'
            }`}
          >
            <div>
              <span className="font-semibold block text-sm mb-0.5">
                {project.placeholderLabel}
              </span>
              Academic project repository placeholder. Source code and live demonstration available during college presentation or upon request.
            </div>
            <a
              href={`mailto:gadavanteankitab148@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(
                project.title
              )}`}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 text-center transition-colors ${
                isNeonCard
                  ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                  : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
              }`}
            >
              Request Code / Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export type PlaceholderModalType = 'github' | 'linkedin' | 'resume' | null;

interface PlaceholderModalProps {
  type: PlaceholderModalType;
  onClose: () => void;
  isDark: boolean;
}

export const PlaceholderActionModal: React.FC<PlaceholderModalProps> = ({
  type,
  onClose,
  isDark,
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gadavanteankitab148@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (type === 'resume') {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border ${
            isDark
              ? 'bg-[#141413] text-[#F6F6F3] border-white/15'
              : 'bg-white text-[#141413] border-black/10'
          }`}
        >
          <div
            className={`flex items-center justify-between px-6 py-4 border-b no-print ${
              isDark ? 'border-white/10 bg-[#1C1C1A]' : 'border-black/8 bg-[#F6F6F3]'
            }`}
          >
            <span className="text-xs font-mono-tabular font-medium">
              [Download Resume] · Academic CV Preview
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors cursor-pointer whitespace-nowrap"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save PDF
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto space-y-6 text-sm">
            <div className="border-b border-current/10 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2
                  id="resume-modal-title"
                  className="font-display text-3xl font-semibold tracking-tight"
                >
                  Ankita
                </h2>
                <p className="text-sm opacity-80 mt-1">
                  Computer Science & Engineering Student | Aspiring Software Developer
                </p>
                <p className="text-xs opacity-65 mt-0.5">Karnataka, India</p>
              </div>
              <div className="text-xs font-mono-tabular space-y-1 sm:text-right">
                <p>Email: gadavanteankitab148@gmail.com</p>
                <p className="opacity-70">[GitHub Profile] · [LinkedIn Profile]</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-1.5">
                Career Objective
              </h3>
              <p className="leading-relaxed opacity-90">{CAREER_OBJECTIVE}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2.5">
                Education
              </h3>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-current/8 last:border-b-0"
                  >
                    <div>
                      <p className="font-semibold">{edu.degree}</p>
                      <p className="text-xs opacity-75">{edu.institution}</p>
                    </div>
                    <div className="font-mono-tabular text-xs font-medium mt-1 sm:mt-0">
                      {edu.scoreLabel}: <span className="font-semibold">{edu.scoreValue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2.5">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="text-xs">
                    <span className="font-semibold">{cat.category}: </span>
                    <span className="opacity-80">
                      {cat.skills.map((s) => s.name).join(' · ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2.5">
                Academic Projects
              </h3>
              <div className="space-y-3">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-semibold text-sm">{proj.title}</span>
                      <span className="font-mono-tabular opacity-70">
                        {proj.technologies.join(' · ')}
                      </span>
                    </div>
                    <p className="opacity-80 mt-0.5">{proj.shortDescription}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-1.5">
                Continuous Learning & Coursework
              </h3>
              <p className="text-xs opacity-85 leading-relaxed">
                {LEARNING_TOPICS.map((t) => t.topic).join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const label = type === 'github' ? '[GitHub Profile]' : '[LinkedIn Profile]';
  const title =
    type === 'github' ? 'GitHub Profile Placeholder' : 'LinkedIn Profile Placeholder';
  const description =
    type === 'github'
      ? 'This button is configured as a clean placeholder ([GitHub Profile]) for Ankita’s GitHub repositories. No external URL has been fabricated.'
      : 'This button is configured as a clean placeholder ([LinkedIn Profile]) for Ankita’s professional LinkedIn network. No external URL has been fabricated.';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-md rounded-2xl p-6 shadow-2xl border ${
          isDark
            ? 'bg-[#141413] text-[#F6F6F3] border-white/15'
            : 'bg-[#F6F6F3] text-[#141413] border-black/10'
        }`}
      >
        <div className="flex items-center justify-between pb-3 border-b border-current/10">
          <span className="font-mono-tabular text-xs text-[#2563EB] font-medium">
            {label}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <h3 className="font-display text-xl font-semibold mt-4">{title}</h3>
        <p className="text-sm opacity-80 mt-2 leading-relaxed">{description}</p>

        <div
          className={`mt-5 p-4 rounded-xl border ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-[#EFECE6] border-black/8'
          }`}
        >
          <p className="text-xs opacity-70 mb-1">Verified Direct Contact:</p>
          <div className="flex items-center justify-between gap-2">
            <a
              href="mailto:gadavanteankitab148@gmail.com"
              className="text-xs font-mono-tabular font-medium text-[#2563EB] hover:underline truncate"
            >
              gadavanteankitab148@gmail.com
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-black/5 dark:bg-white/10 hover:bg-black/10 transition-colors cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <a
            href="mailto:gadavanteankitab148@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Email Ankita
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium border border-current/15 hover:bg-current/5 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
