export type CategoryId = "learn" | "money" | "life" | "explore" | "play";

export const categories: { id: CategoryId; label: string; en: string }[] = [
  { id: "learn", label: "学び", en: "Learning" },
  { id: "money", label: "マネー", en: "Money" },
  { id: "life", label: "暮らし・生産性", en: "Lifestyle" },
  { id: "explore", label: "おでかけ記録", en: "Explore" },
  { id: "play", label: "ゲーム", en: "Games" },
];

export type AppItem = {
  appId: string;
  name: string;
  category: CategoryId;
  platform: "iOS" | "iOS & Web";
  description: string;
  highlights: string[];
  href: string;
};

export const apps: AppItem[] = [
  {
    appId: "6819514855",
    name: "ぽかぽか水族館：放置で育つ癒しの経営ゲーム",
    category: "play",
    platform: "iOS",
    description:
      "小さな水槽ひとつから始まる、癒しの水族館経営ゲーム。生き物を集めて水槽を並べ、館内をかざって、にぎやかな水族館へ育てます。",
    highlights: [
      "メダカからジンベエザメまで、生き物を集めて図鑑を完成",
      "5種類の水槽と設備を自由に配置して自分だけのレイアウトに",
      "放置中も営業継続、ショーや季節イベントで来場者アップ",
    ],
    href: "https://apps.apple.com/jp/app/%E3%81%BD%E3%81%8B%E3%81%BD%E3%81%8B%E6%B0%B4%E6%97%8F%E9%A4%A8-%E6%94%BE%E7%BD%AE%E3%81%A7%E8%82%B2%E3%81%A4%E7%99%92%E3%81%97%E3%81%AE%E7%B5%8C%E5%96%B6%E3%82%B2%E3%83%BC%E3%83%A0/id6819514855",
  },
  {
    appId: "6816810778",
    name: "漢字将棋対戦：漢字で戦う将棋バトル",
    category: "play",
    platform: "iOS",
    description:
      "漢字の「意味」がそのまま駒の力になる、将棋ライクな対戦ボードゲーム。漢字を召喚・移動して相手の「王」を討ち取ります。",
    highlights: [
      "95種類の漢字それぞれの意味から生まれた動きと能力",
      "熟語になる漢字を隣り合わせるとパワーアップ（67種類）",
      "CPU対戦と1台で向かい合う2人対戦、盤サイズも3種類",
    ],
    href: "https://apps.apple.com/jp/app/%E6%BC%A2%E5%AD%97%E5%B0%86%E6%A3%8B%E5%AF%BE%E6%88%A6-%E6%BC%A2%E5%AD%97%E3%81%A7%E6%88%A6%E3%81%86%E5%B0%86%E6%A3%8B%E3%83%90%E3%83%88%E3%83%AB/id6816810778",
  },
  {
    appId: "6753914294",
    name: "Asset Forecast",
    category: "money",
    platform: "iOS",
    description:
      "資産や家計の状況を天気マークで直感的に把握できるスマート資産管理アプリ。実績入力から将来シミュレーションまでスマホひとつで完結します。",
    highlights: [
      "晴れ・曇り・雨の天気マークで毎月の資産コンディションを可視化",
      "50種類以上の指標・グラフを自由に配置できる分析画面",
      "データは全て端末内にのみ保存",
    ],
    href: "https://apps.apple.com/jp/app/asset-forecast/id6753914294",
  },
  {
    appId: "6760900479",
    name: "山コレクション－全国めぐり記録",
    category: "explore",
    platform: "iOS",
    description:
      "百名山だけに限定せず、百低山・花の百名山など複数カテゴリを横断して管理できる登山管理アプリ。記録・検索・可視化・振り返りを一つの流れで使えます。",
    highlights: [
      "百名山・百低山・花の百名山など複数カテゴリを一元管理",
      "登山記録・達成状況・計画を可視化",
      "あなた好みの山がきっと見つかる",
    ],
    href: "https://apps.apple.com/jp/app/%E5%B1%B1%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3/id6760900479",
  },
  {
    appId: "6767876543",
    name: "3000英単語-ペットと学ぶ英語学習",
    category: "learn",
    platform: "iOS",
    description:
      "ペットを育てながら英単語3,000語を習得するゲーミファイド学習アプリ。スマートレビューシステムと100種以上のペット収集で毎日の学習を習慣化します。",
    highlights: [
      "学習するたびにペットが成長・進化するインセンティブ設計",
      "3,000の頻出英単語をスマートレビューで効率的に定着",
      "タイムアタックゲームと100種以上のペット収集で継続をサポート",
    ],
    href: "https://apps.apple.com/jp/app/3000-english-vocab-with-pets/id6767876543",
  },
  {
    appId: "6805960002",
    name: "韓国語単語を学ぶ: Vocab Paws",
    category: "learn",
    platform: "iOS",
    description:
      "ペットを育てながら韓国語単語を学べる学習アプリ。TOPIK 1〜6級とビジネスの3,000語を、実際の発音表記とともに習得できます。",
    highlights: [
      "TOPIK 1〜6級・ビジネスの3,000語と例文3,000文を収録",
      "濃音化・鼻音化・連音などの発音表記で聞き取りにも強く",
      "全3,000語無料、間隔反復とペット育成で継続をサポート",
    ],
    href: "https://apps.apple.com/jp/app/%E9%9F%93%E5%9B%BD%E8%AA%9E%E5%8D%98%E8%AA%9E%E3%82%92%E5%AD%A6%E3%81%B6-vocab-paws/id6805960002",
  },
  {
    appId: "6805949109",
    name: "韓国語文法: Grammar Paws",
    category: "learn",
    platform: "iOS",
    description:
      "ペットを育てながら韓国語文法を学べる学習アプリ。TOPIK 1〜6級とビジネスの900項目を、パッチムの有無まで明記した接続ルールで理解できます。",
    highlights: [
      "TOPIK 1〜6級・ビジネスの900文法項目と例文1,224文を収録",
      "ハングルのローマ字表記とパッチム別の接続ルール",
      "間隔反復（SRS）・3つの学習モード・ペット育成で習慣化",
    ],
    href: "https://apps.apple.com/jp/app/%E9%9F%93%E5%9B%BD%E8%AA%9E%E6%96%87%E6%B3%95-grammar-paws/id6805949109",
  },
  {
    appId: "6799179231",
    name: "日本語単語: Vocabulary Paws",
    category: "learn",
    platform: "iOS",
    description:
      "日本語学習者向けに、ペットを育てながらJLPT N5〜N1とビジネスの3,000語を習得できる単語学習アプリ。15言語に対応しています。",
    highlights: [
      "JLPT N5〜N1・ビジネスの3,000語と例文3,000文を収録",
      "ふりがな表示切り替えと15言語の母語解説",
      "間隔反復（SRS）と100種類のペット収集で継続をサポート",
    ],
    href: "https://apps.apple.com/jp/app/%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8D%98%E8%AA%9E-vocabulary-paws/id6799179231",
  },
  {
    appId: "6798627790",
    name: "日本語文法: Grammar Paws",
    category: "learn",
    platform: "iOS",
    description:
      "日本語学習者向けに、ペットを育てながらJLPT N5〜N1とビジネスの文法906項目を学べるアプリ。母語→日本語の順で接続ルールを理解できます。",
    highlights: [
      "JLPT N5〜N1・ビジネスの906文法項目と例文973文を収録",
      "ふりがな表示切り替えと15言語の母語解説",
      "フラッシュカード・クイズ・対戦ゲームの3つの学習モード",
    ],
    href: "https://apps.apple.com/jp/app/%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%96%87%E6%B3%95-grammar-paws/id6798627790",
  },
  {
    appId: "6796983012",
    name: "サブスク管理: SubTracks",
    category: "money",
    platform: "iOS",
    description:
      "契約中のサブスクや毎月の固定費・支払い方法をかんたんに登録・管理し、無駄な出費をなくすための固定費管理アプリ。",
    highlights: [
      "人気サービスのプリセットからワンタップで登録",
      "請求日・無料体験の解約期限を事前にプッシュ通知",
      "支払い方法別・カテゴリ別の円グラフで固定費を可視化",
    ],
    href: "https://apps.apple.com/jp/app/%E3%82%B5%E3%83%96%E3%82%B9%E3%82%AF%E7%AE%A1%E7%90%86-subtracks/id6796983012",
  },
  {
    appId: "6762706658",
    name: "kashikari-お金の貸し借り記録アプリ",
    category: "money",
    platform: "iOS",
    description:
      "友人や家族との少額の貸し借りをシンプルに記録・管理できる家計補助アプリ。名前・金額・メモ・日付だけで素早く記録し、未精算のやり取りを分かりやすく可視化します。",
    highlights: [
      "貸した・借りた履歴を相手ごとに整理して管理",
      "期日設定や精算（部分返済・全額返済）に対応",
      "データは端末内保存でアカウント登録不要",
    ],
    href: "https://apps.apple.com/jp/app/kashikari-loan-iou-tracker/id6762706658",
  },
  {
    appId: "6816064767",
    name: "スペイン語文法: Grammar Paws",
    category: "learn",
    platform: "iOS",
    description:
      "ペットを育てながらスペイン語文法を学べる学習アプリ。CEFR A1〜C2とビジネスの900項目を、母語→スペイン語の順で直感的に理解できます。",
    highlights: [
      "CEFR A1〜C2・ビジネスの900文法項目を収録、動詞には不定詞注釈付き",
      "間隔反復（SRS）とクイズ・対戦ゲームの3つの学習モード",
      "100種類のペット育成・図鑑収集で学習を習慣化",
    ],
    href: "https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3%E8%AA%9E%E6%96%87%E6%B3%95-grammar-paws/id6816064767",
  },
  {
    appId: "6776901519",
    name: "動物園コレクションー全国めぐり記録",
    category: "explore",
    platform: "iOS",
    description:
      "全国54の動物園への来園をスタンプラリー感覚で記録・管理できる、動物園好きのためのアプリ。",
    highlights: [
      "来園済・予定・未訪問を全国マップで色分け表示",
      "達成率・地方別・動物カテゴリ別など多彩な統計",
      "パンダ・コアラなど20種類の動物カテゴリで施設を検索",
    ],
    href: "https://apps.apple.com/jp/app/%E5%8B%95%E7%89%A9%E5%9C%92%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%BC%E5%85%A8%E5%9B%BD%E3%82%81%E3%81%90%E3%82%8A%E8%A8%98%E9%8C%B2/id6776901519",
  },
  {
    appId: "6766937137",
    name: "水族館コレクション－全国めぐり記録",
    category: "explore",
    platform: "iOS",
    description:
      "全国61の水族館を発見・訪問記録・収集できる水族館トラッキングアプリ。沖縄から北海道まで、9地域別に閲覧し旅行計画に役立てられます。",
    highlights: [
      "全国61水族館を地域・生き物種別で検索・整理",
      "訪問済みをチェックしてコレクション進捗を管理",
      "旅行計画と水族館めぐりを一つのアプリで完結",
    ],
    href: "https://apps.apple.com/jp/app/japan-aquarium-collection/id6766937137",
  },
  {
    appId: "6759491280",
    name: "Focus Pet - Habbit",
    category: "life",
    platform: "iOS",
    description:
      "タスク完了とフォーカス時間でXPを稼ぎ、ペットを育てるタスク管理アプリ。生産性向上をゲーム感覚で楽しめます。",
    highlights: [
      "タスク完了とフォーカスセッションでペットが進化",
      "XP・報酬システムで習慣化をサポート",
      "ゲーム感覚でTODO管理を楽しめる",
    ],
    href: "https://apps.apple.com/jp/app/focus-pet-habbit/id6759491280",
  },
  {
    appId: "6759045118",
    name: "Book Echo - Action Tip",
    category: "life",
    platform: "iOS & Web",
    description:
      "読んだ本の知識をアクションに変える読書管理アプリ。「読んで終わり」ではなく、実生活での変化につながる学びをサポートします。",
    highlights: [
      "未読・読書中・読了でスマートにライブラリ管理",
      "気づきをアクションプランとして記録",
      "読書と実践のギャップを埋める構造化ノート機能",
    ],
    href: "https://apps.apple.com/jp/app/book-echo-action-tip/id6759045118",
  },
  {
    appId: "6796442878",
    name: "1日あたりの利用コスト: UsePace",
    category: "money",
    platform: "iOS",
    description:
      "モノを使い始めた日と使い終わった日を記録するだけで、1日あたりのコストと消費ペースを自動計算する消費ペース管理アプリ。",
    highlights: [
      "ワンタップで使用開始・終了を記録し日割りコストを自動計算",
      "過去実績から1ヶ月の必要量を予測してまとめ買いを最適化",
      "アカウント登録不要・完全オフラインでプライバシーも安心",
    ],
    href: "https://apps.apple.com/jp/app/1%E6%97%A5%E3%81%82%E3%81%9F%E3%82%8A%E3%81%AE%E5%88%A9%E7%94%A8%E3%82%B3%E3%82%B9%E3%83%88-usepace/id6796442878",
  },
  {
    appId: "6759558674",
    name: "麻雀クイズ！〜役・翻符・点数〜",
    category: "learn",
    platform: "iOS",
    description:
      "役の翻数・役判定・翻符読み取り・点数計算を5段階で反復練習できる、麻雀点数計算トレーニングアプリ。",
    highlights: [
      "レベルに合わせたクイズで基礎から実戦力までカバー",
      "手牌を見ながら役・翻符・点数を総合的に判断する出題",
      "履歴画面で正答率やスコア推移を振り返り可能",
    ],
    href: "https://apps.apple.com/jp/app/%E9%BA%BB%E9%9B%80%E3%82%AF%E3%82%A4%E3%82%BA-%E5%BD%B9-%E7%BF%BB%E7%AC%A6-%E7%82%B9%E6%95%B0/id6759558674",
  },
  {
    appId: "6760020562",
    name: "ふたり家計",
    category: "money",
    platform: "iOS",
    description:
      "夫婦・カップル向けに毎月の家計精算を自動化。立て替えや共通口座の入金額をシンプルに算出できる家計管理アプリ。",
    highlights: [
      "負担比率を柔軟に設定し、精算額を自動計算",
      "個人払い・共通支出・口座ごとの必要入金額を可視化",
      "月別履歴とグラフ表示で支出傾向を確認",
    ],
    href: "https://apps.apple.com/jp/app/%E3%81%B5%E3%81%9F%E3%82%8A%E5%AE%B6%E8%A8%88/id6760020562",
  },
  {
    appId: "6807355355",
    name: "収入プランナー 〜目標年収シミュレーター〜",
    category: "money",
    platform: "iOS",
    description:
      "「今いくらか」ではなく「これからどう上げるか」を設計する収入計画アプリ。目標年収を決めると、そこまでの道のりを自動で描きます。",
    highlights: [
      "目標年収から達成年を逆算し、年ごとの計画をグラフ化",
      "昇給率を変えた将来収入の比較と収入源ごとの内訳管理",
      "データは端末内保存、アカウント登録不要",
    ],
    href: "https://apps.apple.com/jp/app/%E5%8F%8E%E5%85%A5%E3%83%97%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC-%E7%9B%AE%E6%A8%99%E5%B9%B4%E5%8F%8E%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC/id6807355355",
  },
  {
    appId: "6756086853",
    name: "SeedPocket",
    category: "life",
    platform: "iOS & Web",
    description:
      "家庭菜園で育てるハーブや野菜と、その素材を使ったレシピを一つのタイムラインで管理できる“暮らしのノート”。キッチンと畑をまたいで記録できます。",
    highlights: [
      "栽培スケジュールと収穫ログをレシピ候補と連動させて可視化",
      "畑の状況は屋外でアプリから記録、栽培計画は自宅のPCから管理",
      "Webとモバイルアプリを同時リリース",
    ],
    href: "https://apps.apple.com/jp/app/seed-pocket/id6756086853",
  },
  {
    appId: "6759827804",
    name: "九九九！ 〜 3桁掛け算九九〜",
    category: "learn",
    platform: "iOS",
    description:
      "1桁から3桁まで自由な組み合わせで暗算力を鍛える計算トレーニングアプリ。速度と正確性を両立した反復学習に対応。",
    highlights: [
      "桁数設定を細かくカスタマイズできる出題",
      "10問モードと無限モードで学習スタイルを選択可能",
      "カレンダーと成績グラフで継続状況と弱点を可視化",
    ],
    href: "https://apps.apple.com/jp/app/%E4%B9%9D%E4%B9%9D%E4%B9%9D-3%E6%A1%81%E6%8E%9B%E3%81%91%E7%AE%97%E4%B9%9D%E4%B9%9D/id6759827804",
  },
  {
    appId: "6760779611",
    name: "LuckyGames - Choice & Roulette",
    category: "play",
    platform: "iOS",
    description:
      "日常・ビジネス・パーティーなど様々なシーンで意思決定をすばやく・公平に・楽しくサポートする多機能決断ツール。ルーレット・あみだくじ・爆弾ゲームなど6種類のミニゲームを搭載。",
    highlights: [
      "ルーレット・あみだくじ・爆弾・チーム分け・コイン・くじ引きの6ミニゲーム",
      "英語・日本語・韓国語・中国語・ベトナム語の多言語対応",
      "履歴機能で過去の結果をいつでも振り返り可能",
    ],
    href: "https://apps.apple.com/jp/app/luckygames-choice-roulette/id6760779611",
  },
  {
    appId: "6759867409",
    name: "Word Pocket - Pet",
    category: "learn",
    platform: "iOS",
    description:
      "ペットを育てながら語彙力を鍛える、ゲーム感覚の単語学習アプリ。科学的な間隔反復法で効率よく単語を定着させます。",
    highlights: [
      "科学的な間隔反復法（SRS）で記憶を最大化",
      "学習の進捗でコンパニオンペットが成長",
      "ゲーム感覚で毎日の学習を継続できる仕組み",
    ],
    href: "https://apps.apple.com/jp/app/word-pocket-pet/id6759867409",
  },
  {
    appId: "6760417366",
    name: "Stock Nest - Management",
    category: "life",
    platform: "iOS",
    description:
      "食材・日用品・医薬品・ペット用品まで、家庭の在庫をまとめて管理する在庫管理アプリ。賞味期限もロット単位で追跡できます。",
    highlights: [
      "ロット単位で賞味期限・消費期限を管理",
      "食料品から日用品・医薬品まで幅広い品目に対応",
      "美しいUIで家の在庫を一元管理",
    ],
    href: "https://apps.apple.com/jp/app/stock-nest-management/id6760417366",
  },
  {
    appId: "6744993926",
    name: "ドキドキスイッチ",
    category: "play",
    platform: "iOS",
    description:
      "スイッチを1つずつ押して、爆弾を避けて全クリアを目指すミニゲーム。シンプルなルールなのに緊張感MAX。飲み会やパーティーの罰ゲームにも。",
    highlights: [
      "爆弾の数やスイッチ数を自由にカスタマイズ",
      "ひとりでじっくり、みんなでワイワイ遊べる",
      "飲み会・パーティーの罰ゲームに最適",
    ],
    href: "https://apps.apple.com/jp/app/%E3%83%89%E3%82%AD%E3%83%89%E3%82%AD%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81/id6744993926",
  },
  {
    appId: "6743796326",
    name: "Pomodoro TaskTic",
    category: "life",
    platform: "iOS",
    description:
      "ポモドーロテクニックに基づいた生産性アプリ。集中25分・休憩5分を繰り返すサイクルで、仕事・学習の集中力を高めます。",
    highlights: [
      "集中・休憩時間をライフスタイルに合わせてカスタマイズ",
      "ポモドーロサイクルで集中力を継続してゴール達成をサポート",
      "仕事・学習効率の改善に特化したシンプルなUI",
    ],
    href: "https://apps.apple.com/jp/app/pomodoro-tasktic/id6743796326",
  },
  {
    appId: "6766865900",
    name: "湖コレクション－全国めぐり記録",
    category: "explore",
    platform: "iOS",
    description:
      "日本全国の湖を発見・追跡・探索するための統合アプリ。百名湖・ダム湖・カルデラ湖など多彩なカテゴリを地図と訪問記録で管理できます。",
    highlights: [
      "百名湖・ダム湖・カルデラ湖など複数カテゴリを一元管理",
      "地図表示と訪問チェックで探索進捗を可視化",
      "ドライブ・観光・自然探索の旅行計画に最適",
    ],
    href: "https://apps.apple.com/jp/app/the-lake-collection/id6766865900",
  },
];

/** トップで大きく紹介するアプリ（appId） */
export const featuredIds = ["6753914294", "6776901519", "6767876543"];

export const featuredCopy: Record<string, { catch: string; tone: string }> = {
  "6753914294": { catch: "お金の状態を、天気予報のように。", tone: "aqua" },
  "6767876543": { catch: "ペットと一緒に、英単語3,000語。", tone: "coral" },
  "6776901519": { catch: "全国の動物園を、スタンプラリー感覚で。", tone: "leaf" },
};
