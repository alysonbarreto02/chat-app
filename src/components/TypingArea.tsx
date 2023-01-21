import { Icon } from "@iconify/react";

export function TypingArea() {
  return <div className="w-full h-12 px-3 flex justify-center ">
    <div className="flex items-center gap-4 w-10/12 h-12 -mt-3 px-2 rounded-xl bg-gray-dracula">
      <input
        type="text"
        className="bg-transparent text-white w-11/12 h-full" />
      <div>
        <div className="w-8 h-8 bg-pink-dracula rounded-xl flex justify-center items-center ">
          <Icon icon="mdi:send-outline" className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
  </div>;
}
