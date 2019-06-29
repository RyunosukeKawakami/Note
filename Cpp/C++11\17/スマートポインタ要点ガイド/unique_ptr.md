# unique_ptr
<font color = "Aquamarine"> あるメモリへの所有権を持つポインタが唯一つであることを保証する </font>スマートポインタである。
```cpp
    #include <memory>
    std::unique_ptr<int> ptr;
    int a = 10;
    ptr(new int(a));
```

## unique_ptrの特徴

- あるメモリの所有権を持つユニークポインタは<font color="Aquamarine">ただひとつ</font>である。
- コピーが不可能
- <font color = "Aquamarine"> 通常のポインタに匹敵する速度 </font>
- **deleter**を指定できる

***

## unique_ptrに所有権を委ねる

unique_ptrに所有権を委ねるには、

- コンストラクタで指定する
- resetメソッドを使用する。
- make_unique<T>関数を利用する。(c++14)

方法がある。

```cpp
    unique_ptr<int> ptr(new int(10));

    unique_ptr<int> ptr2;
    ptr2.reset(new int(10));

    unique_ptr<int> ptr3(new int(10));
    ptr3 = make_unique<int>(10);
```

## unique_ptrの所有権を破棄して開放する

所有権を破棄するとき、unique_ptrはdeleterを呼ぶ。deleterが呼ばれるタイミングは

- デストラクタを用いる。
- resetメソッド=operaterでオブジェクトを代入されるとき

である。
  
```cpp
    {
        unique_ptr<int> ptr(new int(10));
    }   //ここでデストラクタが呼ばれ破棄される。

    unique_ptr<int> ptr2(new int(10));
    ptr2.reset();
    ptr2.reset(nullptr);

    unique_ptr<int> ptr(new int(10));
    
```

### deleterとは

deleterは以下のような公文になっている`関数オブジェクト`である。
デフォルトでは、deleteを呼ぶようになっている。
<font color = "Aquamarine"> deleterを明示的に利用するときは、delete以外の処理が必要なときである。 </font>

```cpp
#include<memory>
#include"memory_from_storage.hpp"

//free_int_from_storageを使ってメモリを開放する関数オブジェクトを定義する。
struct deleter_for_storage{
   void operator()(int* ptr_){
      free_int_from_sotrage(ptr_);
   }
};
int main(){
   //テンプレート第二引数で、deleterを指定する
   std::unique_ptr<int, deleter_for_storage> ptr(malloc_int_from_storage());

   //deleteではなく、free_int_from_storageがメモリ解放の際に呼ばれる。
   return 0;
}
```

***

## unique_ptrから生のポインタを取得する

生のポインタを取得するには、`getメソッド`と`releaseメソッド`がある。    
- getメソッドは、生のポインタを渡すのみで**unique_ptrは所有権を保持し続ける。**   
- releaseメソッドは、生のポインタを渡し、**unique_ptrは所有権を放棄する。**

```cpp
//通常のポインタがほしい時には、get関数を使う。
//ポインタの所有権はunique_ptrが保持し続ける
int* pint;
pint = ptr.get();

//所有権自体を放棄する場合は、release関数を使う
/****この場合、メモリの開放自体は自分で行う必要がある****/
pint = ptr.release();
delete pint;
```

## 配列のポインタ

unique_ptrで配列のポインタを保持するには、テンプレートで`[]`を宣言すれば良い、

```cpp
{
   //型名[]をテンプレート引数に指定することで、配列も扱える
   std::unique_ptr<int[]> ptrArray(new int[10]);

   //配列型の場合operator[](size_t)を使うことができる
   for(int i=0;i<10;++i){
      ptrArray[i]=i;
}

}//配列型の場合、自動的にdelete[]が呼ばれて開放される。
```