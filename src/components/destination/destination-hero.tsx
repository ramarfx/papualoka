import Image from "next/image";
import { ChevronDown } from "lucide-react";
import InfiniteCarousel, { CarouselImage } from "./infinite-carousel";

interface DestinationHeroProps {
    title: string;
    description: string;
    bgImage: string;
    carouselImages: CarouselImage[];
}

export default function DestinationHero({ title, description, bgImage, carouselImages }: DestinationHeroProps) {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-papua-dark">
            {/* Background Image */}
            <Image 
                src={bgImage} 
                alt={title} 
                fill 
                className="object-cover z-0 opacity-70"
                priority
                sizes="100vw"
            />

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/90 z-0"></div>

            {/* Spacer for Navbar */}
            <div className="pt-32"></div>

            {/* Main Content (Center) */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 max-w-4xl mx-auto text-center mt-12 animate-slide-up">
                <h1 className="text-white font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wide drop-shadow-xl">
                    {title}
                </h1>
                <p className="text-white/90 font-sans text-base md:text-lg lg:text-xl leading-relaxed font-medium drop-shadow-md max-w-3xl mb-10">
                    {description}
                </p>
                
                <button className="flex items-center cursor-pointer gap-3 border border-white rounded-full px-6 py-3 text-white font-sans text-sm md:text-base font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 group">
                    Baca Selengkapnya
                    <ChevronDown className="w-5 h-5" />
                </button>
            </div>

            {/* Carousel at the bottom */}
            <div className="relative z-10 w-full pb-8 md:pb-12 animate-fade-in [animation-delay:400ms] opacity-0 fill-mode-forwards">
                <InfiniteCarousel images={carouselImages} />
            </div>
        </section>
    );
}
