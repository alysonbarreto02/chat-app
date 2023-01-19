import { CardContact } from "../components/CardContact";
import { SearchInput } from "./SearchInput";

export default function Home() {
  return (
    <div className="w-full h-screen flex bg-gray-dracula">
      <div className="w-[500px] h-full py-5 px-3">
        <SearchInput />
        <div className="mt-4">
          <CardContact />
        </div>
      </div>
      <div className="w-full h-full rounded-xl py-5 px-3">
        <div className="w-full h-16 bg-black rounded-t-xl"></div>
        <div className="bg-red-500 w-full h-[490px]">

        </div>
        <div className="w-full h-12 rounded-b-xl bg-green-dracula"> 

        </div>
      </div>
    </div>
  );
}
