# C++のforeachについて

## foreach文とは

<strong> foreachとは配列の要素がある分だけ繰り返し処理をおこなうfor文である！！ </strong>

## C++でのforeachの書き方

C++でのforeach文は以下のような書き方になる。
```cpp
    std::vector<int> vec;
    for(Type elem : container){ }
```

***

## Typeが`auto`の場合

Typeの型をautoにすると <font color = "Aquamarine">  elemに対して、vecの然るべきイテレータの実体をコピーする。</font>    
という操作が行われる。

## Typeが`auto&`の場合

<font color="Aquamarine">コピーのコストを気にするような規模のコピーの場合</font>、しばしば`auto&`,`const auto&`型が利用される。

```cpp
    for( const auto& e : vec ){
        e.dosometing();
    }
```

## Typeが`auto&&`の場合

auto&&とは右辺値または左辺値の参照を取る型で　<font color = "Orange"> ユニバーサル参照 </font>という。
<strong>vector\<bool> </strong>型などはイテレータに右辺値を返すので <font color = "Aquamarine"> auto&型は使えない </font>
よってその場合はauto&&型を使うことで右辺値と左辺値を自動で振り分けてもらう。

***
## それぞれの使う場面を見る

- <font color = "Aquamarine"> <strong> テンプレート関数の内部などの型推論が必要な場合 </strong> </font>は確実に`const auto&`または`auto&&`を利用する。
- コンテナの変更を伴う場合は`atuo&&`変更がない場合は`const auto&`
- 実は全くautoは使わない。
