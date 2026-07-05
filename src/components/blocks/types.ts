export type CTA = {
  label: string
  href: string
  variant?: 'default' | 'outline'
}

export type SectionItem = {
  title: string
  description: string
  slug?: string
  icon?: string
  image?: string
}

export type Testimonial = {
  quote: string
  author: string
  rating?: number
}

export type TrustBadge = {
  label: string
  value: string
}

export type Stat = {
  label: string
  value: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
  image?: string
}

export type FAQ = {
  question: string
  answer: string
}
