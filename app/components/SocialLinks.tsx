import type { Dictionary } from "@/app/i18n/dictionaries";

type SocialLinksProps = {
  profile: Dictionary["profile"];
};

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
    >
      <path
        d="M16.5 8.5a4 4 0 0 1 4 4V19h-3.5v-6a2 2 0 0 0-4 0v6H9.5V8.5H13V10a4.2 4.2 0 0 1 3.5-1.5Z"
        fill="currentColor"
      />
      <path d="M6 9h3.5v10H6z" fill="currentColor" />
      <circle cx="7.75" cy="6.25" r="1.75" fill="currentColor" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
    >
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.09.64-.2.64-.45v-1.6c-2.62.57-3.17-1.12-3.17-1.12-.42-1.08-1.03-1.37-1.03-1.37-.84-.57.06-.56.06-.56.93.07 1.42.95 1.42.95.82 1.4 2.14 1 2.66.76.08-.6.32-1 .58-1.23-2.1-.24-4.3-1.06-4.3-4.72 0-1.04.37-1.9.98-2.58-.1-.24-.42-1.2.09-2.5 0 0 .8-.26 2.62.98a9 9 0 0 1 4.76 0c1.82-1.24 2.62-.98 2.62-.98.51 1.3.19 2.26.09 2.5.61.68.98 1.54.98 2.58 0 3.67-2.2 4.48-4.3 4.72.34.29.65.86.65 1.73v2.56c0 .25.17.54.65.45A9.5 9.5 0 0 0 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-9 items-center gap-2 underline decoration-1 underline-offset-4 hover:no-underline"
      aria-label={label}
    >
      {children}
      <span>{label}</span>
    </a>
  );
}

export default function SocialLinks({ profile }: SocialLinksProps) {
  return (
    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
      <SocialLink href={profile.linkedinHref} label={profile.linkedinLabel}>
        <LinkedInIcon />
      </SocialLink>
      <SocialLink href={profile.githubHref} label={profile.githubLabel}>
        <GitHubIcon />
      </SocialLink>
    </div>
  );
}
