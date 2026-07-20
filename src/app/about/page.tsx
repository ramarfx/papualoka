import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TeamSection from "@/components/about/team-section";
import TimKamiHeading from "@/components/about/tim-kami-heading";
import CreditsSection from "@/components/about/credits-section";

export const metadata = {
    title: "Tentang Kami | PapuaLoka",
    description:
        "Kenali tim di balik PapuaLoka — individu-individu berdedikasi yang bekerja melestarikan dan mempromosikan kekayaan budaya Papua.",
};

export default function AboutPage() {
    return (
        <main className="bg-papua-dark min-h-screen relative">
            <Navbar />
            <TeamSection />
            <TimKamiHeading />
            <CreditsSection />
            <Footer className="bg-papua-dark" />
        </main>
    );
}
