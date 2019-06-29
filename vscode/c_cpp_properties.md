# c_cpp_properties.jsonの使い方

## ・configuraions プロパティ

### 1.概要
InteliSenseに対して、プロジェクトと設定の情報を指定するプロジェクトの配列である。

### 2.それぞれの値の意味

  - name
  この設定のわかりやすい名前を指す。
`"linux”`,`"Win32"`,`"Mac"`いう名前は <font color = "Aquamarine"> 拡張機能にOSのデフォルト値を書き込む指示となる特別な値となる。
 </font>

 - InteliSenseMode
  c_cpp.intelliSenseEngineが`Default`に設定されているときの <font color = "Aquamarine"> Intelisenseのモードを指定する。</font>
  `msvc-x64`,`clang-x64`,`gcc-x64`がある。
  
  
  - IncludePath
 c_cpp.intelliSenseEngineが`Default`に設定されているときの <font color = "Aquamarine"> IntelliSenseが、ソースからインクルードされているヘッダファイルを検索するパスのリストを指定する。</font> 
 
## ・versionプロパティ
　<font color = "Aquamarine">c_cpp_properties.jsonファイルの現在のバージョンを追跡するもの。</font>拡張機能が、どのプロパティや設定が存在するか、またどのように最新のバージョンにアップグレードするかを把握するための値。