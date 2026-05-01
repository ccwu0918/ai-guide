# OpenClaw 一鍵解除安裝指令碼

> 一行命令解除安裝乾淨，還送你一份養蝦報告

你好，我是魚皮。

前面這套教程教了大家怎麼安裝、配置、玩轉 OpenClaw。但養了一段時間後，有些同學可能會覺得索然無味……

- 有人覺得龍蝦是個肥物，幹啥啥不行
- 有人發現這龍蝦是個間諜，安全風險太大
- 還有人一看賬單，好傢伙，養不起了！這錢拿去吃真的小龍蝦不香麼？

總之就是各種原因，想把龍蝦扔了。

官方文件雖然提供了 [解除安裝步驟](https://docs.openclaw.ai/install/uninstall#uninstall)，但大機率是沒辦法透過 1 條命令就刪乾淨的。

![](https://pic.yupi.icu/1/image-20260307105935932-20260321130257839.png)

所以我做了這個 **一鍵解除安裝指令碼**，不僅能幫你把龍蝦吃得乾乾淨淨、蝦殼都不剩，還會附帶一份 **使用報告**，讓你在告別龍蝦之前，看看這段時間跟龍蝦相處的回憶。



## 使用方法

一行命令即可完成 OpenClaw 的完整解除安裝，操作超簡單~

### Windows 電腦

按 `Win + R` 鍵，喚起執行視窗，然後輸入 `powershell` 並回車：

![](https://pic.yupi.icu/1/1773650695343-70d4ef97-6754-49c1-93e3-a230001f8171-20260321125946596.png)

輸入以下命令，執行給大家準備好的解除安裝指令碼：

```powershell
irm https://clawfather.cn/uninstall.ps1 | iex
```

如果遇到中文亂碼，改用這條：

```powershell
& {$w=New-Object Net.WebClient;$w.Encoding=[Text.Encoding]::UTF8;iex $w.DownloadString('https://clawfather.cn/uninstall.ps1')}
```

然後等待指令碼自動完成所有步驟即可，指令碼會依次執行以下流程：

1）掃描本地 OpenClaw 相關的資料，為生成報告做準備：

![](https://pic.yupi.icu/1/1774068080605-a4c5e2b1-b7da-4d60-8623-aa9409552fd7.png)

整個過程只在本地進行，所以大家不需要擔心自己的隱私問題~

2）生成養蝦報告，包括你的養蝦天數、跟龍蝦聊了多少次、發了多少條訊息、燒了多少 Token、大概花了多少錢、養了幾隻龍蝦、裝了多少 Skills、什麼時候最愛跟龍蝦交流等：

![](https://pic.yupi.icu/1/1774068186927-dd613e73-67fd-48c3-a3cf-c95dfdff3c32.png)

3）列出所有將被清理的元件，讓你手動確認後再執行：

![](https://pic.yupi.icu/1/1774068218878-2c53308e-2462-4134-a580-3dd1916225e1.png)

4）開始吃龍蝦 🦞！逐項清理 OpenClaw 相關內容，停止 Gateway 服務、解除安裝 CLI、刪除狀態資料和配置檔案：

![](https://pic.yupi.icu/1/1774068299187-e6edc73f-9da4-4d30-8521-6e23ae6a93b9.png)

5）驗證解除安裝結果，確保清理乾淨，蝦殼都不剩：

![](https://pic.yupi.icu/1/1774017685135-434b4fe7-64c3-492a-9fc0-d6976d07f1b2.png)

怎麼樣，是不是簡單的一皮？彷彿什麼都沒發生過。



### Mac 電腦

按 `Command + 空格`，喚起聚焦搜尋，搜尋「終端」，點選開啟：

![](https://pic.yupi.icu/1/1773650769650-59007b90-463d-45f4-868a-fd4776890cac-20260321125946989.png)

輸入以下命令：

```bash
curl -fsSL https://clawfather.cn/uninstall.sh | bash
```

然後指令碼會自動完成下面的所有步驟：

1. 掃描本地 OpenClaw 資料並收集使用統計
2. 生成 Wrapped 使用報告
3. 列出將被清理的元件
4. 確認後逐項解除安裝
5. 驗證解除安裝結果

這裡跟 Windows 的流程類似，我們就不過多贅述了。



## 指令碼亮點

為了儘可能提高大家的解除安裝體驗，我還特意進行了一些最佳化。

比如前面提到的養蝦報告，指令碼會自動儲存一份到桌面檔案（`openclaw-wrapped.txt`），方便你截圖發朋友圈曬一波。畢竟養過賽博龍蝦也是一種人生經歷嘛~

![](https://pic.yupi.icu/1/1774068647522-f46233fe-cab6-4654-b16b-72381715d4df.png)

而且解除安裝指令碼的安全性有「雙重保障」，不會像龍蝦一樣亂刪你的東西：

- 刪除之前會先列清單讓你手動確認，避免誤刪
- 內建了多重安全檢查，只動龍蝦相關的檔案，不碰你的其他資料

下面這個表裡是指令碼會檢測並清理的主要內容：

| 元件         | Mac                             | Windows                             |
| ------------ | ------------------------------- | ----------------------------------- |
| OpenClaw CLI | npm/pnpm/bun 全域性解除安裝           | npm/pnpm/bun 全域性解除安裝               |
| Gateway 服務 | launchd (Mac) / systemd (Linux) | 計劃任務 + gateway.cmd              |
| 狀態資料     | `~/.openclaw`                   | `%USERPROFILE%\.openclaw`           |
| 工作區       | `~/.openclaw/workspace`         | `%USERPROFILE%\.openclaw\workspace` |
| Profile 目錄 | `~/.openclaw-*`                 | `%USERPROFILE%\.openclaw-*`         |
| macOS App    | `/Applications/OpenClaw.app`    | —                                   |



## 寫在最後

如果你解除安裝之後又想養回來了（別笑，真有人這樣），隨時可以回到本教程的《02 本地安裝 OpenClaw》或《03 OpenClaw 一鍵安裝指令碼》重新開始。

如果你還沒看過實戰玩法，推薦閱讀《OpenClaw 實戰 | 用 GLM-5 打造你的 AI 伴侶》，說不定能找到新的養蝦靈感。對 OpenClaw 背後的創始人故事感興趣的話，可以閱讀《番外 | OpenClaw 創始人的故事》。

祝大家養蝦愉快，卸蝦也愉快！



## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)