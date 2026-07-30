import { profile } from "@/app/data/portfolio";

export default function About() {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
        {profile.about}
      </p>
      <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
        <a
          href={profile.email}
          className="underline decoration-1 underline-offset-4 hover:no-underline"
        >
          Email
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1 underline-offset-4 hover:no-underline"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1 underline-offset-4 hover:no-underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
