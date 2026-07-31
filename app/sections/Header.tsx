import type { Dictionary } from "@/app/i18n/dictionaries";
import type { Locale } from "@/app/i18n/config";

type HeaderProps = {
  profile: Dictionary["profile"];
  locale: Locale;
};

export default function Header({ profile, locale }: HeaderProps) {
  const alternateLocale = locale === "en" ? "es" : "en";
  const localeLabel =
    alternateLocale === "es" ? "Cambiar a Español" : "Change to English";

  return (
    <header className="relative px-4 pb-8 pt-12 sm:px-10 sm:pb-10 sm:pt-24">
      <a
        href={`/${alternateLocale}`}
        aria-label={localeLabel}
        title={localeLabel}
        className="absolute right-4 top-4 inline-flex min-h-10 min-w-10 items-center justify-center border border-black bg-[#f7f7f7] px-3 text-xs font-semibold text-black sm:hidden"
      >
        {alternateLocale.toUpperCase()}
      </a>
      <div className="mx-auto max-w-4xl">
        <h1 className="[font-family:var(--font-silkscreen)] text-3xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 [font-family:var(--font-silkscreen)] text-base leading-relaxed sm:text-2xl">
          {profile.role} · {profile.location}
        </p>
      </div>
    </header>
  );
}
