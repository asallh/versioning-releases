import { Ghost } from "react-kawaii";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="mb-4 text-lg font-semibold">Branch: Main</p>
        <Ghost size={200} mood="shocked" color="#FFC907" />
      </div>
        <div className="text-center text-xl">
          Testing non bump.
        </div>
    </div>
  );
}
