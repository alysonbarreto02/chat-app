import { gql } from "@apollo/client";
import { Icon } from "@iconify/react";

import { useState } from "react";

const mutation = gql`
  mutation MyMutation {
    insert_Mensagens_one(
      object: {
        Conteudo: "OI"
        De: "1b384e5e-7b9b-4a95-a719-e686e9f81e6d"
        Para: "8483f45b-d34c-4372-86df-f9b4034a237e"
      }
    ) {
      Conteudo
      De
      Id
      Para
    }
  }
`;

export function TypingArea() {
  const [messageTyped, setMessageTyped] = useState("");

  return (
    <form onSubmit={() => {}} className="w-full h-12 px-3 flex justify-center">
      <div className="flex items-center gap-4 w-10/12 h-12 -mt-3 px-2 rounded-xl bg-gray-dracula">
        <input
          type="text"
          className="bg-transparent text-white w-11/12 h-full"
          onChange={(e) => setMessageTyped(e.target.value)}
        />
        <div>
          <div
            className="w-8 h-8 bg-pink-dracula rounded-xl flex justify-center items-center "
            role="button"
            onClick={() => console.log(messageTyped)}
          >
            <Icon icon="mdi:send-outline" className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </form>
  );
}
