# weak_ptr

weak_ptrとはshared_ptrの弱点である、**循環参照**を防ぐためにできたスマートポインタである。
```cpp
    weak_ptr<int>  ptr;
```

## weak_ptrの特徴

- weak_ptrはshared_ptrが所有権を持つメモリにしか保持できない。
- コピー、ムーブを使用することができる。
- メモリの解放には`resetメソッド`を利用する。

```cpp
std::shared_ptr<int> sptr=std::make_shared<int>(10);
std::weak_ptr<int> wptr(sptr);

//コピーコンストラクタや、コピー代入演算子もOK
std::weak_ptr<int> wptr2(wptr);
std::weak_ptr<int> wptr3;
wptr3=wptr;

//ムーブコンストラクタや、ムーブ代入演算子もOK
//この時、wptr2,wptr3は参照を失う
std::weak_ptr<int> wptr4(std::move(wptr2));
std::weak_ptr<int> wptr5;
wptr5=std::move(wptr3); 
```