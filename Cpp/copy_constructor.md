# コピーコンストラクタについて

## 1. 概要

　コピーコンストラクタとは、<font color="Aquamarine">仮引数で宣言されたオブジェクトが呼び出すコンストラクタのこと。</font>
  引数の型は<strong>「const class-type&」</strong>

コピーコンストラクタは宣言しない場合、自動的に呼び出される。このときオブジェクトのポインタ変数はアドレス渡しとなり、<font color="Aquamarine">仮引数のオブジェクトのポインタは同じアドレスを持つ。</font>（<strong>ヤバイ</strong>）

``` cpp
class Temp{
private:
public:
    /* デフォルトコンストラクタ*/
    Temp();

    /*コピーコンストラクタ*/
    Temp(const Temp& other);
};
```

## 2. 良くない例

``` cpp
#include <iostream>
using namespace std;

class copy_constructor{
public:
    int* m_array;
    int m_size;
public:
    copy_constructor(int size){
        m_array = new int[size];
        m_size = size;
        cout << "コンストラクタが呼ばれましたm_zize = " << m_size << "です。\n";
    }

    ~copy_constructor(){
        delete[] m_array;
        cout << "デストラクタが呼ばれましたm_zize = " << m_size << "でした。\n";
    }
};

void Show(copy_constructor temp){
    for (size_t i = 0; i < 10; i++){
        cout << temp.m_array[i] << "\n";
    }
    
};

int main(int argc, char const *argv[])
{
    copy_constructor original(10);

    for (size_t i = 0; i < 10; i++){
        temp.m_array[i] = i;
    }
    /*ここでコピーコンストラクタが呼ばれる*/
    Show(original);
    
    return 0;
}
```

この例ではoriginalオブジェクトをShow関数で値渡しをしている。<font color = "Aquamarine"> このとき暗黙的なコピーコンストラクタでoriginal.m_arrrayとtemp.m_arrayは同じアドレスを保持している。</font>

Show関数のブロックをでたときtempオブジェクトは破棄され、temp.m_arrayも破棄される。

よってmain関数に戻ってきたときoriginal.m_arrayも破棄されてしまっていて、<font color= "Orange">original.m_arrayを利用しようとする、または破棄するときにsyntax_errorまたは未定義動作を引き起こしてしまう。</font>

## 3. 解決策
解決策として値渡しで呼ばれるコピーコンストラクタで仮引数のオブジェクトの持つポインタの領域を確保して上げると良い。
``` cpp
#include <iostream>
using namespace std;

class copy_constructor{
public:
    int* m_array;
    int m_size;
public:
    copy_constructor(int size){
        m_array = new int[size];
        m_size = size;
        cout << "コンストラクタが呼ばれましたm_zize = " << m_size << "です。\n";
    }

    /*コピーコンストラクタ*/
    copy_constructor(const copy_constructor& other){
        m_array = new int[other.m_size];
        m_size = other.m_size;
    }

    ~copy_constructor(){
        delete[] m_array;
        cout << "デストラクタが呼ばれましたm_zize = " << m_size << "でした。\n";
    }
};

void Show(copy_constructor temp){
    for (size_t i = 0; i < 10; i++){
        cout << temp.m_array[i] << "\n";
    }
    
};

int main(int argc, char const *argv[])
{
    copy_constructor temp(10);

    for (size_t i = 0; i < 10; i++){
        temp.m_array[i] = i;
    }

    Show(temp);
    
    return 0;
}
```