# 阿里開源全新推理模型 QwQ-32B，一臺 Mac 就能實現頂級推理能力

QwQ-32B 在數學推理、程式設計能力等問題解決方面表現出色。

![](https://image.deeptechchina.com/article/2025030617482916990.jpg?imageView2/2/w/504/h/280)

3 月 6 日，阿里巴巴旗下的 Qwen 團隊用一條題為《QwQ-32B：擁抱強化學習的力量》的博文公佈了全新的開源大型推理模型 QwQ-32B（Qwen-with-Questions）， **這款僅有 320 億引數的模型透過強化學習技術，在多項基準測試中展現出與擁有 6710 億引數（啟用引數 37B）的 DeepSeek-R1 相媲美的效能。**

![](https://p3-sign.toutiaoimg.com/tos-cn-i-6w9my0ksvp/c542f1bf17b649cba8ea19d6ce711565~tplv-obj.image?lk3s=ef143cfe&traceid=20250306174815379FC88CD6E60CAAFA41&x-expires=2147483647&x-signature=xdR2Wp5WbD9B%2BWT2FX%2F0vW6lqD8%3D)圖丨相關博文（來源：Qwen）

**QwQ-32B 在數學推理、程式設計能力等問題解決方面表現出色。** 根據官方釋出的基準測試結果，在數學推理基準 AIME24 上，QwQ-32B 達到了 79.5 分，幾乎與 DeepSeek-R1 的 79.8 分持平，遠超 OpenAI o1-mini 的 63.6 分，也超過了 DeepSeek-R1 蒸餾到 Llama-70B 和 Qwen-32B 的版本（分別為 70.0 和 72.6 分）。

在程式設計能力方面，QwQ-32B 在 LiveCodeBench 上獲得了 63.4 分，接近 DeepSeek-R1 的 65.9 分，明顯優於 o1-mini 的 53.8 分和蒸餾模型。在 LiveBench 測試中，QwQ-32B 得分 73.1，與 DeepSeek-R1 的 71.6 分相當，且大幅領先於 o1-mini 的 59.1 分。在 IFEval 和 BFCL 上，也略微超過了 R1。

![](https://p3-sign.toutiaoimg.com/tos-cn-i-6w9my0ksvp/ff7bf02edeb64585b4d6e43175a8ba79~tplv-obj.image?lk3s=ef143cfe&traceid=20250306174815379FC88CD6E60CAAFA41&x-expires=2147483647&x-signature=kRHH16M0%2BB8mfN2sveulfBXBdDw%3D)圖丨基準測試結果（來源：Qwen）

Hugging Face 的 Vaibhav Srivastav 在評測後發表評論： **“QwQ-32B 在 Hyperbolic Labs 支援下的推理速度‘快得驚人’，完全可與頂級模型媲美。”**“在 Apache 2.0 許可下，它成功擊敗了 DeepSeek-R1 和 OpenAI o1-mini。”

![](https://p3-sign.toutiaoimg.com/tos-cn-i-6w9my0ksvp/0685ce5b6c544138b63d22dc91836c61~tplv-obj.image?lk3s=ef143cfe&traceid=20250306174815379FC88CD6E60CAAFA41&x-expires=2147483647&x-signature=RM7ELIeQ6JwYUUBeDetxW3IqDIA%3D)圖丨相關推文（來源：X）

不過，有部分使用者反應，QwQ-32B 有時會出現過度思考的問題，哪怕是很簡單的問題也會生成大量的思維鏈（比如在經典的“Strawberry”問題上，它會輸出近七萬字的思維鏈），導致其輸出結果的速度較慢。

模型架構方面，QwQ-32B 採用因果語言模型架構，具有 64 層 Transformer 結構，相比常見的模型層數更深。它完整整合了 RoPE（旋轉位置編碼）、SwiGLU 啟用函式、RMSNorm 層歸一化和 Attention QKV 偏置，這些都是當前先進大模型的標準配置。

模型採用了廣義查詢注意力機制，具體配置為 40 個查詢頭、8 個鍵值對頭，這種配置最佳化了注意力機制的效率和效能。 **QwQ-32B 的上下文視窗長度高達 131,072 個 token，遠超普通模型，支援超長文字處理。**

QwQ-32B 的訓練過程分為三個階段：預訓練、監督微調和強化學習，其中強化學習又分為兩個關鍵階段：

第一階段聚焦於數學和程式設計能力的提升。Qwen 團隊從冷啟動檢查點開始，採用基於結果的獎勵驅動的強化學習擴充套件方法。在數學問題訓練時，模型使用專門的準確性驗證器（Accuracy Verifier），而非傳統獎勵模型；程式設計任務則透過程式碼執行伺服器（Code Execution Server）評估程式碼是否透過預定義測試用例。訓練過程中，隨著訓練輪次增加，兩個領域的效能持續提升。

第二階段則側重通用能力增強。模型引入通用獎勵模型和規則驗證器進行訓練。即使是少量的訓練步驟，也顯著提升了指令跟隨、人類偏好對齊和智慧體效能，並且實現通用能力提升的同時，不顯著降低第一階段獲得的數學和程式設計能力。

由此，QwQ 得以在 32B 的小引數上就實現了強大的推理能力。昨天還在感嘆花八九萬買 512GB 記憶體 M3 Ultra 的 Mac Studio 就能執行完整版 DeepSeek-R1 了（甚至還需要量化），但現在，只需要幾千塊的 Mac Mini，你就能獲得接近的體驗。

而且，QwQ-32B 的小引數量帶來了更低的延遲和更高的吞吐量。在相同硬體條件下，小引數模型在推理速度上具有天然優勢，能夠提供更快的響應時間和更高的併發處理能力。對於一些中小型研究團隊、初創企業和個人開發者來說，這無疑大大降低了他們使用先進推理模型的門檻。

而且，QwQ-32B 也整合了與智慧體相關的能力，使模型能夠在思考的同時使用工具，並根據環境反饋調整推理過程。在此基礎上，QwQ-32B 就可以作為企業自動化流程中的核心推理引擎，處理從資料分析、報告生成到程式設計輔助等各種複雜任務。

目前， **QwQ-32B 已在 Hugging Face 和 ModelScope 上以 Apache 2.0 許可開源，個人使用者也可透過 Qwen Chat 直接體驗該模型。**

從 DeepSeek-R1 到 diffusion LLMs，再到 QwQ-32B，最近的一系列突破似乎讓實現頂級效能模型所需要的算力越來越低，儘管未來對於高效能晶片的總需求或許並不會減少，但這種變化對於那些以往依賴大量計算資源的巨頭們來說，恐怕免不了造成一些衝擊。

參考資料：

https://qwenlm.github.io/zh/blog/qwq-32b/

運營/排版：何晨龍

2025 年 03 月 05 日

![](https://image.deeptechchina.com/article/2021081911453445027.jpg)

> 來源：www.mittrchina.com
