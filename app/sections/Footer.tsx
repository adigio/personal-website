type FooterProps = {
  name: string;
  location: string;
};

export default function Footer({ name, location }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          © {currentYear} {name}
        </p>
        <p>{location}</p>
      </div>
    </footer>
  );
}
