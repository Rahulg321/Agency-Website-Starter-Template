import type { SiteConfig } from "~/config/site.types";
import type { WebsiteBrief } from "~/lib/brief";
import { ContactForm, ContactSection, HeroCentered } from "~/components/blocks";

export function renderContactPage(
  _brief: WebsiteBrief | null,
  config: SiteConfig,
) {
  return (
    <>
      <HeroCentered
        headline="Contact us"
        subheadline="Request a quote or call our team directly."
        primaryCta={config.secondaryCta ?? config.primaryCta}
      />
      <ContactSection config={config} />
      <section className="pb-16">
        <div className="mx-auto w-full max-w-xl px-4">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
