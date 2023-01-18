export function InputWithLabel({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
}) {
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
        type="text"
        name={title}
        placeholder={placeholder}
        className="border border-gray-400 p-2 rounded-md w-80 bg-gray-dracula-clear"
      />
    </div>
  );
}
