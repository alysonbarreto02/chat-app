import { useState } from "react";
import Link from "next/link";

import { InputWithLabel } from "../components/InputWithLabel";
import { HeaderLogin } from "../components/HeaderLogin";
import { WelcomeLogin } from "../components/WelcomeLogin";

const users = [{ username: "AlysonBarreto", password: "201275" }];

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const confirmDetails = () => {
    const filteredUser = users.filter((user) => userName === user.username)[0];
    userName === filteredUser?.username || password === filteredUser?.password
      ? console.log(true)
      : console.log(false);
  };

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
              onClick={() => confirmDetails()}
              className="bg-green-dracula w-80 h-10 rounded-md text-gray-dracula"
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
