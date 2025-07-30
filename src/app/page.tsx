import Image from "next/image";
import { Ghost } from "react-kawaii";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="mb-4 text-lg font-semibold">Branch: Prod</p>
        <Ghost size={200} mood="blissful" color="#EA5C02" />
      </div>
    </div>
  );
}
