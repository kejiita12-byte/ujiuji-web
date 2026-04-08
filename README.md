# UjiUji Web

UjiUji Web の初期実装です。Next.js(App Router) + TypeScript で構成しています。

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## 実装済みページ

- /
- /read
- /read/tada-kimochi-wo-hakidashitai
- /read/kimochi-wo-hakidashitai-anonymous
- /read/umaku-ienai-kedo-shindoi
- /words
- /ujiuji
- /app

## 変更ポイント

- `lib/site.ts`
  - サイト名・URL・ナビ・文言データ
- `app/app/page.tsx`
  - App Store URL が決まったら導線差し替え
- `app/globals.css`
  - 色・余白・タイポグラフィの調整
