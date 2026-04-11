export type ArticleCluster =
  | "吐き出したい"
  | "匿名"
  | "言葉にならない"
  | "親・家庭"
  | "容姿"
  | "ラベル";

export type RelatedEntry = {
  href: `/read/${string}`;
  title: string;
};

export type ArticleMeta = {
  slug: string;
  href: `/read/${string}`;
  title: string;
  summary: string;
  description: string;
  cluster: ArticleCluster;
  priority: "A" | "B";
  published: boolean;
  order: number;
  relatedSlugs?: string[];
};

export const articles: ArticleMeta[] = [
  {
    slug: "tada-kimochi-wo-hakidashitai",
    href: "/read/tada-kimochi-wo-hakidashitai",
    title: "ただ気持ちを吐き出したい",
    summary: "何かを解決したいわけじゃなく、ただ外に出したい日に。",
    description:
      "何かを解決したいわけじゃない。ただ気持ちを外に出したい。そんな日に、無理に整理しなくてもいいことを伝えるページです。",
    cluster: "吐き出したい",
    priority: "A",
    published: true,
    order: 10
  },
  {
    slug: "kimochi-wo-hakidashitai-anonymous",
    href: "/read/kimochi-wo-hakidashitai-anonymous",
    title: "匿名で気持ちを置きたい",
    summary: "誰にも知られずに、静かに置きたいときに。",
    description:
      "匿名で気持ちを吐き出したい。でも誰にも知られたくない。そんなときに、説明しなくていい距離のまま、気持ちを静かに言葉にできることを伝えるページです。",
    cluster: "匿名",
    priority: "A",
    published: true,
    order: 20
  },
  {
    slug: "umaku-ienai-kedo-shindoi",
    href: "/read/umaku-ienai-kedo-shindoi",
    title: "うまく言えないけどしんどい",
    summary: "理由ははっきりしないけれど、何かが重い日に。",
    description:
      "うまく言えないけどしんどい。理由がはっきりしない苦しさを、そのまま受け止め、少しだけ言葉にしやすくするためのページです。",
    cluster: "言葉にならない",
    priority: "A",
    published: true,
    order: 30
  },
  {
    slug: "oya-ni-sareta-koto-wo-omoidasite-tsurai",
    href: "/read/oya-ni-sareta-koto-wo-omoidasite-tsurai",
    title: "親にされたことを思い出してつらい日に",
    summary:
      "昔のことなのにまだ苦しい。親との記憶を思い出すたびに重くなる日に、無理に整理しなくてもいいことを伝えるページ。",
    description:
      "親にされたことを思い出してつらい。昔のことなのにまだ苦しい、でも今さら相談しづらい。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
    cluster: "親・家庭",
    priority: "A",
    published: true,
    order: 110,
    // relatedSlugs: ["mukashi-no-koto-nanoni-mada-kurushii", "kazoku-no-koto-wo-darenimo-ienai"]
  },
  {
  slug: "oya-kara-no-kotoba-ga-wasurerarenai",
  href: "/read/oya-kara-no-kotoba-ga-wasurerarenai",
  title: "親からの言葉が今も頭から離れないとき",
  summary:
    "親から言われた言葉が忘れられず、ふとしたときに苦しくなる日に。",
  description:
    "親から言われた言葉が忘れられない。もう昔のことなのに、ふとしたときに思い出して苦しくなる。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "A",
  published: true,
  order: 120
},
{
  slug: "kodomo-no-koro-no-koto-wo-hikizutteiru",
  href: "/read/kodomo-no-koro-no-koto-wo-hikizutteiru",
  title: "子どもの頃のことを今も引きずっている人へ",
  summary:
    "もう大人なのに、子どもの頃のことが今もしんどいと感じる日に。",
  description:
    "子どもの頃のことを今も引きずっている。もう大人なのに、昔のことが今もしんどい。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "A",
  published: true,
  order: 130
},
{
  slug: "gyakutai-sareta-kako-otonani-natte-kara-tsurai",
  href: "/read/gyakutai-sareta-kako-otonani-natte-kara-tsurai",
  title: "虐待された過去が大人になってからつらいとき",
  summary:
    "虐待された過去が、子どもの頃より大人になってから苦しく感じられる日に。",
  description:
    "虐待された過去が、大人になってからつらくなることがあります。もう終わったことのはずなのに苦しい、今さら相談しづらい。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "A",
  published: true,
  order: 140
},
{
  slug: "katei-kankyo-ga-warukatta-eikyo-otona",
  href: "/read/katei-kankyo-ga-warukatta-eikyo-otona",
  title: "家庭環境が悪かった影響を大人になって感じる日に",
  summary:
    "家庭環境が悪かった影響を、もう大人なのに今の生きづらさとして感じる日に。",
  description:
    "家庭環境が悪かった影響を、大人になってから感じることがあります。もう昔のことなのに、今の生きづらさにつながっている気がする。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "A",
  published: true,
  order: 150
},
{
  slug: "mukashi-no-koto-nanoni-mada-kurushii",
  href: "/read/mukashi-no-koto-nanoni-mada-kurushii",
  title: "昔のことなのにまだ苦しいのは、おかしいことじゃない",
  summary:
    "もう終わったことのはずなのに、今もふいに苦しくなる日に。",
  description:
    "昔のことなのにまだ苦しい。もう終わったことのはずなのに、今もふいにしんどくなる。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "A",
  published: true,
  order: 160
},
{
  slug: "oya-to-no-kankei-wo-omoidasu-to-kurushii",
  href: "/read/oya-to-no-kankei-wo-omoidasu-to-kurushii",
  title: "親との関係を思い出すと苦しくなるとき",
  summary:
    "親との関係そのものを思い出すと、今も苦しくなる日に。",
  description:
    "親との関係を思い出すと苦しい。もう離れているのに、今も家のことや親とのやりとりが重く残っている。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "A",
  published: true,
  order: 170
},
{
  slug: "oya-no-seide-jikokouteikan-ga-hikui",
  href: "/read/oya-no-seide-jikokouteikan-ga-hikui",
  title: "親のせいで自己肯定感が低いと感じる日に",
  summary:
    "親との関係の影響が、今も自己肯定感の低さとして残っている気がする日に。",
  description:
    "親のせいで自己肯定感が低い気がする。大人になった今も、自分を責めやすかったり、褒められても信じられなかったりする。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "A",
  published: true,
  order: 180
},
{
  slug: "dokuoya-sodachi-ikizurai",
  href: "/read/dokuoya-sodachi-ikizurai",
  title: "毒親育ちで生きづらさが残っている日に",
  summary:
    "毒親育ちかもしれないと感じ、大人になっても生きづらさが残っている日に。",
  description:
    "毒親育ちかもしれない、生きづらさが今も残っている気がする。親との関係や育った環境の影響を大人になってから感じる、そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "B",
  published: true,
  order: 190
},
{
  slug: "oya-ga-kirai-zaiakukan",
  href: "/read/oya-ga-kirai-zaiakukan",
  title: "親が嫌いなのに罪悪感があるとき",
  summary:
    "親が嫌いだと感じるのに、同時に罪悪感もあって苦しくなる日に。",
  description:
    "親が嫌いだと感じるのに、同時に罪悪感もある。そんなふうに割り切れない気持ちを抱えて苦しくなる日に、無理に整理せずそのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "B",
  published: true,
  order: 200
}
];

export function getPublishedArticles() {
  return articles
    .filter((article) => article.published)
    .sort((a, b) => a.order - b.order);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

function toRelatedEntry(article: ArticleMeta): RelatedEntry {
  return {
    href: article.href,
    title: article.title
  };
}

export function getManualRelatedArticles(
  slugs: string[] = [],
  currentSlug?: string,
  limit = 3
): RelatedEntry[] {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is ArticleMeta => Boolean(article))
    .filter((article) => article.published)
    .filter((article) => article.slug !== currentSlug)
    .slice(0, limit)
    .map(toRelatedEntry);
}

export function getAutoRelatedArticles(
  currentSlug: string,
  limit = 3
): RelatedEntry[] {
  const current = getArticleBySlug(currentSlug);

  if (!current || !current.published) {
    return [];
  }

  return getPublishedArticles()
    .filter((article) => article.slug !== current.slug)
    .filter((article) => article.cluster === current.cluster)
    .sort((a, b) => a.order - b.order)
    .slice(0, limit)
    .map(toRelatedEntry);
}

export function getResolvedRelatedArticles(
  currentSlug: string,
  limit = 3
): RelatedEntry[] {
  const current = getArticleBySlug(currentSlug);

  if (!current || !current.published) {
    return [];
  }

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    return getManualRelatedArticles(current.relatedSlugs, currentSlug, limit);
  }

  return getAutoRelatedArticles(currentSlug, limit);
}