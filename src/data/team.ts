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
    name: "Revani Khoirunnisa",
    role: "UI/UX Designer",
    image: "/img/team/vani.png",
    glow: true,
    socials: {
      linkedin: "https://www.linkedin.com/in/revani-khoirunnisa-azzahra",
      instagram: "https://www.instagram.com/vnivan_?igsh=cjl4Z296enF2ZjQ0",
    },
  },
  {
    id: "member-2",
    name: "Nazla Rahma",
    role: "UI / UX Designer",
    image: "/img/team/nazla.jpeg",
    glow: false,
    socials: {
      linkedin: "https://www.linkedin.com/in/nazla-rahma",
      instagram: "https://www.instagram.com/nazlaraley?igsh=Z3BoOHptd3BwMHE4",
    },
  },
  {
    id: "member-3",
    name: "Ramadina Al Muzthazam ",
    role: "Frontend Developer",
    image: "/img/team/rama.jpeg",
    glow: false,
    socials: {
      linkedin: "https://www.linkedin.com/in/ramarfx",
      instagram: " instagram.com/ramtxh",
      github: "github.com/ramarfx",
    },
  },
  {
    id: "member-4",
    name: "Syifa Nazilah",
    role: "Copywriting & Researcher",
    image: "/img/team/syifa.jpg",
    glow: true,
    socials: {
      linkedin: "https://www.linkedin.com/in/syifa-nazilah",
      instagram: "https://www.instagram.com/syifnzp?igsh=ZnFqY20ydnltc29i",
    },
  },
  {
    id: "member-5",
    name: "Reynaldo Yusellino",
    role: "Frontend Developer",
    image: "/img/team/rey.jpg",
    glow: false,
    socials: {
      linkedin: "https://www.linkedin.com/in/reynaldoyusellino/",
      instagram: "https://www.instagram.com/rynldysllino/",
      github: "https://github.com/reynaldo0",
    },
  },
];
