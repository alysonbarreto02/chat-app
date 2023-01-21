type CardContactProps = {
  name: string;
};

export function CardContact({ name} : CardContactProps) {
  return (
    <div className="mt-2 bg-gray-dracula-clear rounded-lg pl-3 pr-6 gap-3 w-full h-20 flex items-center">
      <div className="">
        <img src="/userMale.png" className="w-14 h-14" alt="" />
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-white">Maybe on friday?</p>
      </div>
      <div className="ml-auto text-white">
        <p>19:56</p>
      </div>
    </div>
  );
}
