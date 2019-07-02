# HEADタグに記述できるタグ

## <META>タグ

文章に関する情報を指定して <font color = "Aquamarine">ブラウザや検索ロボットに知らせるための情報を記述するタグ</font>
厳密には**クローラ**というプログラムに情報を拾わせるためのタグ
metaタグには以下のいずれかの属性を指定できる。

| 属性 |　概要 |
|---|---|
|name属性|              メタデータの**名前を指定**|
|http-equiv属性|        **プラグマ指示子を指定**|
|content属性|           **メタデータの値を指定**|
|charset属性|           **HTML文書の文字エンコーディングを指定**|

### クローラ

ネットワーク上を巡回して、<font color = "Aquamarine">WEBサイトコンテンツを周期的に取得し自動的にデータベース化するプログラム</font>
そのデータベースをもとに、URLを検索ページに反映させる。
**ボット**・**スパイダー**・**ロボット**ともいう。

### http-equiv属性

<font color = "Aquamarine">指定したmeta要素をプラグマ指定子とする属性</font>
以下の属性値を指定できる。
プラグマ指示子とは <font color = "Aquamarine">ブラウザに対してHTMLドキュメントの仕様を指示する命令</font>である。

| 属性値 | 概要 |
|---|---|
|content-langage| 非推奨。代わりにはLANG属性を用いる。|
|content-type|文字コードの指定のために使用する。html５charsetを使うので使用しない|
|default-style|優先スタイルシートのセット名を指定する|
|refrech|リダイレクト・再読み込みの指定|

### name属性

以下の属性値を指定できる。

| 属性値 | 概要 |
|---|---|
|application-name|  webアプリケーションを利用している場合にアプリケーション名を記述するために指定する。|
|author|文章の著者名の名前を記述するために指定する。|
|description|文章の概要を記述するために指定する。|
|generator|文章がソフトウェアによって作成されている場合に、ソフトウェア名を記述する。|
|keywords|文章の内容を表すキーワードを指定する。|
|copyright|コピーライトマーク、著作権者、発行年ー更新年を記述|

description属性値はとくに <font color = "Aquamarine">検索エンジンの検索結果にも表示される</font>

### 例

```html
<meta name="author" content="川上">
<meta name=”copyright” content="会社">

<!--五秒後にaaa.htmlに移動-->
<meta http-equiv="refresh" content="5; url=aaa.html">
<!--五秒後に更新-->
<meta http-equiv="refresh" content="5">
```