import { Ghost } from "react-kawaii";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="mb-4 text-lg font-semibold">Branch: Dev</p>
        <Ghost size={200} mood="shocked" color="#A20100" />
      </div>
        <div className="text-center text-9xl">
          MAJOR CHANGE
        </div>
        <div className="text-center">
          But now, a patch 🙏
        </div>
    </div>
  );
}
