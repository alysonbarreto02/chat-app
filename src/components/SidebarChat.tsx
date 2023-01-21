import { contacts } from "../api/contacts";
import { CardContact } from "./CardContact";
import { SearchInput } from "./SearchInput";

export function SidebarChat() {
  return <div className="w-[500px] h-full pr-3">
    <SearchInput />
    <div className="mt-4 h-[537px] overflow-y-scroll" id="contactsArea">
      {contacts.map((contact) => (
        <CardContact name={contact.name} />
      ))}
    </div>
  </div>;
}
