# OpenClaw Skills 技能系統

> 給 AI 裝能力擴充套件包，從發現到安裝全流程

你好，我是魚皮。小龍蝦本體只有基礎能力（讀寫檔案、執行命令等），裝上不同的技能（Skills）之後，就能解鎖各種專業能力，比如搜尋網頁、生成圖片、製作 PPT 等。這篇教程帶你全面瞭解 OpenClaw 的技能系統。



## 技能是什麼

技能（Skills）就是給 AI 準備的能力擴充套件包。

技能本質上是存放在特定目錄下的資料夾，裡面包含一個 `SKILL.md` 說明檔案和可選的資原始檔。AI 在需要時會自動載入對應的技能來增強自己。

![](https://pic.yupi.icu/1/1769306811193-2ee3acbc-5e36-46c2-8d08-b2682494fb56-20260319203136449-20260319211755624.png)

技能可以安裝在多個位置：

- `~/.openclaw/workspace/skills`：小龍蝦專用的技能目錄，只有你的小龍蝦能用
- `~/.agents/skills`：通用目錄，其他 AI 工具（比如 Cursor、Claude Code）也能自動識別和使用這裡的技能



## 使用內建技能

可以在「技能模組」全域性檢視 OpenClaw 識別到的技能，包括 OpenClaw 內建的技能、透過外掛安裝的第三方技能、本地目錄中的技能等等。

![](https://pic.yupi.icu/1/1773903414947-88e1ba5b-9175-4edd-83a7-12576d4c6837.png)

更常用的是直接檢視和管理 Agent 的技能。

注意，技能不是越多越好！一定要按需選用！每開啟一個技能，它的說明檔案就會被注入到 AI 的上下文中，技能越多消耗的 Tokens 越大。

建議先把所有內建的技能關閉，絕大多數技能是用不到的，可以節省一些 Tokens：

![](https://pic.yupi.icu/1/1773903582687-707de23b-3d10-49d4-8f73-9f478e8f6396.png)

當你需要用到什麼功能的時候，先到技能模組搜一下有沒有內建的技能。

比如我們想用 AI 生圖，可以搜尋 image，開啟內建的 nano-banana-pro 技能：

![](https://pic.yupi.icu/1/1773903856315-049df76b-0598-4242-b869-38fdff1d6bb0.png)

需要從 [Google AI Studio](https://aistudio.google.com/api-keys) 獲取到 Nano Banana 的 API Key：

![](https://pic.yupi.icu/1/1773903949511-103f8152-1037-4b5a-8ab2-47dec507b38a.png)

然後確保給小龍蝦（代理）開啟了這個技能，注意技能的狀態要是 `eligible` 可用的：

![](https://pic.yupi.icu/1/1773903996762-ba02b49c-21bd-4d40-832c-047ca00afaaa.png)

建議剛開始在對話中提到技能名稱，引導 AI 使用技能。

比如我這裡告訴 AI 使用 Banana 技能生圖，甚至還可以給 AI 傳送圖片哦：

```markdown
用 Banana 生成一張讓這個人把你做成蒜蓉小龍蝦的圖片，並且讓我在飛書直接看到圖片，不要廢話！
注意飛書中傳送圖片要用 filePath 引數指定完整的檔案路徑
```

效果還不錯吧！

![](https://pic.yupi.icu/1/1773905734323-1bc618de-e9ee-40fa-aa76-9f24e4dce8ba.png)

以後我在外面拍照之後，可以直接用手機發給小龍蝦，讓它幫我瞬間生成牛唄轟轟的圖片~

這次我們透過斜槓命令觸發指定技能，直接使用 `/{技能名稱}` 就好：

```markdown
/nano-banana-pro 把後面那哥們移除掉，順便幫我開個美顏，一隻眼睛變成永恆萬花筒寫輪眼
```

![](https://pic.yupi.icu/1/1773909786585-505abfbf-0739-4fd5-9ade-1700d497d43d.png)

老規矩，如果沒傳送圖片成功，讓它注意 **飛書中傳送圖片要用 filePath 引數指定完整的檔案路徑**：

![](https://pic.yupi.icu/1/1773909818751-37fe7227-44ec-4691-aa86-4d9b193c7b4e.png)

阿媽忒勒斯！

生成失敗的話，可能是因為你家網路的原因，可以改為用國產的大模型生圖。



## 發現優質技能

除了使用內建的技能，我們還可以到很多渠道發現優質技能：

- [ClawHub](https://clawhub.ai/)：OpenClaw 官方技能商店，技能最全、更新最快
- [skills.sh](https://skills.sh/)：Vercel 提供的技能搜尋引擎，方便按關鍵詞搜尋
- GitHub：很多優秀技能開源在 GitHub 上，搜尋關鍵詞就能找到

![](https://pic.yupi.icu/1/1773906407188-7e5a8c3f-2af4-41a8-9bad-0782f3e61b8f.png)

當然，還有很多獲取實用技能的渠道，像魚皮的 AI 導航網站 ai.codefather.cn 也給大家推薦了一波技能。

![](https://pic.yupi.icu/1/image-20260319203453714.png)

**一定要注意技能的安全性！**

儘量安裝開源的、可信的、Star 多的、開源社群中反饋良好的。

這裡給大家推薦幾個適合小龍蝦的技能：

+ 自主進化技能：[self-improving-agent](https://clawhub.ai/pskoett/self-improving-agent) 自動捕獲學習記錄、錯誤和糾正，實現 AI 代理的持續自我改進
+ 網頁搜尋技能：[Multi-Search-Engine](https://clawhub.ai/gpyAngyoujun/multi-search-engine)（無需 API Key，有國內 + 國外的搜尋引擎），或者 [Tavily Search](https://skills.sh/tavily-ai/skills/search)（需要 API Key，每月 1,000 次搜尋，適合搜尋國外最新內容）
+ 安全審查技能：[Skill Vetter](https://clawhub.ai/spclaudehome/skill-vetter) 安裝新技能前幫你檢查技能檔案是否安全可信，防止安裝到惡意技能
+ 辦公技能，比如 [Anthropic 官方開源](https://github.com/anthropics/skills/tree/main/skills) 的 docx、pptx、xlsx、pdf 處理技能

![](https://pic.yupi.icu/1/1773906670980-d5183370-9b81-423d-a83b-ee69efd0ab5f.png)

OpenClaw 內建的 clawhub 技能、還有 find-skills 這兩個 “用於發現和安裝其他技能” 的技能，我建議謹慎給龍蝦使用，萬一龍蝦搜尋到一些不安全的技能，然後自己安裝了就不好了。

我們可以人工用這些工具發現技能，確定沒問題後，再安裝。

![](https://pic.yupi.icu/1/1773906803293-8359930b-e6a6-41a8-8332-722ed3d60add.png)



## 安裝技能

以 Multi-Search-Engine 為例，我們演示一下怎麼安裝技能，會講解多種方式。

但無論哪種方式，安裝原理都是把技能檔案從遠端下載到本地存放技能的 skills 目錄中。


### 方式一：直接下載壓縮包

![](https://pic.yupi.icu/1/1773907955818-72164258-2d53-4776-9b7d-be2d3007c9e5.png)

你可以把解壓後的目錄放到 `~/.agents/skills` 這個各家 AI 程式設計工具都能自動識別的通用技能目錄，這樣其他 AI 程式設計工具也能使用這個技能。

如果你只希望小龍蝦能使用，可以放到 `~/.openclaw/workspace/skills` 目錄下，這是小龍蝦的工作空間。

![](https://pic.yupi.icu/1/1773908286947-ada86aaa-45fb-4827-9aaf-9c18946b1eb2.png)

然後就能在「代理」或者「技能」模組中看到識別出的工作區技能了，開啟並儲存，就能在對話中使用了：

![](https://pic.yupi.icu/1/1773909718594-9c952fd2-4c3f-418c-bacc-cd2deef62d8e.png)

比如讓它幫我搜尋魚皮程式設計導航相關的資訊：

```plain
/multi-search-engine 全網搜尋魚皮程式設計導航相關的資訊
```

![](https://pic.yupi.icu/1/1773910174478-a550d8ef-b8da-4bee-b98d-5b5fb24b5d98.png)



### 方式二：透過 clawhub 命令列安裝

先安裝 clawhub 命令列工具，它是 OpenClaw 官方技能商店的客戶端，可以一行命令搜尋和安裝技能：

```bash
npm i -g clawhub
```

![](https://pic.yupi.icu/1/1773908430207-85b5fc08-ea68-40bc-b022-c071ee4961b1.png)

然後用 clawhub 安裝，引數為你在 clawhub 看到的技能名稱（別輸錯了）：

```bash
clawhub install multi-search-engine
```

![](https://pic.yupi.icu/1/1773908486565-2b33d9a9-271d-40e7-971d-196bc25ce971.png)



### 方式三：透過 NPX 工具安裝

首推 Vercel 官方提供的 **NPX 工具** 來安裝技能，適合有 GitHub 開源倉庫地址的技能。

可以先到 Vercel 官方的技能網站 [skills.sh](https://skills.sh/) 或者 GitHub 上找到你要安裝技能的開源倉庫地址和技能名稱。

比如安裝 agent-browser 這個讓 AI 操作瀏覽器的技能：

![](https://pic.yupi.icu/1/1773909349147-c440dc8f-1b46-4152-9fed-b7bd5665afc0.png)

只要輸入一行命令，就能自動安裝指定技能了：

```bash
npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser
```

可以選擇安裝到 OpenClaw 或者其他 AI 程式設計工具的路徑下：

![](https://pic.yupi.icu/1/1773909507303-d70f073c-c4a8-4252-b1fb-4dc3b91aaddb.png)

注意，不建議透過跟龍蝦對話，讓它自己安裝技能。還是那句話，AI 做事是有隨機性的，有些明確可完成的任務自己做更穩定。



## 讓 AI 自己創造技能

除了安裝別人做好的技能，你還可以讓 AI 自己建立新技能，將解決方案沉澱為可複用的技能包，龍蝦越養越聰明。

> 建議先安裝 Anthropic 官方的 [skill-creator](https://skills.sh/anthropics/skills/skill-creator) 技能，能夠幫你建立出更規範的、更懂 AI 的技能。

比如我之前接入飛書後，發現 AI 拍了照片卻不會發到飛書。於是我引導小龍蝦自己探索飛書多媒體傳送的方法：

```markdown
飛書支援給使用者傳送圖片、檔案、音訊、影片並直接瀏覽，請你詳細瞭解具體的傳送方法，並且必須要把需要傳送的檔案放到 workspace 工作空間中。你必須記住這些方法，之後快速地給我傳送想要的內容。
```

AI 會去讀取飛書技能文件，學習怎麼傳送多媒體訊息。

![](https://pic.yupi.icu/1/1773301372382-01640db1-9808-444a-97d7-10da63ff7f25-20260319211201488-20260319211757439.png)

這次不僅成功傳送了圖片，而且 AI 還很有學習精神，自己去研究有沒有更優的方案：

![](https://pic.yupi.icu/1/1773301554270-8f1edb5d-2c7f-4f06-8504-98ab6da15a7f-20260319211211557-20260319211757574.png)

甚至自己建立了一個 `feishu-media` 技能，之後傳送多媒體就更絲滑了。

這就是 AI 的厲害之處：只要你下命令，它就能自己研究問題、自己解決問題，還能把解決方案沉澱成可複用的技能，下次直接用。

![](https://pic.yupi.icu/1/1773301599117-1bdfaf37-2567-43e9-a964-0d5d95804af4-20260319211221673-20260319211757618.png)



## 寫在最後

學會了技能系統，接下來我們來看定時任務和自動化，讓小龍蝦定時幫你巡檢、彙報。




## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)
