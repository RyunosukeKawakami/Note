# constの位置とポインタについて

## 値の書き換えを禁止

```cpp
    const int a = 0;
    int const a2 = 0;
    a = 0;  //コンパイルエラーとなる
```

***

## ポインタの指す値の書き換えを禁止

```cpp
    int b = 5;
    const int* p_b = &b;
    int const* p_b2 = &b;

    p_b = &b;   //コンパイル可能
    *p_b = 10;  //コンパイルエラー
```

***

## ポインタの書き換えを禁止

```cpp
    int c = 0;
    int* const p_c = NULL;

    p_c = &c    //コンパイルエラー
    *p_c = 10;  //コンパイル可能
```

***

## ポインタ、ポインタの指す値の書き換えを禁止

```cpp
    int d = 0;
    const int* const p_d = NULL;

    p_d = &d;   //コンパイルエラー
    p_d = d;    //コンパイルエラー
```
