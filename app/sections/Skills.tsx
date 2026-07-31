import type { Dictionary } from "@/app/i18n/dictionaries";

type SkillsProps = {
  skills: Dictionary["skills"];
};

export default function Skills({ skills }: SkillsProps) {
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
