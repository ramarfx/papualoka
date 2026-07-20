import { notFound } from "next/navigation";
import ProvinceView from "@/components/province/province-view";
import { PROVINCES_DATA } from "@/lib/provinces";

export default async function ProvinceDynamicPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
    const resolvedParams = await Promise.resolve(params);
    const slug = resolvedParams.slug;
    
    const provinceData = PROVINCES_DATA[slug];

    if (!provinceData) {
        notFound();
    }

    return <ProvinceView data={provinceData} />;
}

export function generateStaticParams() {
    return Object.keys(PROVINCES_DATA).map((slug) => ({
        slug,
    }));
}
