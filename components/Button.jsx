import Link from "next/link";

export default function Button({ href, children, variant = "primary", type = "button" }) {
  const className = `button button-${variant}`;

  if (href) {
    return <Link href={href} className={className}>{children}</Link>;
  }

  return <button type={type} className={className}>{children}</button>;
}