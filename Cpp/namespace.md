# 名前空間

## 概要

名前空間とは、 <font color = "Aquamarine"> 名前による衝突や、空間に属させることで分類をしやすくさせる機能 </font>である。

名前空間を利用するには`namespace`キーワードを利用する。

```cpp
namespace Hoge{
    class A{};
    int a;
    void Func(){return};
}
```

ここでHogeの部分は <font color = "Orange"> 名前空間名 </font>といい、名前空間に属するものを <font color = "Orange"> 識別子 </font>と呼ぶ。


名前空間は入れ子構造にすることができる。
```cpp
namespace Hoge1{
    namespace Hoge2{
        int a;
    }
}
```

このときint aを呼び出すには以下のように書く

```cpp
Hoge1::Hoge2::a;
```

***

# using

`using`キーワードを使用することで <font color = "Aquamarine"> 名前空間を省略することができる。</font>

```cpp
namespace Name1{
    void Func1(){};
    void Func2(){};
}

Name::Func1();

using namespace Name1;
Func1();    //省略した
```

`using namespace Name1;`と書くことでv名前空間名を省略することを <font color = "Orange"> using指令 </font>という。

## usingの注意点

using指令をしてName1とName2を省略したとする。このときもし、Name１の識別子と同じ名前の関数をName2で宣言したとき**名前が衝突してしまうため、名前をすべて書き換える必要が出てくる。**

これを避けるために、 <font color = "Aquamarine"> 衝突が起こらなさそうな識別子のみusingを使うことができる </font>これを、 <font color = "Orange"> using宣言 </font>といい、以下のように使用する。

```cpp
using std::cout;    //using宣言

cout << 10;         //using宣言によって省略した。
std::cin >> a;      //通常通り、名前空間名をスコープ解決演算子の前につける。
```

## ヘッダファイルとusing

第一に　<font color = "Orange">ヘッダファイルには**using**を使用しては行けない。</font>
これはヘッダファイルは、様々なファイルからインクルードされるという性質上、usingを使用すると、**namespaceの意味がなくなり様々な場所で衝突が起こる可能性がある**ためである、