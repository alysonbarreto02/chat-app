import { gql, useSubscription } from "@apollo/client";
import { useContext } from "react";
import { ChatContext } from "../context";

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
  console.log(data?.Mensagens, "data");

  const { userDetails } = useContext(ChatContext);

  function renderMessages(message: { De: string; Conteudo: string }) {
    console.log(message.De, "message.Id");
    console.log(userDetails.Id, "userDetails.Id")
    console.log(message.De == userDetails.Id)
    if (message.De == userDetails.Id) {
      return <MessageUser content={message.Conteudo} />;
    }
    return <MessageContactUser content={message.Conteudo} />;
  }

  return (
    <div className="w-full bg-gray-dracula-clear h-full rounded-xl">
      <HeaderChat />
      <div className=" w-full h-[490px] px-2 py-5 flex flex-col">
        {data?.Mensagens.map((message: { Id: string; Conteudo: string }) => {
          return renderMessages(message);
        })}
      </div>
      <TypingArea />
    </div>
  );
}
