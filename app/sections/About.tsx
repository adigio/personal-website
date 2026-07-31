import type { Dictionary } from "@/app/i18n/dictionaries";
import SocialLinks from "@/app/components/SocialLinks";

type AboutProps = {
  profile: Dictionary["profile"];
};

export default function About({ profile }: AboutProps) {
  const paragraphs = profile.about.split("\n\n");

  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed sm:text-lg">
        {paragraphs.map((paragraph, index) => {
          const [beforeUnlam, afterUnlam] = paragraph.split("UNLaM");

          return (
            <p key={`${index}-${paragraph.slice(0, 16)}`}>
              {beforeUnlam}
              {afterUnlam !== undefined ? (
                <>
                  <a
                    href="https://www.unlam.edu.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-4 hover:no-underline"
                  >
                    UNLaM
                  </a>
                  {afterUnlam}
                </>
              ) : null}
            </p>
          );
        })}
      </div>
      <div>
        <span className="inline-flex border border-black bg-black px-3 py-1 text-[11px] font-medium text-white sm:text-sm">
          {profile.englishLevel}
        </span>
      </div>
      <SocialLinks profile={profile} />
    </div>
  );
}
