import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import { Card, CardContent } from '~/components/ui/card'
import type { Testimonial } from '~/components/blocks/types'

// brief: sections.testimonials
type TestimonialsCarouselProps = {
  headline?: string
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({
  headline = 'What customers say',
  testimonials,
}: TestimonialsCarouselProps) {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <h2 className="text-3xl font-bold tracking-tight">{headline}</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem key={item.author} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-4 p-6">
                    {item.rating ? (
                      <p className="text-sm font-medium text-primary">
                        {'★'.repeat(item.rating)}
                      </p>
                    ) : null}
                    <p className="text-muted-foreground">&ldquo;{item.quote}&rdquo;</p>
                    <p className="text-sm font-medium">{item.author}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
