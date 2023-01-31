export function MessageContactUser({ content }: { content: string }) {
  return (
    <div className="min-w-max w-20 h-12 p-1.5 rounded-br-xl rounded-t-xl flex items-center mt-2 bg-pink-dracula text-white">
      {content}
    </div>
  );
}
