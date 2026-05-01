# 2分鐘學會 DeepSeek API，竟然比官方更好用！

> 建議觀看影片版教程：[https://bilibili.com/video/BV1zVAHesEv7](https://bilibili.com/video/BV1zVAHesEv7)

大家好，我是程式設計師魚皮。最近 DeepSeek AI 太火了，效果也很強，但致命問題是 **不穩定**， 經常給我返回 `伺服器繁忙，請稍後再試`，甚至讓我懷疑自己被殺熟了。

也有網友說，第一次使用成功率很高，第二次可能就繁忙了。。。

![圖片](https://pic.yupi.icu/yuyi/640-20250221182002381.png)

那有什麼辦法穩定使用 DeepSeek 麼？

作為一名程式設計師，首先想到的是：既然 DeepSeek 都開源了，那我直接本地部署一個不就行了嗎？

可是滿血版的 DeepSeek-R1 光模型就佔了 404GB 空間，個人電腦根本負擔不起呀！我就要穩定使用滿血版 DeepSeek，怎麼辦呢？

![圖片](https://pic.yupi.icu/yuyi/640-20250221182002445.png)

我們可以使用第三方平臺提供的介面服務，大公司幫我們部署了滿血版 DeepSeek，我們直接透過 API 呼叫就行。下面只需 2 分鐘，教你如何使用 API 來呼叫滿血版的 DeepSeek！

學會之後，可以接入 DeepSeek AI 到自己專案中、寫到簡歷上，面試官看到也會眼前一亮~

## 第三方平臺選擇

目前支援 DeepSeek 的主流第三方平臺有矽基流動、OpenRouter、騰訊雲、阿里雲、百度雲、火山引擎等等，看來各大廠都積極入局了。接下來我會以其中 2 個平臺為例，用 Java 來呼叫 AI 完成智慧問答，學會之後換個平臺也是易如反掌。

最後我還會給大家分享一個詳細的第三方平臺對比表格，大家可以按需選擇。

## 矽基流動

彙集了很多類 AI 大模型的雲服務平臺。進入模型廣場，選擇滿血版的 DeepSeek-R1 模型：

![圖片](https://pic.yupi.icu/yuyi/640-20250221182048121.png)

注意，呼叫 AI 大模型通常是按照消耗的 token 數計費的，不過新使用者會贈送一定額度，也夠我們學習和日常使用了。

檢視模型對應的 API 文件，選擇對應的程式語言，就能看到傳送請求的示例程式碼了，可以直接複製使用：

![圖片](https://pic.yupi.icu/yuyi/640-20250221182048229.png)

隨便新建一個乾淨的 Java Maven 專案，引入傳送請求所需的 Unirest 庫：

```
<dependency>
    <groupId>com.konghq</groupId>
    <artifactId>unirest-java</artifactId>
    <version>3.14.1</version>
</dependency>
```

然後貼上示例程式碼到主類中。我們首先需要修改程式碼中的鑑權 token，在官網找到 API 金鑰，新建一個 API 金鑰，注意不要暴露出去哦！然後複製到程式碼中。

![圖片](https://pic.yupi.icu/yuyi/640-20250221182048342.png)

接下來就可以指定想用的模型、要輸入給 AI 的提示詞，最後列印出 AI 響應的結果即可。就這麼幾行程式碼：

```
HttpResponse<String> response = Unirest.post("https://api.siliconflow.cn/v1/chat/completions")
        .header("Authorization", "Bearer " + "你自己的 APIKey")
        .header("Content-Type", "application/json")
        .body("{\n  \"model\": \"deepseek-ai/DeepSeek-V3\",\n  \"messages\": [\n    {\n      \"role\": \"user\",\n      \"content\": \"程式設計師魚皮是誰？\"\n    }\n  ],\n  \"stream\": false,\n  \"max_tokens\": 512,\n  \"stop\": [\n    \"null\"\n  ],\n  \"temperature\": 0.7,\n  \"top_p\": 0.7,\n  \"top_k\": 50,\n  \"frequency_penalty\": 0.5,\n  \"n\": 1,\n  \"response_format\": {\n    \"type\": \"text\"\n  },\n  \"tools\": [\n    {\n      \"type\": \"function\",\n      \"function\": {\n        \"description\": \"<string>\",\n        \"name\": \"<string>\",\n        \"parameters\": {},\n        \"strict\": false\n      }\n    }\n  ]\n}")
        .asString();
System.out.println(response.getBody());
```

我們來 Debug 一下，稍等一會兒，就能看到 AI 的回覆了：

![圖片](https://pic.yupi.icu/yuyi/640-20250221182048473.png)

不過我嘗試的這段時間，這個平臺輸出速度比較慢、也不是很穩定吧。

## 火山引擎

我們再換一個平臺 —— 火山，首先進入模型廣場，選擇滿血版的 DeepSeek-R1 模型：

![圖片](https://pic.yupi.icu/yuyi/640-20250221182120361.png)

點選立即體驗，就可以和 AI 對話了，新使用者也會贈送一定 tokens 額度。我們選擇 API 接入：

![圖片](https://pic.yupi.icu/yuyi/640-20250221182120447.png)

建立一個接入點：

![圖片](https://pic.yupi.icu/yuyi/640-20250221182120515.png)

注意，如果還沒有開通模型，需要選擇 DeepSeek-R1 模型，點選立即開通：

![圖片](https://pic.yupi.icu/yuyi/640-20250221182120666.png)

開通成功後，回到之前的頁面，確認接入。然後就進入到了 API 呼叫頁面，先建立一個自己的 API Key，儲存好等下會用到。

![圖片](https://pic.yupi.icu/yuyi/640-20250221182120736.png)

然後我們選擇官方的 SDK 呼叫示例，獲取到對應程式語言的示例程式碼：

![圖片](https://pic.yupi.icu/yuyi/640-20250221182120812.png)

首先在專案中引入 SDK 和相關依賴，注意要修改依賴的版本號（不要直接用 "LATEST"）：

```
<dependency>
    <groupId>com.volcengine</groupId>
    <artifactId>volcengine-java-sdk-ark-runtime</artifactId>
    <version>0.1.151</version>
</dependency>
```

然後複製示例程式碼，修改 API Key 和輸入給 AI 的提示詞，然後執行一下試試：

![圖片](https://pic.yupi.icu/yuyi/640-20250221182120883.png)

澆給！很快，AI 就給出了回覆，實際測試下來比較穩定、響應速度也比較快。

![圖片](https://pic.yupi.icu/yuyi/640-20250221182120964.png)

## 總結

怎麼樣，透過呼叫 API 將 AI 接入到專案中還是很簡單吧。大家如果遇到更多的問題，建議優先檢視官方的 API 呼叫指南文件，還有問題就去問 AI 和客服吧~

基本上每個平臺我都體驗了下，也整理了一個平臺對比表格，大家可以參考下：

| **平臺**   | **價格（單位：百萬 tokens）** | **贈送**                      | **輸出穩定性**                           | **輸出速度（單位：秒）** | **個人感受**                                                                                       |
| :--------- | :---------------------------- | :---------------------------- | :--------------------------------------- | :----------------------- | :------------------------------------------------------------------------------------------------- |
| 矽基流動   | 輸入：￥4，輸出：￥16           | 14 元                         | 較為不穩定，呼叫五次可能才有一次正常響應 | 9.05 tokens              | 贈送的金額雖然很多，但是服務很不穩定，且輸出速度也很慢。                                           |
| openrouter | 輸入：，輸出：2.19            | 無贈送，但可最高欠費 1 美元。 | 服務較為穩定                             | 7.47 tokens              | 輸出速度在上述平臺中最慢，且在此平臺付費較為麻煩，需要使用信用卡或者國外的銀行卡，不建議國內使用。 |
| 騰訊雲平臺 | 輸入：￥4，輸出：￥16           | 無贈送                        | 服務非常穩定                             | 11.16 tokens             | 上手特別簡單，不需要開通任何東西，只需要拿到 ak / sk 直接呼叫官方提供的示例程式碼即可。              |
| 火山引擎   | 輸入：￥2，輸出：￥8            | 贈送 50 萬 tokens             | 服務非常穩定                             | 28.08 tokens             | 輸出速度在上述平臺中最快，且目前價格只有官網一半，贈送 50 萬 tokens。                              |
| 阿里雲平臺 | 輸入：￥2，輸出：￥8            | 贈送 100 萬 tokens            | 需要等大模型部署一段時間後才能穩定使用   | 12.24 tokens             | 需要等百鍊大模型部署完成後才能使用，部署需要花較長的時間，不過贈送的 tokens 比較多                 |

大家如果要學習更多平臺的呼叫、AI 提示詞技巧、AI 部署教程、AI 行業資訊、AI 專案，都可以來看看我剛剛開源的 AI 知識庫（ https://github.com/liyupi/ai-guide ）。大家如果還瞭解到了其他的滿血 DeepSeek 平臺，歡迎評論區留言分享~

![圖片](https://pic.yupi.icu/yuyi/640-20250221182148803.png)