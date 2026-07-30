import { skills } from "@/app/data/portfolio";

export default function Skills() {
  return (
    <ul className="grid gap-8 sm:grid-cols-2">
      {skills.map((skill) => (
        <li key={skill.name}>
          <h3 className="mb-3 text-base font-semibold">{skill.name}</h3>
          <p className="text-sm leading-relaxed">{skill.items.join(" · ")}</p>
        </li>
      ))}
    </ul>
  );
}
