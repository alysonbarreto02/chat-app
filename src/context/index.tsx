import { createContext, ReactNode, useState } from "react";

export const ChatContext = createContext();

export function ChatContextProvider({ children }: { children: ReactNode }) {
  const [userDetails, setUserDetails] = useState({
    Nome: "",
    Senha: "",
    Id: ""
  });

  return (
    <ChatContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </ChatContext.Provider>
  );
}
