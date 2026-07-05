import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import type { FAQ } from '~/components/blocks/types'

// brief: sections.faq
type FAQAccordionProps = {
  headline?: string
  faqs: FAQ[]
}

export function FAQAccordion({
  headline = 'Frequently asked questions',
  faqs,
}: FAQAccordionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4">
        <h2 className="text-3xl font-bold tracking-tight">{headline}</h2>
        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
