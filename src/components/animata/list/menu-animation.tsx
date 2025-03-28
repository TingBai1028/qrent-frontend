import { ArrowRight } from "lucide-react";

interface MenuAnimationProps {
  menuItems: string[];
}

export default function MenuAnimation({ menuItems }: MenuAnimationProps) {
  return (
    <div className="flex min-w-fit flex-col gap-2 overflow-hidden px-10">
      {menuItems.map((item, index) => (
        <div key={index} className="group flex items-center gap-2">
          <ArrowRight className="size-5 -translate-x-full text-morandi-blue opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:text-morandi-blue group-hover:opacity-100 md:size-10" />

          <h1 className="z-10 -translate-x-6 cursor-pointer font-serif font-semibold text-morandi-green transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:text-morandi-blue dark:text-white md:-translate-x-12 md:text-4xl md:group-hover:translate-x-0 my-4">
            {item}
          </h1>
        </div>
      ))}
    </div>
  );
}
