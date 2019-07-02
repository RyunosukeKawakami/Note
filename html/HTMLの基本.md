# html

## 概要

htmlは <font color = "Aquamarine">HyperText markup Laguage</font>の略でハイパーテキストを記述するためのマークアップ言語の一つ。

htmlはタグを使って記述をする言語である。タグは`<HOGE></HOGE>`の形になっており、括られたものを <font color = "Orange">**要素**</font>という。

HTMLはその存在意義は、<font color = "Aquamarine">本来、文章構造を示すだけにその存在意義がある。</font>よって、見た目などの視覚的・感覚的効果は、スタイルシートなどを用いる。

# 簡単な文法

## DOCUTYPE宣言
HTMLは最初にDOCTYPE宣言をする。DOCTYPE宣言は <font color = "Aquamarine">文章がどのバージョンで作成されているかを宣言する</font>     

```html
<!DOCUTYPE html>
```

DOCUTYPE宣言がされていないとき、ブラウザのレンダリングモードは`互換モード`となり、されているときは`標準モード`になる。

## HTML,HEAD,BODYタグざっくりとした説明

- HTMLタグ：HTML文章であることを宣言するタグ。      
DOCUTYPE宣言を除くすべての要素はこのタグの中に記述する。<font color = "Aquamarine">子要素として直接配置できるのは **<HEAD>と<BODY>**の順の一つと、**<HEAD>と<FRAMESET>**の順のいずれかのみである。</font>
- HEADタグ：<font color = "Aquamarine">文章のタイトルなどのヘッダ情報を記述する。</font>
- BODYタグ：<font color = "Aquamarine">実際にブラウザに表示される文章の本体を記述するタグ</font>


## HEADタグ

HEADタグは厳密には、<font color = "Aquamarine">HTML文章に関するメタデータを集めたもの</font>を記述するタグ。
メタデータでは文章に関する情報を記述を行い

- <title>
- <base> 
- <link>
- <style>
- <meta>
 
のタグを表す。
