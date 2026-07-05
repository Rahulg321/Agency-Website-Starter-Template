import { MapPinIcon, MailIcon, PhoneIcon, ClockIcon } from "lucide-react";
import type { SiteConfig } from '~/config/site.types'

// brief: sections.contact
type ContactSectionProps = {
  config: SiteConfig;
  headline?: string;
};

export function ContactSection({
  config,
  headline = "Get in touch",
}: ContactSectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <h2 className="text-3xl font-bold tracking-tight">{headline}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">{config.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailIcon className="mt-0.5 size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{config.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Address</p>
                <p className="text-sm text-muted-foreground">
                  {config.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Hours</p>
                <p className="text-sm text-muted-foreground">{config.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
