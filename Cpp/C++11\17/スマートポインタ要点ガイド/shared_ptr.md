# shared_ptr
<font color = "Aquamarine"> あるメモリへの所有権を複数のポインタが保持できる </font>スマートポインタである。
```cpp
    #include <memory>
    std::unique_ptr<int> ptr;
    int a = 10;
    ptr(new int(a));
```

## shared_ptrの特徴

- あるメモリの所有権を<font color="Aquamarine">複数のポインタで保持</font>できる。
- コピー、ムーブがともに可能
- 内部でカウンタを使用しており <font color = "Aquamarine"> 通常のポインタよりも**メモリ確保、コピー**がやや遅い </font>
- **deleter**を指定することで配列を保持することができる。

***

## shared_ptrに所有権を委ねる

shared_ptrに所有権を委ねるには、

- コンストラクタで指定する
- resetメソッドを使用する。
- make_shared<T>関数を利用する。(c++14)

方法がある。
この中では、<font color = "Aquamarine"> make_sharedメソッドを使用するのが最も速い</font>

```cpp
    shared_ptr<int> ptr(new int(10));

    shared_ptr<int> ptr2;
    ptr2.reset(new int(10));

    shared_ptr<int> ptr3(new int(10));
    ptr3 = make_shared<int>(10);
```

## カウンタとは

shared_ptrにはカウンタという概念がある。
カウンタはshared_ptrが**他のshared_ptrにコピーすることでカウンタが増える。**
また、複数のshared_ptrで保持しているときは、各々デストラクタが呼ばれるたびに所有権を放棄するが、カウンタが０ではないときは、 <font color = "Orange"> メモリの解放自体はされない </font>。

```cpp
    shared_ptr<int>(new int(10)) ptr1;   //カウンタは１
    shared_ptr<int>(new int(10)) ptr2;
    shared_ptr<int>(new int(10)) ptr3;

    ptr2 = ptr1;    //カウンタは２
    ptr3 = ptr1;    //カウンタは３
```

***

## shared_ptrから生のポインタを取得する

生のポインタを取得するには、`getメソッド`がある。    
メモリの所有権はshared_ptrが保持し続ける。

- getメソッドで生のポインタを渡す  

```cpp
//通常のポインタがほしい時には、get関数を使う。
//ポインタの所有権はunique_ptrが保持し続ける
int* pint;
pint = ptr.get();

```

## 配列のポインタ

shared_ptrは配列のポインタを持つとき、<font color = "Aquamarine"> 明示的にdeleterを指定しないといけない。 </font>
また、deleterを明示的に使用するときは**make_sharedは使用できない。。。**

shared_ptrは=operaterを使用することができない。
よって配列を利用するときはgetメソッドを利用する。
```cpp
    shared_ptr<int> p_array(new int[10], std::default_delete<int[]>())

    for(int i = 0; i < 10; i++)
        p_array.get()[i] = i;  
```

## shared_ptrの注意点

shared_ptrは <font color = "Orange"> 循環参照 </font>と呼ばれる**メモリが開放されない状況が生じることがある。**

```cpp
    #include<memory>
class hoge{
public:
   std::shared_ptr<hoge> ptr;
};

int main(){
   std::shared_ptr<hoge> pHoge1=std::make_shared<hoge>();
   std::shared_ptr<hoge> pHoge2=std::make_shared<hoge>();

   //Hoge1のメンバ変数で、pHoge2を参照する
   pHoge1->ptr=pHoge2;
   //Hoge2のメンバ変数で、pHoge1を参照する
   pHpge2->ptr=pHoge1;

   return 0;
}//shared_ptrのディストラクタが呼ばれるのに、確保した二つのhogeが解放されない。
```

pHoge1、pHoge2で保持したメモリをそれぞれA、Bとする。    
Aは`pHoge1`と`pHoge2.ptr`が保持している。Bは`pHoge2`と`pHoge1.ptr`が保持している。  
このとき、ブロックを抜けることでpHoge1のデストラクタが呼ばれるが <font color = "Aquamarine"> pHoge2がまだAを保持しているのでメモリは開放されない。</font>
同様にBも開放されない。     
よって２つのメモリA，Bは開放されずにメモリリークとなってしまう。