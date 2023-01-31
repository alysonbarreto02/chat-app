export function MessageUser({ content }: { content: String }) {
  return (
    <div className="min-w-max w-20 h-12 p-1.5 ml-auto rounded-bl-xl rounded-t-xl flex items-center mt-2 bg-blue-dracula text-white">
      {content}
    </div>
  );
}
