import EasySteps from "./components/homepage/easy-steps";
import Footer from "./components/homepage/footer";
import Header from "./components/homepage/header";
import Hero from "./components/homepage/hero";
import MoneyBackGuarantee from "./components/homepage/money-back-guarantee";
import Offer from "./components/homepage/offer";
import PeaceOfMind from "./components/peace-of-mind";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Offer />
      <Header />
      <Hero />
      <div className="boxed-container">
        <EasySteps />
        <MoneyBackGuarantee />
        <PeaceOfMind />
      </div>
      <Footer />
    </main>
  );
}
