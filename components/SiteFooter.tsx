import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p className="footer-copy">言葉になる前のしんどさを、そっと受け止める場所。</p>
        <div className="footer-links">
          <Link href="/read">読みもの</Link>
          <Link href="/words">気持ちを言葉にする</Link>
          <Link href="/app">アプリについて</Link>
        </div>
      </div>
    </footer>
  );
}
