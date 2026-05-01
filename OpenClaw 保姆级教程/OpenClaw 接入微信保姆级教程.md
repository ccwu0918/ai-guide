# OpenClaw 接入微信保姆級教程

> 微信終於能養龍蝦了！安卓 iOS 都能用，1 分鐘搞定

你好，我是魚皮。

幾天前，微信官方推出了 OpenClaw 小龍蝦接入微信的外掛「微信 ClawBot」，直接殺死了 “爭奪養蝦入口” 的比賽！

![](https://pic.yupi.icu/1/%25E5%25BE%25AE%25E4%25BF%25A1%25E4%25BB%258B%25E5%2585%25A5openclaw.png)

但是剛開始只有 IOS 蘋果手機才能用，我還跟同事開玩笑說：俺不是高貴的 “蘋果人”，只能先望蝦莫及了……

結果，今天早上開啟手機一看，我去，明明沒有升級微信版本，竟然能夠使用微信 ClawBot 外掛了！

我試了一下，接入非常簡單，真的可以說是有手就行，直接在微信裡跟小龍蝦聊天、發圖片、下任務，絲滑得一皮~

![](https://pic.yupi.icu/1/image-20260324150329933.png)

下面，我來教大家如何把 OpenClaw 小龍蝦接入微信，保姆皮已上線 ✅



## 一、認養一隻小龍蝦 🦞

微信 ClawBot 外掛的作用是連線 OpenClaw 和微信，讓你能透過手機跟小龍蝦聊天和下發任務，所以首先你要有一隻小龍蝦。

之前我寫了一整套《OpenClaw 保姆級教程》，從安裝到進階玩法全覆蓋，幫不少朋友成功養上了自己的小龍蝦。

![](https://pic.yupi.icu/1/%E5%9B%BE2-16%E6%AF%949OpenClaw%E7%9F%A5%E8%AF%86%E5%BA%93%E5%9C%A8%E7%BA%BF%E9%98%85%E8%AF%BB.png)

你可以透過下面 3 種方法，快速安裝 OpenClaw 並獲取自己的小龍蝦，每種方法在本教程中都有傻瓜式教程：

- 本地一鍵安裝：可以閱讀本教程的《03 OpenClaw 一鍵安裝指令碼》
- 本地手動安裝：可以閱讀本教程的《02 本地安裝 OpenClaw》
- 雲伺服器一鍵安裝：可以閱讀本教程的《04 雲端部署 OpenClaw》

推薦新手先嚐試本地一鍵安裝，1 分鐘搞定！

1）無論你是 Windows 還是 Mac 系統，要先開啟命令列終端。

Windows 可以搜尋 PowerShell，並 **以管理員身份執行**；Mac 直接搜尋 “終端” 並開啟即可：

![](https://pic.yupi.icu/1/image-20260324102432835.png)

2）然後根據作業系統，在終端中輸入一行命令，執行我給大家提供的「全自動安裝指令碼」：

```powershell
# Windows 輸入
$env:OPENCLAW_VERSION='2026.3.13'; irm https://codefather.cn/openclaw_install/install-openclaw.ps1 | iex

# Mac 輸入
curl -fsSL https://codefather.cn/openclaw_install/install-openclaw.sh | bash -s -- --version 2026.3.13
```

細心的同學會發現，我在命令中新增了版本引數，指定安裝 `2026.3.13` 這個版本。

⚠️ 這裡千萬要注意！**不要安裝 >= 3.22 的 OpenClaw 版本！**否則無法相容微信 ClawBot 等外掛！都怪官方更新地太快太粗暴了！

3）接下來只需要等待片刻，指令碼會自動幫你檢測和安裝環境，並安裝 OpenClaw 程式本身。

![](https://pic.yupi.icu/1/image-20260324115344988.png)

4）安裝成功後，會引導你配置 AI 的大模型 API Key 金鑰。

推薦先用國產模型，比如智譜（zai）或者 Kimi（moonshot），用哪家的大模型，就到哪家的開放平臺獲取 API Key 即可。

![](https://pic.yupi.icu/1/image-20260324140749942.png)

5）最後，正常情況下，會自動開啟 OpenClaw 管理網頁，你的小龍蝦前來報到：

![](https://pic.yupi.icu/1/image-20260324102805104.png)

如果你執行一鍵安裝指令碼出錯了，可以嘗試本教程的《02 本地安裝 OpenClaw》手動安裝。

如果你擔心小龍蝦在自己的電腦裡胡作非為，或者想讓它 7 x 24 小時不間斷執行，可以閱讀本教程的《04 雲端部署 OpenClaw》。



## 二、接入微信 ClawBot 外掛

首先開啟微信，依次點選：我 → 設定 → 外掛，能夠看到微信 ClawBot 外掛：

![](https://pic.yupi.icu/1/image-20260324134224548.png)

不是哥們？這麼多年了，就這一個外掛嘛？

也足以看出騰訊這波想拿下 AI 入口流量的野心了。

![](https://pic.yupi.icu/1/HDnaD6IbEAMKVS0-20260322141650228.jpeg)

進入外掛詳情，可以看到官方給出了接入微信 ClawBot 的指引：

![](https://pic.yupi.icu/1/Screenshot_20260324_094406_com.tencent_%E5%89%AF%E6%9C%AC.mm.jpg)

下面我們開始操作，依然是 1 分鐘搞定！

1）首先在安裝了 OpenClaw 小龍蝦的電腦上開啟 CMD 終端。Windows 按 `Win + R` 鍵，然後輸入 `cmd` 並回車：

![](https://pic.yupi.icu/1/image-20260324113126474.png)

2）開啟終端後，執行這行命令，安裝微信接入 OpenClaw 的外掛：

```bash
npx -y @tencent-weixin/openclaw-weixin-cli@latest install
```

正常情況下，會顯示一個連線碼：

![](https://pic.yupi.icu/1/image-20260324141342230.png)

3）用手機掃一下，然後同意連線就好。操作完成後，終端會顯示 “與微信連線成功”，就已經搞定了~

![](https://pic.yupi.icu/1/image-20260324141941525.png)

試一試透過微信和 OpenClaw 小龍蝦對話吧，而且不需要什麼配置，就能讓它幫你分析圖片、給你傳送圖片：

![](https://pic.yupi.icu/1/image-20260324143907284.png)



### 常見錯誤

安裝過程中，可能會出現一些錯誤，這是正常的。（沒出錯的同學運氣真的非常好了~）

1）外掛安裝失敗

這是因為 OpenClaw 官方外掛倉庫太火爆了，導致安裝時可能會被限流：

![](https://pic.yupi.icu/1/image-20260324104016363.png)

解決方法是重試幾次，或者等大家都睡著了再安裝~

2）外掛載入失敗

如果你前面沒有認真看我的教程，不小心安裝了 >= 3.22 的版本，就會看到下面這個錯誤：

![](https://pic.yupi.icu/1/image-20260324110402003.png)

此時可以按照文件來回滾到之前的版本，執行幾個命令就好：

> 指路：https://clawfather.cn/install/updating

![](https://pic.yupi.icu/1/image-20260324124003675.png)



### 手動安裝

如果一鍵安裝命令跑不通，也可以手動一步步來，就 4 條命令的事兒：

1）安裝外掛：

```bash
openclaw plugins install "@tencent-weixin/openclaw-weixin"
```

2）啟用外掛：

```bash
openclaw config set plugins.entries.openclaw-weixin.enabled true
```

3）掃碼登入，終端會彈出二維碼，用手機掃碼並確認授權就行，登入憑證會自動儲存到本地：

```bash
openclaw channels login --channel openclaw-weixin
```

4）重啟閘道器，讓外掛生效：

```bash
openclaw gateway restart
```

如果你想讓多個微訊號都能跟龍蝦聊天，再執行一次 `openclaw channels login --channel openclaw-weixin` 掃碼就行，每次掃碼會建立一個新的賬號，支援多個微訊號同時線上。



## 三、更多玩法

安裝完外掛後，你可以在 OpenClaw 的外掛目錄下找到 `openclaw-weixin` 相關的原始碼和 README.md 介紹文件，感興趣的同學可以翻一翻：

![](https://pic.yupi.icu/1/image-20260324143134753.png)

透過閱讀這個文件，你可以瞭解到更多高階用法，比如多賬號上下文隔離（讓每個微訊號的對話記憶互不干擾）、後端 API 協議（方便二次開發對接自己的服務）、CDN 媒體上傳流程等：

![](https://pic.yupi.icu/1/image-20260324144620649.png)

接入微信只是第一步，想把小龍蝦玩出花來，本教程的進階部分（07-14 篇）涵蓋了：

- 初始化配置與模型切換（全域性 / 臨時）
- 高頻斜槓命令與工具管理
- TTS 文字轉語音
- 定時任務與心跳機制
- Skills 技能系統（內建技能 / 第三方技能 / AI 自建技能）
- 子 Agent 與多 Agent 協作
- 問題自檢修復與 Git 配置管理
- 記憶系統、成本控制、安全防護

按需選學就好，從《07 OpenClaw 初始化和基礎使用》開始即可。



## 寫在最後

OpenClaw 的迭代速度實在太快了，從只能在終端聊天到現在微信直連，也就幾個月的事。誰也不知道下一個版本又會蹦出什麼新花樣，但有一件事是確定的 —— 使用 AI Agent 的成本一定會越來越低，所以不必焦慮，需要用到的時候再學也完全來得及。

接入微信只是開始，想把小龍蝦玩出更多花樣，可以閱讀本教程的《07 OpenClaw 初始化和基礎使用》開始進階之旅。想看完整的實戰案例，可以閱讀《OpenClaw 實戰 | 用 GLM-5 打造你的 AI 伴侶》。

祝大家養蝦愉快！



## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)