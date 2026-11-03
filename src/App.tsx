import { Attribution } from "./components/Attribution.tsx";
import { ProfileCard } from "./components/ProfileCard.tsx";
import { profile } from "./data/profile.ts";

export default function App() {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto_1fr] gap-8 px-6 py-6">
      <main className="row-start-2 grid place-items-center">
        <ProfileCard profile={profile} />
      </main>
      <Attribution />
    </div>
  );
}
