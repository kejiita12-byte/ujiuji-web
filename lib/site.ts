export const siteConfig = {
  name: "UjiUji Web",
  description: "言葉になる前のしんどさを、そっと受け止める場所",
  url: "https://example.com",
  appName: "UjiUji"
};

export const navItems = [
  { href: "/read", label: "読みもの" },
  { href: "/words", label: "気持ちを言葉にする" },
  { href: "/app", label: "アプリについて" }
] as const;

export const featuredEntries = [
  {
    href: "/read/tada-kimochi-wo-hakidashitai",
    title: "ただ気持ちを吐き出したい",
    summary: "何かを解決したいわけじゃなく、ただ外に出したい日に。"
  },
  {
    href: "/read/kimochi-wo-hakidashitai-anonymous",
    title: "匿名で気持ちを置きたい",
    summary: "誰にも知られずに、静かに置きたいときに。"
  },
  {
    href: "/read/umaku-ienai-kedo-shindoi",
    title: "うまく言えないけどしんどい",
    summary: "理由ははっきりしないけれど、何かが重い日に。"
  }
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
