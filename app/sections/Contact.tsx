import { profile } from "@/app/data/portfolio";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
        Open to new opportunities and collaborations. Reach out by email or
        connect on LinkedIn and GitHub.
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
