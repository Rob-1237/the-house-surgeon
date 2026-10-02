import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Pip } from "@/components/Pip";

export default function NotFound() {
  return (
    <Hero
      eyebrow="404"
      title="We couldn't find that page."
      lead="It may have moved. Let's get you back on track."
      actions={
        <>
          <Link href="/" className="btn btn--primary">
            Go to the home page
          </Link>
          <Link href="/services/" className="btn btn--secondary">
            See our services
          </Link>
        </>
      }
      media={<Pip pose="wink" width={260} />}
    />
  );
}
