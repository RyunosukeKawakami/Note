# constメンバ関数

## 概要

constメンバ関数とは、 <font color = "Aquamarine"> メンバ関数内でメンバ変数を明示的に変更させないように指示すること </font>である。

## 例

```cpp
class A{
public:
    void Hoge();
};

void A::Hoge() const    //この関数内ではメンバ変数を書き換えられない
{

}
```

またconstメンバ関数内では <font color = "Aquamarine"> **非constメンバ関数を呼び出すことができない。** </font>

## constメンバ関数の使いみち

- 可読性が上がる。
- バグの発生原因を減らせる
- getterなどの情報を取得するための関数

## mutableキーワード

**mutableキーワードで指定されたメンバ変数はconstメンバ関数内でも値を変更できる**
使いみちとして**キャッシュ**などがある。
