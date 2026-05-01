# OpenClaw 接入 QQ 和飛書

> 把 OpenClaw 接入手機聊天軟體，隨時隨地養蝦

你好，我是魚皮。

安裝好 OpenClaw 之後，總不能每次都開啟電腦上的網頁控制檯才能跟小龍蝦對話吧？把它接入你常用的聊天軟體，掏出手機就能給龍蝦下達任務，這才是 OpenClaw 的正確使用方式。

這篇教程教你接入 QQ 和飛書兩大平臺。



## 接入 QQ

騰訊專門為 OpenClaw 搞了一個快捷接入通道，幾步就能搞定！

開啟 QQ 機器人 OpenClaw 接入頁面，用 QQ 掃碼登入：

> 指路：https://q.qq.com/qqbot/openclaw/index.html

![](https://pic.yupi.icu/1/image-20260310152123827.png)

點選「建立機器人」，直接秒出！

![](https://pic.yupi.icu/1/image-20260310152325274.png)

建立完成後，手機 QQ 立刻就會收到小龍蝦打招呼的訊息：

![](https://pic.yupi.icu/1/image-20260310153005879.png)

然後可以修改機器人的頭像、暱稱等資訊，給你的龍蝦起個好聽的名字吧~

![](https://pic.yupi.icu/1/image-20260310152409339.png)

接下來是最關鍵的一步。頁面上會顯示三條配置命令，你只需要依次複製這 3 條命令到終端（PowerShell）中執行就可以了。

注意命令中包含你的金鑰資訊，不要洩露給別人！

![](https://pic.yupi.icu/1/image-20260310152443829.png)

到終端中依次執行命令：

![](https://pic.yupi.icu/1/image-20260310152544861.png)

接入成功後，你可以在 OpenClaw 的網頁控制檯的「頻道」（Channels）板塊看到已經接入了 QQ 機器人渠道：

![](https://pic.yupi.icu/1/image-20260310152846134.png)

現在，掏出手機試試吧！

直接在 QQ 上給小龍蝦發訊息下達任務，比如讓它檢視電腦配置、或者幫你寫一篇文章。完成速度很快，而且支援 Markdown 格式輸出，閱讀體驗不錯：

![](https://pic.yupi.icu/1/image-20260310153115908.png)

如果你好奇它背後做了些什麼，可以在 OpenClaw 的網頁控制檯中檢視跟 QQ 機器人的完整對話記錄：

![](https://pic.yupi.icu/1/image-20260310152754120.png)



## 接入飛書

飛書有兩種接入方式。推薦使用更簡單的官方外掛方式，幾分鐘就能搞定；如果官方外掛不適用，也可以手動在飛書開放平臺建立機器人。



### 方式一：官方外掛掃碼接入（推薦）

官方提供了對接飛書的外掛，先在終端輸入一行命令安裝：

```bash
npx -y @larksuite/openclaw-lark-tools install
```

![](https://pic.yupi.icu/1/1773815583908-7eaec4f6-7f56-47f2-9e12-45d0d2a329ae.png)

然後直接在命令列中用飛書掃碼對接機器人（Windows 的 PowerShell 無法正常顯示二維碼，需要改為使用自帶的 CMD 命令列）。

透過手機操作來建立機器人就好，整個流程非常傻瓜式：

![](https://pic.yupi.icu/1/1773815929716-12c2bc15-90e2-4409-ac3f-c4cab84c1167.png)

操作完成後，在命令列能看到配置飛書機器人成功，在 OpenClaw 網頁控制檯的頻道模組也能看到新增了 Feishu 頻道：

![](https://pic.yupi.icu/1/1773815823665-dd4a0c51-09cb-4476-9173-e4a45b9de00f.png)

你會在飛書收到應用審批的訊息，進入管理後臺稽核即可：

![](https://pic.yupi.icu/1/1773815955358-857f8503-79c6-42bf-8938-c2f35eb64e0d.png)

點選稽核透過，透過後機器人會自動釋出上線：

![](https://pic.yupi.icu/1/1773816002775-07a84fbf-e296-4d46-bca8-da9d0eb73a74.png)

然後在飛書搜尋你的機器人名稱：

![](https://pic.yupi.icu/1/1773816125248-a6eb33dd-986e-4aa9-8f81-29dc7ca6642f.png)

進入聊天，先傳送 `/feishu auth` 授權，傻瓜式操作：

![](https://pic.yupi.icu/1/1773816193729-5290671b-02be-4cae-9f44-a2efce40c77e.png)

然後跟小龍蝦打個招呼，能夠成功收到小龍蝦回覆的訊息：

![](https://pic.yupi.icu/1/1773816269856-bd61502c-0b6d-4d75-aea1-810838cbe4d4.png)

飛書外掛還支援開啟流式響應，實現打字機效果。開啟終端，執行命令：

```bash
openclaw config set channels.feishu.streaming true
```

![](https://pic.yupi.icu/1/1773816381282-45c2d6e2-8c82-46d9-9682-0bfab7d0e1a2.png)

配置之後，體驗比之前好了不少：

![](https://pic.yupi.icu/1/1773816481362-bfbdd84f-8385-4174-8c81-34dbc2e0ee3b.png)



### 方式二：手動建立飛書機器人

如果方式一不適用（比如企業飛書有許可權限制），可以手動在飛書開放平臺建立機器人應用。

📺 本方式對應影片教程：https://www.bilibili.com/video/BV1QPcDz1ECF

整個流程分為 5 步：飛書建立機器人應用 → OpenClaw 新增飛書頻道 → 配置飛書事件 → 私聊配對 → 解鎖多媒體能力。

**1）飛書建立機器人應用**

登入飛書開放平臺，進入開發者後臺，點選「建立企業自建應用」：

> 指路：https://open.feishu.cn/app

![](https://pic.yupi.icu/1/1773296607372-9fd70bce-3491-4704-8905-9d3ea4de6242.png)

填寫應用名稱和描述，給你的機器人起個好聽的名字：

![](https://pic.yupi.icu/1/1773296500510-ea79d7b3-bb4b-403b-bcdc-d9a05eb38490.png)

建立完成後進入應用詳情頁，在「新增應用能力」中點選新增機器人能力：

![](https://pic.yupi.icu/1/1773296726095-512cdb41-f5fb-428e-9ed8-69bb1347d51c.png)

然後進入左側「許可權管理」頁面開通許可權：

![](https://pic.yupi.icu/1/1773296803932-ec256465-793c-4c2d-92f7-74badd59a1f2.png)

如果你的飛書裡沒有敏感資訊，可以直接把 `im:`、`contact:`、`file:` 等相關的許可權全勾上。如果需要精細控制許可權，最少只需要開通 `im:message`、`im:chat`、`contact:user.base:readonly` 這 3 個。

也可以透過批次匯入 JSON 配置一鍵搞定許可權，在許可權管理頁面選擇批次匯入，把下面的 JSON 貼上進去：

```json
{
  "scopes": {
    "tenant": [
      "aily:file:read",
      "aily:file:write",
      "application:application.app_message_stats.overview:readonly",
      "application:application:self_manage",
      "application:bot.menu:write",
      "cardkit:card:read",
      "cardkit:card:write",
      "contact:user.employee_id:readonly",
      "corehr:file:download",
      "event:ip_list",
      "im:chat.access_event.bot_p2p_chat:read",
      "im:chat.members:bot_access",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message:readonly",
      "im:message:send_as_bot",
      "im:resource"
    ],
    "user": [
      "aily:file:read",
      "aily:file:write",
      "im:chat.access_event.bot_p2p_chat:read"
    ]
  }
}
```

![](https://pic.yupi.icu/1/1773298009798-41cb86da-b623-4473-aa4e-2dd9841c8836.png)

許可權配置完成後，點選「建立版本」釋出應用：

![](https://pic.yupi.icu/1/1773298097229-3cea39d0-3ad3-45d5-863f-cc026b5ea53d.png)

填寫版本號和更新說明、按需選擇是否對外共享，然後申請線上釋出：

![](https://pic.yupi.icu/1/1773298202460-f8a03417-88dc-4d2d-8f2b-281930136c0d.png)

進入飛書管理後臺稽核透過即可：

![](https://pic.yupi.icu/1/1773298275930-0bd44fab-0947-4df9-8dda-f60cf5e41ce2.png)

稽核透過後，回到應用的「憑證與基礎資訊」頁面，獲取 App ID 和 App Secret，複製儲存好，下一步要用。注意這倆是你機器人的鑰匙，千萬不要洩露給別人！

![](https://pic.yupi.icu/1/1773298520178-5a6bdfd0-a8f0-41e4-8ad6-5ab762e44060.png)

**2）OpenClaw 新增飛書頻道**

拿到 App ID 和 App Secret 之後，開啟終端執行命令：

```bash
openclaw channels add
```

![](https://pic.yupi.icu/1/1773299051612-cb1dfc8a-df1d-4bca-9509-e73e57363924.png)

跟著嚮導一步步操作就好。先選擇 Feishu 頻道，然後輸入 App Secret 和 App ID，連線模式選擇 WebSocket 長連線，國內使用者選擇 Feishu 頻道：

![](https://pic.yupi.icu/1/1773299210452-5c321afe-a7ce-4299-963a-4d0e49a81cd1.png)

然後配置私聊的訪問控制方式，建議選擇配對碼模式，更安全：

![](https://pic.yupi.icu/1/1773299304526-e041393a-a688-4b70-b33c-4ab5be46d5db.png)

對接完成後，在 OpenClaw 網頁控制檯的頻道列表中就能看到飛書了：

![](https://pic.yupi.icu/1/1773299448414-826b13d2-768a-46e4-bdb0-c2b10449ec5a.png)

**3）配置飛書事件**

頻道接好了，還需要在飛書側配置事件訂閱，不然飛書不知道該把哪些訊息推給 OpenClaw。

回到飛書開發者後臺，進入「事件與回撥」配置，開啟長連線的事件訂閱方式：

![](https://pic.yupi.icu/1/1773299570311-6142efd0-a693-413b-a377-8be1dc06b6ae.png)

然後新增事件，至少要新增「接收訊息」（`im.message.receive_v1`）這一項：

![](https://pic.yupi.icu/1/1773299742014-c26249e1-54f9-484f-a478-0c44755648f6.png)

配置好事件後，別忘了最關鍵的一步 —— 釋出新版本！改了配置不釋出是不會生效的，很多人就卡在這一步：

![](https://pic.yupi.icu/1/1773299833600-04aad379-5b84-4b8d-a766-1fad16990586.png)

**4）私聊配對**

在飛書中搜尋你建立的機器人，進入私聊，隨便說一句話。傳送第一條訊息後，機器人會返回一個配對碼：

![](https://pic.yupi.icu/1/1773300030650-4dfd39ba-4ed0-49c8-ba59-d530ba3f59b2.png)

在終端中執行命令完成配對，把 `<配對碼>` 替換成你自己收到的那串配對碼：

```bash
openclaw pairing approve feishu <配對碼>
```

執行成功後會提示配對完成：

![](https://pic.yupi.icu/1/1773300229629-5037724e-ef68-40fb-b60e-8a30b5769a64.png)

配對成功後，再發一條訊息試試，這次 AI 就能成功回覆了！

![](https://pic.yupi.icu/1/1773300290276-39d7d920-1692-4335-afde-2099a52131f1.png)

**5）解鎖多媒體能力**

基礎對話搞定了，但飛書支援豐富的訊息型別，可以讓小龍蝦給你傳送圖片、音影片、檔案。

你只需要給小龍蝦一句引導，讓 AI 自己學習怎麼傳送多媒體訊息：

```markdown
飛書支援給使用者傳送圖片、檔案、音訊、影片並直接瀏覽，請你詳細瞭解具體的傳送方法，並且必須要把需要傳送的檔案放到 workspace 工作空間中。你必須記住這些方法，之後快速地給我傳送想要的內容。
```

AI 會去讀取飛書技能文件，學習怎麼傳送多媒體訊息，之後你就可以讓它拍照、錄音、找檔案，通通發到飛書：

![](https://pic.yupi.icu/1/1773300442755-f6111ee9-d521-402d-8d3b-418e94952486.png)



## 實用小技巧

在飛書對話方塊裡可以直接輸入斜槓命令來控制 OpenClaw 的行為，不需要開啟網頁控制檯，非常方便。



### 1、斜槓命令 /new 新開一個對話

直接在對話方塊裡輸入 `/new`，可以清空上下文開啟一段新對話，讓 AI 更專注當前任務，還能節省 Tokens 費用。

![](https://pic.yupi.icu/1/1773302809726-13ddf456-ca4a-4efa-b755-6fce84f1ae4a.png)



### 2、斜槓命令 /verbose 開啟除錯模式

輸入 `/verbose on` 後，AI 會輸出更多執行細節，方便你瞭解它到底在幹什麼，排查問題也更方便。

比如讓 AI 開啟網站並截圖，能夠看到它透過編寫 JS 指令碼、開啟了瀏覽器並執行截圖的過程：

![](https://pic.yupi.icu/1/1773303846475-f9662a4e-377b-43d1-95ed-16c789948ee2.png)



## 寫在最後

恭喜完成基礎安裝和接入！從現在開始，你可以掏出手機就跟你的小龍蝦聊天、讓它幫你幹活了。

如果你想把 OpenClaw 接入微信，可以閱讀《OpenClaw 接入微信保姆級教程》。

從下一篇開始進入進階玩法，首先學習如何初始化和配置你的小龍蝦。




## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)
