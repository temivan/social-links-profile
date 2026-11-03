const linkClassName =
  "rounded-sm text-green underline underline-offset-2 transition-colors hover:text-white hover:no-underline focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none";

export function Attribution() {
  return (
    <footer className="px-6 pb-6 text-center text-attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" className={linkClassName}>
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/temivan" className={linkClassName}>
        temivan
      </a>
      .
    </footer>
  );
}
