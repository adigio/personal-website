import type { Dictionary } from "@/app/i18n/dictionaries";
import SocialLinks from "@/app/components/SocialLinks";

type ContactProps = {
  profile: Dictionary["profile"];
  intro: string;
};

export default function Contact({ profile, intro }: ContactProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
        {intro}
      </p>
      <SocialLinks profile={profile} />
    </div>
  );
}
