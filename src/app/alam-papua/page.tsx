import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AlamPapuaShowcase from "@/components/alam-papua/alam-papua-showcase";

export const metadata = {
    title: "Alam Papua | PapuaLoka",
    description:
        "Jelajahi kekayaan alam tanah Papua — dari hutan hujan tropis, keindahan laut, fauna endemik, hingga tambang emas Grasberg.",
};

export default function AlamPapuaPage() {
    return (
        <main className="bg-papua-dark min-h-screen">
            <Navbar />
            <AlamPapuaShowcase />
            <Footer />
        </main>
    );
}
