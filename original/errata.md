<!-- markdownlint-disable MD010 MD029 MD032 -->

# 『りあクト！ TypeScript で始めるつらくない React 開発 &nbsp;第 4 版』第 1 刷の正誤表・更新情報

最終更新日： 2022 年 11 月 1 日

### ご注意点

- 正誤表の内容は随時アップデートされます。
- 記述しているページ番号は、紙の第 3 刷に対応していますが、電子版では内容の更新によりお持ちのバージョンによって前後することがあります。
- 電子版については随時、修正やアップデートが反映された新しいバージョンが配信されます。購入先のサイトをご確認ください。なお現時点での最新版は以下の通りです。
  - 【① 言語・環境編】バージョン 2.0.0（2022-11-01）
  - 【② React 基礎編】バージョン 2.0.0（2022-11-01）
  - 【③ React 応用編】バージョン 2.0.0（2022-11-01）

### 電子版のバージョニングについて

- **整数の位** …… 紙の本の「刷」番号に対応しています。「電子版バージョン 2.0.0」であれば、紙の本の「第 2 刷」の内容と完全に一致します
- **小数点第 1 位** …… メジャーバージョン番号。各技術のアップデートや情勢の変化に合わせて内容が更新されたときに変更されます
- **小数点第 2 位** …… マイナーバージョン番号。誤植の修正があったときに変更されます

<br />

## 【① 言語・環境編】

- まえがき / p.6

```diff
  挙動をその場で確認していただくため StackBlitz
- [^stk-blz]
  に置いているサンプルもありますが、
```

- 前版との差分および正誤表 / p.7

```diff
  ・『りあクト！TypeScriptで始めるつらくないReact開発 第4版』正誤表
- 　https://github.com/klemiwary/Riakuto-StartingReact-ja4.0/blob/main/errat.md
+ 　https://github.com/klemiwary/Riakuto-StartingReact-ja4.0/blob/main/errata.md
```

- 1-1-2 / p.23

```diff
  ・asdf uninstall <PLUGIN_NAME> <VERSION> …… プラグインパッケージの任意のバージョンを
- インストール
+ アンインストール
```

- 1-1-2 / p.22 / 注釈 24

```diff
  「Windows
- SWubsystem
+ Subsystem
  for Linux」の略。Microsoftが提供する、Linuxのバイナリ実行ファイルをWindows上でネイティブ実行するための互換レイヤー。
```

- 1-1-2 / p.24

```diff
- $ asdf plugin install nodejs
+ $ asdf plugin add nodejs
  $ asdf install nodejs latest
  $ asdf global nodejs latest
```

- 2-1-1 / p.45

```diff
- 使われてる数だけじゃ納得できかもしれないだろうから、
+ 使われてる数だけじゃ納得できないかもしれないだろうから、
は開発者による好き嫌いの調査を見てみよう。
```

- 2-3-1 / p.54

```diff
  ・Number型（数値型）
  　…… 数値を扱うためのデータ型。他の多くの言語と異なり、整数も小数も同じ Number 型になる。扱うことができる最大値は
- 253-1
+ 2^53-1
  （9,007,199,254,740,991≒9千兆）。
```

- 2-4-3 / p.69 / リスト 16

```diff
- showNames('John', 'Jane', 'Johnny', 'Jenny', 'Julia');
- showNames('Moon', 'Mercury', 'Mars', 'Jupiter', 'Venus');
  // Moon
  // Mercury
  // [ 'Mars', 'Jupiter', 'Venus' ]
```

- 2-7-1 / p.87

```diff
  左項が falsy だと
- 項辺が
+ 右項が
  評価・実行されないから 2. Hello! が表示されることはない」
```

- 2-9-2 / p.109

```diff
  NodeでES Modulesを使うにはいくつか方法があるけど、今回は package.json に次の設定を入れる方法を採用する。
- その場合、package.jsonに次のようなオプションの記述が必要になる
  」
```

- 3-2-1 / p.122

```diff
  「ところで JavaScript では Array オブジェクトの sort() は
- 破壊的メソッドなで、
+ 破壊的メソッドなので、
```

- 3-2-1 / p.125

```diff
  「そう、range もなければ times もない。そういう便利なメソッドが
- メソッドが
  そろってるところは Ruby がうらやましいね」
```

- 3-4-3 / p.145

```diff
  「不格好だけど、いったん
- 補足
+ 捕捉
  したものを instanceof 演算子で判定して場合分けするしか今のところなさそうだね」
```

- 4-3-2 / p.169

```diff
  また『アクセス修飾子
- （Acdess Modifier）』
+ （Access Modifier）』
  というのもあって、これも宣言時につけることでそのメンバーのアクセシビリティをコントロールできる。
```

- 4-2-5 / p.162

```diff
 「あっ、VS Code が変数 `check` のところで『
- 型 'sting'
+ 型 'string'
  を型 'never' に割り当てることはできません』ってエラーを出しました」
```

- 4-8-1 / p.221

```diff
- 「へー。"strict": true" 一発で、
+ 「へー。"strict": true 一発で、
```

- 4-8-1 / p.221 / 脚注 242

```diff
  ファイルの先頭行に
- 'use strict();
+ 'use strict';
  という文を記述することで有効になる。
```

<br />

## 【② React 基礎編】

- 6-2-2 / p.56

```diff
  これを実行すると react-scripts 自身が
- アンイストールされ、
+ アンインストールされ、
  隠蔽していたものがすべて露出される。
```

- 8-3-3 / p.148

```diff
  「Svelte の読みは
- 『スヴェルテ』
+ 『スヴェルト』
  ね。
```

- 9-3 / p.171 / 脚注 274

```diff
- https://github.com/klemiwary/Riakuto-StartingReact-ja4.0/tree/main/09-basics/02-props
+ https://github.com/klemiwary/Riakuto-StartingReact-ja4.0/tree/main/09-basics/03-state
```

<br />

## 【③ React 応用編】

- 10-3-1 / p.50

```diff
  それまでとりあえず何かが表示されてるのとでは、後者のほうがマシでしょ
+  。また
  この種の UI は処理中だということを待ってるユーザーへ伝えられるのに加えて、
```

- 10-3-4 / p.57

```diff
  そこで React 18 では
+ あ
  らかじめ任意の state 更新における緊急性をマークしておくことで、
```

- 12-2-1 / p.92 / 脚注  
  （※以下、誤植ではなく React Router 公式ドキュメントの改修でのリンク切れによるもの）

```diff
- 80 https://reactrouter.com/docs/en/v6
+ 80 https://reactrouter.com/en/main
```

- 12-2-2 / p.94 / 脚注

```diff
- 81 「React Router | BrowserRouter」https://reactrouter.com/docs/en/v6/routers/browser-router
+ 81 「BrowserRouter | React Router」https://reactrouter.com/en/main/router-components/browser-router
- 82 「React Router | HashRouter」https://reactrouter.com/docs/en/v6/routers/hash-router)
+ 82 「HashRouter | React Router」https://reactrouter.com/en/main/router-components/hash-router)
- 83 「React Router | MemoryRouter」https://reactrouter.com/docs/en/v6/routers/memory-router)
+ 83 「MemoryRouter | React Router」https://reactrouter.com/en/main/router-components/memory-router)
- 84 「React Router | NativeRouter」https://reactrouter.com/docs/en/v6/routers/native-router
+ 84 「NativeRouter | React Router」https://reactrouter.com/en/main/router-components/native-router
- 85 「React Router | StaticRouter」https://reactrouter.com/docs/en/v6/routers/static-router)
+ 85 「StaticRouter | React Router」https://reactrouter.com/en/main/router-components/static-router)
```

- 12-2-2 / p.95 / 脚注

```diff
- 86 「React Router | Routes」https://reactrouter.com/docs/en/v6/components/routes
+ 86 「Routes | React Router」https://reactrouter.com/en/main/components/routes
```

- 12-2-2 / p.96 / 脚注

```diff
- 87 「React Router | Navigate」https://reactrouter.com/docs/en/v6/components/navigate
+ 87 「Navigate | React Router」https://reactrouter.com/en/main/components/navigate
```

- 12-2-2 / p.98 / 脚注

```diff
- 90 「React Router | NavLink」https://reactrouter.com/docs/en/v6/components/nav-link
+ 90 「NavLink | React Router」https://reactrouter.com/en/main/components/nav-link
```

- 14-2-2 / p.165

```diff
  通常の Reduxで は dispatcher にはプレーンオブジェクトの action しか
- が
  渡すことができないけど、
```

- 14-4-1 / p.180

```diff
  Redux の代替になりそうな状態管理ライブラリがいくつもリリースされて、それなりに使われ
- れ
  るようになってるという状況はわかりました。
```

- 14-4-2 / p.182

```diff
  Does anyone actually *like* React these days? 😛
  （訳：今の
- Redux
+ React
  が好きな人なんか本当にいるの？）
```

- 14-4-3 / p.186 / 図 38

```diff
  Redux と他の状態管理ライブラリの DL 数比較
- （2021 年 9 月現在）
+ （2022 年 9 月現在）
  ね。
```

- 15-1-1 / p.189 / 脚注

```diff
  182 「React v18.0 – React Blog」
+ https://ja.reactjs.org/blog/2022/03/29/react-v18.html
```

- 15-1-1 / p.212 / 脚注

```diff
- 216 https://github.com/klemiwary/Riakuto-StartingReact-ja4.0/tree/main/13-suspense/04-ux
+ 216 https://github.com/klemiwary/Riakuto-StartingReact-ja4.0/tree/main/15-concurrent/04-app/concurrent-ui
```

- エピローグ / p.226

```diff
  その後の React でのコンポーネントの作り方や Hooks によるロジックの書き方とか
- か
  がすんなり理解できました」
```
