import { Icon } from "@iconify/react";
import { useState } from "react";
import { InputWithLabel } from "../components/InputWithLabel";

const users = [{ username: "AlysonBarreto", password: "201275" }];



export default function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const confirmDetails = () => {
    const filteredUser = users.filter((user) => userName === user.username)[0];
    userName === filteredUser?.username || password === filteredUser?.password
      ? console.log(true)
      : console.log(false)
  };

  return (
    <div className="w-full h-screen flex bg-gray-dracula">
      <div className="w-1/2 h-full  bg-gray-dracula">
        <div className="w-full h-20 flex items-center gap-2 bg-buffy">
          <Icon
            icon="ic:twotone-chat-bubble"
            className="w-10 h-10 ml-4 text-pink-dracula"
          />
          <p className="font-medium text-lg mb-2 text-green-dracula ">
            Chat APP
          </p>
        </div>
        <div className="w-full h-4/5 flex flex-col justify-center items-center gap-7">
          <div className="text-center flex flex-col gap-2 text-pink-dracula">
            <p className="text-3xl font-medium">Welcome back</p>
            <p className="text-xs">Please enter your details</p>
          </div>
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
            />
          </div>
          <button
            onClick={() => confirmDetails()}
            className="bg-green-dracula w-80 h-10 rounded-md text-gray-dracula"
          >
            Entrar
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-dracula-clear border-8 rounded-lg border-gray-dracula">
        <img src="./Welcome.svg" alt="" className="w-60 h-60" />
      </div>
    </div>
  );
}
