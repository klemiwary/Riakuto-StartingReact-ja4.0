<!-- markdownlint-disable MD010 MD029 MD032 -->

# 『りあクト！ TypeScript で始めるつらくない React 開発 &nbsp;第 4 版』の正誤表・更新情報

最終更新日： 2022 年 9 月 22 日

### ご注意点

- 正誤表の内容は随時アップデートされます。
- 記述しているページ番号は、紙の第 3 刷に対応していますが、電子版では内容の更新によりお持ちのバージョンによって前後することがあります。
- 電子版については随時、修正やアップデートが反映された新しいバージョンが配信されます。購入先のサイトをご確認ください。なお現時点での最新版は以下の通りです。
  - 【① 言語・環境編】バージョン 1.0.2（2022-09-22）
  - 【② React 基礎編】バージョン 1.0.1（2022-09-10）
  - 【③ React 応用編】バージョン 1.0.1（2022-09-10）

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

- 2-9-2 / p.109

```diff
  NodeでES Modulesを使うにはいくつか方法があるけど、今回は package.json に次の設定を入れる方法を採用する。
- その場合、package.jsonに次のようなオプションの記述が必要になる
  」
```

- 3-2-1 / p.125

```diff
  「そう、range もなければ times もない。そういう便利なメソッドが
- メソッドが
  そろってるところは Ruby がうらやましいね」
```

- 4-8-1 / p.221

```diff
- 「へー。"strict": true" 一発で、
+ 「へー。"strict": true 一発で、
```

<br />

## 【② React 基礎編】

- 8-3-3 / p.148

```diff
  「Svelte の読みは
- 『スヴェルテ』
+ 『スヴェルト』
  ね。
```

<br />

## 【③ React 応用編】

- 14-4-2 / p.182

```diff
  Does anyone actually *like* React these days? 😛
  （訳：今の
- Redux
+ React
  が好きな人なんか本当にいるの？）
```

- 14-4-3 / p.185 / 図 38

```diff
  Redux と他の状態管理ライブラリの DL 数比較
- （2021 年 9 月現在）
+ （2022 年 9 月現在）
  ね。
```
