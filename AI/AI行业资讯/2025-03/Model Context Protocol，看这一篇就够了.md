# Model Context Protocol，看這一篇就夠了

![MCP (Model Context Protocol)，一篇就夠了。](https://picx.zhimg.com/v2-aa37ae29a25e9d39fc019de2fa8c6e75_1440w.jpg?source=172ae18b)

最近 MCP 這個關鍵詞逐漸活躍在我所瀏覽的一些文章及評論區中。突然發現我對它僅有粗糙的理解，我決定深入學習並記錄一下。

在閱讀這篇文章前，我也簡單地瀏覽了現有介紹 MCP 的文章。我發現大部分文章停留在“翻譯” [https://modelcontextprotocol.io/](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/) 網站中的內容，或者花時間在絕大部分使用者不關心的技術細節上（還有一些純 AI 文）。

因此，我將從使用者的角度出發，分享實用內容，並以一個示例展示 MCP 的開發過程與實際應用作為結尾。本篇旨在回答以下三個問題：

- 什麼是 MCP？
- 為什麼需要 MCP？
- 作為使用者，我們如何 **使用**/開發 MCP？

當然，一篇文章遠遠不足以講透 MCP 的所有概念，只能盡力萃取最重要的內容供大家閱讀，歡迎討論。

Update 2025/03/15 進一步補充了關於第五節原理的解釋。

## 1\. What is MCP?

MCP 起源於 2024 年 11 月 25 日 [Anthropic](https://zhida.zhihu.com/search?content_id=254822599&content_type=Article&match_order=1&q=Anthropic&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NDM4MzQwMDIsInEiOiJBbnRocm9waWMiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNTQ4MjI1OTksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.4EBFlFdfKyjVmM6AYwpAoEesLEZB2f3RIT-e-QtOfUs&zhida_source=entity) 釋出的文章： [Introducing the Model Context Protocol](https://link.zhihu.com/?target=https%3A//www.anthropic.com/news/model-context-protocol)。

MCP（Model Context Protocol，模型上下文協議）定義了應用程式和 AI 模型之間交換上下文資訊的方式。這使得開發者能夠 **以一致的方式將各種資料來源、工具和功能連線到 AI 模型**（一箇中間協議層），就像 USB-C 讓不同裝置能夠透過相同的介面連線一樣。MCP 的目標是建立一個通用標準，使 AI 應用程式的開發和整合變得更加簡單和統一。

所謂一圖勝千言，我這裡引用一些製作的非常精良的圖片來幫助理解：

![](https://pic4.zhimg.com/v2-3a242914e1f4958e631dd158e043b7c3_1440w.jpg)

可以看出，MCP 就是以更標準的方式讓 LLM Chat 使用不同工具，更簡單的視覺化如下圖所示，這樣你應該更容易理解“中間協議層”的概念了。Anthropic 旨在實現 LLM Tool Call 的標準。

![](https://picx.zhimg.com/v2-9fe7fb51f264338a079a444eefa041b1_1440w.jpg)

mcp 簡單理解

> 為保證閱讀的流暢性，本文將 MCP Host / Client / Server 的定義後置。初學者/使用者可暫不關注這些概念，不影響對 MCP 的使用。

## 2\. Why MCP?

我認為 MCP 的出現是 prompt engineering 發展的產物。更結構化的上下文資訊對模型的 performance 提升是顯著的。我們在構造 prompt 時，希望能提供一些更 specific 的資訊（比如本地檔案，資料庫，一些網路實時資訊等）給模型，這樣模型更容易理解真實場景中的問題。

**想象一下沒有 MCP 之前我們會怎麼做**？我們可能會人工從資料庫中篩選或者使用工具檢索可能需要的資訊，手動的貼上到 prompt 中。隨著我們要解決的問題越來越複雜， **手工** 把資訊引入到 prompt 中會變得越來越困難。

為了克服手工 prompt 的侷限性，許多 LLM 平臺（如 OpenAI、Google）引入了 `function call` 功能。這一機制允許模型在需要時呼叫預定義的函式來獲取資料或執行操作，顯著提升了自動化水平。

但是 function call 也有其侷限性（我對於 function call vs MCP 的理解不一定成熟，歡迎大家補充），我認為重點在於 **function call 平臺依賴性強**，不同 LLM 平臺的 function call API 實現差異較大。例如，OpenAI 的函式呼叫方式與 Google 的不相容，開發者在切換模型時需要重寫程式碼，增加了適配成本。除此之外，還有安全性，互動性等問題。

**資料與工具本身是客觀存在的**，只不過我們希望將資料連線到模型的這個環節可以更智慧更統一。Anthropic 基於這樣的痛點設計了 MCP，充當 AI 模型的"萬能轉接頭"，讓 LLM 能輕鬆的獲取資料或者呼叫工具。更具體的說 MCP 的優勢在於：

- **生態** \- MCP 提供很多現成的外掛，你的 AI 可以直接使用。
- **統一性** \- 不限制於特定的 AI 模型，任何支援 MCP 的模型都可以靈活切換。
- **資料安全** \- 你的敏感資料留在自己的電腦上，不必全部上傳。（因為我們可以自行設計介面確定傳輸哪些資料）

## 3\. 使用者如何使用 MCP？

對於使用者來說，我們並不關心 MCP 是如何實現的，通常我們只考慮如何更簡單的用上這一特性。

具體的使用方式參考官方文件： [For Claude Desktop Users](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/quickstart/user)。這裡不再贅述，配置成功後可以在 Claude 中測試： `Can you write a poem and save it to my desktop?` Claude 會請求你的許可權後在本地新建一個檔案。

並且官方也提供了非常多現成的 MCP Servers，你只需要選擇你希望接入的工具，然後接入即可。

- [Awesome MCP Servers](https://link.zhihu.com/?target=https%3A//github.com/punkpeye/awesome-mcp-servers)
- [MCP Servers Website](https://link.zhihu.com/?target=https%3A//mcpservers.org/)
- [Official MCP Servers](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/servers)

比如官方介紹的 `filesystem` 工具，它允許 Claude 讀取和寫入檔案，就像在本地檔案系統中一樣。

## 4\. MCP Architecture 解構

這裡首先引用官方給出的架構圖。

![](https://pica.zhimg.com/v2-9d3681630ed930a8dc74d3b452c0cc94_1440w.jpg)

MCP 由三個核心元件構成：Host、Client 和 Server。讓我們透過一個實際場景來理解這些元件如何協同工作：

假設你正在使用 Claude Desktop (Host) 詢問："我桌面上有哪些文件？"

1. **Host**：Claude Desktop 作為 Host，負責接收你的提問並與 Claude 模型互動。
2. **Client**：當 Claude 模型決定需要訪問你的檔案系統時，Host 中內建的 MCP Client 會被啟用。這個 Client 負責與適當的 MCP Server 建立連線。
3. **Server**：在這個例子中，檔案系統 MCP Server 會被呼叫。它負責執行實際的檔案掃描操作，訪問你的桌面目錄，並返回找到的文件列表。

整個流程是這樣的：你的問題 → Claude Desktop(Host) → Claude 模型 → 需要檔案資訊 → MCP Client 連線 → 檔案系統 MCP Server → 執行操作 → 返回結果 → Claude 生成回答 → 顯示在 Claude Desktop 上。

這種架構設計使得 Claude 可以在不同場景下靈活呼叫各種工具和資料來源，而開發者只需專注於開發對應的 MCP Server，無需關心 Host 和 Client 的實現細節。

![](https://pic3.zhimg.com/v2-3f7ceba80b16ef134b27119308a04472_1440w.jpg)

## 5\. 原理：模型是如何確定工具的選用的？

在學習的過程中，我一直好奇一個問題： **Claude（模型）是在什麼時候確定使用哪些工具的呢**？好在 Anthropic 為我們提供了詳細的 [解釋](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/quickstart/server%23what%25E2%2580%2599s-happening-under-the-hood)：

當使用者提出一個問題時：

1. 客戶端（Claude Desktop / Cursor）將你的問題傳送給 Claude。
2. Claude 分析可用的工具，並決定使用哪一個（或多個）。
3. 客戶端透過 MCP Server 執行所選的工具。
4. 工具的執行結果被送回給 Claude。
5. Claude 結合執行結果構造最終的 prompt 並生成自然語言的回應。
6. 回應最終展示給使用者！

> MCP Server 是由 Claude 主動選擇並呼叫的。有意思的是 Claude 具體是如何確定該使用哪些工具呢？以及是否會使用一些不存在的工具呢（幻覺）？

**（原諒我之前解釋的過於簡單）** 為了探索這個問題讓我們深入 [原始碼](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/python-sdk/tree/main/examples/clients/simple-chatbot/mcp_simple_chatbot)。顯然這個呼叫過程可以分為兩個步驟：

1. 由 LLM（Claude）確定使用哪些 MCP Server。
2. 執行對應的 MCP Server 並對執行結果進行重新處理。

先給出一個簡單視覺化幫助理解：

![](https://pic3.zhimg.com/v2-2bcd98f6541da0b6f14dc9082ee2dcda_1440w.jpg)

### 5.1 模型如何智慧選擇工具？

先理解第一步 **模型如何確定該使用哪些工具？** 這裡以 MCP 官方提供的 [client example](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/python-sdk/tree/main/examples/clients/simple-chatbot/mcp_simple_chatbot) 為講解示例，並簡化了對應的程式碼（刪除了一些不影響閱讀邏輯的異常控制程式碼）。透過閱讀程式碼，可以發現模型是透過 prompt 來確定當前有哪些工具。我們透過 **將工具的具體使用描述以文字的形式傳遞給模型**，供模型瞭解有哪些工具以及結合實時情況進行選擇。參考程式碼中的註釋：

```python
 ... # 省略了無關的程式碼
 async def start(self):
     # 初始化所有的 mcp server
     for server in self.servers:
         await server.initialize()
 ​
     # 獲取所有的 tools 命名為 all_tools
     all_tools = []
     for server in self.servers:
         tools = await server.list_tools()
         all_tools.extend(tools)
 ​
     # 將所有的 tools 的功能描述格式化成字串供 LLM 使用
     # tool.format_for_llm() 我放到了這段程式碼最後，方便閱讀。
     tools_description = "\n".join(
         [tool.format_for_llm() for tool in all_tools]
     )
 ​
     # 這裡就不簡化了，以供參考，實際上就是基於 prompt 和當前所有工具的資訊
     # 詢問 LLM（Claude）應該使用哪些工具。
     system_message = (
         "You are a helpful assistant with access to these tools:\n\n"
         f"{tools_description}\n"
         "Choose the appropriate tool based on the user's question. "
         "If no tool is needed, reply directly.\n\n"
         "IMPORTANT: When you need to use a tool, you must ONLY respond with "
         "the exact JSON object format below, nothing else:\n"
         "{\n"
         '    "tool": "tool-name",\n'
         '    "arguments": {\n'
         '        "argument-name": "value"\n'
         "    }\n"
         "}\n\n"
         "After receiving a tool's response:\n"
         "1. Transform the raw data into a natural, conversational response\n"
         "2. Keep responses concise but informative\n"
         "3. Focus on the most relevant information\n"
         "4. Use appropriate context from the user's question\n"
         "5. Avoid simply repeating the raw data\n\n"
         "Please use only the tools that are explicitly defined above."
     )
     messages = [{"role": "system", "content": system_message}]
 ​
     while True:
         # Final... 假設這裡已經處理了使用者訊息輸入。
         messages.append({"role": "user", "content": user_input})
 ​
         # 將 system_message 和使用者訊息輸入一起傳送給 LLM
         llm_response = self.llm_client.get_response(messages)
 ​
     ... # 後面和確定使用哪些工具無關

 ​
 class Tool:
     """Represents a tool with its properties and formatting."""
 ​
     def __init__(
         self, name: str, description: str, input_schema: dict[str, Any]
     ) -> None:
         self.name: str = name
         self.description: str = description
         self.input_schema: dict[str, Any] = input_schema
 ​
     # 把工具的名字 / 工具的用途（description）和工具所需要的引數（args_desc）轉化為文字
     def format_for_llm(self) -> str:
         """Format tool information for LLM.
 ​
         Returns:
             A formatted string describing the tool.
         """
         args_desc = []
         if "properties" in self.input_schema:
             for param_name, param_info in self.input_schema["properties"].items():
                 arg_desc = (
                     f"- {param_name}: {param_info.get('description', 'No description')}"
                 )
                 if param_name in self.input_schema.get("required", []):
                     arg_desc += " (required)"
                 args_desc.append(arg_desc)
 ​
         return f"""
 Tool: {self.name}
 Description: {self.description}
 Arguments:
 {chr(10).join(args_desc)}
 """
```

那 tool 的描述和程式碼中的 `input_schema` 是從哪裡來的呢？透過進一步分析 MCP 的 Python SDK 原始碼可以發現：大部分情況下，當使用裝飾器 `@mcp.tool()` 來裝飾函式時，對應的 `name` 和 `description` 等其實直接源自使用者定義函式的函式名以及函式的 `docstring` 等。這裡僅擷取一小部分片段，想了解更多請參考 [原始程式碼](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/python-sdk/blob/main/src/mcp/server/fastmcp/tools/base.py%23L34-L73)。

```python
 @classmethod
 def from_function(
     cls,
     fn: Callable,
     name: str | None = None,
     description: str | None = None,
     context_kwarg: str | None = None,
 ) -> "Tool":
     """Create a Tool from a function."""
     func_name = name or fn.__name__ # 獲取函式名
 ​
     if func_name == "<lambda>":
         raise ValueError("You must provide a name for lambda functions")
 ​
     func_doc = description or fn.__doc__ or "" # 獲取函式 docstring
     is_async = inspect.iscoroutinefunction(fn)

     ... # 更多請參考原始程式碼...
```

總結： **模型是透過 prompt engineering，即提供所有工具的結構化描述和 few-shot 的 example 來確定該使用哪些工具**。另一方面，Anthropic 肯定對 Claude 做了專門的訓練（畢竟是自家協議，Claude 更能理解工具的 prompt 以及輸出結構化的 tool call json 程式碼）

### 5.2 工具執行與結果反饋機制

其實工具的執行就比較簡單和直接了。承接上一步，我們把 system prompt（指令與工具呼叫描述）和使用者訊息一起傳送給模型，然後接收模型的回覆。當模型分析使用者請求後，它會決定是否需要呼叫工具：

- **無需工具時**：模型直接生成自然語言回覆。
- **需要工具時**：模型輸出結構化 JSON 格式的工具呼叫請求。

如果回覆中包含結構化 JSON 格式的工具呼叫請求，則客戶端會根據這個 json 程式碼執行對應的工具。具體的實現邏輯都在 `process_llm_response` 中， [程式碼](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/python-sdk/blob/main/examples/clients/simple-chatbot/mcp_simple_chatbot/main.py%23L295-L338)，邏輯非常簡單。

如果模型執行了 tool call，則工具執行的結果 `result` 會和 system prompt 和使用者訊息一起 **重新傳送** 給模型，請求模型生成最終回覆。

如果 tool call 的 json 程式碼存在問題或者模型產生了幻覺怎麼辦呢？透過閱讀 [程式碼](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/python-sdk/blob/main/examples/clients/simple-chatbot/mcp_simple_chatbot/main.py%23L295-L338) 發現，我們會 skip 掉無效的呼叫請求。

執行相關的程式碼與註釋如下：

```python
 ... # 省略無關的程式碼
 async def start(self):
     ... # 上面已經介紹過了，模型如何選擇工具
 ​
     while True:
         # 假設這裡已經處理了使用者訊息輸入。
         messages.append({"role": "user", "content": user_input})
 ​
         # 獲取 LLM 的輸出
         llm_response = self.llm_client.get_response(messages)
 ​
         # 處理 LLM 的輸出（如果有 tool call 則執行對應的工具）
         result = await self.process_llm_response(llm_response)
 ​
         # 如果 result 與 llm_response 不同，說明執行了 tool call（有額外資訊了）
         # 則將 tool call 的結果重新傳送給 LLM 進行處理。
         if result != llm_response:
             messages.append({"role": "assistant", "content": llm_response})
             messages.append({"role": "system", "content": result})
 ​
             final_response = self.llm_client.get_response(messages)
             logging.info("\nFinal response: %s", final_response)
             messages.append(
                 {"role": "assistant", "content": final_response}
             )
         # 否則代表沒有執行 tool call，則直接將 LLM 的輸出返回給使用者。
         else:
             messages.append({"role": "assistant", "content": llm_response})
```

結合這部分原理分析：

- 工具文件至關重要 \- 模型透過工具描述文字來理解和選擇工具，因此精心編寫工具的名稱、docstring 和引數說明至關重要。
- 由於 MCP 的選擇是基於 prompt 的，所以任何模型其實都適配 MCP，只要你能提供對應的工具描述。但是當你使用非 Claude 模型時，MCP 使用的效果和體驗難以保證（沒有做專門的訓練）。

## 6\. 總結

MCP (Model Context Protocol) 代表了 AI 與外部工具和資料互動的標準建立。透過本文，我們可以瞭解到：

1. **MCP 的本質**：它是一個統一的協議標準，使 AI 模型能夠以一致的方式連線各種資料來源和工具，類似於 AI 世界的"USB-C"介面。

2. **MCP 的價值**：它解決了傳統 function call 的平臺依賴問題，提供了更統一、開放、安全、靈活的工具呼叫機制，讓使用者和開發者都能從中受益。

3. **使用與開發**：對於普通使用者，MCP 提供了豐富的現成工具， **使用者可以在不瞭解任何技術細節的情況下使用**；對於開發者，MCP 提供了清晰的架構和 SDK，使工具開發變得相對簡單。

MCP 還處於發展初期，但其潛力巨大。更重要的是生態吧，基於統一標準下構築的生態也會正向的促進整個領域的發展。

以上內容已經覆蓋了 MCP 的基本概念、價值和使用方法。對於技術實現感興趣的讀者，以下 **附錄提供了一個簡單的 MCP Server 開發實踐**，幫助你更深入地理解 MCP 的工作原理。

## Appendix A：MCP Server 開發實踐

`READ⏰: 30min`

在瞭解 MCP 元件之後，很容易發現對絕大部分 AI 開發者來說，我們只需要關心 Server 的實現。因此，我這裡準備透過一個最簡單的示例來介紹如何實現一個 MCP Server。

MCP servers 可以提供三種主要型別的功能：

- Resources（資源）：類似檔案的資料，可以被客戶端讀取（如 API 響應或檔案內容）
- Tools（工具）：可以被 LLM 呼叫的函式（需要使用者批准）
- Prompts（提示）：預先編寫的模板，幫助使用者完成特定任務

本教程將主要關注工具（Tools）。

### A.I 使用 LLM 構建 MCP 的最佳實踐

在開始之前，Anthropic 為我們提供了一個基於 LLM 的 MCP Server 的 [最佳開發實踐](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/tutorials/building-mcp-with-llms)，總結如下：

- 引入 domain knowledge（說人話就是，告訴他一些 MCP Server 開發的範例和資料）

  - 訪問 [https://modelcontextprotocol.io/llms-full.txt](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/llms-full.txt) 並複製完整的文件文字。（實測這個太長了，可以忽略）
  - 導航到 MCP [TypeScript SDK](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/typescript-sdk) 或 [Python SDK](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/python-sdk) Github 專案中並複製相關內容。
  - 把這些作為 prompt 輸入到你的 chat 對話中（作為 context）。

- 描述你的需求

  - 你的伺服器會開放哪些資源
  - 它會提供哪些工具
  - 它應該給出哪些引導或建議
  - 它需要跟哪些外部系統互動

給出一個 example prompt:

```text
... （這裡是已經引入的 domain knowledge）

打造一個 MCP 伺服器，它能夠：

- 連線到我公司的 PostgreSQL 資料庫
- 將表格結構作為資源開放出來
- 提供執行只讀 SQL 查詢的工具
- 包含常見資料分析任務的引導
```

剩下的部分也很重要，但是偏重於方法論，實踐性較弱，我這裡就不展開了，推薦大家直接看 [官方文件](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/tutorials/building-mcp-with-llms)。

### A.II 手動實踐

本節內容主要參考了官方文件： [Quick Start: For Server Developers](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/quickstart/server)。你可以選擇直接跳過這部分內容或者進行一個速讀。

這裡我準備了一個簡單的示例，使用 Python 實現一個 MCP Server，用來 **統計當前桌面上的 txt 檔案數量和獲取對應檔案的名字**（你可以理解為一點用都沒有，但是它足夠簡單，主要是為了難以配置環境的讀者提供一個足夠短的實踐記錄）。以下實踐均執行在我的 MacOS 系統上。

**Step1. 前置工作**

- 安裝 Claude Desktop。
- Python 3.10+ 環境
- [Python MCP SDK](https://zhida.zhihu.com/search?content_id=254822599&content_type=Article&match_order=1&q=Python+MCP+SDK&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NDM4MzQwMDIsInEiOiJQeXRob24gTUNQIFNESyIsInpoaWRhX3NvdXJjZSI6ImVudGl0eSIsImNvbnRlbnRfaWQiOjI1NDgyMjU5OSwiY29udGVudF90eXBlIjoiQXJ0aWNsZSIsIm1hdGNoX29yZGVyIjoxLCJ6ZF90b2tlbiI6bnVsbH0.1c42YmabWtcjJAfTjF4cGX2Bsp0Qbkl6Pjc7V22BSJ0&zhida_source=entity) 1.2.0+

**Step2. 環境配置**

由於我使用的是官方推薦的配置：

```text
# 安裝 uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# 建立專案目錄
uv init txt_counter
cd txt_counter

# 設定 Python 3.10+ 環境
echo "3.11" > .python-version

# 建立虛擬環境並啟用
uv venv
source .venv/bin/activate

# Install dependencies
uv add "mcp[cli]" httpx

# Create our server file
touch txt_counter.py
```

> **Question**: 什麼是 `uv` 呢和 `conda` 比有什麼區別？
>
> **Answer**: 一個用 Rust 編寫的超快速 (100x) Python 包管理器和環境管理工具，由 Astral 開發。定位為 pip 和 venv 的替代品，專注於速度、簡單性和現代 Python 工作流。

**Step3. 構造一個 prompt**

```text
"""
... （這裡是已經引入的 domain knowledge）
"""

打造一個 MCP 伺服器，它能夠：
- 功能：
    - 統計當前桌面上的 txt 檔案數量
    - 獲取對應檔案的名字

要求：
- 不需要給出 prompt 和 resource 相關程式碼。
- 你可以假設我的桌面路徑為 /Users/{username}/Desktop
```

- Domain Knowledge 複製於 MCP Python SDK 的 [README 檔案](https://link.zhihu.com/?target=https%3A//raw.githubusercontent.com/modelcontextprotocol/python-sdk/refs/heads/main/README.md)

**Step4. 實現 MCP Server**

以下程式碼由 Claude 3.7 直接生成。當然，這主要是因為我的需求足夠簡單，當你需要實現一個複雜的 MCP Server 時，你可能需要多步的引導和 Debug 才能得到最終的程式碼。

```python
import os
from pathlib import Path
from mcp.server.fastmcp import FastMCP

# 建立 MCP Server
mcp = FastMCP("桌面 TXT 檔案統計器")

@mcp.tool()
def count_desktop_txt_files() -> int:
    """Count the number of .txt files on the desktop."""
    # Get the desktop path
    username = os.getenv("USER") or os.getenv("USERNAME")
    desktop_path = Path(f"/Users/{username}/Desktop")

    # Count .txt files
    txt_files = list(desktop_path.glob("*.txt"))
    return len(txt_files)

@mcp.tool()
def list_desktop_txt_files() -> str:
    """Get a list of all .txt filenames on the desktop."""
    # Get the desktop path
    username = os.getenv("USER") or os.getenv("USERNAME")
    desktop_path = Path(f"/Users/{username}/Desktop")

    # Get all .txt files
    txt_files = list(desktop_path.glob("*.txt"))

    # Return the filenames
    if not txt_files:
        return "No .txt files found on desktop."

    # Format the list of filenames
    file_list = "\n".join([f"- {file.name}" for file in txt_files])
    return f"Found {len(txt_files)} .txt files on desktop:\n{file_list}"

if __name__ == "__main__":
    # Initialize and run the server
    mcp.run()
```

任務非常簡單，只需要呼叫非常基本的 `os` 就可以完成。

**Step5. 測試 MCP Server**

（官方沒有這一步，但是我非常推薦大家這麼做）

```text
$ mcp dev txt_counter.py
Starting MCP inspector...
Proxy server listening on port 3000

MCP Inspector is up and running at http://localhost:5173
```

之後進入到給出的連結中，你大概能按下圖進行操作：

![](https://pica.zhimg.com/v2-a5e671c689907229a1d86162597e2da4_1440w.jpg)

如果成功，你應該能像我一樣看到對應的輸出（ `Tool Result`）～

**Step6. 接入 Claude**

最後一步就是把我們寫好的 MCP 接入到 Claude Desktop 中。流程如下：

```text
# 開啟 claude_desktop_config.json (MacOS / Linux)
# 如果你用的是 cursor 或者 vim 請更換對應的命令
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

在配置檔案中新增以下內容，記得替換 `/Users/{username}` 為你的實際使用者名稱，以及其他路徑為你的實際路徑。

```json
{
  "mcpServers": {
    "txt_counter": {
      "command": "/Users/{username}/.local/bin/uv",
      "args": [\
        "--directory",\
        "/Users/{username}/work/mcp-learn/code-example-txt", // 你的專案路徑（這裡是我的）\
        "run",\
        "txt_counter.py" // 你的 MCP Server 檔名\
      ]
    }
  }
}
```

- `uv` 最好是絕對路徑，推薦使用 `which uv` 獲取。

配置好後重啟 Claude Desktop，如果沒問題就能看到對應的 MCP Server 了。

![](https://pic3.zhimg.com/v2-cb51fd06ef7663f05a5dd3da1aedeba2_1440w.jpg)

**Step7. 實際使用**

接下來，我們透過一個簡單的 prompt 進行實際測試：

```text
能推測我當前桌面上 txt 檔名的含義嗎？
```

它可能會請求你的使用許可權，如圖一所示，你可以點選 `Allow for This Chat`

![](https://pic2.zhimg.com/v2-44e6397dc33c38875198e62d6fcd4317_1440w.jpg)

![](https://pic1.zhimg.com/v2-d99e12160a8ae3af75df8ddf7eddda24_1440w.jpg)

看起來我們 MCP Server 已經正常工作了！

### A.III MCP Server Debug

Debug 是一個非常複雜的話題，這裡直接推薦官方的教程：

- [Official Tutorial: Debugging](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/docs/tools/debugging)
- [Official Tutorial: Inspector](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/docs/tools/inspector)

## Reference

- [MCP Official Docs](https://link.zhihu.com/?target=https%3A//modelcontextprotocol.io/)
- [MCP Python SDK](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/python-sdk)
- [MCP Available Server](https://link.zhihu.com/?target=https%3A//github.com/modelcontextprotocol/servers)
- [Blog: What is Model Context Protocol? (MCP) Architecture Overview](https://link.zhihu.com/?target=https%3A//medium.com/%40tahirbalarabe2/what-is-model-context-protocol-mcp-architecture-overview-c75f20ba4498)
- [Blog: LLM Function-Calling vs. Model Context Protocol (MCP)](https://link.zhihu.com/?target=https%3A//www.gentoro.com/blog/function-calling-vs-model-context-protocol-mcp)

> 來源：知乎
