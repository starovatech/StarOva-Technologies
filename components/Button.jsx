import Link from "next/link";

export default function Button({ href, children, className = "" }) {
  const classes = `inline-flex items-center justify-center rounded-full bg-[#291c0e] px-6 py-3.5 text-sm font-semibold text-[#e1d4c2] transition hover:bg-[#6e473b] ${className}`;

  return href ? <Link href={href} className={classes}>{children}</Link> : <button className={classes}>{children}</button>;
}
