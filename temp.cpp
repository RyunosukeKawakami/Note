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
        cout << "コピーコンストラクタが呼ばれましたm_zize = " << m_size << "です。\n";
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

    for (int i = 0; i < 10; i++){
        temp.m_array[i] = i;
    }

    Show(temp);
    
    return 0;
}