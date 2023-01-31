import { Chat } from "../components/Chat";
import { SidebarChat } from "../components/SidebarChat";


export default function Home() {
  return (
    <div className="w-full h-screen flex py-5  px-3 bg-gray-dracula">
      <SidebarChat />
      <Chat />
    </div>
  );
}
