import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Info() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Which packages does this template use?
        </AccordionTrigger>
        <AccordionContent>
          It uses Nextjs(with its dependencies and turbopack), Millionjs, React-icons, Lucide-react and shadcn ui with radix ui
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          How do i utilize this Template ?
        </AccordionTrigger>
        <AccordionContent>
          Just <span className="font-semibold">git clone https://github.com/nermalcat69/template</span> in your terminal
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          How can i contribute?
        </AccordionTrigger>
        <AccordionContent>
          open your eyes and check the top right corner on the webpage :3
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
