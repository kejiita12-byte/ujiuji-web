import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "アプリについて",
  description:
    "気持ちを、返事のいらない形で外に出せる。UjiUjiが向いている日と、静かに書ける場所であることを伝えるページです。"
};

export default function AppPage() {
  return (
    <div className="stack-2xl page-pad">
      <PageIntro
        eyebrow="アプリについて"
        title="そっと気持ちを置いていく"
        lead={
          <>
            <p>
              人に説明したくない日でも、返事を待つ元気がない日でも、
              少しだけ外に出したい気持ちのための場所です。
            </p>
          </>
        }
      />

      <section className="stack-md section-copy text-shell">
        <div className="fragment-list" aria-hidden="true">
          <span>返事はいらない</span>
          <span>モヤモヤする</span>
          <span>うまく話せない</span>
          <span>気持ちの整理がつかない</span>
          <span>ただ吐き出したい</span>
        </div>
      </section>

      <section className="stack-md section-copy text-shell">
        <h2>できることは、多くありません</h2>
        <p className="body-text">
          フォローもリプライもありません。ただ気持ちを置いていって、誰かがそっと読んでくれる。
          それ以上を求めないからこそ、少し楽な日があります。
        </p>
        <p className="body-text">
          うまく説明できなくても大丈夫です。
          一文でも、途中で切れた言葉でも、そのまま書けます。
        </p>
      </section>

      <section className="quiet-cta download-cta text-shell">
        <div className="download-cta-copy stack-md">
          <div className="app-store-badge-wrap">
            <a
              href="#"
              aria-label="App StoreでUjiUjiをダウンロード"
              className="app-store-badge-link"
            >
              <Image
                src="/images/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
                alt="App Storeからダウンロード"
                width={160}
                height={48}
                className="app-store-badge"
              />
            </a>
          </div>
        </div>

        <div className="download-cta-shot">
          <div className="download-shot-frame">
            <Image
              src="/images/app-shot-home.svg"
              alt="UjiUjiアプリの画面イメージ"
              width={1179}
              height={2556}
              className="download-shot-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}