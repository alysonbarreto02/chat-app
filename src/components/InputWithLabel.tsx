import { Dispatch, SetStateAction } from "react";

type InputWithLabelProps = {
  title: string;
  placeholder: string;
  getValueInput: Dispatch<SetStateAction<string>>;
  isPassword?: boolean;
};

export function InputWithLabel({
  title,
  placeholder,
  getValueInput,
  isPassword,
}: InputWithLabelProps) {
  return (
    <div>
      <div>
        <label
          htmlFor={title}
          className="text-xs font-semibold text-green-dracula"
          id="inputWithLabel"
        >
          {title}
        </label>
      </div>
      <input
        type={isPassword ? "password" : "text"}
        name={title}
        onChange={(e) => getValueInput(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-400 p-2 rounded-md w-80 bg-gray-dracula-clear"
      />
    </div>
  );
}
