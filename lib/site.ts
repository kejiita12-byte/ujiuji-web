export const siteConfig = {
  name: "UjiUji Web",
  description: "言葉になる前のしんどさを、そっと受け止める場所",
  url: "https://ujiuji-web-kzau.vercel.app",
  appName: "UjiUji"
};

export const navItems = [
  { href: "/read", label: "読みもの" },
  { href: "/words", label: "気持ちを言葉にする" },
  { href: "/app", label: "アプリについて" }
] as const;

export const wordChoices = [
  "しんどい",
  "モヤモヤする",
  "つかれた",
  "苦しい",
  "さみしい",
  "何もしたくない",
  "うまく言えない",
  "ただ吐き出したい"
] as const;

export const writingPrompts = [
  "なんでか分からないけど、今日は少し重い",
  "ちゃんと言えないけど、しんどい",
  "うまく説明できないけど、気持ちを置いていきたい",
  "ただ吐き出したいだけの日です",
  "誰にも話したくないけど、少し苦しい"
] as const;