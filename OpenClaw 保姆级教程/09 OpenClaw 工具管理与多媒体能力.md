# OpenClaw 工具管理與多媒體能力

> 操控瀏覽器、文字轉語音、發圖片發影片

你好，我是魚皮。OpenClaw 內建了很多工具，但預設並不是全部開啟的。這篇教程教你怎麼管理工具的開關，以及如何解鎖文字轉語音、傳送圖片影片等多媒體能力。



## 工具管理

OpenClaw 的工具分為多個類別，比如 EXEC（執行命令）、WRITE（寫檔案）、READ（讀檔案）、BROWSER（瀏覽器）、MESSAGE（訊息傳送）、TTS（文字轉語音）等等。預設只開啟了一部分，其他的需要你自己按需開啟。

在 OpenClaw 控制檯的代理模組，可以檢視當前 Agent 的工具情況。

可以選擇預設工具組合，也可以單獨開關某個工具。比如擔心 AI 誤操作你電腦上的檔案，可以關閉檔案寫入和修改等工具。

![](https://pic.yupi.icu/1/1773892633607-77e420a9-349d-431b-ac04-7d5db7fc03fc.png)

除了在 Web 控制檯管理工具，你也可以透過配置檔案 `openclaw.json` 的 `tools` 欄位來控制工具的開關。工具許可權控制是安全的重要環節，建議只開啟你需要的工具，減少 AI 誤操作的風險。

舉個例子，我給小龍蝦一個任務：

```markdown
你能幫我操作瀏覽器，訪問 ai.codefather.cn 網站並進入 AI 知識庫頁面，然後截圖麼？
```

預設是不可以操作瀏覽器的：

![](https://pic.yupi.icu/1/1773892961341-974d02bb-485b-422a-98d1-b131196450ef.png)

開啟 Browser 工具並儲存：

![](https://pic.yupi.icu/1/1773893064239-70acdd34-62ec-4a31-8045-7e7651ea3404.png)

這次它成功操作了瀏覽器，幫我訪問了網站、導航到了指定頁面並完成了截圖。

![](https://pic.yupi.icu/1/1773893427843-2aeafde7-4fb7-4e4e-b0dc-cf1b4a4c2e81.png)

有了瀏覽器工具，你還可以讓 AI 幫你自動化各種網頁操作，比如自動填表單、批次採集資訊等。

如果你安裝了外掛，可能會獲取到更多工具。比如安裝飛書外掛後，可以按需讓 AI 使用飛書的功能，比如操作日曆、多維表格、文件、任務等等：

![](https://pic.yupi.icu/1/1773893614509-a6488f29-7611-4d40-9fa9-de374718493d.png)



## TTS 文字轉語音

OpenClaw 內建了微軟免費的 Edge TTS 文字轉語音服務，不需要額外的 API Key 就能用！

除了 Edge TTS，OpenClaw 還支援 OpenAI TTS、ElevenLabs 等其他 TTS 引擎。但 Edge TTS 免費且支援多種語言和聲音，對大多數人來說完全夠用了。常用的中文聲音包括 zh-CN-XiaoxiaoNeural（女聲）、zh-CN-YunxiNeural（男聲）等，完整的 TTS 配置可以參考官方文件：https://docs.openclaw.ai/tools/tts

首先，在代理的工具管理中開啟 `TTS`（文字轉語音工具）和 `MESSAGE`（訊息傳送工具）並儲存。TTS 負責把文字轉成語音檔案，MESSAGE 負責把語音檔案傳送給你。

![](https://pic.yupi.icu/1/1773903118851-c854ccc6-39b0-43ca-936e-6c848fd80caa.png)

注意，還需要做一些配置，否則生成的音訊檔案可能為空！

我們要指定 TTS 使用 Edge 引擎、並設定中文語音。

開啟 OpenClaw 的核心配置檔案 `openclaw.json`，追加這段配置：

```json
"messages": {
  "tts": {
    "auto": "off",
    "provider": "edge",
    "edge": {
      "enabled": true,
      "voice": "zh-CN-XiaoxiaoNeural",
      "lang": "zh-CN"
    }
  }
}
```

也可以直接在終端輸入下列命令來配置：

```bash
openclaw config set messages.tts.edge.voice "zh-CN-XiaoxiaoNeural"
openclaw config set messages.tts.edge.lang "zh-CN"
openclaw gateway restart
```

開啟工具並完成配置後，試一試：

```markdown
請用語音跟我打個招呼："魚皮系狗"
```

小龍蝦呼叫 TTS 工具獲得了語音檔案，但是 AI 就卡在這裡了，大機率不會把音訊檔案傳送給你：

![](https://pic.yupi.icu/1/1773899122840-7c362884-6949-4caa-bced-b3763b3d09bc.png)

因為 TTS 只負責文字轉語音，如果要把語音檔案以「語音氣泡訊息」的方式傳送給飛書，還必須控制語音檔案的輸出格式為 `.opus` 格式。

飛書的底層程式碼是這樣判斷的：只有副檔名為 `.opus` 的音訊，才會以語音氣泡訊息的方式傳送，否則只會當作檔案附件。

![](https://pic.yupi.icu/1/1773899350094-794b0801-223a-4674-9481-6236df070bbd-20260319211755133.png)

可以跟小龍蝦說下面這句話，這是我目前跑出來成功率最高、配置最快的方法：

```markdown
如果要發語音訊息，必須執行以下步驟：
1. 先用 TTS 工具生成音訊（會得到一個 MEDIA: 路徑）
2. 執行 ffmpeg 命令將音訊檔案轉為 .opus 格式（首次需安裝）
3. 呼叫 message 工具傳送 .opus 檔案，從而讓我透過飛書收到語音氣泡訊息
請先用語音跟我打個招呼："魚皮系狗"
如果任務正常執行，把這套流程儲存到長期記憶中。
```

![](https://pic.yupi.icu/1/1773902948904-9c6ab1ed-537d-4e1b-9f90-ce9af94ab9a9.png)

如果命令執行卡住，可能是 ffmpeg 下載太慢了，可以到 [官網](https://ffmpeg.org/download.html) 手動下載。

發完這條訊息後，記憶檔案也更新了，下次傳送語音就非常方便了：

![](https://pic.yupi.icu/1/1773902998684-9a548ed4-0b11-4012-b176-b09c0976c5b3.png)

爽用！

![](https://pic.yupi.icu/1/1773903216786-c30204ef-e51d-4d41-a6da-5d0ac4bc4d84.png)

對了，OpenClaw 在聊天中還支援 `/tts` 斜槓命令來控制語音行為（比如 `/tts on`、`/tts off`），但我感覺不是很好用，一般也不用每句話都回復語音，需要的時候直接跟 AI 說 “發語音” 就好了。



## 多媒體訊息傳送

除了語音，OpenClaw 還支援透過各個聊天渠道傳送圖片、音訊、影片、檔案等多媒體訊息。

不過要注意，不同聊天渠道對多媒體的支援情況是不一樣的。比如飛書支援傳送圖片和語音，WhatsApp 支援傳送圖片、音訊和影片，QQ 的多媒體支援又有自己的一套規則。所以你在用的時候可能會遇到有些格式發不出去的情況，這很正常。

如果傳送多媒體不成功，不用自己到處翻文件，可以直接讓小龍蝦自己去研究！它會讀取對應渠道的技能文件來學習具體的傳送方法。比如你可以跟它說：

```markdown
幫我研究一下怎麼透過飛書傳送圖片，然後發一張測試圖片給我看看。
```

小龍蝦搞明白之後，推薦讓它把學到的方法儲存為技能或者寫入長期記憶。這樣以後再發多媒體訊息就順暢多了，不用每次都重新摸索。關於技能系統的用法，可以閱讀本教程的《10 Skills 技能系統》。



## 寫在最後

學會了工具管理和多媒體能力，接下來我們來學習給小龍蝦裝技能擴充套件包，讓它能做更多事情。




## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)
