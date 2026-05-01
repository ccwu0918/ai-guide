## 這怕是全網最強的 DeepSeek 圖片教程吧，趕緊收藏了！


廢話不多說，我們直接進入正題，講講如何讓 DeepSeek 幫我們透過文字生成圖片，及處理圖片。

### 文字生成圖片

文字生成圖片基本就兩步。

1️⃣ 先提需求讓 DeepSeek R1 最佳化內容，得到最佳化文字。

2️⃣ 再提需求讓 DeepSeek R1 把最佳化文字轉為圖片。

下面介紹的幾種生圖方法中，第一步都是相同的，區別是第二步。

那麼第一步該怎麼做呢？

還是我們之前介紹的方法，套萬能模樣：背景+需求+約束條件，或用模仿的方法來最佳化內容。

比如把前文講怎麼用好 DeepSeek 的內容生成小紅書樣式的圖片。

第一步，先讓 DeepSeek R1 幫我們最佳化內容。

模仿小紅書爆款格式，展示如下內容：

標題：DeepSeek 使用技巧 

技巧： 

1. 萬能提問模板：背景+需求+約束條件（可選） 

例子：我家小孩讀初一（交代背景），怎樣提高他的英語水平（提出需求），不需要考慮口語問題 （約束條件，可選） 

2. 讓 DeepSeek “說人話” 

例子：我想了解 DeepSeek 成本這麼低的原因。說人話。 

3. 模仿人物回答 

例子：模仿李白，寫一首“萬事如意”的藏頭詩。

DeepSeek 給我最佳化的內容如下：

![img](https://pic.yupi.icu/yuyi/1739502355262-5b74867d-1b6b-415e-9759-381566fc8de9.webp)

怎麼樣，還行吧？😁

然後進入第二步，將最佳化文字轉為圖片，這一步的方法較多，且聽我一個個介紹。

### 生成 SVG 圖片

我們常用的圖片格式是 png、jpg、webp 等格式，不過 DeepSeek R1 目前只支援直接生成 SVG 格式的圖片。



所以我們可以直接要求 DeepSeek 生成 svg 圖片，並提一些要求。



如我要求 “將整個回答轉為 svg 圖片，要求配色簡約” 後，DeepSeek 輸出如下：



![img](https://pic.yupi.icu/yuyi/1739502355232-875d596d-4ff7-48e8-9a98-bf4d24347d24.webp)

點選執行 HTML，彈出頁面展示 svg 圖片：



![img](https://pic.yupi.icu/yuyi/1739502355573-a1df4ec7-f6fd-4373-96e8-6f165eb12a98.webp)

如果你覺得生成的樣式是你滿意的樣式，則複製整塊內容，建立一個新檔案，修改字尾名為 svg，再將內容貼進去就行了。

如果你覺得樣式還需要調整，則根據 DeepSeek 提示的配色方案，佈局結構等繼續調整，直至滿意為止。

生成 PNG、JPG 圖片

你可以非要生成 png 和 jpg 等格式顯示圖片，此時又該怎麼做呢？

這類需求要麼用專門的 Python 庫來處理圖片，要麼寫個 HTML 檔案生成圖片。

哈哈，先不要覺得難，幾句話就能搞定，有 DeepSeek 就不用我們寫一行程式碼啦。

![img](https://pic.yupi.icu/yuyi/1739502355611-90c82343-ca78-4e1f-95ad-2c4ed1f3a34d.webp)

比如我直接提的需求：

將整個回答以小紅書卡片的風格展示，用 html 輸出，要求如下：

1. 每塊文字對應一個卡片，每個卡片都提供下載為 png 的按鈕，生成的圖片中不要包括這個按鈕。
2. 不要調整文字內容。
3. 配色簡約，卡片美觀。

DeepSeek 思考幾秒後，直接就給我返回了 HTML 程式碼檔案。

同樣的，我們點選“執行 HTML” 按鈕就行，比如 DeepSeek 給我返回的樣式如下。



![img](https://pic.yupi.icu/yuyi/1739502355630-1a4ad725-1820-49af-a29a-11caafbe98da.webp)

點選“儲存圖片”就能拿到 png 圖片。

怎麼樣，是不是很簡單？

![img](https://pic.yupi.icu/yuyi/1739502355867-2ee2e997-5469-45a1-907f-f68929f2d67a.webp)

我這裡的卡片樣式沒有仔細打磨，如果你在小紅書小綠書做圖文賽道，可以花時間弄一套自己的提示詞，直接讓 DeepSeek 變成你的出圖神器！

### 生成 Mermaid 圖表

DeepSeek 還支援 mermaid 語法，該語法包括流程圖、甘特圖、餅狀圖、思維導圖等圖表，感興趣的朋友可以在 Mermaid 官網 https://mermaid.js.org/intro/  檢視所有圖表型別。

比如我直接要求 DeepSeek 生成書籍的思維導圖：

生成《納瓦爾寶典》的思維導圖，以 mermaid 格式儲存

DeepSeek 返回結果如下：

![img](https://pic.yupi.icu/yuyi/1739502355861-4408af84-776a-4489-83c1-bc5357403a6e.webp)

我們複製 DeepSeek 返回的結果，在瀏覽器中開啟 https://mermaid.live ，將複製的結果貼上上去就能得到思維導圖，然後點選下載 PNG  和 SVG 圖片即可。

如下圖所示：

![img](https://pic.yupi.icu/yuyi/1739502355955-e143c028-b22e-48d0-906b-96bb76a643bc.webp)

上面三種方法基本就能滿足我們的大部分需求了，如果你都能掌握的話，已經超過 80% 玩 DeepSeek 的人了。

其實這裡已經可以結束本文了，但關注過我的朋友都知道，咱不是一般的公眾號主啊！

所以我再提供一些思路，有興趣的朋友可以參考玩一玩。

### 第三方文字轉圖的 AI 工具

現在市面上有很多免費出圖的 AI 工具，這些工具能根據我們提供的提示詞來生成圖片，提示詞直接決定了生成的圖片質量。

剛好，DeepSeek 非常擅長生成提示詞。

比如我讓 DeepSeek 給我生成一個鯨魚躍出海面噴水的圖片，它返回給我一段提示詞。



![img](https://pic.yupi.icu/yuyi/1739502355999-13ad7cde-baaa-41d6-b7f8-9c93c799141f.webp)

拿到這個提示詞後，我們再找個 AI 出圖工具就能得到圖片了。

一般來說，英文提示詞的效果會優於中文提示詞，所以我一般都是讓 DeepSeek 直接生成英文提示詞。

這個組合蠻適合幫我們生成漫畫圖、文章封面圖，甚至製作影片。

這裡再推薦幾個常用生圖的 AI 工具：

1. 即夢 AI：https://jimeng.jianying.com/ai-tool/image/generate
2. Midjourney: www.midjourney.com/ 
3. Stable Diffusion: 開源方案，可以本地部署，也可以網上搜一些線上方案，如 https://beta.dreamstudio.ai/generate
4. Bing Image Creator:  https://www.bing.com/images/create ，由 DALL·E 3 提供服務。
5. ChatGPT、豆包等大模型。

比如我用即夢生成的圖片：

![img](https://pic.yupi.icu/yuyi/1739502356062-4ee81b25-794f-4080-a9a7-5d0ca694401a.webp)



效果看起來蠻不錯吧。

![img](https://pic.yupi.icu/yuyi/1739502356350-b948a45e-891e-4779-b4b4-572c9720dad8.webp)

另外提一句，DeepSeek 在釋出 R1 後，在 1 月 28 號還開源了 Janus Pro 處理多模型，也可以根據文字生成圖片。

官方給的效果圖如下：

![img](https://pic.yupi.icu/yuyi/1739502356357-3155e5a9-cd26-4c0d-a388-aec7c9f717fa.webp)

看起來還行，不過我感覺出圖質量沒即夢好。

你可以在這個地址試用下：https://huggingface.co/spaces/deepseek-ai/Janus-Pro-7B 。

### 圖片處理

如果想讓 DeepSeek 幫我們處理圖片的話，就只能寫程式碼了。

這種需求通常需要和 DeepSeek 交流多次才能得到滿意的效果。

比如我讓 DeepSeek 生成一段 HTML 程式碼，將上傳的圖片轉為“畫素圓點風格”和“水墨風格”。

經過四五次與 DeepSeek 的交流後，得出的效果如下：

![img](https://pic.yupi.icu/yuyi/1739502356384-09071cf6-19f2-4577-9f20-55245b867f10.webp)

效果還是不錯滴。

網上還有人分享了一個修改照片的方法，讓 DeepSeek 生成 PS 指令碼去修復照片，對比圖如下：

![img](https://pic.yupi.icu/yuyi/1739502356403-35a7cf51-2bdc-4a41-93cf-a30af509cd45.webp)

這個方法我還沒測試，估計也是和 DeepSeek 交流多次才實現的。

如果你也想試一下的話，注意 Photoshop 2022 之後的版本才能跑指令碼哈。

![img](https://pic.yupi.icu/yuyi/1739502356522-a33b2a21-d470-4bc1-a037-a12fd69e81e6.png)

好了，關於 DeepSeek 處理圖片的內容就分享到這了。



> 來源：https://mp.weixin.qq.com/s/uLfResdgf3Ysu_woG8Rk9A