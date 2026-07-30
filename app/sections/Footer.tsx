import { profile } from "@/app/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          © {currentYear} {profile.name}
        </p>
        <p>Buenos Aires, Argentina</p>
      </div>
    </footer>
  );
}
