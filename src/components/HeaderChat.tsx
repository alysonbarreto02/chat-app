export function HeaderChat() {
  return <div className="w-full h-16 flex items-center px-5 gap-4 bg-black rounded-t-xl">
    <div>
      <img src="./userMale.png" alt="" className="w-10 h-10" />
    </div>
    <div className=" flex gap-2 items-center">
      <p className="text-white font-thin">Conversation with </p>
      <p className="text-white font-semibold text-lg">your friend</p>
    </div>
  </div>;
}
