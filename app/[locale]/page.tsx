import Header from "@/app/sections/Header";
import Tabs from "@/app/sections/Tabs";
import Footer from "@/app/sections/Footer";
import { getDictionary } from "@/app/i18n/dictionaries";
import { defaultLocale, isLocale, locales, type Locale } from "@/app/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const dictionary = getDictionary(resolvedLocale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <div className="polka-background flex min-h-full flex-col text-black">
      <Header profile={dictionary.profile} locale={locale} />
      <main className="flex-1">
        <Tabs dictionary={dictionary} locale={locale} />
      </main>
      <Footer name={dictionary.profile.name} location={dictionary.profile.location} />
    </div>
  );
}
