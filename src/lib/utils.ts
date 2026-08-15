export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function smoothScrollTo(href: string) {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
