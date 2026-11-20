import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/landing", label: "Listings" },
  { href: "/about", label: "About" },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="flex gap-6 px-4 py-3 border-b text-sm font-medium">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-blue-600">
            {link.label}
          </Link>
        ))}
      </nav>
      <Component {...pageProps} />
    </>
  );
}
