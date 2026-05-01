# OpenClaw 多 Agent 協作

> 組建龍蝦軍團，子 Agent 和多 Agent 玩法全解析

你好，我是魚皮。這應該是大家最期待的玩法了 —— 搞個龍蝦軍團！OpenClaw 支援兩種多智慧體模式：子 Agent 和多 Agent。這篇教程帶你全面瞭解它們的用法和區別。



## 子 Agent（最常用）

子 Agent（Subagent）你可以理解成臨時外包。

主龍蝦是隊長，遇到可以並行的任務時，臨時派出幾隻 “外包小龍蝦” 去幹活，幹完了再回來彙報結果，然後外包蝦就下班走人了。



### 什麼是子 Agent

子智慧體有幾個重要特點：

- 並行執行：多個子智慧體可以同時幹活，互不阻塞，效率翻倍
- 上下文隔離：每個子智慧體有自己獨立的上下文，不會汙染主龍蝦的對話
- 自動彙報：幹完活會自動把結果彙報給主龍蝦，主龍蝦再整合



### 使用子 Agent

使用子智慧體的方法很簡單，有兩種方式。

**方式一：對話觸發**

可以直接在對話中提到 “用子智慧體去做”，AI 會自己判斷要不要使用 OpenClaw 內建的 `sessions_spawn` 工具，然後派子智慧體去幹活。

比如我跟小龍蝦說：

```markdown
我想獲取魚皮 2 個網站的截圖，請你派 2 個子智慧體分別完成。
- mianshiya.com
- codefather.cn
```

可以看到，AI 成功派了多個子智慧體，它們會並行執行，互不阻塞。比起一個龍蝦自己幹活，更快速地完成了任務：

![](https://pic.yupi.icu/1/1773911571363-24678c6c-7980-4fbd-ad89-a53c72a4eea2.png)

可以在 Web 控制檯中，檢視到更詳細的子智慧體資訊：

![](https://pic.yupi.icu/1/1773911504019-eed87a8f-228c-4f7d-98e6-0d510b8e197d.png)



**方式二：斜槓命令觸發**

使用 OpenClaw 的斜槓命令 `/subagents spawn`，相當於你親自下令派一個子智慧體去幹活，能更穩定地觸發子智慧體機制。

比如讓小龍蝦幫我擷取自己的 3 個網站的圖片，拼接到一起然後傳送給我：

```markdown
幫我擷取 3 個網站，並且把 3 張圖橫著拼接到一起然後傳送給我
/subagents spawn 截圖 mianshiya.com
/subagents spawn 截圖 codefather.cn
/subagents spawn 截圖 laoyujianli.com
```

可以看到，建立了 3 個子智慧體，然後由主智慧體彙總截圖並拼接，快速完成了任務：

![](https://pic.yupi.icu/1/1773911853354-df98768b-845d-4817-8429-c64196d050af.png)

對了，還有個省錢技巧，子智慧體可以用便宜的模型，還能單獨設定回覆模式。

```bash
# 全域性設定子智慧體的預設模型
openclaw config set agents.defaults.subagents.model "zai/glm-4.7-flash"

# 或者在對話中臨時指定
/subagents spawn --model zai/glm-5 --thinking high 幫我寫一篇技術報告
```



### 管理子 Agent

為什麼要管理子智慧體？

因為子智慧體派出去之後不一定乖乖幹活，可能跑偏了、卡住了、或者你想看看它具體做了什麼。這時候就需要檢視、指揮、甚至幹掉它們。

建議先開啟 `/verbose full`，否則在飛書裡可能看不到子智慧體的 runId，有了這個 id 我們後續能控制這個子智慧體：

![](https://pic.yupi.icu/1/1773910849723-bd057770-21cd-4407-95f7-419b1df60d13.png)

來試一試，比如我讓 AI：

```markdown
幫我派 2 個子智慧體，每個智慧體都睡覺 3 分鐘，其他什麼事都不用做。
```

可以看到每個子智慧體的 runId：

![](https://pic.yupi.icu/1/1773912277450-01769f38-df8d-4649-8dc0-a03374ff1d6e.png)

子智慧體管理常用命令如下，我們依次來玩一玩：

| 命令              | 作用                       | 用法示例                    |
| ----------------- | -------------------------- | --------------------------- |
| `/subagents list` | 檢視所有子智慧體           | `/subagents list`           |
| `/subagents kill` | 終止子智慧體               | `/subagents kill <id>`      |
| `/steer`          | 給正在執行的子智慧體發指令 | `/steer <id> 換個方向做`    |
| `/kill`           | 立即終止子智慧體（無確認） | `/kill <id>` 或 `/kill all` |

1）`/subagents list` 檢視正在執行的子智慧體，還能看到最近執行完成任務的子智慧體：

![](https://pic.yupi.icu/1/1773912142552-f602fb3f-5f16-4b29-9b0d-738feb2f5267.png)

2）`/subagents info <runId>` 檢視某個子智慧體的詳情：

![](https://pic.yupi.icu/1/1773912317629-38f77623-2de4-4551-83a5-6b9bcee37abc.png)

3）`/subagents steer <runId> <新指令>` 給正在跑的子智慧體發新指令，改變任務方向：

![](https://pic.yupi.icu/1/1773912714239-491ab747-8a12-412c-b378-fbdece143472.png)

4）`/subagents kill <runId>` 停掉某個子智慧體，`/subagents kill all` 停掉當前會話所有子智慧體：

![](https://pic.yupi.icu/1/1773912467265-41f9eae5-c511-475f-b7a6-d9bd1a79b3de.png)

其實執行 `/stop` 幹掉主對話後，子智慧體也會全部停掉。



## 多 Agent

多 Agent 和子 Agent 不一樣，相當於你養了多隻 **獨立的** 小龍蝦，每隻龍蝦有自己獨立的工作空間、身份人設、記憶和會話。

你可以讓不同的 Agent 幹不同的活，比如一隻專門寫程式碼、一隻專門稽核程式碼、一隻專門管理家族群。



### 建立新的 Agent

先執行命令來建立一個 Agent，名稱為 `review`，專門負責稽核程式碼：

```bash
openclaw agents add review
```

按照引導選擇配置就好，複用主代理的鑑權配置（不用再配置一通 API Key 了），其他的都選擇 No：

![](https://pic.yupi.icu/1/1773915876829-14dfafb6-adff-4c50-8a31-e61e926c2b0c.png)

同樣的方法，再建立一個程式設計小龍蝦：

```bash
openclaw agents add coding
```

每個小龍蝦對應的工作空間都是獨立的：

![](https://pic.yupi.icu/1/1773916015240-38dddad4-4b5f-44bc-b02c-787900dac6e3.png)

可以在 Web 控制檯檢視和管理各個小龍蝦：

![](https://pic.yupi.icu/1/1773916087882-9f03ebe8-196a-43d0-bb49-59a8e2a02e05.png)



### 配置路由

接下來需要配置「路由」，也就是 “誰的訊息” 發給 “哪個 Agent” 來處理。

先透過飛書提供的工具快速建立 2 個飛書機器人：

![](https://pic.yupi.icu/1/1773916506635-c38e3d93-ef3f-40ad-a98b-5b10477e9fa5.png)

![](https://pic.yupi.icu/1/1773916793595-feb75a64-9441-418b-8b5c-226656cf3418.png)

跟之前接入飛書一樣，需要到管理後臺稽核應用並透過：

![](https://pic.yupi.icu/1/1773916847944-67746bd5-0cb9-46ab-89c8-2b4e8f11dc6b.png)

然後到了最複雜的部分，建議先把當前的 `openclaw.json` 配置檔案備份一下。

一定要仔細看下面幾張圖改動的部分，主要是在 `agents.list` 中新增新 Agent 的資訊、在 `channels.feishu.accounts` 中新增新機器人的 AppID 和 AppSecret、以及新增 `bindings` 路由繫結：

![](https://pic.yupi.icu/1/1773918646676-cae06929-bce0-4731-881b-b4205baaa662.png)

![](https://pic.yupi.icu/1/1773918775330-36cdfc1f-ddff-41cc-91f6-ae339734205c.png)

![](https://pic.yupi.icu/1/1773918835278-e601c162-e1fe-44ed-a2a6-8dac32a726c7.png)

飛書官方有提供示例的配置檔案，可以到官方文件複製：

![](https://pic.yupi.icu/1/1773919164569-1c1b0835-99cf-4348-ba2b-767a298a4eb2.png)

注意編寫配置檔案的過程中，不要多加逗號、也不要新增中文註釋。建議在 VSCode 等程式碼編輯器中開啟，會自動幫你做格式校驗。

改完配置後，重啟閘道器：

```bash
openclaw gateway restart
```

![](https://pic.yupi.icu/1/1773917505810-3901c771-8ce7-4209-9a8c-a2f8cc5e5934.png)

然後就可以愉快地跟多隻小龍蝦對話了~

![](https://pic.yupi.icu/1/1773918903905-912e308e-98a8-4af7-8947-14afb3d66157.png)

一樣的，先初始化小龍蝦，我這裡就隨便說 2 句了：

```markdown
你是魚皮的編碼蝦，你的工作就是編寫程式碼
你是魚皮的稽核蝦，你的工作就是稽核程式碼
```

![](https://pic.yupi.icu/1/1773918978670-76a33350-3221-4727-9f0f-db9c57d22390.png)

然後你就可以給它們不同的任務，讓多隻小龍蝦同時幹活了：

![](https://pic.yupi.icu/1/1773919067863-a9939ddc-6f28-458c-8ee2-14e51506be97.png)



### 多個 Agent 共享上下文協作

如果你想讓多個機器人之間共享記憶、或者共同完成一個任務，最簡單粗暴的方法就是讓它們共享記憶檔案，比如把主 Agent 的長期記憶檔案 `MEMORY.md` 和主人資訊 `USER.md` 複製給其他的 Agent。

還有更靈活的方法，開啟 A2A（agent-to-agent）通訊，讓 Agent 之間可以互相發訊息。

執行下面這幾條命令：前兩條開啟 A2A 通訊並設定允許哪些 Agent 互相聯絡，第三條將會話可見性設為 `all`，讓 Agent 能看到其他 Agent 的會話（預設只能看到自己的），最後重啟閘道器讓配置生效。

```bash
openclaw config set tools.agentToAgent.enabled true
openclaw config set tools.agentToAgent.allow '["main","coding","review"]' --strict-json
openclaw config set tools.sessions.visibility "all"
openclaw gateway restart
```

![](https://pic.yupi.icu/1/1773919714069-d243dd46-37f4-4d42-92bd-7399320bbea6.png)

還要告訴主 Agent “能夠透過 OpenClaw 內建的工具找其他 Agent 幹活”。需要修改主 Agent 的 `AGENTS.md`，這是專門教 Agent 如何幹活的檔案，需要增加多 Agent 協作的說明。

但是這種方式有個不足之處，雖然任務成功派發給了其他 Agent，但主 Agent 並不能及時獲取到其他 Agent 的回應，可能仍然會自己幹活。

![](https://pic.yupi.icu/1/1773920728472-010ba8fd-43fc-452d-8048-1a415a6f523b-20260319211759809.png)

實際上其他 Agent 已經在幹活了：

![](https://pic.yupi.icu/1/1773920767310-c3fab963-ac19-457d-9801-9b287476fc17-20260319211759867.png)

這裡有個細節：`sessions_send` 是同步等待的，適合快速問答；而 `sessions_spawn` 是非同步的，對方幹完活會自動彙報回來，適合耗時任務。所以正確的做法是讓 Agent 根據任務複雜度選擇工具。

需要確保 main Agent 可以 spawn 派發任務到其他 Agent，執行下列命令：

```bash
openclaw config set 'agents.list[0].subagents.allowAgents' '["main","coding","review"]' --strict-json
openclaw gateway restart
```

在主 Agent 的 `AGENTS.md` 檔案末尾追加這段多 Agent 協作說明（裡面的 Agent 名稱和職責換成你自己的）：

```markdown
## 多 Agent 協作

你不是一個人在戰鬥！你可以找其他 Agent 幫忙。

### 可用的 Agent

| Agent ID | 名字 | 擅長什麼 |
|---|---|---|
| `coding` | 編碼蝦 | 寫程式碼、除錯、技術問題 |
| `review` | 稽核蝦 | 程式碼審查、方案評審、質量把關 |

### 怎麼找它們

根據任務複雜度選擇方式：

快速問答（幾秒能回）→ 用 `sessions_send`（A2A 對話）：
- `sessionKey` 填 `agent:<agentId>:main`
- `timeoutSeconds` 建議設 60

耗時任務（超過 30 秒）→ 用 `sessions_spawn`（派任務）：
- `agentId` 填目標 Agent 的 id
- `task` 填具體任務描述
- 對方幹完會自動彙報結果回來

### 注意事項

- 簡單問題用 sessions_send（快速同步），複雜任務用 sessions_spawn（非同步後臺）
- sessions_send 預設等 30 秒，複雜問題會超時，這時改用 sessions_spawn
- 收到結果後，總結給主人，不要原封不動轉發
- 不要同時找多個 Agent 做同一件事
```

![](https://pic.yupi.icu/1/1773921274064-96281e6c-8a37-4b4f-bfaf-280a5d0104c3.png)

這次，主 Agent 就可以給其他的小龍蝦派發任務了（類似子 Agent 模式）。你可以額外給其他龍蝦也進行類似的配置，讓多個龍蝦之間可以自由協作：

![](https://pic.yupi.icu/1/1773920953759-295a1ae9-64db-47ad-af1e-8e3351ebb6be.png)

能在 Web UI 看到派發的任務和執行過程：

![](https://pic.yupi.icu/1/1773921027498-fa442bd1-8458-48a9-8ae3-5f7dc416648c.png)



## 子 Agent 和多 Agent 的區別

簡單列舉一下兩者的核心區別：

| 對比項   | 子智慧體（Sub-Agent）  | 多 Agent                     |
| -------- | ---------------------- | ---------------------------- |
| 關係     | 同一個大腦派出的臨時工 | 多個獨立的大腦               |
| 工作區   | 共享主 Agent 的工作區  | 各自獨立的工作區、記憶、人格 |
| 生命週期 | 任務完成就結束         | 永久存在，一直線上           |
| 用途     | 並行幹活提效率         | 不同場景用不同人格/模型/許可權 |

對大多數朋友來說，子 Agent 就夠用了。多 Agent 更適合有多種使用場景、需要嚴格隔離的龍蝦熟練工。



## 寫在最後

龍蝦軍團組建好了！接下來我們來學習記憶管理和成本控制，讓你的龍蝦用得省心又省錢。




## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)
