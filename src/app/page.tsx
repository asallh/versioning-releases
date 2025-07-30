import { Ghost } from "react-kawaii";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="mb-4 text-lg font-semibold">Branch: Dev</p>
        <Ghost size={200} mood="blissful" color="#515AC6" />
      </div>
        <div className="text-center">
          This is now techically a minor change. Oops i meant a patch.
        </div>
    </div>
  );
}
