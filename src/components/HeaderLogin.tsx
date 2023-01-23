import { Icon } from "@iconify/react";

export function HeaderLogin() {
  return <div className="w-full h-20 flex items-center gap-2 bg-buffy">
    <Icon
      icon="ic:twotone-chat-bubble"
      className="w-10 h-10 ml-4 text-pink-dracula" />
    <p className="font-medium text-lg mb-2 text-green-dracula ">
      Chat APP
    </p>
  </div>;
}
