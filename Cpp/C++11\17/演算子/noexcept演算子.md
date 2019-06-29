# noexcept演算子

## 概要

noexcept演算子は ２つの意味がある。
1. <font color = "Aquamarine"> 例外を送出する可能性がある、またはないことを指定する演算子 </font>で`関数`に指定することができる。
2. 演算子に式を指定することで <font color = "Aquamarine"> 指定された式が例外を送出するか判定する </font>

## １の例

```cpp
class Hoge{
public:
    void Func(){} noexcept(true)          //例外を送出する可能性が    ない
    void Func(){} noexcept                //例外を送出する可能性が    ない
    void Func(){} noexcept(false)         //例外を送出する可能性が    ある
}
```

## 2の例

```cpp
    noexcept(f() + 1.43);
```

- 可能性があるなら　`false`
- 可能性がないなら　`true`    
となる。

