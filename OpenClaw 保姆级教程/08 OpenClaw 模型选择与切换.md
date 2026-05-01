# OpenClaw 模型選擇與切換

> 給龍蝦選腦子，全域性切換和臨時切換一網打盡

你好，我是魚皮。選一個好模型非常重要，它直接決定了你的小龍蝦有多聰明。這篇教程教你怎麼選模型、怎麼切換模型。



## 怎麼選模型

OpenClaw 支援幾十家模型服務商，包括 Anthropic（Claude）、OpenAI、Google（Gemini）、Qwen（通義千問）、GLM（智譜）、Moonshot（Kimi）、Volcengine（豆包）、百度千帆等等，詳見官方文件的模型列表頁面：https://docs.openclaw.ai/providers/models

如果模型太多不知道選哪個？

可以到 [PinchBench](https://pinchbench.com/) 檢視 OpenClaw 模型排行榜，看看各模型在 OpenClaw 場景下的實際表現，不過僅供參考。

![](https://pic.yupi.icu/1/image-20260310164932093.png)

不太建議新手一上來就用國外大模型，價格貴，而且網路訪問也不太穩定。國產的智譜（GLM）、Kimi、Qwen 是不錯的選擇，價格便宜、速度快、中文能力也夠用，先拿這些練手，等玩熟了再按需切換到更強的模型。



## 全域性切換模型

我會給大家分享多種模型切換方法，強烈推薦第一種。


### 推薦方法 - 命令列工具

輸入 `openclaw config` 命令，選擇配置 Model 模型，選擇相應的大模型即可，比如我這裡用 Moonshot AI 的 Kimi-k2.5 模型：

![](https://pic.yupi.icu/1/1773813259463-5c6e94bf-edde-4fef-8643-cea4d1f02b0c.png)

這就配置完成了，還可以透過 config 繼續修改其他配置：

![](https://pic.yupi.icu/1/1773813033619-ab5b7715-5281-4e76-9676-0c9f43e3410d.png)

回到介面驗證一下，切換模型成功生效了：

![](https://pic.yupi.icu/1/1773813527996-e90b63ea-1412-47f8-b1aa-f3d3da214073.png)

可以透過命令檢視模型的狀態：

```bash
openclaw models status
```

![](https://pic.yupi.icu/1/1773814465973-33bc05c3-3656-47fe-9fdc-3e7415758a0b.png)

其實命令本質上就是幫你修改了 OpenClaw 工作空間的核心配置檔案 `openclaw.json`，新增了新模型，並且設定為了小龍蝦的預設模型，還把之前的模型設定為了降級模型。

![](https://pic.yupi.icu/1/1773813576949-88548239-e52a-46be-a124-6d810e545c95.png)

還有一些其他的命令，按需使用即可：

```bash
# 配置預設文字模型
openclaw models set zai/glm-5

# 用 config 命令直接寫配置
openclaw config set agents.defaults.model.primary "moonshot/kimi-k2.5"

# 設定圖片理解模型（看圖用的）
openclaw models set-image zai/glm-5

# 新增備用降級模型
openclaw models fallbacks add 提供商/模型
```

![](https://pic.yupi.icu/1/1773815234026-a4b9af0d-a0b6-4ecc-820e-ea6de86eb76e.png)



### 其他方法 - 不推薦

還有其他切換模型的方法。你可以透過 Web UI 介面修改，或者手動修改這個配置檔案：

![](https://pic.yupi.icu/1/1773813700732-2a6faa56-3f91-4da0-bc7f-d6d4dd4810bf.png)

但是要重啟閘道器，否則可能不會生效：

```bash
openclaw gateway restart
```

![](https://pic.yupi.icu/1/1773813866547-9f2d57b8-21ca-4fd1-a766-20dfe8072a01.png)

個人不推薦使用這些方式，麻煩，還容易出錯。

你還可以直接跟小龍蝦對話讓它幫你修改，但我建議不要這麼做，一些明確的、簡單的操作就不要交給 AI 這種隨機生物來折騰了。

比如我的小龍蝦直接把配置檔案搞崩了，它還感覺挺美的！

![](https://pic.yupi.icu/1/1773814311334-9c308e07-4125-4d02-9279-f2d736df2f95.png)

![改錯了配置檔案](https://pic.yupi.icu/1/1773814246339-ae621fc5-774d-49bc-aa3e-3d97c8d4824b.png)



## 臨時切換模型

比如你正在用國外的 Claude Sonnet 模型聊天，突然欠費了，想臨時切到國產模型。

可以直接在聊天框中輸入 `/model list` 檢視可用的模型列表：

![](https://pic.yupi.icu/1/1773816609174-e77da8bd-6569-4c80-aae6-86c15a98ef0f.png)

然後輸入 `/model <模型服務商/模型名稱>` 切換模型：

![](https://pic.yupi.icu/1/1773816655106-bf00f0af-042f-4f9f-a277-2c2cef2b934d.png)

這樣切換模型只會影響當前會話，不改全域性預設配置，其他會話不受影響。



## 模型降級（Fallback）

什麼是降級模型呢？簡單來說就是備胎模型。當你的主力模型出問題（比如欠費、服務掛了、被限流了），OpenClaw 會自動切到降級模型繼續工作，保證小龍蝦不會突然失聯。

前面用命令列切換模型的時候，OpenClaw 會自動把舊模型設為降級模型，挺貼心的。你也可以手動新增降級模型：

```bash
openclaw models fallbacks add 提供商/模型
```

OpenClaw 內建了智慧降級（failover）機制，支援多級降級鏈。也就是說你可以配置多個備胎模型，排成一條鏈，第一個不行就換第二個，第二個不行就換第三個，以此類推。

可以透過命令配置降級鏈：

```bash
openclaw config set agents.defaults.model.fallbacks '["zai/glm-5", "qwen/qwen-max"]' --strict-json
```

這樣設定之後，主力模型掛了會先切到智譜 GLM-5，GLM-5 也掛了就切到通義千問 Qwen-Max，最大程度保證小龍蝦不掉線。



## 寫在最後

模型搞定了，接下來學習 OpenClaw 的工具管理和多媒體能力，比如操控瀏覽器、文字轉語音等功能。




## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)

