import { gql, useQuery, useSubscription } from "@apollo/client";

import { useEffect, useState } from "react";

import { HeaderChat } from "./HeaderChat";
import { TypingArea } from "./TypingArea";

export function Chat() {
  const subscriptions =gql`
  subscription MySubscription {
  countries {
    capital
  }
}
  `

const { data } = useSubscription(subscriptions)
  useEffect(() => {
    console.log(data);
  }, [data]);
  const [typedMessage, setTypedMessage] = useState("");
  useEffect(() => {
    console.log(typedMessage);
  }, [typedMessage]);
  return (
    <div className="w-full bg-gray-dracula-clear h-full rounded-xl">
      <HeaderChat />
      <div className=" w-full h-[490px]"></div>
      <TypingArea setValue={setTypedMessage} />
    </div>
  );
}
