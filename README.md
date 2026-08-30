# Hosting Launch Checker

Webサイトの**公開前後に人が確認すべき基本項目**を、ブラウザで順番に消化するための静的チェックリストです。対象サイトへ勝手にアクセスして状態を測る診断ツールではありません。

## What it is for

- 公開前の最終確認を抜け漏れなく進める
- DNS / SSL / 表示 / フォーム / SEO / 計測など、確認カテゴリを整理する
- 「自動診断した結果」と誤解させず、実際に人が確認した項目だけを扱う

## Quick start

`index.html` をブラウザで開けば動きます。ビルドや外部ライブラリは不要です。

```bash
python3 -m http.server 8000
```

## Scope boundary

このツールは対象サイトへ `fetch`、XHR、WebSocket等で隠れてアクセスしません。HTTP status、DNS、SSL期限などを自動測定したような表示もしません。

- [現在のscopeと非対応範囲](docs/scope-contract.md)

## Verification

```bash
node --check app.js
node tests/test_scope.js
```

GitHub Actionsでも「静的チェックリストの範囲を超えていないこと」を継続確認します。

## Monetization boundary

チェック機能は広告なしで成立します。広告を出す場合は承認済みリンクだけを明示付きで有効化し、チェック項目や結果表現とは分離します。

現在有効な広告候補:

- ドメイン / サーバー: お名前.com

## Non-goals

- サイトへの自動アクセスや脆弱性診断
- HTTP / DNS / SSL状態の計測保証
- 公開成功、SEO順位、売上の保証
- 未承認広告への誘導

MIT License.
