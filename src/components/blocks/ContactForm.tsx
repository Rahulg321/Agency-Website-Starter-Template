import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '~/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '~/components/ui/field'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { Spinner } from '~/components/ui/spinner'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

// brief: sections.contact-form
export function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    } satisfies ContactFormValues,
    onSubmit: async ({ value }) => {
      const result = contactFormSchema.safeParse(value)
      if (!result.success) return

      console.info('Contact form submission (stub):', result.data)
      toast.success('Message sent! We will get back to you shortly.')
      form.reset()
    },
  })

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(event) => {
        event.preventDefault()
        void form.handleSubmit()
      }}
    >
      <FieldGroup>
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) => {
              const result = contactFormSchema.shape.name.safeParse(value)
              return result.success ? undefined : result.error.issues[0]?.message
            },
          }}
        >
          {(field) => (
            <Field data-invalid={field.state.meta.errors.length > 0 || undefined}>
              <FieldLabel htmlFor="contact-name">Name</FieldLabel>
              <Input
                id="contact-name"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                aria-invalid={field.state.meta.errors.length > 0 || undefined}
              />
              {field.state.meta.errors[0] ? (
                <FieldDescription>{field.state.meta.errors[0]}</FieldDescription>
              ) : null}
            </Field>
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              const result = contactFormSchema.shape.email.safeParse(value)
              return result.success ? undefined : result.error.issues[0]?.message
            },
          }}
        >
          {(field) => (
            <Field data-invalid={field.state.meta.errors.length > 0 || undefined}>
              <FieldLabel htmlFor="contact-email">Email</FieldLabel>
              <Input
                id="contact-email"
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                aria-invalid={field.state.meta.errors.length > 0 || undefined}
              />
              {field.state.meta.errors[0] ? (
                <FieldDescription>{field.state.meta.errors[0]}</FieldDescription>
              ) : null}
            </Field>
          )}
        </form.Field>

        <form.Field
          name="phone"
          validators={{
            onChange: ({ value }) => {
              const result = contactFormSchema.shape.phone.safeParse(value)
              return result.success ? undefined : result.error.issues[0]?.message
            },
          }}
        >
          {(field) => (
            <Field data-invalid={field.state.meta.errors.length > 0 || undefined}>
              <FieldLabel htmlFor="contact-phone">Phone</FieldLabel>
              <Input
                id="contact-phone"
                type="tel"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                aria-invalid={field.state.meta.errors.length > 0 || undefined}
              />
              {field.state.meta.errors[0] ? (
                <FieldDescription>{field.state.meta.errors[0]}</FieldDescription>
              ) : null}
            </Field>
          )}
        </form.Field>

        <form.Field
          name="message"
          validators={{
            onChange: ({ value }) => {
              const result = contactFormSchema.shape.message.safeParse(value)
              return result.success ? undefined : result.error.issues[0]?.message
            },
          }}
        >
          {(field) => (
            <Field data-invalid={field.state.meta.errors.length > 0 || undefined}>
              <FieldLabel htmlFor="contact-message">Message</FieldLabel>
              <Textarea
                id="contact-message"
                rows={5}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                aria-invalid={field.state.meta.errors.length > 0 || undefined}
              />
              {field.state.meta.errors[0] ? (
                <FieldDescription>{field.state.meta.errors[0]}</FieldDescription>
              ) : null}
            </Field>
          )}
        </form.Field>

        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Spinner data-icon="inline-start" /> : null}
              Send message
            </Button>
          )}
        </form.Subscribe>
      </FieldGroup>
    </form>
  )
}
