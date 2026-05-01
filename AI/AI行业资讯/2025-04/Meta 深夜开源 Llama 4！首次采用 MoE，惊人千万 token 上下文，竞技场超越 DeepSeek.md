## Meta 深夜開源 Llama 4！首次採用 MoE，驚人千萬 token 上下文，競技場超越 DeepSeek

萬萬沒想到。Meta 選擇在週六日，釋出了最新 AI 模型系列 ——Llama 4，這是其 Llama 家族的最新成員。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/NZh1Fxddxd02VSBM.webp" alt="" width="100%" />

該系列包括 Llama 4 Scout、Llama 4 Maverick 和 Llama 4 Behemoth。所有這些模型都經過了大量未標註的文字、影象和影片資料的訓練，以使它們具備廣泛的視覺理解能力。

Meta GenAI 負責人 Ahmad Al-Dahle 表示，Llama 4 展示了 Meta 對開源 AI、整個開源 AI 社群的長期承諾以及堅定不移的信念 —— 開放系統將產出最好的小型、中型和即將出現的前沿大模型。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/olPCqIeVLrboWERM.webp" alt="" width="100%" />

谷歌 CEO 劈查伊不禁感嘆，[人工智慧](https://cloud.tencent.com/product/ai-class?from_column=20065&from=20065)世界永遠不無聊，恭喜 Llama 4 團隊，繼續前進！

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/rm0wyEVzkWCmO5GN.webp" alt="" width="100%" />

在大模型競技場（Arena），Llama 4 Maverick 的總排名第二，成為第四個突破 1400 分的大模型。其中開放模型排名第一，超越了 DeepSeek；在困難提示詞、程式設計、數學、創意寫作等任務中排名均為第一；大幅超越了自家 Llama 3 405B，得分從 1268 提升到了 1417；風格控制排名第五。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/mbX9CddoMznCJpof.webp" alt="" width="100%" />

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/DIegOg98wou5pKdn.webp" alt="" width="100%" />

那麼 Llama 4 模型系列有何特點呢？具體而言：

Llama 4 Scout 是一個擁有 170 億啟用引數和 16 個專家的模型，是同類中全球最佳的多模態模型，比前幾代 Llama 模型更強大，且能適配單個 NVIDIA H100 [GPU](https://cloud.tencent.com/product/gpu?from_column=20065&from=20065)。此外，Llama 4 Scout 提供了業界領先的 10M 上下文視窗，在廣泛報道的基準測試中表現優於 Gemma 3、Gemini 2.0 Flash-Lite 和 Mistral 3.1。

Llama 4 Maverick 是一個擁有 128 位專家、170 億個啟用引數模型，是同類中最好的多模態模型，在廣泛報道的基準測試中擊敗了 GPT-4o 和 Gemini 2.0 Flash，同時在推理和程式設計方面取得了與新 DeepSeek v3 相當的結果 —— 啟用引數不到一半。Llama 4 Maverick 提供了一流的價效比，其實驗性聊天版本在 LMArena 上的 ELO 得分為 1417。

以上這兩個模型是 Meta 迄今為止最好的模型，主要得益於它們是從擁有 2880 億啟用引數和 16 個專家的 Llama 4 Behemoth 模型進行知識蒸餾而來。

Llama 4 Behemoth 是 Meta 目前最強大的模型之一，也是世界上最智慧的大型語言模型之一。在多項科學、技術、工程和數學（STEM）基準測試中，Llama 4 Behemoth 的表現優於 GPT-4.5、Claude 3.7 Sonnet 和 Gemini 2.0 Pro。

不過，Llama 4 Behemoth 仍在訓練中，後續 Meta 會放出更多內容。

好訊息是，使用者現在就可以在 llama.com 和 Hugging 上下載 Llama 4 Scout 和 Llama 4 Maverick 最新模型。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/9Pbj3qr0Pugjvsui.webp" alt="" width="100%" />

所有 Llama 4 模型均採用原生多模態設計，比如上傳一張影象，你可以問關於這張影象的任何問題

![轉存失敗，建議直接上傳圖片檔案](<轉存失敗，建議直接上傳圖片檔案 https://developer.qcloudimg.com/http-save/yehe-1754229/508a4b15681abf9d334ca0dfc15e0cb9.gif>)

Llama 4 Scout 支援長達 1000 萬 token 的上下文，這是目前行業內最長的上下文長度，解鎖了圍繞記憶、個性化和多模態應用的新用例。

![轉存失敗，建議直接上傳圖片檔案](<轉存失敗，建議直接上傳圖片檔案 https://developer.qcloudimg.com/http-save/yehe-1754229/d6d6dd682331a226f683c6e7396c3a1d.gif>)

Llama 4 在影象 grounding 方面也是一流的，能夠將使用者提示與相關的視覺概念對齊，並將模型響應錨定到影象中的區域。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/dQLGATEior1zgFDU.webp" alt="" width="100%" />

Llama 4 還經過預訓練和微調，能夠理解 12 種語言的無與倫比的文字，支援全球開發和部署。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/2Xxr3oRk4SFfsGjs.webp" alt="" width="100%" />

**預訓練**

Meta 在構建下一代 Llama 模型時，在預訓練階段嘗試了多種新方法。

首先，**這是 Meta 首次採用混合專家（Mixture of Experts, MoE）架構**。在 MoE 模型中，單個 token 僅啟用總引數的一部分。Meta 表示，MoE 架構在訓練和推理時計算效率更高，在固定訓練 FLOPs 預算下，相比密集模型提供更高的質量。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/ztQPiKKzKu4fvqP9.webp" alt="" width="100%" />

以 Llama 4 Maverick 模型為例，該模型擁有 170 億啟用引數和 4000 億總引數。Meta 採用交替的密集層和混合專家（MoE）層來提高推理效率。在 MoE 層中，他們使用了 128 個路由專家和一個共享專家。每個 token 都會被髮送到共享專家以及 128 個路由專家中的一個。

因此，儘管所有引數都儲存在記憶體中，但在服務這些模型時，只有總引數的一部分被啟用。這透過降低模型服務成本和延遲來提高推理效率 ——Llama 4 Maverick 可以在單個 NVIDIA H100 DGX 主機上執行，便於部署，也可以透過分散式推理實現最高效率。

Llama 4 系列模型採用原生多模態設計，透過早期融合將文字和視覺 token 無縫整合到統一的模型骨幹中。早期融合是一個重大進步，因為這樣能夠使用大量未標記的文字、影象和影片資料對模型進行聯合預訓練。此外，Meta 還改進了 Llama 4 中的視覺編碼器，該編碼器基於 MetaCLIP，以更好地使編碼器適應 LLM。

另外，Meta 還開發了一種新的訓練技術，稱為 MetaP，其能夠可靠地設定模型超引數，例如每層的學習率和初始化規模。Meta 發現，選定的超引數在不同批次大小、模型寬度、深度和訓練 token 值之間具有良好的遷移性。

Llama 4 透過在 200 種語言上進行預訓練，支援開源微調工作，其中包括超過 100 種語言，每種語言都超過 10 億 token，總體上比 Llama 3 多 10 倍的多語言 token。

此外，Meta 採用 FP8 精度進行訓練，兼具質量並確保高 FLOPs 利用率。在使用 FP8 和 32K GPU 預訓練 Llama 4 Behemoth 模型時，Meta 實現了每 GPU 390 TFLOPs。訓練所用的資料混合總量超過 30 萬億 token，是 Llama 3 預訓練資料混合量的兩倍多，涵蓋了多樣化的文字、影象和影片資料集。

最後，Meta 還透過所謂的中期訓練（mid-training）繼續訓練模型，提升模型核心能力，包括利用專門的資料集擴充套件長上下文。這使 Meta 在提升模型質量的同時，為 Llama 4 Scout 解鎖了業界領先的 1000 萬輸入上下文長度。

**後訓練**

Llama 4 Maverick 在影象和文字理解方面提供了無與倫比、行業領先的效能，能夠建立跨越語言障礙的複雜人工智慧應用。作為通用助手和聊天用例的產品主力模型，Llama 4 Maverick 在精確[影象理解](https://cloud.tencent.com/product/imagerecognition?from_column=20065&from=20065)和創意寫作方面表現出色。

在對 Llama 4 Maverick 模型進行後訓練時，最大的挑戰是平衡多種輸入模態、推理能力和對話能力。為了混合模態，Meta 設計了一種精心策劃的課程策略，與單一模態專家模型相比，這種策略不會降低效能。

在 Llama 4 中，Meta 透過採用不同的方法對後訓練流程進行了全面改進：輕量級監督微調（SFT）> 線上強化學習（RL）> 輕量級直接偏好最佳化（DPO）。Meta 發現，SFT 和 DPO 可能會過度約束模型，限制線上 RL 階段的探索能力，從而導致推理、程式設計和數學領域的精度下降。

為了解決這一問題，Meta 使用 Llama 模型作為評判，移除了超過 50% 的標記為簡單（easy）的資料，並在剩餘較難的資料集上進行了輕量級監督微調（SFT）。在隨後的多模態線上強化學習（RL）階段，透過精心選擇較難的提示，實現了效能的顯著提升。

此外，Meta 還實施了持續線上 RL 策略，交替訓練模型並使用它持續過濾並保留中等至高難度的提示。這種策略在計算和準確性權衡方面非常有益。

最後，Meta 還進行了輕量級直接偏好最佳化（DPO），以處理與模型響應質量相關的邊緣情況，有效實現了模型智慧與對話能力的良好平衡。這些改進促成了一個業界領先的通用聊天模型，具備最先進的智慧和影象理解能力。

**效能**

Llama 4 Maverick 包含 170 億啟用引數、128 個專家和 4000 億總引數，相比 Llama 3.3 70B，以更低的價格提供了更高的質量。由下表可知，Llama 4 Maverick 是同類中最佳的多模態模型，在編碼、推理、多語言、長上下文和影象基準測試中，其效能超過了類似模型如 GPT-4o 和 Gemini 2.0，並且在編碼和推理方面與規模更大的 DeepSeek v3.1 具有競爭力。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/Ilusha7l6FSYjYh8.webp" alt="" width="100%" />

較小模型 Llama 4 Scout 是一款通用型模型，擁有 170 億啟用引數、16 個專家和 1090 億總引數，能夠在其所屬類別中提供最先進的效能。Llama 4 Scout 將支援的上下文長度從 Llama 3 的 128K 大幅提升至業界領先的 1000 萬 token。這為多文件摘要、解析廣泛使用者活動以實現個性化任務以及推理龐大程式碼庫等應用提供了更多可能性。

Llama 4 Scout 在預訓練和後訓練中均使用 256K 上下文長度，使基礎模型具備強大的長上下文泛化能力。在大海撈針檢索等任務中，該模型均展示了令人信服的結果。

Llama 4 架構的關鍵創新之一是使用無位置嵌入的交錯注意力層（interleaved attention layers），並透過推理時的溫度縮放來增強長上下文泛化能力。這種架構被稱為 iRoPE 架構，其中 i 代表交錯（interleaved）注意力層，強調其支援無限上下文長度的長期目標；RoPE 指大多數層中使用的旋轉位置嵌入。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/cfCiNT5dwnYGawHq.webp" alt="" width="100%" />

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/usuVnEjcuadSu534.webp" alt="" width="100%" />

Meta 對兩款模型進行了廣泛的影象和影片幀靜止影象訓練，以賦予它們廣泛的視覺理解能力，包括對時序活動及相關影象的理解。這使得模型能夠在多影象輸入和文字提示下輕鬆進行視覺推理和理解任務。這些模型在預訓練時最多支援 48 張影象，並且在後訓練中可以支援 8 張影象，結果良好。

Llama 4 Scout 在影象定位方面表現卓越，能夠將使用者提示與相關視覺概念對齊，並將模型響應錨定到影象中的特定區域。這使得大型語言模型能夠更精確地進行視覺問答，更好地理解使用者意圖並定位感興趣的物件。

此外，Llama 4 Scout 在編碼、推理、長上下文和影象基準測試中超越了類似模型，並且比所有之前的 Llama 模型表現更強。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/nf0J197YjWF8yk7A.webp" alt="" width="100%" />

**將 Llama 推向新的尺度：2T Behemoth**

Llama 4 Behemoth 預覽版是一個教師模型，也是一個多模態混合專家模型，擁有 2880 億啟用引數、16 個專家和近 2 萬億總引數。

在數學、多語言和影象基準測試中，它提供了非推理模型的最先進效能，是教授較小 Llama 4 模型的完美選擇。

<img src="https://pic.code-nav.cn/post_picture/1619930914211520514/hUTxkLXhkdIsWyHW.webp" alt="" width="100%" />

對一個擁有兩萬億引數的模型進行後訓練是一個巨大的挑戰，這要求研究者從資料規模開始，徹底重新設計和改進訓練方案。為了最大化效能，Meta 不得不對監督微調（SFT）資料進行 95% 的剪枝，而較小模型的剪枝比例為 50%。這一舉措是為了在質量和效率上取得必要的平衡。Meta 還發現，先進行輕量級監督微調（SFT），再進行大規模強化學習（RL），能夠顯著提升模型的推理和編碼能力。

Meta 的強化學習（RL）方案專注於透過策略模型進行 pass@k 分析，取樣難度較高的提示，並構建難度逐漸增加的訓練課程。此外，在訓練過程中動態過濾掉零優勢的提示，並構建包含多種能力的混合提示訓練批次，這些措施在數學、推理和編碼方面為模型帶來了顯著的效能提升。最後，從多種系統指令中取樣對於確保模型在推理和編碼任務中保持指令遵循能力至關重要，這使得模型能夠在多種任務中表現出色。

為兩萬億引數的模型擴充套件強化學習（RL）也是一項巨大的挑戰，這迫使 Meta 不得不重新設計並改進底層的強化學習基礎設施，以應對前所未有的規模。

Meta 對混合專家（MoE）並行化的設計進行了最佳化，以提升速度，從而加快迭代過程。此外，他們還開發了一個完全非同步的線上強化學習訓練框架，增強了靈活性。與現有的分散式訓練框架相比，後者為了將所有模型載入到記憶體中而犧牲了計算記憶體，Meta 的新基礎設施能夠靈活地將不同模型分配到不同的 GPU 上，並根據計算速度在多個模型之間平衡資源。這一創新使得訓練效率相比上一代提升了約 10 倍。

Llama 4 Scout 和 Llama 4 Maverick 現已開放下載，地址：

- llama.com：https://www.llama.com/llama-downloads/
- Hugging Face 地址：https://huggingface.co/meta-llama

_參考連結：https://ai.meta.com/blog/llama-4-multimodal-intelligence/_

> 來源：機器之心
