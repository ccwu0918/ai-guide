# OpenClaw 一鍵安裝指令碼

> 一行命令搞定 OpenClaw 的所有依賴和配置

你好，我是魚皮。上一篇教程手把手教了大家本地安裝 OpenClaw 的完整流程，但有不少同學覺得手動裝 Node.js、Git、配映象太麻煩了。所以我做了個 **一鍵安裝指令碼**，自動搞定所有環境依賴和配置，只需要複製貼上一行命令，即可愉快使用小龍蝦~

⭐️ 影片演示：https://bilibili.com/video/BV1UWw9zHE67



## 使用方法

一行命令就可以完成 OpenClaw 的安裝，Windows 和 Mac 電腦都支援，可以火速體驗起來，操作超簡單，開啟命令列輸入就行~

### Windows 電腦

按 `Win + R`，喚起執行視窗，然後輸入 `powershell` 並回車：

![](https://pic.yupi.icu/1/1773650695343-70d4ef97-6754-49c1-93e3-a230001f8171.png)

輸入以下命令：

```powershell
irm https://codefather.cn/openclaw_install/install-openclaw.ps1 | iex
```

如果遇到中文亂碼，改用這條：

```powershell
& {$w=New-Object Net.WebClient;$w.Encoding=[Text.Encoding]::UTF8;iex $w.DownloadString('https://codefather.cn/openclaw_install/install-openclaw.ps1')}
```

然後等待指令碼自動完成所有步驟即可，指令碼會依次執行以下步驟：

1）檢測並安裝 Node.js v22+，支援 nvm-windows 或直接下載，而且會透過國內映象加速：

![](https://pic.yupi.icu/1/1773649977323-8202eb12-a705-4a5a-bde2-e529d60e93f2.png)

2）檢測並安裝 Git：

![](https://pic.yupi.icu/1/1773650014622-e36e9846-368d-40b6-abd9-5141fc10d003.png)

3）設定 npm 國內映象：

![](https://pic.yupi.icu/1/1773650306616-3bebe398-9d60-42c4-82c4-675e290ff670.png)

4）安裝 pnpm：

![](https://pic.yupi.icu/1/1773650330327-4a4f0ca1-2f65-4c7e-b516-c2b37141f4da.png)

5）安裝 OpenClaw，GitHub 連不上的時候還會提供映象方案供小夥伴們選擇：

![](https://pic.yupi.icu/1/1773650526366-27f8a36a-6406-4d0b-9db0-ea88d996d5a9.png)

6）驗證安裝結果：

![](https://pic.yupi.icu/1/1773650512181-7b5e92ea-cfe7-4043-ab7b-ee9b3393a500.png)

7）互動式配置，指令碼會引導選擇 AI 廠商、輸入 API Key、選擇預設模型，一步搞定：

![](https://pic.yupi.icu/1/1773650629769-7358a04d-b1ec-44c8-849d-654605afc672.png)



### Mac 電腦

按 `Command + 空格`，喚起聚焦搜尋，搜尋「終端」，點選開啟：

![](https://pic.yupi.icu/1/1773650769650-59007b90-463d-45f4-868a-fd4776890cac.png)

輸入以下命令：

```bash
curl -fsSL https://codefather.cn/openclaw_install/install-openclaw.sh | bash
```

然後指令碼會自動完成下面的所有步驟：

1. 檢測並安裝 Node.js v22+，指令碼會依次嘗試 nvm → Homebrew → 直接下載 方式來安裝
2. 檢測並安裝 Git
3. 設定 npm 國內映象
4. 安裝 OpenClaw
5. 驗證安裝結果
6. 互動式配置

這裡跟 Windows 的流程類似，就不過多贅述了。



## 指令碼優勢

為了儘可能降低大家的使用門檻，我還特意進行了一些最佳化，比如：

1）已有合格版本的 Node.js / Git 會直接使用，不會重複安裝：

![](https://pic.yupi.icu/1/1773651732963-ecbf3099-196e-4009-a698-f100c01138d3.png)

2）npm 映象、Node.js 下載源、Git 下載源全部走國內映象，下載速度嘎嘎快

3）指令碼內建了多個 GitHub 社群映象的自動探測和回退機制

4）支援 OpenAI、Anthropic、Gemini、智譜、Moonshot、Kimi Coding、百度千帆、小米等多家 AI 廠商，選完即用：

![](https://pic.yupi.icu/1/1773651814048-3a28ee57-b93e-4bbd-8c95-a89282fcf870.png)

5）如果已經裝過 OpenClaw，指令碼會跳過安裝流程，直接提供重新配置的入口：

![](https://pic.yupi.icu/1/1773651858739-4b3083bc-ebbe-4c43-9686-10798f9db0e5.png)

6）配置完成後自動啟動 OpenClaw 控制面板，無門檻開始使用：

![](https://pic.yupi.icu/1/1773651943494-09d95e45-75d9-4bcf-9b66-42bf8a9acbf8.png)

怎麼樣，是不是簡單的一皮？

其實這個指令碼並不複雜，大家藉助 AI 都能梭出來。如果之後面試官問你 “怎麼安裝小龍蝦？”，不要直接說 “複製官方提供的命令” 了，改為 “自己封裝了個一鍵指令碼” 才是更符合技術人的做法。



## 寫在最後

如果你想把 OpenClaw 部署到雲伺服器上 24 小時執行，可以閱讀下一篇《04 雲端部署 OpenClaw》。如果你已經安裝好了，想接入 QQ 和飛書，可以直接跳到《06 接入 QQ 和飛書》。

加油！




## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)
