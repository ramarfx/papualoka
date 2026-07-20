import Image from "next/image";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import Footer from "@/components/footer";

import ProvinceHero from "./province-hero";
import ProvinceRagam from "./province-ragam";
import ProvinceTradisi from "./province-tradisi";
import ProvinceMakananKhas from "./province-makanan-khas";
import ProvinceStories from "./province-stories";
import { ProvinceData } from "./types";

interface ProvinceViewProps {
    data: ProvinceData;
}

export default function ProvinceView({ data }: ProvinceViewProps) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-papua-dark overflow-hidden">
                <Navbar />

                <ProvinceHero
                    titleLines={data.heroTitle}
                    description={data.heroDesc}
                    bgImage={data.heroImage}
                />

                <ProvinceRagam
                    provinceName={data.name}
                    description={data.ragamDesc}
                    items={data.ragamItems}
                />

                <div className="relative w-full bg-white py-32 z-10">
                    <div className="absolute inset-0 flex items-end -z-10 pointer-events-none">
                        <Image src="/img/explore-bg.png" alt="Explore background" width={1440} height={1046} className="w-full h-auto object-bottom object-cover" />
                    </div>

                    <ProvinceTradisi
                        provinceName={data.name}
                        description={data.tradisiDesc}
                        items={data.tradisiItems}
                    />

                    <ProvinceMakananKhas
                        provinceName={data.name}
                        description={data.makananDesc}
                        items={data.makananItems}
                    />
                </div>

                <ProvinceStories
                    provinceName={data.name}
                    description={data.storiesDesc}
                />

                <Footer className="bg-papua-dark" />
            </main>
        </SmoothScroll>
    );
}
