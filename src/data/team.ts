export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    glow?: boolean;
    socials?: {
        linkedin?: string;
        instagram?: string;
        github?: string;
    };
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: "member-1",
        name: "Ahmad Rizky",
        role: "Project Lead",
        image: "/img/adat/1.png",
        glow: false,
        socials: {
            linkedin: "#",
            instagram: "#",
        },
    },
    {
        id: "member-2",
        name: "Sari Dewi",
        role: "UI/UX Designer",
        image: "/img/adat/2.png",
        glow: true,
        socials: {
            linkedin: "#",
            instagram: "#",
            github: "#",
        },
    },
    {
        id: "member-3",
        name: "Budi Santoso",
        role: "Frontend Developer",
        image: "/img/adat/3.png",
        glow: false,
        socials: {
            linkedin: "#",
            github: "#",
        },
    },
    {
        id: "member-4",
        name: "Rina Putri",
        role: "Content Writer",
        image: "/img/adat/4.png",
        glow: true,
        socials: {
            linkedin: "#",
            instagram: "#",
        },
    },
    {
        id: "member-5",
        name: "Dani Pratama",
        role: "Photographer",
        image: "/img/adat/5.png",
        glow: false,
        socials: {
            instagram: "#",
        },
    },
];
