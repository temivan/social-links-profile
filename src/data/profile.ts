import avatarSrc from "../assets/images/avatar-jessica.jpeg";

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  location: string;
  bio: string;
  avatar: {
    src: string;
    alt: string;
  };
  links: SocialLink[];
}

const PROFILE_URL = "https://github.com/temivan";

export const profile: Profile = {
  name: "Jessica Randall",
  location: "London, United Kingdom",
  bio: "Front-end developer and avid reader.",
  avatar: {
    src: avatarSrc,
    alt: "Portrait of Jessica Randall",
  },
  links: [
    { label: "GitHub", href: PROFILE_URL },
    { label: "Frontend Mentor", href: PROFILE_URL },
    { label: "LinkedIn", href: PROFILE_URL },
    { label: "Twitter", href: PROFILE_URL },
    { label: "Instagram", href: PROFILE_URL },
  ],
};
