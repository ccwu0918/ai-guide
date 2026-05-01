# OpenClaw 記憶管理與成本控制

> 管理 AI 的記憶、用 Git 備份、省錢技巧大全

你好，我是魚皮。

養龍蝦時間長了，你會發現兩個問題：一是小龍蝦的記憶越來越亂，二是大模型的賬單越來越高。

這篇教程教你怎麼管理記憶、備份配置、控制成本。



## 記憶系統

OpenClaw 的記憶系統是基於純 Markdown 檔案的，非常直觀。

主要有兩層記憶：

1. 長期記憶 `MEMORY.md`：存放持久的重要資訊，比如使用者偏好、關鍵決策、重要流程，這個檔案會在每次會話開始時載入。
2. 每日日記 `memory/YYYY-MM-DD.md`：每天一個檔案，記錄當天的對話要點和執行筆記，AI 會在會話開始時載入今天和昨天的日記。

你可以在 Web 控制檯的代理模組中檢視這些記憶檔案，也可以直接到 `~/.openclaw/workspace/` 目錄下用文字編輯器開啟檢視。

![](https://pic.yupi.icu/1/image-20260319205651111.png)

如果想讓小龍蝦失憶，方法也很簡單：刪除對應的記憶檔案就好了。

比如刪掉 `MEMORY.md` 就會清空長期記憶，刪掉 `memory/` 目錄下的日記檔案就會清空對應日期的記憶。當然也可以直接跟小龍蝦說 “把你的記憶檔案清空”。

你還可以透過命令列來管理記憶：

- `openclaw memory list`：檢視所有記憶檔案列表
- `openclaw memory show`：檢視記憶檔案的具體內容

如果你想最佳化記憶管理的質量，可以安裝 ontology 技能，它會幫你的小龍蝦建立一個結構化的本地知識圖譜，讓記憶更有條理，而不是一股腦全塞在一個檔案裡。

![](https://pic.yupi.icu/1/1773915071507-4fb69789-7878-4ec4-b369-b08b01ac4003.png)



## Git 管理配置檔案

養龍蝦的過程中，很容易出現一些問題，比如不小心改錯了檔案、把龍蝦人格損壞了等等。因此建議利用 Git 程式碼版本控制工具來託管整個 `.openclaw` 目錄。

很多非程式設計師朋友應該是不瞭解 Git 的，建議直接讓一個靠譜的 AI 程式設計工具（比如 Claude Code 或者 Cursor）幫你做：

```markdown
你是 OpenClaw 專家，我正在學習使用 OpenClaw，請你完整分析官方文件 https://docs.openclaw.ai/，然後幫我利用 Git 來管理 ~/.openclaw 目錄，起到備份的作用，注意要合理忽略一些不需要管理的檔案
```

![](https://pic.yupi.icu/1/1773914094278-80768659-0a00-4b26-83a2-04b224c47e1b.png)

可以看到重要配置被 Git 託管了，出了問題可以快速還原：

![](https://pic.yupi.icu/1/1773914374267-a3ddcc59-2f29-4a19-8301-4bb06337e205.png)

當然你也可以自己進入目錄，手動執行命令完成初始化。

需要注意的是，一定要先配好 `.gitignore` 檔案來忽略不需要管理的內容（比如瀏覽器資料、媒體檔案、會話日誌、node_modules 等），避擴音交太多無用檔案。

![](https://pic.yupi.icu/1/1773914135096-0cc52de9-0731-4b2e-a0d4-19c1a9bc91d3-20260319211801170.png)

核心步驟如下（看不懂的同學跳過即可）：

```bash
cd ~/.openclaw

# 先建立 .gitignore 檔案，忽略不需要管理的內容
cat > .gitignore << 'EOF'
# 瀏覽器資料（體積大，可重建）
browser/
# 媒體檔案（收發的圖片/音訊/影片）
media/
# 日誌檔案
logs/
# 配置備份檔案
openclaw.json.bak
# node_modules
**/node_modules/
# 會話資料（頻繁變化的對話記錄）
agents/*/sessions/*.jsonl
agents/*/sessions/sessions.json
# 更新檢查狀態
update-check.json
EOF

# 初始化 Git 倉庫並首次提交
git init
git add .
git commit -m "init: OpenClaw 配置備份"
```

注意，這個目錄自己看就好了。千萬別這麼好心，開源自己的 OpenClaw 目錄到 GitHub 上，搞不好把你的各種敏感配置（API Key、App Secret 之類的）全洩露出去。

已經完成一次 Git 提交之後，就可以讓小龍蝦幫你定時提交備份了：

```markdown
我已經用 Git 託管了整個 openclaw 的工作目錄，請你建立定時任務，之後每天凌晨 3 點進行一次提交，起到備份的作用
```

![](https://pic.yupi.icu/1/1773914556135-f5b13e85-b9a9-4923-9100-d169b64dc37a.png)

之後每天凌晨小龍蝦會自動幫你提交一次配置快照，再也不怕 AI 手滑把配置搞崩了，隨時可以透過 Git 回滾到任意歷史版本。



## 成本控制技巧

注意，養龍蝦是要花錢的！大模型 API 按照 Token 收費。所以這裡魚皮再把省錢技巧彙總一下：

1. 選對模型：不需要每次都用最貴的模型，簡單聊天用國產免費模型（如智譜 GLM），複雜任務再切到能力更強的模型
2. 及時開新會話：聊完一個話題就 `/new`，避免上下文越積越多
3. 善用壓縮：對話太長了就 `/compact` 一下，能大幅減少 Token 消耗
4. 開啟快速模式：`/fast on` 讓 AI 回答更簡短
5. 關閉不需要的技能：技能越多，注入到上下文的資訊越多，Tokens 消耗越大
6. 子智慧體用便宜模型：`openclaw config set agents.defaults.subagents.model "zai/glm-4.7-flash"`
7. 心跳降頻或關閉：如果用不到心跳功能，設定 `agents.defaults.heartbeat.every: "0m"` 關閉
8. 檢視用量：`/usage full` 或 `/status` 隨時關注 Token 消耗情況
9. 定時任務用獨立會話 + 便宜模型：避免定時任務載入整個主會話的上下文

除了上面這些日常省錢技巧，還有幾個值得了解的進階資訊：

- API 費用參考：不同模型的價格差異很大，建議參考 [OpenClaw 官方的 API 費用文件](https://docs.openclaw.ai/reference/api-usage-costs)，進一步瞭解計費規則
- 提示詞快取（Prompt Caching）：部分模型支援提示詞快取，可以顯著降低重複內容的費用。如果你的使用場景中有大量重複的系統提示詞，這個功能能幫你省不少錢。參考：https://docs.openclaw.ai/reference/prompt-caching
- Token 消耗追蹤：想知道你的龍蝦每天到底花了多少錢，可以參考官方的用量追蹤文件：https://docs.openclaw.ai/concepts/usage-tracking



## 問題自檢和修復

OpenClaw 提供了很多命令和方法，可以幫你檢查 OpenClaw 的狀態，尤其是在小龍蝦抽抽、無法執行的時候。

1）優先執行 `openclaw doctor` 健康檢查，它會幫你掃描配置、頻道、模型認證等各方面的問題：

![](https://pic.yupi.icu/1/1773912981576-08e5d6a4-56e0-41bc-9780-f1b05a4d6cf0.png)

然後輸入 `openclaw doctor --fix` 可以自動修復發現的問題。

2）`openclaw status` 檢視執行狀態，包括閘道器、頻道、會話等所有資訊：

![](https://pic.yupi.icu/1/1773913110926-ce687f86-2724-4d4f-9b43-3e8de19d84b5.png)

3）`openclaw gateway start|stop|restart` 管理閘道器服務。

很多時候無法開啟網頁控制檯、或者沒辦法和小龍蝦對話，大機率是閘道器服務掛了。

需要注意幾種不同命令的區別：

- `gateway run` 是在前臺執行（關閉終端就停了）
- `gateway start` 是作為後臺服務執行（關閉終端也不影響）
- `gateway restart` 是重啟後臺服務

日常使用中，改完配置後 `restart` 一下就好。

4）`openclaw dashboard` 開啟 Web 管理介面，可以檢視對話記錄、技能管理、頻道管理、Agent 狀態等。

前面我們也看到了，尤其是在玩多智慧體的時候，瞭解 AI 的狀態還是很重要的。萬一某個 AI 執行卡住了，可以看下它到底在幹神魔：

![](https://pic.yupi.icu/1/1773913207492-38e2fea6-75d8-4577-ac3a-54322a52d552.png)

5）`openclaw logs --follow` 實時檢視日誌。

估計大多數同學用不到，真出了控制檯搞不定的問題後，再來看實時日誌，然後把日誌發給 AI，讓 AI 幫你分析和解決吧~

![](https://pic.yupi.icu/1/1773913345897-7e4a61cb-c2f1-488d-a469-c10bbfee496c.png)

對了，如果你還能跟小龍蝦對話，也可以直接讓它自我檢查和修復問題。這也是使用 AI 智慧體的小技巧：完成任務後讓 AI 檢查自己的輸出，找邊界情況和潛在問題。

比如你可以跟它說：幫我檢查一下 OpenClaw 的配置有沒有什麼問題。

它會自己去讀配置檔案、驗證連線狀態、修復異常，不過能不能修復成功，就看運氣了。



## 寫在最後

配置備份好了，錢包也保住了。最後一篇正式教程，我們來聊聊安全，這可能是最重要的一篇。




## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)
