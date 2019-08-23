# cmakeの基本

## 概要

cmakeはc++で記述されたプログラムをビルドするツール。
cmakeのコマンドを <font color = "Aquamarine">CmakeLists.txt</font>に記述することで、makeの仕様を記述することができる。

## 基本コマンド

- Project()
  プロジェクト名を指定する。引数に代入した名前は、
  `PROJECT_NAME`変数に代入される。

- cmake_minimum_required
最低限のcmakeのバージョンを指定する。

- find_package
ライブラリを調べて変数に代入する。
操作したライブラリに対して、代入される変数名は以下のようになる。

    XXXにはライブラリ名が入る。
    - XXX_FOUND
    - XXX_INCLUDES
    - XXX_LIBRARIES
    - XXX_DEFINITIONS
  
　またこのコマンドでどのような変数がセットされるかは      
　<font color = "Aquamarine">cmake --help-module FindXXX</font>
で調べることができる。

- add_executable
実行ファイル名とソースファイル、実行形式を指定する。

``` cmake
#testという実行ファイル名をWIN32形式でコンパイルし、${Souce＿name}に含まれているファイルをまとめる。
add_exectable(test WIN32 ${Souce_name}) 
```

- c++のバージョンを指定するには、setを利用して
<font color = "Orange">set(CMAKE_CXX_STANDARD 14)</font>
と書くことでc++14を指定することができる。
