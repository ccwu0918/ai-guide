# Kimi 鴻蒙版 App 體驗升級，使用華為倉頡 markdown 解析引擎滑動幀率提升至 2.4 倍

本文轉載自： [Kimi 鴻蒙版 App 體驗升級，使用華為倉頡 markdown 解析引擎滑動幀率提升至 2.4 倍](https://www.ithome.com/0/877/614.htm)

感謝IT之家網友 [有鯽雪狐](https://m.ithome.com/html/app/open.html?url=ithome%3A%2F%2Fuserpage%3Fid%3D2169131) 的線索投遞！

[IT之家](https://www.ithome.com/) 8 月 24 日訊息，據倉頡程式語言官方訊息，Kimi 團隊積極適配華為[鴻蒙](https://hmos.ithome.com/)系統，**已於今年 3 月推出了支援全量功能的鴻蒙版應用**，並透過內建倉頡 Markdown 渲染引擎，提升了長對話的渲染效能，實現流暢無卡頓的渲染效果。

![](https://pic.code-nav.cn/post_picture/1610518142000300034/8DdSYDjkhGkNM9s4.webp "Kimi 鴻蒙版 App 體驗升級，使用華為倉頡 markdown 解析引擎滑動幀率提升至 2.4 倍")

據稱，**Kimi 鴻蒙版 App 整合倉頡前，遇到主執行緒耗時長，應用卡頓的情況**，線上故障率達到千分之二，其中多數為 appfreeze。主要原因是對話渲染時 markdown 解析部分效能較差，耗時較長。而倉頡社群三方庫已具備高效能的 markdown 解析、渲染庫。在倉頡團隊的推動下，Kimi 採用了倉頡方案最佳化應用效能。

倉頡三方庫社群 Cangjie-TPC 提供了：

> * markdown 解析引擎 **commonmark4cj**（https://gitcode.com/ Cangjie-TPC / commonmark4cj），支援將 markdown 文字解析為節點樹。
>
> * 公式解析庫 **formula-ffi**（https://gitcode.com/ Cangjie-TPC / formula-ffi），支援將 LaTeX 公式渲染為圖片。
>
> * 語法高亮庫 **prism4cj**（https://gitcode.com/ Cangjie-TPC / prism4cj），支援解析程式碼塊語法結構，標記高亮色彩。
>
> * markdown 元件庫 **markdown4cj**（https://gitcode.com/ Cangjie-TPC / markdown4cj），支援解析程式碼塊語法結構，標記高亮色彩。

這四個庫分別提供了**純倉頡版本**和**互操作版本**，其中互操作版本將倉頡介面封裝成了 ArkTS 介面，方便使用者在混合工程中直接使用。Kimi 採用的解決方案是：使用互操作版本的 commonmark4cj、formula-ffi、prism4cj 進行文字的解析，在 ArkTS 側自主開發渲染庫，將解析結果渲染成 markdown 元件。

倉頡程式語言官方表示，Kimi 這樣做犧牲了部分易用性，但好處是既可以受惠於倉頡相關解析庫的高效能，又可以在 UI 側定製靈活的需求。

**Kimi 整合倉頡三方庫後，相比整合前的方案，整體滑動幀率得到 2.4 倍以上最佳化**。三個倉頡三方庫為單點功能帶來顯著最佳化，其中 commonmark4cj 帶來 4 倍最佳化，formula-ffi 帶來 34 倍最佳化，prism4cj 帶來 2 倍以上最佳化。具體測試資料如下：

|                                                                     |          |        |
| :-----------------------------------------------------------------: | :------: | :----: |
|                                                                     |  **原版**  | **倉頡** |
|                     **markdown 節點解析耗時**解析 13K 字元                    |   80ms   |  20ms  |
| **數學公式解析耗時**測試會話（https://www.kimi.com/share/d28rvhj1cvfam4v242jg） | 328.40ms | 9.58ms |
|                         **程式碼塊染色**解析 203 行程式碼塊                        |   96ms   |  44ms  |
|                           **滑動幀率**60Hz 重新整理率                          |   25 幀   |  60 幀  |

IT之家從倉頡程式語言官方獲悉，當前倉頡社群已收錄超 140+ 三方庫，常用的包括：

* markdown 解析和渲染庫 **markdown4cj **(https://gitcode.com/Cangjie-TPC/markdown4cj)

* 壓縮庫 **zip4cj **(https://gitcode.com/ Cangjie-TPC / zip4cj) 和 **zlib4cj **(https://gitcode.com/Cangjie-TPC/zlib4cj)

* MQTT 通訊協議庫 **mqtt4cj **(https://gitcode.com/Cangjie-TPC/mqtt4cj)

* 影象載入快取庫 **droplet** (https://gitcode.com/Cangjie-TPC/droplet)

* **動畫庫 svga-cj**  (https://gitcode.com/Cangjie-TPC/svga-cj)

廣告宣告：文內含有的對外跳轉連結（包括不限於超連結、二維碼、口令等形式），用於傳遞更多資訊，節省甄選時間，結果僅供參考，IT之家所有文章均包含本宣告。
