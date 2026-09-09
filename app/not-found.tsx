import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center px-5 pt-36 md:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="label text-flame">404</p>
        <h1 className="display mt-5 text-[clamp(3rem,12vw,11rem)]">
          Nothing
          <br />
          here
        </h1>
        <p className="mt-8 max-w-md text-xl text-ink-soft">
          That page moved or never existed. The work is still where you left it.
        </p>
        <Link
          href="/"
          className="label mt-10 inline-block rounded-full bg-ink px-7 py-4 text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-flame"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
