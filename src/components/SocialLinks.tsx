import type { SocialLink } from "../data/profile.ts";
import { SocialLinkItem } from "./SocialLinkItem.tsx";

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className="w-full">
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <SocialLinkItem key={link.label} link={link} />
        ))}
      </ul>
    </nav>
  );
}
