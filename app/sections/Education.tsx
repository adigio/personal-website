import type { Dictionary } from "@/app/i18n/dictionaries";

type EducationProps = {
  education: Dictionary["education"];
};

export default function Education({ education }: EducationProps) {
  return (
    <ul className="flex flex-col gap-8">
      {education.map((item) => (
        <li key={item.id}>
          <h3 className="text-lg font-semibold">{item.degree}</h3>
          <p className="mt-1 text-sm font-medium">
            {item.institutionUrl ? (
              <a
                href={item.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 hover:no-underline"
              >
                {item.institution}
              </a>
            ) : (
              item.institution
            )}
          </p>
          <p className="mt-1 text-sm">{item.period}</p>
        </li>
      ))}
    </ul>
  );
}
