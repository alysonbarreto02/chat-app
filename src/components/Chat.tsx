import { gql, useSubscription } from "@apollo/client";

import { HeaderChat } from "./HeaderChat";
import { MessageContactUser } from "./MessageContactUser";
import { MessageUser } from "./MessageUser";
import { TypingArea } from "./TypingArea";

const subscriptions = gql`
  subscription MySubscription {
    Mensagens {
      Conteudo
      De
      Id
      Para
    }
  }
`;
export function Chat() {

  const { data } = useSubscription(subscriptions);

  return (
    <div className="w-full bg-gray-dracula-clear h-full rounded-xl">
      <HeaderChat />
      <div className=" w-full h-[490px] px-2 py-5 flex flex-col">
        <MessageContactUser />
        <MessageUser />
      </div>
      <TypingArea />
    </div>
  );
}
