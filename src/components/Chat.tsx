import { gql, useQuery, useSubscription } from "@apollo/client";

import { useEffect, useState } from "react";

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
export function Chat({
  user
}: {
  user?: {
    Nome: string;
    Id: string;
    Senha: string;
  };
}) {
  console.log(user,"user")
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
