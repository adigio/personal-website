import type { Dictionary } from "@/app/i18n/dictionaries";

type ExperienceProps = {
  experience: Dictionary["experience"];
};

export default function Experience({ experience }: ExperienceProps) {
  return (
    <ul className="flex flex-col gap-10">
      {experience.map((job) => (
        <li key={job.id}>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <span className="text-sm">{job.period}</span>
          </div>
          <p className="mb-1 text-sm font-medium">
            {job.companyUrl ? (
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 hover:no-underline"
              >
                {job.company}
              </a>
            ) : (
              job.company
            )}
          </p>
          <p className="mb-3 text-xs sm:text-sm">{job.location}</p>
          <p className="text-sm leading-relaxed sm:text-base">{job.description}</p>
          {job.links && job.links.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {job.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-4 hover:no-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
