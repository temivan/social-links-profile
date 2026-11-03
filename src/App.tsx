import { Attribution } from "./components/Attribution.tsx";
import { ProfileCard } from "./components/ProfileCard.tsx";
import { profile } from "./data/profile.ts";

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <ProfileCard profile={profile} />
      </main>
      <Attribution />
    </div>
  );
}
