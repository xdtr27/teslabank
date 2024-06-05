import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


// icons
import { Smartphone } from "lucide-react";


export default function Question({title, children}) {
  return (
    <Accordion type="single" collapsible className="flex relative gap-1 ">
      <Smartphone className="relative top-4 min-w-10 text-alt"/>
     
      <AccordionItem value="item-1" className={"flex flex-col justify-between w-full"}>
        <AccordionTrigger className={"text-sm md:text-md"}>{title}</AccordionTrigger>
        <AccordionContent>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
