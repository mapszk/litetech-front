import { Button } from "@/components/ui/button";

export function NewsletterBanner() {
  return (
    <section>
      <div className="bg-secondary text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 p-10">
        <p className="text-2xl">
          Sign up for our newsletter{" "}
          <span className="font-semibold">and get daily updates</span>
        </p>
        <Button className="md:hidden w-full">Subscribe</Button>
        <Button size="lg" className="max-md:hidden">
          Subscribe
        </Button>
      </div>
    </section>
  );
}
