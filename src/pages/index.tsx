import { contacts } from "../api/contacts";

import { CardContact } from "../components/CardContact";
import { SearchInput } from "./SearchInput";
import { TypingArea } from "./TypingArea";

export default function Home() {
  return (
    <div className="w-full h-screen flex py-5  px-3 bg-gray-dracula">
      <div className="w-[500px] h-full pr-3">
        <SearchInput />
        <div className="mt-4 h-[537px] overflow-y-scroll" id="contactsArea">
          {contacts.map((contact) => (
            <CardContact name={contact.name} />
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-dracula-clear h-full rounded-xl">
        <div className="w-full h-16 flex items-center px-5 gap-4 bg-black rounded-t-xl">
          <div>
            <img src="./userMale.png" alt="" className="w-10 h-10" />
          </div>
          <div className=" flex gap-2 items-center">
            <p className="text-white font-thin">Conversation with </p>
            <p className="text-white font-semibold text-lg">Catalina Caíque</p>
          </div>
        </div>
        <div className=" w-full h-[490px]"></div>
        <TypingArea />
      </div>
    </div>
  );
}
