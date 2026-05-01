## Cursor 迎來了強大的對手，Augment Code 實測

## Augment Code 介紹

根據官方介紹，Augment Agent 是首個轉為大型程式碼庫工作的專業軟體工程師設計的 AI 編碼助手，上下文支援 200K，也就是 20 萬的 token 啊。

這對於專業的程式設計人員來講，太實用了，已經達到可以做專案級別了。

除此之外，Augment Agent 還支援永續性的記憶體，就是它可以學習你的編碼風格，記得你之前的重構，適配你的程式碼規範。記憶會隨著時間的推移而積累。你不必在每次會話中重新教它。

除了基本的編碼支援，Augment Agent 還支援多模態輸入，如截圖和 Figma 檔案，用於修復錯誤和實現 UI。

另外，目前 Augment Agent 透過結合 [Anthropic](https://zhida.zhihu.com/search?content_id=256145915&content_type=Article&match_order=1&q=Anthropic&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NDQ1NDcyMjEsInEiOiJBbnRocm9waWMiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNTYxNDU5MTUsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.s-Qlz5_gQXKB-83ew6fdNuoqCgOSZ69vCoaXwefWdcQ&zhida_source=entity) 的 [Claude Sonnet 3.7](https://zhida.zhihu.com/search?content_id=256145915&content_type=Article&match_order=1&q=Claude+Sonnet+3.7&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NDQ1NDcyMjEsInEiOiJDbGF1ZGUgU29ubmV0IDMuNyIsInpoaWRhX3NvdXJjZSI6ImVudGl0eSIsImNvbnRlbnRfaWQiOjI1NjE0NTkxNSwiY29udGVudF90eXBlIjoiQXJ0aWNsZSIsIm1hdGNoX29yZGVyIjoxLCJ6ZF90b2tlbiI6bnVsbH0.Ks9wyI53nxEYvxg3d-2qBm9e_IipirNvX86aSq5yKeM&zhida_source=entity) 和 [OpenAI](https://zhida.zhihu.com/search?content_id=256145915&content_type=Article&match_order=1&q=OpenAI&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NDQ1NDcyMjEsInEiOiJPcGVuQUkiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNTYxNDU5MTUsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.dos4DrsF8bBrrMJP56gBcEBaRRvD_smBaFOX4vPO-s8&zhida_source=entity) 的 [O1 推理模型](https://zhida.zhihu.com/search?content_id=256145915&content_type=Article&match_order=1&q=O1+%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NDQ1NDcyMjEsInEiOiJPMSDmjqjnkIbmqKHlnosiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNTYxNDU5MTUsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.JukcV5qUlsKbGMIXftuvbN_W1ZFODYvuca55rKQbIew&zhida_source=entity)，在 SWE-bench verified 基準測試中取得了最高分，達到第 1 名（在真實任務上達到 65.4%）。

![](https://pic4.zhimg.com/v2-853df9931204536656d9bcc20e9b6b41_1440w.jpg)

### **簡介**

Augment 是一款開發者 AI 平臺，它能幫助你理解程式碼、除錯問題並快速交付，因為它理解你的程式碼庫。使用聊天、下一編輯和程式碼補全功能，讓你更高效地完成任務。

![](https://pic3.zhimg.com/v2-81ff73655aec503a4c5d199c65d23ab6_1440w.jpg)

核心宣傳點：

1.  1\. Chat（聊天）：永遠不再為開始而卡殼。聊天將幫助你快速熟悉不熟悉的程式碼。
2.  2\. 下一代編輯器：透過逐步引導您完成複雜或重複性的更改，幫助您持續推進任務。
3.  3\. 程式碼補全：智慧程式碼建議，即可瞭解您的程式碼庫。

這裡我推薦一個非常好用的手指筷子，在平時玩手機、電腦工作、刷劇的時候想吃零食又不想髒手，非常實用和實惠，我買了兩雙，愛不釋手。現在賣的很便宜

## Augment Code 試用

### 安裝

目前提供了 `vscode` 擴充套件、`[JetBrains IDEs](https://plugins.jetbrains.com/plugin/24072-augment)` 外掛、`VIM` 這三種使用方式，下面透過安裝 `vscode` 擴充套件來使用。

![](https://pic3.zhimg.com/v2-07c20988b2528ebc2afaf0ae4e252586_1440w.jpg)

安裝成功之後，需要進行登陸，登陸成功之後就可以使用了；目前測試下來 `remote` 模式的 `vscode` 登陸不上，本地的可以。

### 使用

剛好有一份 `vllm` 專案的程式碼，而且也不太懂，測試一下看能不能把我講明白。

1.  1\. 先匯入一個專案；匯入之後它就會進行索引整個專案

![](https://pic4.zhimg.com/v2-e32ef7b78fe5e1806f8eb21a169b6877_1440w.jpg)

`vllm` 最核心的就是 `PagedAttention` 的原理，但是從之前看過一些介紹來看，只是明白了，但還不知道是如何實現的。

`PagedAttention` 的核心就是把 `Attention` 的載入從一個連續的視訊記憶體空間拆分成了按視訊記憶體頁進行載入，使 `GPU` 的視訊記憶體利用率增高。

### 問出了第一個問題：介紹`PagedAttention`

![](https://pic1.zhimg.com/v2-61eae47f81f8ff0f103bbab2460587ee_1440w.jpg)

1.  1\. 核心架構，這個我去看了程式碼確實是對的，在 `vllm/attention/backends` 目錄下的 `abstract.py` 檔案中有這個抽象類的定義。還提到了它有多個實現類，這個有點問題，真實的實現類比這個多，比如缺少 `CPUMLABackend` 等等，還有好幾個。

![](https://picx.zhimg.com/v2-4a590484b0469126da5eadcc1a669f83_1440w.jpg)

1.  1\. 講了主要實現類以及檔案位置 `PagedAttention` 都是對的。

![](https://pic1.zhimg.com/v2-01b8530c85a4c9a7f6d2c51aba8198c0_1440w.jpg)

1.  1\. 突然講到了 `KV Cache` 管理，有點奇怪。

![](https://picx.zhimg.com/v2-8b011e657689ee491bfbba7f559127fd_1440w.jpg)

1.  1\. `Attention` 的計算實現 `forward_decode` 。提到有兩種模式 `Decode` 和 `Prefix` ，對應的就是 `forward_decode` 和 `forward_prefix` 這兩個函式。

![](https://pic3.zhimg.com/v2-171799c5d28eac69ee4fe2a0cde2875a_1440w.jpg)

1.  1\. 後面又補充了說支援很多硬體，算是給第一點進行補充，

![](https://pic1.zhimg.com/v2-1a0b724040dbfde5dd24c931656d1e74_1440w.jpg)

這個問題問下來算是對這塊的程式碼基本有一個瞭解了；比直接看確實強很多

### 第二個問題：讓它幫我新增一個新模型

```text
幫我新增 Salesforce/SFR-Embedding-Code-2B_R 這個新的模型在 vllm 中執行；目前 vllm 的程式碼還不能執行它。你需要去 huggingface 上檢視模型 https://huggingface.co/Salesforce/SFR-Embedding-Code-2B_R/blob/main/config.json 檔案，獲取它的 architectures 資訊，之後才能新增模型註冊；其它還需要參考 https://huggingface.co/Salesforce/SFR-Embedding-Code-2B_R/blob/main/modeling_gemma2.py 中的實現使其在 vllm 中能執行。
```

首先還是使用 `chat` 模式，進行了多次 輸入的調整，但是依然回覆的牛頭不對馬嘴；於是選用 `Agent` 模式進行測試一下。

還是使用上面的提示此。

1.  1\. 第一點另我意外的是它居然真的去下載檔案回來進行檢視了。因為它需要知道這個模型架構的型別，就需要讀取 `config.json` 檔案，在 `chat` 模式下都是給我亂說的。

![](https://pic1.zhimg.com/v2-d4e5a7b16ed3e52c7737d0788709a8ae_1440w.jpg)

1.  1\. 然後它列出了執行計劃，涉及到四個步驟；第一步這個模型架構就描述對了。

![](https://pic1.zhimg.com/v2-2894c4649381edfa199861a5e613eb56_1440w.jpg)

1.  2\. 它給我實現出來了，我直接進行測試一下，而且它還貼心的給了測試檔案。

![](https://pic1.zhimg.com/v2-f6f1d2e5dae15a48a046f1d613ae1f1e_1440w.jpg)

嘗試執行之後發現還不能跑，有 bug，也可能和它訓練時候的 `vllm` 版本程式碼有關，匯入的很多包路徑都有問題。

### 第三個問題：做一個微信小程式

```text
幫我設計和實現一個微信小程式的專案，同時幫我實現後端 golang web 服務和資料庫 mysql 表，專案主要功能是家庭圖書管理系統，記錄家庭購買的書籍以及存放位置資訊等；主要有三頁面，第一個頁面是首頁，主要展示家庭圖書資訊，可以支援搜尋圖書，需要透過呼叫後端 API 把功能實現。第二個頁面是一個圖書錄入頁面，透過掃描圖書的 ISBN，然後透過後端的 ISBN 查詢介面去查詢圖書的基本資訊，包括作者、出版時間、價格等等；第三個頁面是我的頁面，主要是可以邀請家庭成員進入這個圖書館，檢視圖書所在位置和有那些圖書。
```

把提示此輸入之後，大概 20 分鐘給我實現了前端、後端、資料庫表設計，並且最後都可以成功的執行。

1.  1\. 小程式

![](https://pic3.zhimg.com/v2-ee83116db8d8fd6d83744eea172aa012_1440w.jpg)

1.  2\. 後端自動給我啟動之後呼叫 API 報錯了，說明前端已經自動給我新增這個實現了。

![](https://pic3.zhimg.com/v2-257c1054a7de5c4540505c8285e97eaa_1440w.jpg)

1.  3\. 我本地沒有資料庫，讓它給我用 docker 啟動並且建立表

![](https://picx.zhimg.com/v2-03888823ffe6478848e3de50a2e7148f_1440w.jpg)

## 對比 Cursor

首先給我的感覺就是比 Cursor 可以執行的東西跟多了，而且執行很快，不知道是因為他們的模型快還是什麼原因，總之很快，而且準確率很高。

在不久的將來，感覺像 `WEB` 程式只需要三個角色就可以做出一個系統來：

- • 一個 UI 設計，把所有的頁面樣式、圖示設計好，給到工具。
- • 一個產品經路，把業務邏輯梳理清楚。
- • 一個架構師，把系統架構設計出來，設計出合理的資料庫、介面定義等這些。

之後就可以透過工具自動化的生成、打包、部署然後就可以進行測試了。

### 引用連結

[1] abstract.py: _[http://abstract.py](https://link.zhihu.com/?target=http%3A//abstract.py)_

> 來源：知乎
