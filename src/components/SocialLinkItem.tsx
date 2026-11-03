import type { SocialLink } from "../data/profile.ts";

interface SocialLinkItemProps {
  link: SocialLink;
}

export function SocialLinkItem({ link }: SocialLinkItemProps) {
  return (
    <li>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg bg-grey-700 p-3 font-bold text-white transition-colors hover:bg-green hover:text-grey-900 focus-visible:bg-green focus-visible:text-grey-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
      >
        {link.label}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </li>
  );
}
