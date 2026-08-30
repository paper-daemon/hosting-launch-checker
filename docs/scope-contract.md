# Scope contract

Hosting Launch Checker は、入力したURLへブラウザからアクセスしてHTTP状態を診断するツールではありません。

現在の役割は、公開前後に確認する項目をURLと一緒に整理するローカルなチェックリストです。

## ブラウザ内で行うこと

- 入力URLを見出しとして表示する
- HTTPS / redirect / robots.txt / sitemap.xml / headers / 404 の確認観点を並べる
- 承認済みの広告候補がある場合だけ別枠で表示する

## 行わないこと

- 対象サイトへの `fetch` / XHR
- HTTP status、redirect、headers の自動判定
- robots.txt / sitemap.xml の存在確認
- 404レスポンスの自動検証

そのため、UIでは「診断結果」ではなく「確認リスト」と表現します。外部状態を確認していないのにPASS/FAILを表示しないことが境界です。

## 回帰確認

```bash
node tests/test_scope.js
```

テストは、現行 `app.js` がネットワーク診断を行わないことと、公開コピーがそのscopeを明示していることを確認します。
