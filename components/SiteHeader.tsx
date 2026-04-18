import Link from "next/link";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-shell header-inner">
        <Link href="/" className="brand" aria-label="UjiUji Web トップページへ">
          UjiUji
        </Link>

        <nav className="nav" aria-label="グローバルナビゲーション">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
