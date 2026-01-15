import { Button } from "@/components/ui/button"

export function NewsletterBanner() {
  return (
    <section className="px-6 my-8">
      <div className="bg-primary rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground text-center md:text-left">
          Sign up for our newsletter <span className="font-semibold">and get daily updates</span>
        </p>
        <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90 rounded-full px-6">
          Subscribe
        </Button>
      </div>
    </section>
  )
}
