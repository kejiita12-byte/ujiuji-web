import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "返事のいらない匿名SNSアプリ",
  description:
    "匿名で気持ちを置ける、返事のいらないSNSアプリです。人に説明したくない日や、ただ気持ちを吐き出したい日に、静かに書ける場所であることを伝えるページです。"
};

const fragments = [
  "返事はいらない",
  "モヤモヤする",
  "うまく話せない",
  "気持ちの整理がつかない",
  "ただ吐き出したい"
] as const;

export default function AppPage() {
  return (
    <div className="app-page">
      <section className="app-hero">
        <div className="app-hero-inner">
          <div className="app-hero-copy">
            <h1 className="app-hero-title">
              その気持ち、<br />
              ここに置いていっていい
            </h1>

            <p className="app-hero-lead">
              人に説明したくない日でも、返事を待つ元気がない日でも、
              少しだけ外に出したい気持ちのための場所です。
            </p>

            <div className="app-hero-badge">
              <a
                href="https://apps.apple.com/jp/app/id6758415466"
                aria-label="App StoreでUjiUjiをダウンロード"
                className="app-store-badge-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                  alt="App Storeからダウンロード"
                  width={160}
                  height={48}
                  className="app-store-badge"
                  priority
                />
              </a>
            </div>
          </div>

          <div className="app-hero-visual">
            <div className="app-hero-shot-wrap">
              <Image
                src="/images/app-shot-home.svg"
                alt="UjiUjiアプリの画面イメージ"
                width={1179}
                height={2556}
                className="app-hero-shot-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="app-section shell app-copy-section">
        <div className="app-section-rule" />
        <div className="text-shell stack-md">
          <h2>できることは、多くありません</h2>
          <p className="body-text">
            フォローもリプライもありません。ただ気持ちを置いていって、
            誰かがそっと読んでくれる。<br/>それ以上を求めないからこそ、
            少し楽な日があります。
          </p>
          <p className="body-text">
            うまく説明できなくても大丈夫です。一文でも、途中で切れた言葉でも、
            そのまま書けます。
          </p>
        </div>
      </section>

      <section className="app-section shell app-links-section">
        <div className="app-section-rule" />
        <div className="app-links-grid">
          <div>
            <h2 className="app-links-heading">ここでもう少しみていく</h2>
            <div className="entry-list" role="list">

              <Link href="/ujiuji" className="entry-row" role="listitem">
                <span className="entry-row-title">ujiujiについて</span>
                <span className="entry-row-summary">
                  ujiujiってどんなところかもう少し見てみる。
                </span>
              </Link>

              <Link href="/read" className="entry-row" role="listitem">
                <span className="entry-row-title">読みもの</span>
                <span className="entry-row-summary">
                  ujiujiの読みものを少し読んでいく。
                </span>
              </Link>

              <Link href="/words" className="entry-row" role="listitem">
                <span className="entry-row-title">気持ちを言葉にする</span>
                <span className="entry-row-summary">
                  まだまとまっていなくても、少しだけ言葉にしてみる。
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
