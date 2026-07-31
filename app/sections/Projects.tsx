import type { Dictionary } from "@/app/i18n/dictionaries";

type ProjectsProps = {
  projects: Dictionary["projects"];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ul className="flex flex-col gap-10">
      {projects.map((project) => (
        <li key={project.id}>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mb-3 mt-2 text-sm leading-relaxed sm:text-base">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="border border-black px-2 py-1 text-xs">
                {tag}
              </li>
            ))}
          </ul>
          {project.links && project.links.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {project.links.map((link) => (
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
