import { twMerge } from "tailwind-merge";
export default function ButtonAlt({ children, className }) {
  return (
    <button
      className={twMerge(
        "text-white bg-alt px-6 py-2 rounded-[4px] font-medium hover:bg-rose-600 duration-200",
        className
      )}
    >
      {children}
    </button>
  );
}
