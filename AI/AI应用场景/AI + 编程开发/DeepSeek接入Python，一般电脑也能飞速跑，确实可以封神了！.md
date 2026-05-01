## DeepSeek接入Python，一般電腦也能飛速跑，確實可以封神了！


今天這篇教程介紹：DeepSeep最新推理模型R1接入Python程式設計，在本地電腦從零搭建方法。

![img](https://pic.yupi.icu/yuyi/1739502610400-71691d00-4e2b-403d-a683-eb4f67fb9ce8.webp)

### 1 這樣做有哪些好處？ 

1) 大模型在本地搭建，除了能夠方便個人知識庫管理，詳見上一篇介紹，還能提效程式設計學習，比如Python，Java等，學程式設計就像學做事的思路和邏輯，挺重要也很有意思。
2) DeepSeek最近開源了推理模型R1，開源免費，效能強勁，本文接入的正是DeepSeek的R1；Python的開發環境本文使用的是PyCharm社群版，完全免費，本人使用社群版已超過10年；推薦的外掛CodeGPT免費、UI好用。總結來說本文搭建方法：零成本，不需花一分錢。

3）為了照顧到關注我的大部分朋友，本文推薦的搭建方法已將電腦配置要求降低最小，我會第二節詳細介紹，按照此方法，普通電腦也能飛速跑。

### 2 框架選擇 

一句話描述框架選擇：DeepSeek-r1:1.5b + PyCharm社群版 + CodeGPT外掛

DeepSeek-r1 一共有7個不同版本，隨著尺寸引數變大對電腦要求也會變高，相應的本地回覆延時也會變長（因為大引數尺寸推理時間會更長）：

![img](https://pic.yupi.icu/yuyi/1739502610402-4520f4d1-738f-430f-8d55-8cd9235890d6.webp)

電腦沒有大視訊記憶體GPU的朋友，推薦安裝1.5b尺寸，這版尺寸普通電腦無GPU的都能流暢執行，延時幾乎在1-2秒，更為關鍵的是，DeepSeek-r1之所以爆出圈有一個重要原因，小尺寸模型回答質量也很高，即便1.5b如此小的引數尺寸亦如此。

簡單再介紹下DeepSeek-R1。它回覆問題主要包括兩部分：思考(Thinking)和 Answer（正式回答），在每次正式回答前，會有一個很長的思考鏈。之前的大模型在小尺寸引數（如1.5b）回覆Token有些簡短，質量一般，但是這次DeepSeek-r1:1.5b解決了回覆Token數過短，效果不好的難題：

![img](https://pic.yupi.icu/yuyi/1739502610454-23b96e8a-8ce4-4d69-9145-b5d9135658c6.webp)

以上就是為什麼這樣選型和搭建的原因，接下來介紹逐步詳細搭建步驟。

### 3 詳細搭建步驟

搭建步驟之前寫過一篇，當時有個關鍵步驟拉下了，再加上r1又剛出來，所以我再重新梳理一遍，這次儘量做到步驟足夠細緻，儘量讓完全未接觸程式設計的朋友也可復現。

第一步，安裝Pycharm社群版，完全免費，下載地址在我的公眾號後臺回覆：Pycharm，即可獲取。下載後基本都是下一步，在此不再贅述。



第二步，下載ollama並安裝deepseek-r1:1.5b，在我的公眾號後臺回覆ollama，獲取ollama軟體，下載安裝後開啟軟體，輸入ollama list可以看到我現在安裝了三個本地大模型，其中包括r1:1.5b，剛安裝ollama現在執行這條命令應該是空的：

![img](https://pic.yupi.icu/yuyi/1739502610410-fc8cc959-6397-40be-b291-b43c6f5e791c.webp)

接下來執行一條命令：ollama pull deepseek-r1:1.5b，就能直接下載它到自己的電腦，如下所示，

![img](https://pic.yupi.icu/yuyi/1739502610827-ad85adb7-e9fc-41b9-8064-36895d5400aa.webp)

下載完就安裝好了，比較方便。

接下來就可以愉快的接入到PyCharm 了。

第三步，DeepSeek-r1:1.5b接入到PyCharm。首先下載外掛：CodeGPT，開啟第一步安裝的PyCharm，找到檔案(File)-設定(Settings)-外掛(Plugins)，輸入CodeGPT，即可點選安裝(Install)即可：

![img](https://pic.yupi.icu/yuyi/1739502610813-f70ac774-a7d6-4a7d-9b1d-8d59b98bba4a.webp)

安裝後在工具(Tools)下會出現CodeGPT，點選Providers，找到Ollama(Local)，對應下圖數字2，再到3這裡選擇剛剛安裝的deepseek-r1:1.5b，點選OK就可以了：

![img](https://pic.yupi.icu/yuyi/1739502610805-a5dea937-fc35-4e46-9fe0-c1377cd8c86a.webp)

下面就可以愉快的在PyCharm中使用DeepSeek-r1加速程式設計學習了，左側是程式碼編輯介面，右側是r1大模型，直接對話式提問，省去了來回不同頁面折騰的麻煩：

![img](https://pic.yupi.icu/yuyi/1739502610884-17da0319-e949-40c7-b9a1-437a32c14664.webp)

大家再感受DeepSeek-r1:1.5b大模型的回覆延時，幾乎1秒鐘響應，本人電腦是pro-m1，這響應速度可以了。再看看回答效果，因為公眾號文章的GIF幀數有限制，我只擷取了前6幀，無任何加速，全部是延時播放速度，展示下效果：

![img](https://pic.yupi.icu/yuyi/1739502610869-b95b2eb5-50d9-473f-95ad-064af5a481a4.gif)

CodeGPT外掛顯示了Tokens數，有些朋友擔心這是不是在計費？不是的！只是一個數字統計，無任何費用，因為使用的是本地自己電腦的算力。

另外，CodeGPT應該是目前大模型+程式設計UI做的最好的外掛了，感興趣的朋友可以根據此篇文章以上三個步驟安裝試試。

### 最後總結一下

本地執行大模型：免費、便捷、適合個人知識管理與程式設計學習。

選型推薦：deepseek-r1:1.5b + PyCharm社群版 + CodeGPT外掛。

在 PyCharm 右側直接對話 DeepSeek-R1，快速輔助程式設計。

幾乎 1-2秒響應，完全本地快速執行，無額外費用。



> 來源：https://mp.weixin.qq.com/s/QUaAO5BEUpv5pXsHz9T1fw