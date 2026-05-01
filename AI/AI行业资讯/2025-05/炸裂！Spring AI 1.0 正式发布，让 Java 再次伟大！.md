# 炸裂！Spring AI 1.0 正式釋出，讓 Java 再次偉大！

炸裂，炸裂，炸裂！從第一次提交程式碼到現在，經過 2 年的沉澱，Spring AI 框架的第一個正式版本 1.0 終於釋出了。

![](https://pic.yupi.icu/1/1747881171718-91ac3eb5-049b-4510-8012-6736c40c9c95.png)

有了這玩意，開發 AI 應用就是灑灑水的事，Java 開發者們是不是又爽了，反正我是很興奮啊，讓 Java 再次偉大！

![](https://pic.yupi.icu/1/1747881641460-856dbbed-0d9d-480c-ad16-8e8dfcccbeb5.png)

但可能很多同學還不知道 Spring AI 能幹什麼，憑什麼這玩意就讓 Java 偉大了？

正好我最近剛帶程式設計導航的同學做完一套 AI 超級智慧體實戰專案，毫不誇張地說，我已經把 Spring AI 玩得 “手拿把掐” 了。

![](https://pic.yupi.icu/1/1747881819511-84f8a2c7-994a-4c1f-b785-584cf3572732.png)

下面我來給大家快速分享一下 Spring AI 的核心能力和魔法。看完之後，我相信你會點贊收藏三連，並且說一句：“偉的太大了”。



## Spring AI 核心特性

### 1、大模型呼叫能力

大模型呼叫能力是 AI 應用開發的基礎，允許應用程式與各種 AI 大模型進行互動，傳送提示詞並獲取模型的響應。Spring AI 提供了統一的介面來支援各種主流大模型，包括 OpenAI GPT 系列、Claude、通義千問等。

![](https://pic.yupi.icu/1/1747881987603-4021fe3f-ee20-4330-8586-32e46beba8c8.png)

Spring AI 透過配置 + 抽象介面簡化了大模型的呼叫過程，我可以直接在配置中宣告多個大模型：

```yaml
spring:
  ai:
    # 阿里大模型
    dashscope:
      chat:
        options:
          model: qwen-max
    # 本地大模型
    ollama:
      base-url: http://localhost:11434
      chat:
        model: gemma3:1b
    # 谷歌大模型
    vertex:
      ai:
        gemini:
          chat:
            options:
              model: gemini-1.5-pro-001
```

然後使用支援鏈式呼叫的 ChatClient 靈活地呼叫各種不同的大模型：

```java
// 使用 Spring AI 呼叫大模型
@Bean
public ChatClient chatClient(ChatModel chatModel) {
    return ChatClient.builder(chatModel).build();
}

public String doChat(String message) {
    ChatResponse response = chatClient
            .prompt(message)
            .call()
            .chatResponse();
    return response.getResult().getOutput().getText();
}
```

只用一行程式碼，就能支援 Stream 流式響應，實現打字機效果：

```java
chatClient
    .prompt(message)
    .stream()
```

如果不使用 Spring AI，則需要為每個模型分別實現 API 呼叫，要自己編寫請求、解析響應，很麻煩！

```java
// 不使用 Spring AI 呼叫大模型
public String chatWithOpenAI(String message) {
    // 配置 OpenAI API
    OkHttpClient client = new OkHttpClient();
    MediaType JSON = MediaType.get("application/json; charset=utf-8");
    
    // 構建請求體
    JSONObject requestBody = new JSONObject();
    requestBody.put("model", "gpt-3.5-turbo");
    JSONArray messages = new JSONArray();
    JSONObject userMessage = new JSONObject();
    userMessage.put("role", "user");
    userMessage.put("content", message);
    messages.put(userMessage);
    requestBody.put("messages", messages);
    
    // 傳送請求
    RequestBody body = RequestBody.create(requestBody.toString(), JSON);
    Request request = new Request.Builder()
            .url("https://api.openai.com/v1/chat/completions")
            .header("Authorization", "Bearer " + OPENAI_API_KEY)
            .post(body)
            .build();
            
    try (Response response = client.newCall(request).execute()) {
        String responseBody = response.body().string();
        JSONObject jsonResponse = new JSONObject(responseBody);
        return jsonResponse.getJSONArray("choices")
                .getJSONObject(0)
                .getJSONObject("message")
                .getString("content");
    } catch (Exception e) {
        return "Error: " + e.getMessage();
    }
}
```

Spring AI 不僅提供了統一介面支援多種大模型，讓我們可以輕鬆切換模型而無需修改業務程式碼。它還支援多模態大模型呼叫，使 AI 能夠同時處理文字、影象、音訊等多種輸入型別。

我們只需要將圖片等資源新增到訊息物件中，一起傳送給 AI 就可以了，使用 Spring AI 幾行程式碼就能實現：

```java
// 呼叫多模態模型
String response = ChatClient.create(chatModel).prompt()
    .user(u -> u.text("描述這張圖片中的內容")
               .media(MimeTypeUtils.IMAGE_PNG, new ClassPathResource("/yupi.png")))
    .call()
    .content();
```

如果不使用 Spring AI，多模態處理將變得複雜得多：

```java
// 不使用 Spring AI 的多模態實現
public String analyzeImage(String textPrompt, File imageFile) {
    // 讀取影象檔案並編碼為 Base64
    String base64Image = "";
    try {
        byte[] fileContent = Files.readAllBytes(imageFile.toPath());
        base64Image = Base64.getEncoder().encodeToString(fileContent);
    } catch (IOException e) {
        return "Error reading image file: " + e.getMessage();
    }
    
    // 構建請求體，不同模型的格式差異很大
    JSONObject requestBody = new JSONObject();
    requestBody.put("model", "gpt-4-vision-preview");
    
    JSONArray messages = new JSONArray();
    JSONObject userMessage = new JSONObject();
    userMessage.put("role", "user");
    
    // 構建複雜的內容陣列
    JSONArray contentArray = new JSONArray();
    
    // 新增文字部分
    JSONObject textContent = new JSONObject();
    textContent.put("type", "text");
    textContent.put("text", textPrompt);
    contentArray.put(textContent);
    
    // 新增影象部分
    JSONObject imageContent = new JSONObject();
    imageContent.put("type", "image_url");
    JSONObject imageUrl = new JSONObject();
    imageUrl.put("url", "data:image/png;base64," + base64Image);
    imageContent.put("image_url", imageUrl);
    contentArray.put(imageContent);
    
    userMessage.put("content", contentArray);
    messages.put(userMessage);
    requestBody.put("messages", messages);
    
    // 傳送請求並解析響應...
    // 程式碼略
}
```

此外，Spring AI 提供了強大的 Advisors 機制，有點類似面向切面程式設計，可以在模型呼叫前後新增額外的邏輯，增強 AI 的能力。

舉個例子，使用 Spring AI 內建的日誌 Advisor，一行程式碼就能在呼叫 AI 前後記錄日誌：

```java
// 使用 Advisors 增強 ChatClient
public String doChatWithAdvisors(String message, String chatId) {
    ChatResponse response = chatClient
            .prompt()
            .user(message)
            // 新增日誌 Advisor
            .advisors(new LoggingAdvisor())
            .call()
            .chatResponse();
    return response.getResult().getOutput().getText();
}
```

Advisor 的應用場景還有很多，比如呼叫 AI 前檢查提示詞是否安全、得到 AI 響應後儲存到資料庫中等等。

### 2、提示工程

提示工程（Prompt Engineering）是一門複雜的學問，指透過精心設計提示詞，讓 AI 更準確地理解使用者意圖，生成更符合預期的回答，減少幻覺（生成虛假資訊）的機率，同時最佳化 AI 模型的效能表現並節省成本。

Spring AI 透過 Prompt 和 PromptTemplate 類實現提示工程。

Prompt 類可以統一封裝多種不同型別的提示詞，便於傳送給大模型：

```java
// 使用者提示詞
Message userMessage = new UserMessage(userText);
// 系統提示詞
Message systemMessage = new SystemMessage(systemText);
Prompt prompt = new Prompt(List.of(userMessage, systemMessage));
```

利用 PromptTemplate 可以建立支援替換變數的提示詞模板，便於提示詞的維護和複用：

```java
// 使用 Spring AI 的提示模板
PromptTemplate promptTemplate = new PromptTemplate("你好，我是{name}，我擅長{skill}");
Prompt prompt = promptTemplate.create(Map.of(
    "name", "魚皮", 
    "skill", "程式設計"
));
ChatResponse response = chatClient.call(prompt);
```

如果不使用 Spring AI，你就需要手動 / 或者利用工具類來拼接提示詞字串，會更麻煩：

```java
// 不使用 Spring AI 需要手動字串拼接
String name = "AI 戀愛顧問";
String skill = "解決戀愛問題";
String promptText = "你好，我是" + name + "，我擅長" + skill;
// 還需自行實現條件邏輯、變數轉義等
if(hasCondition) {
    promptText += "，我注意到你可能遇到了" + conditionType + "問題";
}
// 呼叫 API 需自行封裝請求
Response response = apiClient.sendPrompt(promptText);
```



### 3、會話記憶

會話記憶（Chat Memory）使 AI 能夠儲存多輪對話歷史，理解上下文，實現連貫對話體驗，防止 AI 斷片兒。

利用 Spring AI 的 Advisor 機制，一行程式碼就能輕鬆開啟對話記憶：

```java
// 使用 Spring AI 的會話記憶
public String doChatWithMemory(String message, String chatId) {
    ChatResponse response = chatClient
            .prompt()
            .user(message)
            .advisors(
                // 將對話記憶儲存到記憶體中
                new MessageChatMemoryAdvisor(new InMemoryChatMemory())
            )
            .call()
            .chatResponse();
    return response.getResult().getOutput().getText();
}
```

還可以設定會話 id 實現隔離、設定上下文大小限制等引數：

```java
// 使用 Spring AI 的會話記憶
public String doChatWithMemory(String message, String chatId) {
    ChatResponse response = chatClient
            .prompt()
            .user(message)
            .advisors(
                // 將對話記憶儲存到記憶體中
                new MessageChatMemoryAdvisor(new InMemoryChatMemory())
            )
            .advisors(spec -> spec.param(CHAT_MEMORY_CONVERSATION_ID_KEY, chatId)
                    .param(CHAT_MEMORY_RETRIEVE_SIZE_KEY, 10))
            .call()
            .chatResponse();
    return response.getResult().getOutput().getText();
}
```

Spring AI 會自動處理上下文視窗大小限制，避免超出模型最大 token 限制。

如果不使用 Spring AI，需要手動管理對話歷史，程式碼量一下子就上來了：

```java
// 不使用 Spring AI 的會話記憶實現
Map<String, List<Message>> conversationHistory = new HashMap<>();

public String chat(String message, String userId) {
    // 獲取使用者歷史記錄
    List<Message> history = conversationHistory.getOrDefault(userId, new ArrayList<>());
    
    // 新增使用者新訊息
    Message userMessage = new Message("user", message);
    history.add(userMessage);
    
    // 構建完整歷史上下文
    StringBuilder contextBuilder = new StringBuilder();
    for (Message msg : history) {
        contextBuilder.append(msg.getRole()).append(": ").append(msg.getContent()).append("\n");
    }
    
    // 呼叫 AI API
    String response = callAiApi(contextBuilder.toString());
    
    // 儲存 AI 回覆到歷史
    Message aiMessage = new Message("assistant", response);
    history.add(aiMessage);
    conversationHistory.put(userId, history);
    
    return response;
}
```

Spring AI 的實現非常優秀，將會話儲存和儲存機制分離，我們可以自己定義 ChatMemory，將對話歷史儲存到資料庫等持久儲存中。



### 4、RAG 檢索增強生成

RAG（Retrieval-Augmented Generation）是指利用外部知識來增強 AI 生成結果的技術。透過從知識庫檢索相關資訊並注入到提示詞中，讓 AI 能夠利用這些資訊生成更準確的回答。

比如我帶大家做了一個 AI 戀愛大師應用，給 AI 準備了一套專注於戀愛問答的知識庫文件：

![](https://pic.yupi.icu/1/1747884552579-4d8d5873-cbac-4e30-85b4-dc12bd8edbdd.png)

利用 RAG 技術，AI 就能從我自己定義的知識庫中獲取到特定領域的、最新的資訊，不僅能減少大模型的幻覺（防止瞎編內容），還能趁機推薦一波自己的課程，豈不美哉？

所以 AI 的回覆也不能完全相信哦~

![](https://pic.yupi.icu/1/1747885198412-cf86e734-d482-490a-925b-896401ce0a3a.png)

RAG 的完整工作流程包括文件收集和切割、向量轉換和儲存、文件過濾和檢索、查詢增強和關聯 4 大步驟。

![](https://pic.yupi.icu/1/1747884491944-04de44f3-e024-434a-b79b-de61c8e603cd.png)

Spring AI 給 RAG 全流程的實現都提供了支援：

1）文件讀取。直接利用 Spring AI 提供的文件載入器，各種型別的文件都能輕鬆讀取：

```java
public List<Document> loadDocuments() {
    List<Document> documents = new ArrayList<>();
    // 載入 Markdown 文件
    Resource resource = resourceLoader.getResource("classpath:documents/knowledge.md");
    MarkdownDocumentReaderConfig config = MarkdownDocumentReaderConfig.builder()
            .withHorizontalRuleCreateDocument(true)
            .withIncludeCodeBlock(true)
            .withAdditionalMetadata("source", "knowledge-base")
            .build();
    MarkdownDocumentReader reader = new MarkdownDocumentReader(resource, config);
    documents.addAll(reader.get());
    return documents;
}
```

2）向量儲存。利用 Spring AI 提供的 VectorStore 輕鬆將文件轉換為向量並儲存到向量資料庫中：

```java
// 建立簡單向量儲存
SimpleVectorStore vectorStore = SimpleVectorStore.builder(embeddingModel)
        .build();
// 載入文件並儲存
List<Document> documents = documentLoader.loadDocuments();
vectorStore.add(documents);
```

3）文件過濾檢索 + 查詢增強關聯。直接使用 QuestionAnswerAdvisor，一行程式碼就可以讓 Spring AI 自動從知識庫中檢索文件，並將檢索到的文件提供給 AI 來增強輸出結果。

```java
ChatResponse response = chatClient.prompt()
    .user(question)
    .advisors(new QuestionAnswerAdvisor(vectorStore))
    .call()
    .chatResponse();
```

如果不使用 Spring AI，上述過程的實現可就太複雜了，要自己檢索文件、構建提示詞等等：

```java
// 不使用 Spring AI 的 RAG 實現
public String generateAnswerWithKnowledge(String query) {
    // 1. 將查詢轉換為向量
    float[] queryVector = embeddingService.embedText(query);
    
    // 2. 在向量資料庫中搜尋相似內容
    List<Document> relevantDocs = new ArrayList<>();
    for (Document doc : vectorDatabase.getAllDocuments()) {
        float similarity = calculateCosineSimilarity(queryVector, doc.getVector());
        if (similarity > 0.5) {
            relevantDocs.add(doc);
        }
    }
    relevantDocs.sort((a, b) -> Float.compare(
        calculateCosineSimilarity(queryVector, b.getVector()),
        calculateCosineSimilarity(queryVector, a.getVector())
    ));
    
    // 3. 擷取前三個最相關文件
    relevantDocs = relevantDocs.subList(0, Math.min(3, relevantDocs.size()));
    
    // 4. 構建提示詞，包含檢索到的知識
    StringBuilder prompt = new StringBuilder();
    prompt.append("使用以下資訊回答問題:\n\n");
    for (Document doc : relevantDocs) {
        prompt.append("---\n").append(doc.getContent()).append("\n---\n\n");
    }
    prompt.append("問題: ").append(query);
    
    // 5. 呼叫 AI 生成回答
    return aiService.generateResponse(prompt.toString());
}
```

除了實現基礎的 RAG 能力外，Spring AI 還提供了更多高階能力來最佳化 RAG 的效果。比如提供了完整的 ETL流程的支援，能夠快速抽取文件、切分處理文件、並載入到向量儲存中。

![](https://pic.yupi.icu/1/1747886114680-591a26a3-6674-475b-9eab-e62c52b04b7c.png)

提供了多查詢擴充套件器，可以為原始提示詞生成多個查詢變體，提高召回文件的機率：

```java
MultiQueryExpander queryExpander = MultiQueryExpander.builder()
    .chatClientBuilder(chatClientBuilder)
    .numberOfQueries(3)
    .build();
List<Query> queries = queryExpander.expand(new Query("誰是程式設計師魚皮？"));
```

提供了查詢重寫器，可以把原始提示詞變得更精確和專業：

```java
public String doQueryRewrite(String prompt) {
    QueryTransformer queryTransformer = RewriteQueryTransformer.builder()
            .chatClientBuilder(builder)
            .build();
    Query query = new Query(prompt);
    // 執行查詢重寫
    Query transformedQuery = queryTransformer.transform(query);
    // 輸出重寫後的查詢
    return transformedQuery.text();
}
```

效果如圖：

![](https://pic.yupi.icu/1/1747886020980-0b6e4da9-f59d-4bf5-aabd-fb03d3a3e795.png)

還支援自定義文件檢索器，能夠更靈活地定義查詢規則，比如按照文件的元資訊精確查詢、只查詢相似度最高的 N 條資料等：

```java
DocumentRetriever retriever = VectorStoreDocumentRetriever.builder()
    .vectorStore(vectorStore)
    .similarityThreshold(0.73)
    .topK(5)
    .filterExpression(new FilterExpressionBuilder()
        .eq("name", "魚皮")
        .build())
    .build();
```



### 5、工具呼叫

工具呼叫（Tool Calling）允許 AI 藉助外部工具完成自身無法直接完成的任務，比如網路搜尋、檔案操作、資料查詢等。它擴充套件了 AI 的能力範圍，使 AI 能夠獲取實時資訊、執行實際操作。

工具呼叫實現的本質是拼接提示詞，讓 AI 選擇要呼叫哪些工具，然後由程式呼叫工具並將返回結果交給 AI 進行後續輸出。

![](https://pic.yupi.icu/1/1747893550889-cf67c903-5461-43bb-bdf1-d3a497f3e36f.png)

利用 Spring AI，只需要透過註解就能快速定義工具：

```java
// 使用 Spring AI 定義工具
public class WebSearchTool {
    @Tool(description = "Search for information from Baidu Search Engine")
    public String searchWeb(
            @ToolParam(description = "Search query keyword") String query) {
        // 網路搜尋實現
        return "搜尋結果: " + query + " 的相關資訊...";
    }
}
```

然後一行程式碼就能使用工具，Spring AI 會控制程式和大模型進行互動並自動呼叫工具，非常方便：

```java
ChatResponse response = chatClient
    .prompt()
    .user(message)
    .tools(new WebSearchTool())
    .call()
    .chatResponse();
```

如果不使用 Spring AI，可就太複雜了！

```java
// 不使用 Spring AI 的工具呼叫實現
public String handleUserRequest(String userMessage) {
    // 1. 構建含工具定義的提示詞
    String toolDefinition = """
        {
            "tools": [
                {
                    "name": "searchWeb",
                    "description": "Search for information from Baidu Search Engine",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "query": {
                                "type": "string",
                                "description": "Search query keyword"
                            }
                        },
                        "required": ["query"]
                    }
                }
            ]
        }
        """;
    
    // 2. 呼叫 AI 判斷是否需要工具
    JsonObject aiResponse = callAiWithTools(userMessage, toolDefinition);
    
    // 3. 解析 AI 響應判斷是否需呼叫工具
    if (aiResponse.has("tool_calls")) {
        JsonArray toolCalls = aiResponse.getAsJsonArray("tool_calls");
        
        // 4. 依次執行每個工具
        List<String> toolResults = new ArrayList<>();
        for (JsonElement toolCall : toolCalls) {
            String toolName = toolCall.getAsJsonObject().get("name").getAsString();
            JsonObject args = toolCall.getAsJsonObject().get("arguments").getAsJsonObject();
            
            // 5. 根據工具名執行對應工具
            if ("searchWeb".equals(toolName)) {
                String query = args.get("query").getAsString();
                String result = searchWeb(query); // 實際執行搜尋
                toolResults.add(result);
            }
        }
        
        // 6. 將工具結果發回給 AI 生成最終回答
        return callAiWithToolResults(userMessage, toolCalls, toolResults);
    }
    
    return aiResponse.get("content").getAsString();
}
```

此外，Spring AI 提供了工具上下文 ToolContext，可以讓程式給工具傳遞額外引數，實現使用者身份認證等功能。還支援直接返回模式（returnDirect），可以繞過大模型直接返回工具結果。



### 6、MCP 模型上下文協議

MCP（Model Context Protocol 模型上下文協議）是一種開放標準，目的是增強 AI 與外部系統的互動能力。MCP 為 AI 提供了與外部工具、資源和服務互動的標準化方式，讓 AI 能夠訪問最新資料、執行復雜操作，並與現有系統整合。

可以將 MCP 想象成 AI 應用的 USB 介面，就像 USB 為裝置連線各種外設和配件提供了標準化方式一樣，MCP 為 AI 模型連線不同的資料來源和工具提供了標準化的方法。從而輕鬆增強 AI 的能力，有效降低開發者的理解成本，並且打造出 MCP 服務生態。

![](https://pic.yupi.icu/1/1747893881601-d78714c3-812d-4945-8b3f-c5be3b2b0d46.png)

利用 Spring AI，我們可以快速接入別人的 MCP 服務，只需要定義 MCP 服務配置，然後直接透過 Bean 注入 MCP 服務提供的工具即可：

```java
// 使用 Spring AI 的 MCP 客戶端
// 1. 在配置檔案中定義 MCP 服務
// mcp-servers.json
{
  "mcpServers": {
    "amap-maps": {
      "command": "npx",
      "args": ["-y", "@amap/amap-maps-mcp-server"],
      "env": {"AMAP_MAPS_API_KEY": "你的API金鑰"}
    }
  }
}

// 2. 在應用程式中使用 MCP 服務
@Resource
private ToolCallbackProvider toolCallbackProvider;

public String doChatWithMcp(String message) {
    ChatResponse response = chatClient
            .prompt()
            .user(message)
            .tools(toolCallbackProvider) // MCP 服務提供的所有工具
            .call()
            .chatResponse();
    return response.getResult().getOutput().getText();
}
```

當然，開發 MCP 服務也很簡單。先利用註解定義工具，然後將工具註冊到 MCP 服務中：

```java
// 定義工具
public class ImageSearchTool {
    @Tool(description = "search image from web")
    public String searchImage(@ToolParam(description = "Search query keyword") String query) {
        // 搜尋圖片，返回結果
        return "https://www.codefather.cn";
    }
}

// 註冊 MCP 服務
@Bean
public ToolCallbackProvider imageSearchTools() {
    return MethodToolCallbackProvider.builder()
            .toolObjects(new ImageSearchTool())
            .build();
}
```

如果不使用 Spring AI，你就需要引入 MCP 官方的 SDK 進行開發，或者自主實現，太麻煩了！

```java
// 不使用 Spring AI 的 MCP 實現
public String chatWithExternalTools(String userMessage) {
    // 1. 啟動外部 MCP 服務程序
    Process mcpProcess = startMcpProcess("npx", "-y", "@amap/amap-maps-mcp-server");
    
    // 2. 建立與 MCP 服務的通訊通道
    InputStream inputStream = mcpProcess.getInputStream();
    OutputStream outputStream = mcpProcess.getOutputStream();
    
    // 3. 傳送初始化握手訊息
    JsonObject initMessage = new JsonObject();
    initMessage.addProperty("jsonrpc", "2.0");
    initMessage.addProperty("method", "initialize");
    // ... 新增更多初始化引數
    sendMessage(outputStream, initMessage);
    
    // 4. 接收並解析服務提供的工具定義
    JsonObject response = readResponse(inputStream);
    JsonArray toolDefinitions = extractToolDefinitions(response);
    
    // 5. 呼叫 AI 模型，將工具定義傳遞給模型
    JsonObject aiResponse = callAiWithTools(userMessage, toolDefinitions);
    
    // 6. 解析 AI 響應，如果需要呼叫工具則傳送給 MCP 服務
    if (aiResponse.has("tool_calls")) {
        JsonArray toolCalls = aiResponse.getAsJsonArray("tool_calls");
        List<String> toolResults = new ArrayList<>();
        
        for (JsonElement toolCall : toolCalls) {
            // 7. 將工具呼叫請求傳送給 MCP 服務
            JsonObject toolRequest = new JsonObject();
            toolRequest.addProperty("jsonrpc", "2.0");
            toolRequest.addProperty("method", "executeFunction");
            // ... 新增工具呼叫引數
            sendMessage(outputStream, toolRequest);
            
            // 8. 接收 MCP 服務的執行結果
            JsonObject toolResponse = readResponse(inputStream);
            toolResults.add(toolResponse.toString());
        }
        
        // 9. 將工具結果發回給 AI 生成最終回答
        return callAiWithToolResults(userMessage, toolCalls, toolResults);
    }
    
    // 10. 最後關閉 MCP 服務
    mcpProcess.destroy();
    
    return aiResponse.get("content").getAsString();
}
```



## 結尾

以上就是 Spring AI 的核心特性解析，相信大家也感受到使用 Spring AI 開發 AI 應用有多爽了吧！

除了前面提到的之外，Spring AI 還提供了大模型評估測試能力，比如評估 AI 回答與使用者輸入和上下文的相關性；還提供了全面的可觀測性功能，幫助開發者監控 AI 應用的執行狀態。

不過目前這些特性還不夠成熟，Spring AI 也還有很長一段路要走，後續應該也會推出智慧體工作流編排框架吧~

------

就先分享到這裡，我全程直播帶大家做的 AI 超級智慧體新專案今天就完結了，教程中給大家講解了 Spring AI 幾乎所有的特性和高階用法，甚至帶大家閱讀開源 Manus 專案的原始碼並且實現了擁有自主規劃能力的 AI 智慧體，歡迎大家來 [程式設計導航](https://www.codefather.cn/) 學習。

![](https://pic.yupi.icu/1/1747894887694-cd5e7c53-f777-49ad-ae5a-89252a1ac10d.png)

在我們的 [程式設計師面試刷題神器 - 面試鴨](https://www.mianshiya.com/) 中也新出了 AI 大模型相關的面試題，每道題目都能讓你學到很多知識~

![](https://pic.yupi.icu/1/1747894904199-e795908c-638e-4d29-afd5-c8127db010f3.png)

還有 [魚皮開源的 AI 知識庫](https://github.com/liyupi/ai-guide)，裡面有很多值得學習的 AI 乾貨，持續更新~

獲取知識庫：https://github.com/liyupi/ai-guide

![](https://pic.yupi.icu/1/1747796993472-c3d3dd64-2ccd-407e-b427-0a7992fec7d0.png)

我們下期見咯！
