import { HeaderChat } from "./HeaderChat";
import { TypingArea } from "./TypingArea";

export function Chat() {
  return <div className="w-full bg-gray-dracula-clear h-full rounded-xl">
    <HeaderChat />
    <div className=" w-full h-[490px]"></div>
    <TypingArea />
  </div>;
}
