import { createContext, useState } from "react";

export const ChatContext = createContext();

export function ChatContextProvider({ children }) {
  const [state, setState] = useState("Começa");

  return (
    <ChatContext.Provider value={{state, setState}}>
      {children}
    </ChatContext.Provider>
  );
}
