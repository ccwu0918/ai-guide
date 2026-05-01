# 谷歌終於登頂一次了！最強推理模型 Gemini 2.5 Pro 實測體驗，真的有點東西

深夜悄悄搞事情的不只 OpenAI，搶在 OpenAI 開直播之前，谷歌上線了最強大的推理模型 Gemini 2.5 Pro。

谷歌 CEO「劈柴哥」甚至用：「這是谷歌有史以來最智慧的 AI 模型。」為它站臺。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/535.jpg)

不過，從 Gemini 2.5 Pro 的成績單來看，它可能確實擔得起「有史以來最強」的名號。

首先來看推理能力，在被視為人類給 AI 的終極考驗的 Humanity's Last Exam 基準測試中，不額外呼叫工具的 Gemini 2.5 Pro 取得了 18.8% 的準確率，超過了能秒解圖論難題的 OpenAI o3-mini（high）。

和推理能力強相關的科學和數學能力，在 GPQA、AIME 2025 等主流基礎測試中，Gemini 2.5 Pro 也是遙遙領先，具體成績如下：

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/536.jpg)![](https://imagepphcloud.thepaper.cn/pph/image/344/445/537.jpg)

在程式設計能力方面，Gemini 2.5 Pro 相比 2.0 實現了質的飛躍，未來還將不斷增強。

其中，SWE-bench 衡量的是編碼能力，Aider Polyglot 衡量的是模型的程式碼編輯水平。除了在 Agentic coding 方面遜色於 Claude 3.7 Sonnet，Gemini 2.5 Pro 均斬獲第一：

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/538.jpg)

谷歌稱 Gemini 2.5 Pro 比較擅長在建立視覺效果精美的網頁應用和操作智慧體。在官方放出的 demo 中，只需一行提示詞，Gemini 2.5 Pro 就開動腦筋，逐步推理出了這個類似「flappy bird」的小遊戲的全部程式碼，並且直接可玩：

再來是對話能力，在大模型競技場 Chatbot Arena 的榜單上，Gemini 2.5 Pro 以絕對優勢強勢登頂，創下了前所未有的最大分數飛躍，比 Grok - 3 和 GPT - 4.5 高接近 40 分：

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/539.jpg)

從第二名以下的成績，不難發現，Chatbot Arena 的前幾名分差往往很小，幾乎不超過 10 分。Grok-3 上個月剛登頂，第一的位置還沒坐幾個月，就被 Gemini 2.5 Pro 甩開了。

除了對話能力，Gemini 2.5 Pro 在 Chatbot Arena 的複雜指令、程式設計、數學、創意寫作、指令跟隨的榜單上也是全面領先，堪稱「六邊形戰士」。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/540.jpg)

和其他家推理模型不同的是，Gemini 2.5 延續了 Gemini 系列模型的核心優勢 —— 原生多模態能力和長上下文視窗。Gemini 2.5 Pro 版本擁有 100 萬 token 的上下文視窗（沒有縮減，即將提升至 200 萬 token），支援文字、音訊、影象、影片及完整程式碼庫輸入。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/541.jpg)

支援把影象轉化為可以 3D 列印的格式。

從 Vision Arena 榜單來看，Gemini 2.5 Pro 不止支援原生多模態，能力更是一騎絕塵。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/542.jpg)

防盜水印一秒蒸發、證件照 10 秒摳圖，以下是第四名 Gemini-2.0-flash-thinking「一句話 P 圖」的效果。如今，在新的第一名面前，更是被遠遠超越。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/543.jpg)

作為一個會「思考」的模型，Gemini 2.5 Pro 專為複雜任務設計，更夠能智慧地分析資訊、理解問題的背景和情境以及做出明智的決策。

不過，谷歌並未公開技術報告，我們只能從谷歌放出的部落格中得知，他們的技術突破在於強化學習、思維鏈提示和後訓練。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/544.jpg)

現在登入 Google AI Studio，普通使用者和企業就能體驗到 Gemini 2.5 Pro。如果是高貴的 Gemini Advanced 使用者，在桌面和移動裝置下來選單，就能直接使用了。未來幾周內，Gemini 2.5 Pro 也將登陸 Vertex AI 平臺。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/545.jpg)

其實前幾天，Chatbot Arena 上就有一個代號「Nebula」的神秘模型在 LMSYS Arena 屠榜，擊敗了包括 o1、o3-mini 和 Claude 3.7 Thinking 在內的眾多對手。

不知道是不是谷歌偷師了 OpenAI 的營銷技巧，正式公佈 Gemini 2.5 Pro 之前，劈柴哥也神秘兮兮地發了一條推特：

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/546.jpg)

不過現在再模仿「strawberry」可能有點晚了，遇到大佬無緣無故開始在社交平臺上發「詩和遠方」，都可以召喚 Grok 來甄別。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/548.jpg)

一手實測

看完了成績單，Gemini 2.5 Pro 的實際水平是否也如此出色呢？

實測見真章，機器之心先對它的推理、數學、科學和程式設計四個方面展開了一番測評。

推理

根據之前測試推理模型的經驗，我們總結了幾道很難答對的邏輯題來考驗 Gemini 2.5 Pro。

提示詞：兩個人同時來到了河邊，都想過河，但只有一條小船，而且小船隻能載一個人。請問：他們能否都過河？

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/549.gif)

僅用了 11 秒，Gemini 2.5 Pro 成功識破了邏輯陷阱：「兩個人同時來到了河邊」不一定都在同岸，如果是對岸就成立了。

提示詞：校長室的玻璃被人用足球砸壞了，有四個人被校長懷疑，四人依次陳述自己理由，其中有一個人說法很可疑，他就是肇事者。

甲：我沒有砸玻璃。

乙：甲說的是對的。

丙：丁在說謊。

丁：我沒有玩足球。

請問肇事者是誰？

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/551.gif)

這回 Gemini 2.5 Pro 的思考時間長了一點，但是由於它忽略了在現實中丙的發言順序在丁之前，所以丙說的一定為假，因此正確答案是丙，Gemini 2.5 Pro 答錯了。

其他推理模型很難搞定的圖推題，Gemini 2.5 Pro 也能一次答對。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/553.gif)

數學

要檢驗推理模型的有多聰明，數學題是最好的「智商測試」，我們先來一道今年的考研數學真題：

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/554.gif)

過程和結果，Gemini 2.5 Pro 都輕鬆拿下。

再上點強度，來一道 IMO 2024 年的真題：

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/556.gif)

一陣強勁的思考過後，Gemini 2.5 Pro 給出的答案也是正確的。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/557.jpg)

拼多多砍一刀背後蘊含的「極限」思想，也沒難倒它。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/560.gif)

科學

來一道 2023 年理綜物理真題 ——

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/561.jpg)

Gemini 2.5 Pro 稍加思考，輕鬆回答出正確答案。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/563.gif)![](https://imagepphcloud.thepaper.cn/pph/image/344/445/565.jpg)

Gemini 2.0 Flash 則遺憾離場。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/567.jpg)

程式設計

我們先讓 Gemini 2.5 Pro 生成一個貪吃蛇遊戲。

「建立一個經典的貪吃蛇小遊戲，遊戲介面為 400 × 400 畫素的畫布。蛇由若干個 10 × 10 畫素的方塊組成，初始長度為 3 個方塊，初始位置在畫布中心。蛇可以向上、向下、向左、向右移動，使用鍵盤的方向鍵控制蛇的移動方向。遊戲中隨機生成一個 10 × 10 畫素的紅色食物，當蛇吃到食物時，長度增加 1 個方塊，分數增加 10 分，並重新生成食物。如果蛇撞到畫布邊界或自身，則遊戲結束，彈出一個對話方塊顯示最終得分，並提供重新開始的選項。遊戲開始時，蛇以中等速度移動，隨著時間的推移逐漸加快速度，增加遊戲的挑戰性。」

Gemini 2.5 Pro 表示毫無壓力，還貼心附上操作指南。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/569.gif)![](https://imagepphcloud.thepaper.cn/pph/image/344/445/573.jpg)![](https://imagepphcloud.thepaper.cn/pph/image/344/445/576.gif)

然後上點難度「增加不可移動的障礙物（地圖邊緣 + 隨機 3 個方塊）」。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/577.gif)

再來新增一點 buff「新增特殊道具（吃到的效果任選 2 種）：加速 / 減速道具，臨時穿牆（10 秒），清除所有障礙物」。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/579.gif)

現在把主場交給 Gemini 2.5 Pro，看看它有什麼奇妙想法。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/580.jpg)

還是非常絲滑～

以上操作 Gemini 2.5 Pro 都是一次成功，沒有報錯。

最後，我們來檢查一下 Gemini 2.5 Pro 的程式碼審查能力。我們先請 DeepSeek 在程式碼中植入一些隱藏彩蛋，隨後讓 Gemini 2.5 Pro 檢查修改後的程式碼。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/581.jpg)

不出所料，它精準地識別出了問題，給出了標準的專業分析。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/583.jpg)

不過，在讓眾多大模型惱火的鵜鶘騎腳踏車大賽 svg 繪圖大賽中，Gemini 2.5 Pro 還是沒打過 Claude 3.7 Sonnet。

![](https://imagepphcloud.thepaper.cn/pph/image/344/445/584.jpg)

圖左是 Gemini 2.5 pro 生成的，圖右是 Claude 3.7 Sonnet 生成的。

測到這裡，Gemini 2.5 pro 的水平如何，相信讀者心中已大概有數了。

與新版 DeepSeek-V3 不約而同的是，Gemini 2.5 pro 也在程式設計和邏輯方面加強了不少。最近谷歌在多模態頻頻發力，不斷推動著推理模型原生多模態能力的提升。

DeepSeek-R1 問世後，我們一直在期待能「強推理、慢思考」的大模型進化成多模態模式。這一突破，是否會由 Gemini 系列率先實現呢？

參考連結：

http://aistudio.google.com/app/prompts/new\_chat?model=gemini-2.5-pro-exp-03-25

https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025

https://x.com/sundarpichai/status/1904579419496386736

---

文章來源：澎湃新聞
