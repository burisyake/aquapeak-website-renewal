import Image from "next/image";

async function fetchAppIconUrl(appId: string): Promise<string | null> {
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${appId}`, {
      next: { revalidate: 86400 },
    });
    const data = await res.json();
    return (data.results?.[0]?.artworkUrl512 as string) ?? null;
  } catch {
    return null;
  }
}

const products = [
  {
    name: "ぽかぽか水族館：放置で育つ癒しの経営ゲーム",
    type: "Mobile App",
    description:
      "小さな水槽ひとつから始まる、癒しの水族館経営ゲーム。生き物を集めて水槽を並べ、館内をかざって、にぎやかな水族館へ育てます。",
    highlights: [
      "メダカからジンベエザメまで、生き物を集めて図鑑を完成",
      "5種類の水槽と設備を自由に配置して自分だけのレイアウトに",
      "放置中も営業継続、ショーや季節イベントで来場者アップ",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E3%81%BD%E3%81%8B%E3%81%BD%E3%81%8B%E6%B0%B4%E6%97%8F%E9%A4%A8-%E6%94%BE%E7%BD%AE%E3%81%A7%E8%82%B2%E3%81%A4%E7%99%92%E3%81%97%E3%81%AE%E7%B5%8C%E5%96%B6%E3%82%B2%E3%83%BC%E3%83%A0/id6819514855",
    appId: "6819514855",
  },
  {
    name: "漢字将棋対戦：漢字で戦う将棋バトル",
    type: "Mobile App",
    description:
      "漢字の「意味」がそのまま駒の力になる、将棋ライクな対戦ボードゲーム。漢字を召喚・移動して相手の「王」を討ち取ります。",
    highlights: [
      "95種類の漢字それぞれの意味から生まれた動きと能力",
      "熟語になる漢字を隣り合わせるとパワーアップ（67種類）",
      "CPU対戦と1台で向かい合う2人対戦、盤サイズも3種類",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E6%BC%A2%E5%AD%97%E5%B0%86%E6%A3%8B%E5%AF%BE%E6%88%A6-%E6%BC%A2%E5%AD%97%E3%81%A7%E6%88%A6%E3%81%86%E5%B0%86%E6%A3%8B%E3%83%90%E3%83%88%E3%83%AB/id6816810778",
    appId: "6816810778",
  },
  {
    name: "収入プランナー 〜目標年収シミュレーター〜",
    type: "Mobile App",
    description:
      "「今いくらか」ではなく「これからどう上げるか」を設計する収入計画アプリ。目標年収を決めると、そこまでの道のりを自動で描きます。",
    highlights: [
      "目標年収から達成年を逆算し、年ごとの計画をグラフ化",
      "昇給率を変えた将来収入の比較と収入源ごとの内訳管理",
      "データは端末内保存、アカウント登録不要",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E5%8F%8E%E5%85%A5%E3%83%97%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC-%E7%9B%AE%E6%A8%99%E5%B9%B4%E5%8F%8E%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC/id6807355355",
    appId: "6807355355",
  },
  {
    name: "動物園コレクションー全国めぐり記録",
    type: "Mobile App",
    description:
      "全国54の動物園への来園をスタンプラリー感覚で記録・管理できる、動物園好きのためのアプリ。",
    highlights: [
      "来園済・予定・未訪問を全国マップで色分け表示",
      "達成率・地方別・動物カテゴリ別など多彩な統計",
      "パンダ・コアラなど20種類の動物カテゴリで施設を検索",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E5%8B%95%E7%89%A9%E5%9C%92%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%BC%E5%85%A8%E5%9B%BD%E3%82%81%E3%81%90%E3%82%8A%E8%A8%98%E9%8C%B2/id6776901519",
    appId: "6776901519",
  },
  {
    name: "スペイン語文法: Grammar Paws",
    type: "Mobile App",
    description:
      "ペットを育てながらスペイン語文法を学べる学習アプリ。CEFR A1〜C2とビジネスの900項目を、母語→スペイン語の順で直感的に理解できます。",
    highlights: [
      "CEFR A1〜C2・ビジネスの900文法項目を収録、動詞には不定詞注釈付き",
      "間隔反復（SRS）とクイズ・対戦ゲームの3つの学習モード",
      "100種類のペット育成・図鑑収集で学習を習慣化",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9A%E3%82%A4%E3%83%B3%E8%AA%9E%E6%96%87%E6%B3%95-grammar-paws/id6816064767",
    appId: "6816064767",
  },
  {
    name: "韓国語単語を学ぶ: Vocab Paws",
    type: "Mobile App",
    description:
      "ペットを育てながら韓国語単語を学べる学習アプリ。TOPIK 1〜6級とビジネスの3,000語を、実際の発音表記とともに習得できます。",
    highlights: [
      "TOPIK 1〜6級・ビジネスの3,000語と例文3,000文を収録",
      "濃音化・鼻音化・連音などの発音表記で聞き取りにも強く",
      "全3,000語無料、間隔反復とペット育成で継続をサポート",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E9%9F%93%E5%9B%BD%E8%AA%9E%E5%8D%98%E8%AA%9E%E3%82%92%E5%AD%A6%E3%81%B6-vocab-paws/id6805960002",
    appId: "6805960002",
  },
  {
    name: "韓国語文法: Grammar Paws",
    type: "Mobile App",
    description:
      "ペットを育てながら韓国語文法を学べる学習アプリ。TOPIK 1〜6級とビジネスの900項目を、パッチムの有無まで明記した接続ルールで理解できます。",
    highlights: [
      "TOPIK 1〜6級・ビジネスの900文法項目と例文1,224文を収録",
      "ハングルのローマ字表記とパッチム別の接続ルール",
      "間隔反復（SRS）・3つの学習モード・ペット育成で習慣化",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E9%9F%93%E5%9B%BD%E8%AA%9E%E6%96%87%E6%B3%95-grammar-paws/id6805949109",
    appId: "6805949109",
  },
  {
    name: "日本語単語: Vocabulary Paws",
    type: "Mobile App",
    description:
      "日本語学習者向けに、ペットを育てながらJLPT N5〜N1とビジネスの3,000語を習得できる単語学習アプリ。15言語に対応しています。",
    highlights: [
      "JLPT N5〜N1・ビジネスの3,000語と例文3,000文を収録",
      "ふりがな表示切り替えと15言語の母語解説",
      "間隔反復（SRS）と100種類のペット収集で継続をサポート",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8D%98%E8%AA%9E-vocabulary-paws/id6799179231",
    appId: "6799179231",
  },
  {
    name: "日本語文法: Grammar Paws",
    type: "Mobile App",
    description:
      "日本語学習者向けに、ペットを育てながらJLPT N5〜N1とビジネスの文法906項目を学べるアプリ。母語→日本語の順で接続ルールを理解できます。",
    highlights: [
      "JLPT N5〜N1・ビジネスの906文法項目と例文973文を収録",
      "ふりがな表示切り替えと15言語の母語解説",
      "フラッシュカード・クイズ・対戦ゲームの3つの学習モード",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%96%87%E6%B3%95-grammar-paws/id6798627790",
    appId: "6798627790",
  },
  {
    name: "サブスク管理: SubTracks",
    type: "Mobile App",
    description:
      "契約中のサブスクや毎月の固定費・支払い方法をかんたんに登録・管理し、無駄な出費をなくすための固定費管理アプリ。",
    highlights: [
      "人気サービスのプリセットからワンタップで登録",
      "請求日・無料体験の解約期限を事前にプッシュ通知",
      "支払い方法別・カテゴリ別の円グラフで固定費を可視化",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E3%82%B5%E3%83%96%E3%82%B9%E3%82%AF%E7%AE%A1%E7%90%86-subtracks/id6796983012",
    appId: "6796983012",
  },
  {
    name: "1日あたりの利用コスト: UsePace",
    type: "Mobile App",
    description:
      "モノを使い始めた日と使い終わった日を記録するだけで、1日あたりのコストと消費ペースを自動計算する消費ペース管理アプリ。",
    highlights: [
      "ワンタップで使用開始・終了を記録し日割りコストを自動計算",
      "過去実績から1ヶ月の必要量を予測してまとめ買いを最適化",
      "アカウント登録不要・完全オフラインでプライバシーも安心",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/1%E6%97%A5%E3%81%82%E3%81%9F%E3%82%8A%E3%81%AE%E5%88%A9%E7%94%A8%E3%82%B3%E3%82%B9%E3%83%88-usepace/id6796442878",
    appId: "6796442878",
  },
  {
    name: "3000英単語-ペットと学ぶ英語学習",
    type: "Mobile App",
    description:
      "ペットを育てながら英単語3,000語を習得するゲーミファイド学習アプリ。スマートレビューシステムと100種以上のペット収集で毎日の学習を習慣化します。",
    highlights: [
      "学習するたびにペットが成長・進化するインセンティブ設計",
      "3,000の頻出英単語をスマートレビューで効率的に定着",
      "タイムアタックゲームと100種以上のペット収集で継続をサポート",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/3000-english-vocab-with-pets/id6767876543",
    appId: "6767876543",
  },
  {
    name: "山コレクション",
    type: "Mobile App",
    description:
      "百名山だけに限定せず、百低山・花の百名山など複数カテゴリを横断して管理できる登山管理アプリ。記録・検索・可視化・振り返りを一つの流れで使える設計にしました。",
    highlights: [
      "百名山・百低山・花の百名山など複数カテゴリを一元管理",
      "登山記録・達成状況・計画を可視化",
      "あなた好みの山がきっと見つかる",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E5%B1%B1%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3/id6760900479",
    appId: "6760900479",
  },
  {
    name: "水族館コレクション",
    type: "Mobile App",
    description:
      "全国61の水族館を発見・訪問記録・収集できる水族館トラッキングアプリ。沖縄から北海道まで、9地域別に閲覧し旅行計画に役立てられます。",
    highlights: [
      "全国61水族館を地域・生き物種別で検索・整理",
      "訪問済みをチェックしてコレクション進捗を管理",
      "旅行計画と水族館めぐりを一つのアプリで完結",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/japan-aquarium-collection/id6766937137",
    appId: "6766937137",
  },
  {
    name: "Focus Pet - Habbit",
    type: "Mobile App",
    description:
      "タスク完了とフォーカス時間でXPを稼ぎ、ペットを育てるタスク管理アプリ。生産性向上をゲーム感覦で楽しめます。",
    highlights: [
      "タスク完了とフォーカスセッションでペットが進化",
      "XP・報酬システムで習慣化をサポート",
      "ゲーム感覦でTODO管理を楽しめる",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/focus-pet-habbit/id6759491280",
    appId: "6759491280",
  },
  {
    name: "Book Echo - Action Tip",
    type: "Web & Mobile",
    description:
      "読んだ本の知識をアクションに変える読書管理アプリ。「読んで終わり」ではなく、実生活での変化につながる学びをサポートします。",
    highlights: [
      "未読・読書中・読了でスマートにライブラリ管理",
      "気づきをアクションプランとして記録",
      "読書と実践のギャップを埋める構造化ノート機能",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/book-echo-action-tip/id6759045118",
    appId: "6759045118",
  },
  {
    name: "Asset Forecast",
    type: "Mobile App",
    description:
      "資産や家計の状況を天気マークで直感的に把握できるスマート資産管理アプリ。実績入力から将来シミュレーションまでスマホひとつで完結します。",
    highlights: [
      "晴れ・曇り・雨の天気マークで毎月の資産コンディションを可視化",
      "50種類以上の指標・グラフを自由に配置できる分析画面",
      "データは全て端末内にのみ保存",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/asset-forecast/id6753914294",
    appId: "6753914294",
  },
  {
    name: "麻雀クイズ！〜役・翻符・点数〜",
    type: "Mobile App",
    description:
      "役の翻数・役判定・翻符読み取り・点数計算を5段階で反復練習できる、麻雀点数計算トレーニングアプリ。",
    highlights: [
      "あなたのレベルに合わせたクイズで基礎から実戦力までカバー",
      "手牌を見ながら役・翻符・点数を総合的に判断する出題",
      "履歴画面で正答率やスコア推移を振り返り可能",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E9%BA%BB%E9%9B%80%E3%82%AF%E3%82%A4%E3%82%BA-%E5%BD%B9-%E7%BF%BB%E7%AC%A6-%E7%82%B9%E6%95%B0/id6759558674",
    appId: "6759558674",
  },
  {
    name: "ふたり家計",
    type: "Mobile App",
    description:
      "夫婦・カップル向けに毎月の家計精算を自動化。立て替えや共通口座の入金額をシンプルに算出できる家計管理アプリ。",
    highlights: [
      "負担比率を柔軟に設定し、精算額を自動計算",
      "個人払い・共通支出・口座ごとの必要入金額を可視化",
      "月別履歴とグラフ表示で支出傾向を確認",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E3%81%B5%E3%81%9F%E3%82%8A%E5%AE%B6%E8%A8%88/id6760020562",
    appId: "6760020562",
  },
  {
    name: "kashikari-お金の貸し借り記録アプリ",
    type: "Mobile App",
    description:
      "友人や家族との少額の貸し借りをシンプルに記録・管理できる家計補助アプリ。名前・金額・メモ・日付だけで素早く記録し、未精算のやり取りを分かりやすく可視化します。",
    highlights: [
      "貸した・借りた履歴を相手ごとに整理して管理",
      "期日設定や精算（部分返済・全額返済）に対応",
      "データは端末内保存でアカウント登録不要",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/kashikari-loan-iou-tracker/id6762706658",
    appId: "6762706658",
  },
  {
    name: "SeedPocket",
    type: "Web & Mobile",
    description:
      "家庭菜園で育てるハーブや野菜と、その素材を使ったレシピを一つのタイムラインで管理できる“暮らしのノート”。キッチンと畑をまたいで記録できます。",
    highlights: [
      "栽培スケジュールと収穫ログをレシピ候補と連動させて可視化",
      "畑の状況は屋外でアプリから記録、栽培計画は自宅のPCから管理",
      "Webとモバイルアプリを同時リリース",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/seed-pocket/id6756086853",
    appId: "6756086853",
  },
  {
    name: "九九九！ 〜 3桁掛け算九九〜",
    type: "Mobile App",
    description:
      "1桁から3桁まで自由な組み合わせで暗算力を鍛える計算トレーニングアプリ。速度と正確性を両立した反復学習に対応。",
    highlights: [
      "桁数設定を細かくカスタマイズできる出題",
      "10問モードと無限モードで学習スタイルを選択可能",
      "カレンダーと成績グラフで継続状況と弱点を可視化",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E4%B9%9D%E4%B9%9D%E4%B9%9D-3%E6%A1%81%E6%8E%9B%E3%81%91%E7%AE%97%E4%B9%9D%E4%B9%9D/id6759827804",
    appId: "6759827804",
  },
  {
    name: "LuckyGames - Choice & Roulette",
    type: "Mobile App",
    description:
      "日常・ビジネス・パーティーなど様々なシーンで意思決定をすばやく・公平に・楽しくサポートする多機能決断ツールアプリ。ルーレット・あみだくじ・爆弾ゲームなど6種類のミニゲームを搭載。",
    highlights: [
      "ルーレット・あみだくじ・爆弾・チーム分け・コイン・くじ引きの6ミニゲーム",
      "英語・日本語・韓国語・中国語・ベトナム語の多言語対応",
      "履歴機能で過去の結果をいつでも振り返り可能",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/luckygames-choice-roulette/id6760779611",
    appId: "6760779611",
  },
  {
    name: "Word Pocket - Pet",
    type: "Mobile App",
    description:
      "ペットを育てながら語彙力を錢えるゲーミファイかれた単語学習アプリ。科学的な間隔反復法で効率よく単語を定着させます。",
    highlights: [
      "科学的な間隔反復法（SRS）で記憶を最大化",
      "学習の進捗でコンパニオンペットが成長",
      "ゲーム感覦で毎日の学習を継続できる仕組み",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/word-pocket-pet/id6759867409",
    appId: "6759867409",
  },
  {
    name: "Stock Nest - Management",
    type: "Mobile App",
    description:
      "食材・日用品・医薬品・ペット用品まで、家庭の在庫をまとめて管理するスマートな在庫管理アプリ。賞味期限もロット単位で追跡できます。",
    highlights: [
      "ロット単位で賞味期限・消費期限を管理",
      "食料品から日用品・医薬品まで幅広い品目に対応",
      "美しいUIで家の在庫を一元管理",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/stock-nest-management/id6760417366",
    appId: "6760417366",
  },
  {
    name: "ドキドキスイッチ",
    type: "Mobile App",
    description:
      "スイッチを1つずつ押して、爆弾を避けて全クリアを目指せ。シンプルなルールなのに銃薇気MAXなミニゲーム。飲み会やパーティーの罰ゲームにも。",
    highlights: [
      "爆弾の数やスイッチ数を自由にカスタマイズ",
      "ひとりでじっく、みんなでワイワイ遅べるミニゲーム",
      "飲み会・パーティーの罰ゲームに最適",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/%E3%83%89%E3%82%AD%E3%83%89%E3%82%AD%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81/id6744993926",
    appId: "6744993926",
  },
  {
    name: "Pomodoro TaskTic",
    type: "Mobile App",
    description:
      "ポモドーロテクニックに基づいた生産性アプリ。集中25分・休憩5分を繰り返すサイクルで、仕事・学習の集中力を高めます。",
    highlights: [
      "集中・休憩時間をライフスタイルに合わせてカスタマイズ",
      "ポモドーロサイクルで集中力を継続してゴール達成をサポート",
      "仕事・学習効率の改善に特化したシンプルなUI",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/pomodoro-tasktic/id6743796326",
    appId: "6743796326",
  },
  {
    name: "The Lake Collection",
    type: "Mobile App",
    description:
      "日本全国の湖を発見・追跡・探索するための統合アプリ。百名湖・ダム湖・カルデラ湖など多彩なカテゴリを地図と訪問記録で管理できます。",
    highlights: [
      "百名湖・ダム湖・カルデラ湖など複数カテゴリを一元管理",
      "地図表示と訪問チェックで探索進捗を可視化",
      "ドライブ・観光・自然探索の旅行計画に最適",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/the-lake-collection/id6766865900",
    appId: "6766865900",
  },
];

const services = [
  {
    name: "Everyday Finance",
    badge: "Squad",
    description:
      "Asset Forecast など日々の意思決定を軽くする金融文脈の体験を継続改善。行動データとUIを細かく検証しています。",
    benefits: ["マネーフローの可視化", "個別チューニングされたアラート", "ローカル重視のオフライン基盤"],
  },
  {
    name: "Seed Lab",
    badge: "Squad",
    description:
      "SeedPocket を起点に、余白時間の学びや記録体験を検証。マルチデバイスで同じトーンを保つデザイン言語を開発しています。",
    benefits: ["モバイル / Web 同期", "AI 補助ライティング", "リッチメディア最適化"],
  },
  {
    name: "Experience Ops",
    badge: "Core Stack",
    description:
      "全プロダクト共通のデザインシステムや分析パイプラインを整備し、日次で改善サイクルを回すための社内プラットフォームを構築。",
    benefits: ["統合データレイク", "デザインシステムLumen", "自動テレメトリとA/Bテスト"],
  },
];

const stats = [
  { value: "17+", label: "ローンチしたプロダクト" },
  { value: "4.9/5", label: "平均アプリ評価" },
  { value: "1 週間", label: "平均リリースリードタイム" },
  { value: "3 拠点", label: "Tokyo / Chiba / Fukuoka" },
];

const sectors = [
  { name: "Fintech", detail: "資産管理・分析・投資" },
  { name: "Lifestyle", detail: "家庭菜園 / レシピ / 記録" },
  { name: "Travl", detail: "旅行計画 / 地図 / ナビゲーション" },
];

const timeline = [
  {
    phase: "01 / Discovery Sprint",
    title: "課題と仮説を言語化",
    text: "社内リサーチャーとPdMが仮説キャンバスを更新。週次で生活者インタビューを行い、次の実験テーマを確定します。",
  },
  {
    phase: "02 / Pilot Build",
    title: "MVPを実装し検証",
    text: "デザインシステムと共通APIを活用し、モバイル / Web を並行開発。テレメトリを即日で反映し、改善案へ接続します。",
  },
  {
    phase: "03 / Scale & Train",
    title: "グロースと内省",
    text: "プロダクトごとにLTV/KPIを見直し、社内Wikiへ知見を蓄積。採用・R&Dテーマへ展開して次の探索に繋げます。",
  },
];

export default async function Home() {
  const iconUrls = await Promise.all(
    products.map((p) => fetchAppIconUrl(p.appId))
  );

  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-cyan-500/20 via-slate-900/0 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 bg-cyan-400/20 blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-20 pt-12 lg:px-10">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
              AquaPeak / Digital Product Studio
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-white">
            より長く、より多くの人に使われるサービスへ。
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
            <span className="rounded-full border border-white/20 px-4 py-1">
              Everyday Finance
            </span>
            <span className="rounded-full border border-white/20 px-4 py-1">
              Knowledge Tools
            </span>
            <span className="rounded-full border border-white/20 px-4 py-1">
              Multi-Device UX
            </span>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              since 2025 / Tokyo & Fukuoka
            </p>
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                <span className="block">モバイルと Web を</span>
                <span className="block">縦横無尽に駆ける</span>
                <span className="block">プロダクト開発集団。</span>
              </h2>
              <p className="text-lg text-slate-300">
                AquaPeak はモバイルアプリと Web サービスを自社で企画・開発・運営するチームです。
                家庭菜園とレシピをつなぐ SeedPocket、資産の“天気”を可視化する Asset Forecast などで培った
                UX とテクノロジーを核に、生活者の行動をなめらかにするプロダクトを継続的にローンチしています。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full bg-cyan-400 px-8 py-3 text-base font-medium text-slate-900 transition hover:bg-cyan-300"
              >
                プロダクト一覧を見る
              </a>
              <a
                href="#journal"
                className="rounded-full border border-white/30 px-8 py-3 text-base font-medium text-white transition hover:border-cyan-200"
              >
                ビルドログを読む
              </a>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-slate-300">プロダクトフォーカス</p>
            <div className="grid grid-cols-2 gap-4 text-xl font-semibold text-white">
              <span>Personal Finance</span>
              <span>Creative Routines</span>
              <span>Ambient Productivity</span>
              <span>City Remote Life</span>
            </div>
            <p className="text-sm text-slate-400">
              少人数のクロスファンクショナルチームで、生活者の習慣に寄り添う機能を素早く検証しています。
            </p>
          </div>
        </section>

        <section id="products" className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Products
            </p>
            <h3 className="text-3xl font-semibold text-white">
              AquaPeak のプロダクトライン
            </h3>
            <p className="text-base text-slate-300">
              モバイルアプリと Web サービスの両輪で、暮らしの意思決定をアップデートする自社プロダクトを研究・展開しています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => {
              const appIconUrl = iconUrls[i];
              return (
              <article
                key={product.name}
                className="relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-4">
                  {appIconUrl && (
                    <Image
                      src={appIconUrl}
                      alt={`${product.name} icon`}
                      width={56}
                      height={56}
                      className="rounded-xl"
                    />
                  )}
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                    {product.type}
                  </div>
                  {product.href && (
                    <div className="ml-auto flex-shrink-0 rounded-lg bg-white p-1">
                      <Image
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(product.href)}`}
                        alt={`QR code for ${product.name}`}
                        width={50}
                        height={50}
                        unoptimized
                      />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white">{product.name}</h4>
                  <p className="mt-2 text-sm text-slate-300">{product.description}</p>
                </div>
                {product.highlights?.length ? (
                  <ul className="space-y-1 text-sm text-slate-200">
                    {product.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <a
                  href={product.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100 after:absolute after:inset-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  {product.linkLabel}
                  <span>↗</span>
                </a>
              </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 border-white/10 md:border-l md:pl-6 first:md:border-l-0 first:md:pl-0">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm uppercase tracking-wide text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <section id="services" className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Product Stacks
            </p>
            <h3 className="text-3xl font-semibold text-white">
              AquaPeak の 3 つのケイパビリティ
            </h3>
            <p className="text-base text-slate-300">
              戦略・UI/UX・実装・運用を分断せず、同じチームで高速に検証しながら自社プロダクトを磨き込みます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {service.badge}
                </div>
                <h4 className="text-2xl font-semibold text-white">{service.name}</h4>
                <p className="text-sm text-slate-300">{service.description}</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-200">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Focus Fields
            </p>
            <h3 className="text-3xl font-semibold text-white">
              どんな領域の課題に向き合っているか
            </h3>
            <p className="text-base text-slate-300">
              Fintech、ライフスタイルなどのtoC向けプロダクトはもちろん、人材開発領域でのtoB向けプロダクトも展開し検証しています。
            </p>
          </div>
          <div className="grid gap-4">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-200"
              >
                <div>
                  <p className="font-medium text-white">{sector.name}</p>
                  <p className="text-xs text-slate-400">{sector.detail}</p>
                </div>
                <span className="text-cyan-200">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section id="journal" className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Approach
            </p>
            <h3 className="text-3xl font-semibold text-white">
              3 フェーズで成果を素早く積み上げる
            </h3>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {timeline.map((item) => (
              <article
                key={item.phase}
                className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {item.phase}
                </p>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Studio
            </p>
            <h3 className="text-3xl font-semibold text-white">渋谷オフィス</h3>
            <p className="text-base text-slate-300">
              事業拡大に伴い、東京都渋谷区に新たなオフィスを開設いたしました。
              アクセス性の高い渋谷の中心地に拠点を設けることで、迅速なサービス提供を推進してまいります。
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-100">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">Address</p>
              <p className="mt-1 font-medium">
                150-0002<br />
                東京都渋谷区渋谷2-19-15<br />
                宮益坂ビルディング 609
              </p>
            </div>
            <div className="text-xs text-slate-400">
              渋谷駅徒歩3分。来訪の際は事前にご連絡ください。
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="space-y-6 rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 via-transparent to-indigo-500/10 p-8 text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-100">
            Contact
          </p>
          <h3 className="text-3xl font-semibold text-white">
            AquaPeak のプロダクトに関するコラボレーション・取材はこちらから。
          </h3>
          <p className="text-base text-slate-100">
            ユーザーヒアリングへの参加、メディア取材、共創リサーチなどのご相談を受け付けています。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:assetforecast@gmail.com"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              assetforecast@gmail.com
            </a>
            <a
              href="https://calendly.com/"
              className="rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
              target="_blank"
              rel="noreferrer"
            >
              ユーザーヒアリングに参加
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-10 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
          <span>© {new Date().getFullYear()} AquaPeak Inc.</span>
          <div className="flex flex-col items-center gap-2 md:items-end">
            <span>プロダクトで、毎日の体験をアップデートする。</span>
            <a href="/privacy-policy" className="text-cyan-200 transition hover:text-cyan-100">
              プライバシーポリシー
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
