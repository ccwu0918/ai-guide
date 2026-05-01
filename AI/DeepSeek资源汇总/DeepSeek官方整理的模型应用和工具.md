# DeepSeek官方整理的模型應用和工具

今天給大家介紹一個由 DeepSeek 團隊維護的專案 Awesome DeepSeek Integration，該專案整理了與 DeepSeek 模型相關的各種應用和工具。

DeepSeek 本身做的是基礎的模型，很少涉及應用，只對外提供 API 介面，我們可以透過 API 將 DeepSeek 大模型能力輕鬆接入各類軟體。

另外 DeepSeek 大模型本身是開源的，我們自己也可以搭建一個本地的大模型應用。

Awesome DeepSeek Integration 剛好提供了一些用於與 DeepSeek 等 AI 平臺整合的資源、工具和庫的集合。

**開源地址：https://github.com/deepseek-ai/awesome-deepseek-integration**

目前該專案已經收穫了 15k+ 的 Star:

![圖片](https://pic.yupi.icu/yuyi/640-20250220181106646)

DeepSeek 火了之後，該 Star 數是直線上升：

![圖片](https://pic.yupi.icu/yuyi/640-20250220181106711)

Awesome DeepSeek Integration 是一個精選列表，包含了多種與 DeepSeek 模型整合的應用程式、工具和外掛，涵蓋了日常對話、AI 程式設計、大模型開發、知識庫等多個領域。

透過這些工具和應用可以幫助開發者和使用者更方便地使用 DeepSeek 模型，提升生產力和效率。

------

**1. 桌面客戶端**



**QuantaLogic：**一個用於打造高階 AI 助手的框架，幫助開發者設計能思考和行動的智慧體，提升 AI 解決問題的能力。

**Chatbox：**電腦端的 AI 聊天軟體，支援 Windows、Mac 和 Linux，可接入多種 AI 模型，方便隨時與 AI 交流。

**ChatGPT-Next-Web：**網頁版工具，支援跨裝置無縫切換，快速使用 DeepSeek，隨時隨地與 AI 聊天。

**留白記事：**微信上的智慧助手，透過 DeepSeek 功能管理筆記、任務、日程和待辦清單。

**Pal：**iPhone 和 iPad 上的 AI 助手應用，隨時隨地解答問題、處理任務。

**LibreChat：**開源的 AI 聊天工具，可定製性強，能與 DeepSeek 無縫結合，提供個性化互動體驗。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181106893)

------

**2. AI Agent 框架**

**Anda：**一個用 Rust 語言開發的 AI 智慧體框架，能讓智慧體自主執行、記住事情，並透過 DeepSeek 等模型變得更聰明，適合構建高效、安全的智慧體網路。

**YoMo：**一個支援強型別語言的“有狀態無伺服器”框架，方便開發者快速構建和管理複雜的 AI 應用，特別適合需要記住使用者操作的場景。

**Alice：**基於區塊鏈的 AI 代理，利用 DeepSeek 等模型進行決策，能管理代幣、挖礦和參與生態治理，是區塊鏈和 AI 結合的智慧助手。

**ATTPs：**一個智慧體之間的通訊協議框架，讓不同平臺的智慧體可以安全、可信地交流，支援註冊、傳送和接收可驗證資料，實現高效協作。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181106957)

------

**3. RAG 框架**

**RAGFlow：**RAGFlow 是一款開源的 RAG（檢索增強生成）引擎，基於深度文件理解技術。它支援多種複雜格式的資料，結合大語言模型（LLM），提供可靠的問答和有理有據的引用。

**AutoFlow：**AutoFlow 是一個開源的知識庫工具，基於 GraphRAG 構建，支援 TiDB Vector、LlamaIndex 和 DSPy。它提供類 Perplexity 的搜尋頁面，可輕鬆整合到網站中。

**DeepSearcher：**DeepSearcher 結合了強大的 LLM（如 DeepSeek 和 OpenAI）和向量資料庫（如 Milvus），基於私有資料進行搜尋、評估和推理，提供高度準確的答案和全面的報告。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181107016)

------

**4. Solana 框架**

Solana Agent Kit：一個開源工具包，用於將 AI 智慧體連線到 Solana 區塊鏈協議。它支援任意 AI 模型的代理自主執行 60 多種 Solana 操作，包括代幣交易、NFT 建立與管理、借貸、空投等。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181107100)

------

**5. 即時通訊外掛**

**茴香豆：**一個整合到個人微信群或飛書群的領域知識助手，專注於解答問題，不閒聊。

**LangBot：**一個大模型原生即時通訊機器人平臺，適配 QQ、企微、飛書等多種訊息平臺。

**NoneBot：**基於 NoneBot 框架的智慧對話工具，支援 QQ、飛書、Discord、TG 等多種訊息平臺。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181107190)

------

**6. 瀏覽器外掛**

**沉浸式翻譯：**一款雙語對照網頁翻譯外掛，簡潔高效。

**沉浸式導讀：**一款無側邊欄的沉浸式 AI 網頁摘要外掛。

**ChatGPT Box：**將 LLM 作為私人助手整合到瀏覽器中的外掛。

**劃詞翻譯：**整合多家翻譯 API 和 LLM API 的瀏覽器翻譯外掛。

**歐路翻譯：**提供劃詞搜尋、逐段對照翻譯、PDF 翻譯等功能，支援 DeepSeek、Bing、GPT、Google 等多種翻譯引擎。

**流暢閱讀：**一款革新性的瀏覽器開源翻譯外掛，提供母語般的閱讀體驗。

**館長：**知識庫 AI 問答助手，幫助整理與分析知識。

**RssFlow：**一款智慧 RSS 閱讀器瀏覽器擴充套件，支援 AI 驅動的 RSS 摘要和多維度訂閱檢視。

**Typral：**超快的 AI 寫作助手，幫助最佳化日報、文章等文字。

**Trancy：**沉浸式雙語對照翻譯、影片雙語字幕、劃句/劃詞翻譯外掛。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181107315)

------

**7. VS Code 外掛**

**Continue：**開源 IDE 外掛，使用 LLM 作為程式設計助手。

**Cline：**一款能夠與 CLI 和編輯器配合使用的 AI 助手。

**AI Commit：**使用 AI 生成 Git commit message 的 VS Code 外掛。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181107397)

------

**8. neovim 外掛**

**avante.nvim：**開源 IDE 外掛，使用 LLM 作為程式設計助手。

**llm.nvim：**支援任意大模型（如 Deepseek、GPT）的 Neovim 外掛。

**minuet-ai.nvim：**支援多個主流大模型的實時程式碼補全外掛。

**codecompanion.nvim：**AI 驅動的編碼外掛，無縫整合到 Neovim。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181107448)

------

**9. JetBrains 外掛**

**Chinese-English Translate：**整合多家翻譯和 AI 廠商的 JetBrains 外掛，支援中英文翻譯。

**AI Git Commit：**使用 AI 生成 Git commit message 的 JetBrains 外掛。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181107501)

------

**10. AI Code編輯器**

**Cursor：**基於 VS Code 擴充套件的 AI Code 編輯器。

**WindSurf：**基於 VS Code 的 AI Code 編輯器。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181107589)

------

**11. 其他**

**Abso：**TypeScript SDK，支援 OpenAI 格式與任何 LLM 提供商互動。

**ShellOracle：**用於智慧 Shell 命令生成的終端工具。

**深度求索（快捷指令）：**使用 DeepSeek API 增強 Siri 能力的快捷指令。

**n8n-nodes-deepseek：**支援將 DeepSeek API 整合到 n8n 工作流的社群節點。

**promptfoo：**用於測試和評估 LLM 提示的工具，支援比較不同 LLM 提供商的響應。

**deepseek-tokenizer：**一個輕量級的 tokenization 庫，僅依賴 tokenizers。

**deepseek-review：**使用 Deepseek 進行程式碼稽核的工具，支援 GitHub Action 和本地使用。

**WordPress AI 助手：**對接 Deepseek API，用於 WordPress 站點的 AI 對話、文章生成和總結外掛。

![圖片](https://pic.yupi.icu/yuyi/640-20250220181107651)