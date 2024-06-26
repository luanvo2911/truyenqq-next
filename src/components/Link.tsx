import Link from "next/link";
import { ReactNode } from "react";

export default function QLink(children: ReactNode, {href, className, key}: {href: string, className?: string, key?:string}) {
  return (
    <Link
      href={href}
      className={className}
      key={key ?? ""}
    >{children}</Link>
  );
}