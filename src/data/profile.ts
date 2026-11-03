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

export interface Author {
  name: string;
  href: string;
}

/** Challenge author, credited in the page footer. */
export const author: Author = {
  name: "temivan",
  href: "https://github.com/temivan",
};

/** Stand-in target for every social link; the brief supplies no real profile URLs. */
const PLACEHOLDER_HREF = author.href;

export const profile: Profile = {
  name: "Jessica Randall",
  location: "London, United Kingdom",
  bio: '"Front-end developer and avid reader."',
  avatar: {
    src: avatarSrc,
    alt: "Portrait of Jessica Randall",
  },
  links: [
    { label: "GitHub", href: PLACEHOLDER_HREF },
    { label: "Frontend Mentor", href: PLACEHOLDER_HREF },
    { label: "LinkedIn", href: PLACEHOLDER_HREF },
    { label: "Twitter", href: PLACEHOLDER_HREF },
    { label: "Instagram", href: PLACEHOLDER_HREF },
  ],
};
