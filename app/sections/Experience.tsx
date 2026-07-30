import { experience } from "@/app/data/portfolio";

export default function Experience() {
  return (
    <ul className="flex flex-col gap-10">
      {experience.map((job) => (
        <li key={job.id}>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <span className="text-sm">{job.period}</span>
          </div>
          <p className="mb-3 text-sm font-medium">{job.company}</p>
          <p className="text-base leading-relaxed">{job.description}</p>
        </li>
      ))}
    </ul>
  );
}
