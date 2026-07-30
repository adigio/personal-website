import { profile } from "@/app/data/portfolio";

export default function Header() {
  return (
    <header className="px-6 pb-10 pt-16 sm:px-10 sm:pt-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="[font-family:var(--font-silkscreen)] text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 [font-family:var(--font-silkscreen)] text-lg font-normal sm:text-2xl">
          {profile.role} · {profile.location}
        </p>
      </div>
    </header>
  );
}
