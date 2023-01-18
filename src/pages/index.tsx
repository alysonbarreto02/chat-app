import { SearchInput } from "./SearchInput";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-dracula">
      <div className="w-4/12 h-full py-5 px-10">
        <SearchInput />
      </div>
    </div>
  );
}

