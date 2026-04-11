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
},
{
  slug: "katei-kankyo-trauma-tsurai",
  href: "/read/katei-kankyo-trauma-tsurai",
  title: "家庭環境の傷が今もつらいとき",
  summary:
    "トラウマと言っていいのかは分からないけれど、家庭環境の傷が今もつらい日に。",
  description:
    "家庭環境の傷が今もつらい。トラウマと言っていいのかは分からないけれど、家のことを思い出すと苦しい。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "B",
  published: true,
  order: 210
},
{
  slug: "oya-ni-kizutsukerareta-kioku-kienai",
  href: "/read/oya-ni-kizutsukerareta-kioku-kienai",
  title: "親に傷つけられた記憶が消えないとき",
  summary:
    "親に傷つけられた記憶が、今もふいに浮かんで苦しくなる日に。",
  description:
    "親に傷つけられた記憶が消えない。もう昔のことなのに、ふいに思い出して苦しくなる。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "B",
  published: true,
  order: 220
},
{
  slug: "kazoku-no-koto-wo-darenimo-ienai",
  href: "/read/kazoku-no-koto-wo-darenimo-ienai",
  title: "家族のことを誰にも言えないまましんどい日に",
  summary:
    "親との関係や家庭環境のことを、誰にも言えないまま抱えて苦しくなる日に。",
  description:
    "家族のことを誰にも言えない。親との関係や家庭環境のことを話そうとすると苦しいし、うまく説明もできない。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "親・家庭",
  priority: "B",
  published: true,
  order: 230
},
{
  slug: "youshi-complex-tsurai",
  href: "/read/youshi-complex-tsurai",
  title: "容姿コンプレックスが頭から離れないとき",
  summary:
    "見た目のことが頭から離れず、比べるたびにしんどくなる日に。",
  description:
    "容姿コンプレックスがつらい。見た目のことが頭から離れず、比べてしまったり、自分の顔や雰囲気が嫌になったりする。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 310
},
{
  slug: "jibun-no-kao-ga-kirai-tsurai",
  href: "/read/jibun-no-kao-ga-kirai-tsurai",
  title: "自分の顔が嫌いな気持ちを誰にも言えない日に",
  summary:
    "鏡や写真を見るたびに、自分の顔が嫌で苦しくなる日に。",
  description:
    "自分の顔が嫌いでつらい。鏡を見るたびに落ち込んだり、写真を見るのが苦しかったりするのに、誰にも言えない。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 320
},
{
  slug: "mitame-no-koto-de-zutto-kurushii",
  href: "/read/mitame-no-koto-de-zutto-kurushii",
  title: "見た目のことでずっと苦しい日に",
  summary:
    "顔や雰囲気、体型など、自分の見た目のことがずっと重くのしかかる日に。",
  description:
    "見た目のことでずっと苦しい。顔や雰囲気、体型など、自分の見た目のことが頭から離れず、比べるたびに落ち込んでしまう。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 330
},
{
  slug: "kagami-wo-miru-no-ga-tsurai",
  href: "/read/kagami-wo-miru-no-ga-tsurai",
  title: "鏡を見るたびにつらくなる日に",
  summary:
    "鏡を見るたびに、自分の見た目が嫌になって気持ちが沈んでしまう日に。",
  description:
    "鏡を見るのがつらい。自分の顔や見た目が気になって、見るたびに落ち込んだり、外に出る前から疲れてしまったりする。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 340
},
{
  slug: "tanin-to-kurabete-shimau-kao",
  href: "/read/tanin-to-kurabete-shimau-kao",
  title: "他人と比べてしまうのをやめたいのにやめられない人へ",
  summary:
    "人の顔や雰囲気と比べるたびに、自分の見た目がしんどくなる日に。",
  description:
    "他人と比べてしまう顔の悩みがつらい。比べたくないのに比べてしまって、自分の見た目だけが劣って見える。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 350
},
{
  slug: "jibun-no-mitame-ga-iya-de-shindoi",
  href: "/read/jibun-no-mitame-ga-iya-de-shindoi",
  title: "自分の見た目が嫌でしんどい日に",
  summary:
    "顔だけでなく、雰囲気や体型も含めて自分の見た目全体が重く感じられる日に。",
  description:
    "自分の見た目が嫌でしんどい。顔だけでなく、雰囲気や体型も含めて自分を見るのがつらい。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 360
},
{
  slug: "seikei-shitemo-mitasarenai",
  href: "/read/seikei-shitemo-mitasarenai",
  title: "整形しても満たされない苦しさを抱えている日に",
  summary:
    "変わったはずなのに、思っていたように楽になれず苦しさが残る日に。",
  description:
    "整形しても満たされない。変わったはずなのに苦しいままで、自分でもどう言えばいいかわからない。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 370
},
{
  slug: "seikei-shita-noni-jishin-ga-motenai",
  href: "/read/seikei-shita-noni-jishin-ga-motenai",
  title: "整形したのに自信が持てないとき",
  summary:
    "変わったはずなのに、まだ不安が残って自信につながらない日に。",
  description:
    "整形したのに自信が持てない。変わったはずなのに不安が消えなかったり、まだ自分の見た目が苦しかったりする。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 380
},
{
  slug: "seikei-shitemo-kurushii",
  href: "/read/seikei-shitemo-kurushii",
  title: "整形しても苦しいままの気持ちを置いていい",
  summary:
    "変わったはずなのに、見た目のことがまだ重く残って苦しくなる日に。",
  description:
    "整形しても苦しい。変わったはずなのに、見た目のことがまだ頭から離れなかったり、気持ちが軽くならなかったりする。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 390
},
{
  slug: "kawaiku-natta-hazunanoni-tsurai",
  href: "/read/kawaiku-natta-hazunanoni-tsurai",
  title: "可愛くなったはずなのにつらい日に",
  summary:
    "前より変わったはずなのに、気持ちが楽にならず苦しさが残る日に。",
  description:
    "可愛くなったはずなのにつらい。前より変わったのに、気持ちが楽にならなかったり、自信が持てなかったりする。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "A",
  published: true,
  order: 400
},
{
  slug: "youshi-ni-jishin-ga-nai-tsurai",
  href: "/read/youshi-ni-jishin-ga-nai-tsurai",
  title: "容姿に自信がないつらさを誰にも言えない日に",
  summary:
    "見た目に自信が持てず、人と比べるたびにしんどくなる日に。",
  description:
    "容姿に自信がなくてつらい。見た目のことが気になって、人と比べたり、自分を出しづらくなったりする。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "B",
  published: true,
  order: 410
},
{
  slug: "kao-no-koto-bakari-kangaete-shimau",
  href: "/read/kao-no-koto-bakari-kangaete-shimau",
  title: "顔のことばかり考えてしまって苦しいとき",
  summary:
    "考えたくないのに、自分の顔のことが頭から離れずしんどくなる日に。",
  description:
    "顔のことばかり考えてしまう。考えたくないのに鏡や写真、人との比較でまた気になってしまって苦しい。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "B",
  published: true,
  order: 420
},
{
  slug: "mitame-no-nayami-wo-darenimo-ienai",
  href: "/read/mitame-no-nayami-wo-darenimo-ienai",
  title: "見た目の悩みを誰にも言えない日に",
  summary:
    "容姿のことが苦しいのに、軽く扱われそうで誰にも言えない日に。",
  description:
    "見た目の悩みを誰にも言えない。容姿コンプレックスや自分の顔のことが苦しいのに、軽く扱われそうで話せない。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "B",
  published: true,
  order: 430
},
{
  slug: "busu-to-omotte-shimau-tsurai",
  href: "/read/busu-to-omotte-shimau-tsurai",
  title: "自分をブスと思ってしまうつらさを置いていい",
  summary:
    "鏡や写真を見るたびに、自分をきつい言葉で見てしまって苦しくなる日に。",
  description:
    "自分をブスと思ってしまってつらい。鏡を見るたびに落ち込んだり、人と比べるたびに苦しくなったりする。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "B",
  published: true,
  order: 440
},
{
  slug: "hikaku-shite-shimatte-shindoi",
  href: "/read/hikaku-shite-shimatte-shindoi",
  title: "比べてしまってしんどい日に",
  summary:
    "見た目のことを気にしたくないのに、人と比べるたびにしんどくなる日に。",
  description:
    "比べてしまってしんどい。見た目のことを気にしたくないのに、人と比べるたびに落ち込んでしまう。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "B",
  published: true,
  order: 450
},
{
  slug: "kawaiku-naritai-kimochi-ga-tomaranai",
  href: "/read/kawaiku-naritai-kimochi-ga-tomaranai",
  title: "可愛くなりたい気持ちが止まらなくて苦しいとき",
  summary:
    "もっと変わりたい気持ちが止まらず、見た目のことばかり考えてしんどくなる日に。",
  description:
    "可愛くなりたい気持ちが止まらない。もっと変わりたい、もっとよくなりたいと思い続けて苦しくなる。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "容姿",
  priority: "B",
  published: true,
  order: 460
},
{
  slug: "menhera-to-iwareru-no-ga-tsurai",
  href: "/read/menhera-to-iwareru-no-ga-tsurai",
  title: "メンヘラって言われるのがつらい日に",
  summary:
    "ただ苦しいだけなのに、軽いラベルで片づけられて余計にしんどくなる日に。",
  description:
    "メンヘラって言われるのがつらい。ただ苦しいだけなのに、軽い言葉で片づけられると余計にしんどい。そんな気持ちを無理に整理せず、そのまま受け止めるためのページです。",
  cluster: "ラベル",
  priority: "A",
  published: true,
  order: 510
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