# Section Blocks Catalog

Marketing blocks compose `src/components/ui/` primitives. Use blocks first; only drop to `ui/` for one-off customizations.

| Block | Props | Best for |
|---|---|---|
| `HeaderSticky` | `config` | Default site header with nav + phone CTA |
| `HeaderTransparent` | `config` | Hero overlay pages |
| `FooterSimple` | `config` | Contact, hours, copyright |
| `FooterMultiColumn` | `config` | Services list + service areas |
| `HeroCentered` | `headline`, `subheadline`, CTAs | Professional / about pages |
| `HeroSplit` | `headline`, `subheadline`, CTAs, `imageSrc` | Home pages for trades |
| `HeroWithForm` | `headline`, `subheadline`, CTA | Lead capture above fold |
| `ServicesGrid` | `items[]`, optional headlines | Service listings |
| `TestimonialsCarousel` | `testimonials[]` | Social proof |
| `TrustBadges` | `badges[]` | Licenses, ratings, credentials |
| `StatsBar` | `stats[]` | Metrics strip |
| `FAQAccordion` | `faqs[]` | Common questions |
| `TeamGrid` | `members[]` | About / team pages |
| `CTABanner` | `headline`, `cta` | Full-width conversion |
| `CTASplit` | `headline`, `subheadline`, `cta`, image | Mid-page conversion |
| `ServiceAreaMap` | `areas[]` | Local service coverage |
| `ContactSection` | `config` | Contact details |
| `ContactForm` | none | Validated contact form stub |

Shared types live in [`types.ts`](./types.ts).
