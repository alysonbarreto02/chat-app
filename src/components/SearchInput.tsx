import { Icon } from "@iconify/react";

export function SearchInput() {
  return <div className="w-full h-12 rounded-full gap-4 px-4 bg-gray-dracula-clear flex items-center">
    <input
      type="text"
      className="w-10/12 h-full bg-transparent text-white" />
    <Icon icon="mdi:magnify" className="w-8 h-8" role="button" />
  </div>;
}
