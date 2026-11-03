import type { Profile } from "../data/profile.ts";
import { SocialLinks } from "./SocialLinks.tsx";

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <article className="flex w-full max-w-96 flex-col items-center gap-6 rounded-xl bg-grey-800 p-6 text-center md:p-10">
      <img
        src={profile.avatar.src}
        alt={profile.avatar.alt}
        width={88}
        height={88}
        className="size-22 rounded-full object-cover"
      />
      <div className="flex w-full flex-col gap-1">
        <h1 className="text-preset-1 font-semibold">{profile.name}</h1>
        <p className="font-bold text-green">{profile.location}</p>
      </div>
      <p>{profile.bio}</p>
      <SocialLinks links={profile.links} />
    </article>
  );
}
