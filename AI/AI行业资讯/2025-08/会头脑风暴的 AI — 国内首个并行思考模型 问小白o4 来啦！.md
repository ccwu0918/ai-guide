# 會頭腦風暴的 AI — 國內首個並行思考模型 問小白o4 來啦！

本文轉載自： [會頭腦風暴的 AI — 國內首個並行思考模型 問小白o4 來啦！](https://mp.weixin.qq.com/s/lOuFggxvgvmDy7jbNHygKg)

![](https://pic.code-nav.cn/post_picture/1610518142000300034/e8VRRXDmgev9NjaY.webp)

作為國內首個並行思考模型，問小白o4 最大的本事是能同時開八個“腦洞”琢磨你的問題，自動篩選最優思考路徑，答案精準度飆升！

現Web/APP端全量上線啦！訪問官網 wenxiaobai.com，即可體驗全新滿血版 問小白o4 模型，你可以將常用的大模型工具切換至 「小白o4」，體驗Gemini 2.5 Deep Think頂級模型（月費約¥1800）同等先進的頭腦風暴能力。

🌍  打破傳統推理模型侷限

問小白o4 是由問小白團隊提出的第四代開源推理正規化（4th open-sourced reasoning form）構建而成，融合了“Long‑CoT 強化學習”與“過程獎勵學習（Process Reward Learning）”的端到端訓練機制，使模型同時具備深度推理與高質量思考過程篩選能力。

![](https://pic.code-nav.cn/post_picture/1610518142000300034/EnFwBJV2bI8ttokr.webp)

* 多：想得更多，給得更多

問小白o4 同時啟動8條並行思考路徑，如同一個高效的“頭腦風暴”團隊，從不同角度、運用不同策略同步探索解題思路，讓‘一次到位’成為預設體驗。

* 快：輕量模型，給得更快

基於極致的模型壓縮與引擎加速，問小白o4 的打字速度相較DeepSeek R1提升70%，顯著降低了獲取優質回答的時間成本。

* 好：優中選優，給得更好

基於最優思考的回答，問小白o4 在複雜任務上的效能顯著超過OpenAI o3-mini-medium、Claude Opus 4，大幅提升回答的正確率與可解釋性。

![](https://pic.code-nav.cn/post_picture/1610518142000300034/ELKe3910CT0so8Kv.webp)

📈 模型效能提升

問小白 o4 是一款具備更強推理能力、更擅長處理複雜任務的Dense架構基礎模型。作為當前開源複雜推理能力最強的模型之一，問小白 o4 以32B引數量在複雜數學和程式碼程式設計任務上實現了新的效能突破。

![](https://pic.code-nav.cn/post_picture/1610518142000300034/KtHfUYTBrDXqbMzq.webp)

* 為了確保評估的穩定性，我們以avg\@64作為測試精度

1. 什麼樣的思考過程會被 問小白o4 的大腦選中？

![](https://pic.code-nav.cn/post_picture/1610518142000300034/sdsT90XMJPPgAToh.webp)

![](https://pic.code-nav.cn/post_picture/1610518142000300034/kqGysKNIuLjeDQzW.webp)

2. 基於 問小白o4 強大的推理能力，能在哪些場景獲得更好的體驗？

將你的問題交給 問小白o4，它會自動構建不同思考過程，並篩選最優質的思考過程，基於此為你提供最佳解答。你無需手動多次重新生成選擇最佳的結果，因為這一切 問小白o4 會自動幫你完成！

學科試題更準確

問小白o4 能夠抽取題目知識點並對齊通用解法正規化，結合策略合成與自證校驗，自動匹配最優解題方法，實現更高準確率與更強泛化能力的智慧解題。

![](https://pic.code-nav.cn/post_picture/1610518142000300034/XYoSxLj0ZbHdN8Ih.webp)

> 思考1：分步硬拆造成重複，結果錯誤 ❌ 
>
> 思考2：過程層層套算，推理鏈條長，存在大量冗餘 ❌
>
> .......
>
> 思考8：補集法與分類法聯合驗證，準確且高效✅→ ★最優解★ 

以下是用 問小白o4 回答2025年第十六屆全國大學生數學競賽決賽試題，極強的數學推理能力。

【題目一】：準確運用高斯散度定理和三重積分，正確計算出所需要的結果。

Prompt:設 $$a, b, c$$ 是正數, $$S$$ 是方向朝上的上半橢球面 $$\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$$ ($$z \geq 0$$). 計算 $$I = \iint\_{S} xy^2 dydz + yz^2 dzdx + zx^2 dxdy$$.

【題目二】：結合漸近曲線、撓率、高斯曲率等知識點，實現正確計算。

Prompt:設$C$ 是曲面 $S$ 上曲率不等於零的漸近曲線，其撓率為 $\tau$。設曲面 $S$ 的高斯曲率為 $K$。求$|\tau|$。

程式碼程式設計更高效

在程式碼生成與補全場景，問小白o4 能夠識別推理過程中的邏輯錯誤，並綜合考慮多種邊界情況，篩選出最佳實踐。

![](https://pic.code-nav.cn/post_picture/1610518142000300034/L3RU6bJy22Bkzajc.webp)

> 思考1：查詢物件資料型別錯誤，結果錯誤 ❌
>
> 思考2：考慮片面，解答不完整 ❌
>
> .......
>
> 思考8：考慮到了多重邊界情況，呼叫正確 ✅→ ★最優解★

以下是使用 問小白o4 生成的網頁設計和小遊戲。

【設計網頁】基於本篇釋出內容，問小白o4 為自己製作了一個官網，以此加深你對問小白o4的更多瞭解。

【貪吃蛇遊戲】對使用者的query快速響應，問小白o4 高效輸出遊戲設計程式碼。

Prompt：Create a classic Snake game using JavaScript, HTML, and CSS. The game should include the following features:

Smooth movement controls (arrow keys or WASD).

A scoreboard that updates dynamically as the player collects food.

A 'New Game' button to restart the game.

A 'Game Over' animation when the player collides with the wall or itself.

The snake should grow with each food item consumed.

Simple but visually appealing design with clear UI elements.

Ensure the code is structured, commented, and easy to modify if needed.

搜尋場景更低幻覺

透過過濾低質思考過程，問小白o4 有效降低RAG場景下10%的思考過程幻覺率，讓你的每一次搜尋請求結果都更加準確。

![](https://pic.code-nav.cn/post_picture/1610518142000300034/EllHOP9McUieyAtW.webp)

> 思考1：混淆鞍山市和鞍山村，概念混亂 ❌
>
> 思考2：只停留在逐句摘抄檢索結果，缺少結合問題的針對性和總結❌.
>
> ......
>
> 思考8：準確區分鞍山市和鞍山村，邏輯清晰，總結到位✅→ ★最優解★

🚀 即刻體驗

前往 wenxiaobai.com 或下載更新 問小白App 至3.18.8最新版本，立即與 問小白o4 模型開啟對話。

![](https://pic.code-nav.cn/post_picture/1610518142000300034/IEPZsVwQxg37eHrk.webp)

我們非常推薦你前往「問小白」Web端開啟滿血版8倍腦暴 ，或點選文章下方「閱讀原文」直達。
