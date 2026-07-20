export interface RagamItem {
    id: string | number;
    image: string;
    title: string;
    subtitle?: string;
}

export interface TradisiItem {
    id: string | number;
    image: string;
    image2?: string;
    title: string;
    desc: string;
}

export interface MakananItem {
    id: string | number;
    image: string;
    title: string;
    desc: string;
}

export interface ProvinceData {
    id: string;
    name: string; // "Papua Barat Daya"
    heroTitle: string[]; // ["Papua", "Barat Daya"]
    heroDesc: string;
    heroImage: string;
    ragamDesc: string;
    ragamItems: RagamItem[];
    tradisiDesc: string;
    tradisiItems: TradisiItem[];
    makananDesc: string;
    makananItems: MakananItem[];
    storiesDesc: string;
}
