
import { twMerge } from "tailwind-merge";


export default function Card({ children, icon, title, buttonText, className }) {
  return (
    <div className={twMerge("bg-white p-6 flex flex-col w-[230px] gap-5 justify-between", className)}>
      <img className="w-[10%]" src={icon} />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-[12px]">{children}</p>
      <a href="#" className="underline text-alt uppercase text-sm hover:text-rose-400 transition-colors">{buttonText}</a>
    </div>
  );
}
