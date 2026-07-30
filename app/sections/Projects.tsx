import { projects } from "@/app/data/portfolio";

export default function Projects() {
  return (
    <ul className="flex flex-col gap-10">
      {projects.map((project) => (
        <li key={project.id}>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mb-3 mt-2 text-base leading-relaxed">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="border border-black px-2 py-1 text-xs">
                {tag}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
