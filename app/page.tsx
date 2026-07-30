import Header from "@/app/sections/Header";
import Tabs from "@/app/sections/Tabs";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <div className="polka-background flex min-h-full flex-col text-black">
      <Header />
      <main className="flex-1">
        <Tabs />
      </main>
      <Footer />
    </div>
  );
}
