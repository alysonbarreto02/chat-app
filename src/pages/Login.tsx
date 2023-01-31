import { useEffect, useState } from "react";
import Link from "next/link";

import { gql, useQuery } from "@apollo/client";

import { InputWithLabel } from "../components/InputWithLabel";
import { HeaderLogin } from "../components/HeaderLogin";
import { WelcomeLogin } from "../components/WelcomeLogin";
import { Chat } from "../components/Chat";
import { ChatContext } from "../context";

const getUsers = gql`
  query MyQuery($user: String) {
    Users(where: { Nome: { _eq: $user } }) {
      Id
      Nome
      Senha
    }
  }
`;

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState({
    Nome: "",
    Senha: "",
    Id: ""
  });

  const { data } = useQuery(getUsers, {
    variables: { user: userName },
  });

  const filteredUser = data?.Users.filter(
    (user: { Nome: string; Senha: string; Id: string }) =>
      userName === user.Nome
  )[0];

  const confirmDetails = () => {
    let confirmed = false;
    userName === filteredUser?.Nome || password === filteredUser?.Senha
      ? password === filteredUser?.Senha
        ? (confirmed = true)
        : confirmed
      : console.log("error");
    return confirmed;
  };

  useEffect(() => {
    setUserDetails(filteredUser);
    <Chat user={userDetails} />;
  }, []);

  return (
    <div className="w-full h-screen flex bg-gray-dracula">
      <div className="w-1/2 h-full  bg-gray-dracula">
        <HeaderLogin />
        <div className="w-full h-4/5 flex flex-col justify-center items-center gap-7">
          <WelcomeLogin />
          <div className="flex flex-col gap-4">
            <InputWithLabel
              title="Email"
              placeholder="Insira seu email"
              getValueInput={setUserName}
            />
            <InputWithLabel
              title="Senha"
              placeholder="Insira sua senha"
              getValueInput={setPassword}
              isPassword
            />
          </div>
          <Link href="/">
            <button
              disabled={confirmDetails() === false ? true : false}
              onClick={() => confirmDetails()}
              className={`${
                confirmDetails() === false ? "bg-gray-600" : "bg-green-dracula"
              } w-80 h-10 rounded-md text-gray-dracula `}
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-dracula-clear border-8 rounded-lg border-gray-dracula">
        <img src="./Welcome.svg" alt="" className="w-60 h-60" />
      </div>
    </div>
  );
}
