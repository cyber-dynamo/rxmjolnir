import { Inter } from "next/font/google";
import Carousel from "../components/carousel";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <div className="font-sans">
      <header className="bg-gray-900 text-white text-center py-10">
        <h1 className="text-3xl font-bold">Project Mjolnir</h1>
        <p className="mt-2">Mjolnir Power Assault Armour System</p>
      </header>
      <main className="px-4 py-8">
        <Carousel/>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">"Project MJOLNIR will make the pharmacists into something . . . new. Something I could never forge them into. I can’t fully explain ..."</h2>
          <p>--Doctor P. Chan</p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">The MJOLNIR Powered Assault Armor System</h2>
          <p>
          The MJOLNIR Powered Assault Armor System is a technologically advanced combat exoskeleton system designed to vastly improve the strength, speed, agility, reflexes, and durability of a Pharmacy supersoldier.
          It is the most advanced piece of tactical military hardware in human hands. 
          <br/>
          <br/>
          Spanning over three years of development, Project MJOLNIR encompassed more than just a suit of armor, but as a pioneering effort intended to shatter current technological barriers. 
          In its final iteration, Mjolnir is a highly advanced suit capable of further enhancing the pharmacists' physical performance while also doubling as a platform capable of handling an artificial intelligence network.
          <br/>
          <br/>
          Before Dr. P. Chan initiated Project MJOLNIR, the BCPHA developed various designs and prototypes for powered exoskeletons and armour systems,
          including the Mark I exoskeleton (Pharmflash1) and Mark II (Rxhero). The combat systems enhanced battle capability but lack the ability to utilize AI for combat efficiency.  
          </p>
        </section>
      </main>
      
    </div>
  );
}