import { Icon } from "@iconify/react";
import { Dispatch, SetStateAction } from "react";
export function TypingArea({
  setValue,
}: {
  setValue: Dispatch<SetStateAction<string>>;
}) {
  return (
      <form onSubmit={() => {}} className="w-full h-12 px-3 flex justify-center">
        <div className="flex items-center gap-4 w-10/12 h-12 -mt-3 px-2 rounded-xl bg-gray-dracula">
          <input
            type="text"
            className="bg-transparent text-white w-11/12 h-full"
            onChange={(e) => setValue(e.target.value)}
          />
          <div>
            <div
              className="w-8 h-8 bg-pink-dracula rounded-xl flex justify-center items-center "
              role="button"
            >
              <Icon icon="mdi:send-outline" className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
      </form>
  );
}
