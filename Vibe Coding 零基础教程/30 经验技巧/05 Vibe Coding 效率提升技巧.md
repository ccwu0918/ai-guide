# Vibe Coding 效率提升技巧

> 讓你的 AI 開發效率提升 10 倍



你好，我是魚皮。

在前面的文章裡，我們講了 Vibe Coding 的核心心法、對話技巧、上下文管理和問題除錯。本文我們要聊一個更實用的話題 ：如何提高開發效率？

很多同學在用 AI 開發時，雖然能做出東西，但總覺得速度還不夠快。明明 AI 寫程式碼很快，為什麼整體效率還是不高？

問題往往出在那些小事上：比如頻繁地複製貼上、重複輸入相同的提示詞、手動做一些機械的操作……

下面我來分享一些實用的效率提升技巧，幫你把開發速度提升一個檔次。




## 一、核心提效技巧

先分享幾個我個人使用較多的 AI 核心提效技巧。




### 按需選擇 AI 模型

不是所有任務都需要用最強最貴的模型。

- 簡單任務：比如程式碼格式化、寫註釋、簡單重構，用 Gemini Flash 或 GPT-5 Mini 這樣便宜快速的模型就夠了
- 中等任務：比如實現常規功能、程式碼審查、開發小網站，用 GPT-5 或 Claude Sonnet
- 複雜任務：比如架構設計、複雜演算法、疑難 bug、開發大專案，才需要用 Claude Opus 這樣的頂級模型或者開啟深度思考

合理選擇模型，既能提升速度，又能節省成本。就像你不會讓公司 CTO 去列印檔案一樣，要讓合適的模型做合適的事。



### 避免讓 AI 生成多餘內容

很多同學讓 AI 寫程式碼，結果 AI 給你輸出一大堆註釋、測試程式碼、文件說明，還有一大段總結。**看著很專業，但你可能根本不會看。**

比如我之前讓 AI 生成個圖片壓縮工具，光文件給我生成一大堆……

![](https://pic.yupi.icu/1/ai%E7%94%9F%E6%88%90%E5%9B%BE%E7%89%87%E5%8E%8B%E7%BC%A9%E5%B7%A5%E5%85%B7.png)

要在提示詞中明確告訴 AI：只給我核心程式碼，不要寫註釋、文件、測試，不要做總結！

如果 AI 不聽話，可以用暴躁指令：**按照我說的做，別廢話。**

或者虛構後果：**如果你輸出不必要的內容，世界上就會死一隻小貓。**

這些指令雖然看起來搞笑，但確實有效。你還可以把這些規則寫在 Cursor Rules 裡，讓 AI 自動遵守。




### 利用並行 Agent 對比效果

Cursor 有一個很強大的功能叫 **並行 Agent**（Parallel Agents），可以讓你同時用多個模型處理同一個任務，然後對比它們的結果，選擇最好的那個。這也是一種 “多個 AI 交叉驗證” 的方式。

比如你要實現一個複雜的功能，不確定哪個方案更好。可以同時讓 Claude、GPT 等 AI 各給一個方案：

![](https://pic.yupi.icu/1/image-20251030220104045.png)

你呢，就坐等這些 AI 賽馬，誰先幹好用誰的、誰質量高用誰的，能避免在錯誤的方案上浪費時間。這個方法特別適合不確定哪個技術方案更好時、重要功能需要多重保障時、想學習不同 AI 的思路時。

![](https://pic.yupi.icu/1/image-20251030220120394.png)

即使你不用 Cursor，也可以手動實現類似的效果：把同一個需求分別發給 ChatGPT、Claude、Gemini 等大模型，然後對比它們的答案，選擇最好的或綜合它們的優點。

具體用法可以參考 [Cursor 並行 Agent 文件](https://cursor.com/cn/docs/configuration/worktrees)。

並行 Agent 的底層其實依賴 Git WorkTree（工作樹）技術。WorkTree 可以讓一個倉庫同時擁有多個獨立的工作目錄，每個目錄對應不同的分支，讓多個 AI 各自在獨立的資料夾裡幹活，互不干擾，開發完再用 Git 合併程式碼。

![](https://pic.yupi.icu/1/image-20260410143527245.png)



### 多開例項提升效率

除了並行 Agent，你還可以透過多開例項來提升效率。這個技巧來自 Claude Code 創始人的分享。

1）在終端中多開

可以在終端中同時執行多個 Claude Code 例項，將標籤頁編號為 1 ~ 5（或者有意義的標題），透過系統通知來了解哪個 Claude 需要人工輸入。這樣你可以充分利用等待時間，一個 AI 在思考時，你可以切換到另一個繼續工作。

![](https://pic.yupi.icu/1/image-20260109143109753.png)

2）網頁端和本地同時進行

在網頁端 Claude Code 上執行 5 ~ 10 個 Claude，和本地 Claude 同時進行。可以使用 `&` 命令將本地會話移交給網頁版，或者使用 `--teleport` 命令在終端和網頁之間來回切換。甚至可以透過手機 Claude iOS 應用啟動幾個會話，稍後再檢視進度。真正做到了隨時隨地 Vibe Coding！

注意，這個技巧適合處理多個獨立任務，或者需要等待 AI 長時間思考的複雜任務。對於簡單任務，一個例項就夠了。



## 二、快捷鍵和操作技巧

工欲善其事，必先利其器。掌握常用的快捷鍵，能讓你的操作更流暢。



### Cursor 常用快捷鍵

如果你用 Cursor，建議嘗試下面這些快捷鍵，能讓你少用滑鼠，操作更快。

對話相關：
- `Cmd/Ctrl + L` ：切換側邊欄（除非已繫結到某個模式）
- `Cmd/Ctrl + I` ：切換側邊欄（除非已繫結到某個模式）
- `Cmd/Ctrl + K` ：開啟行內編輯，可以在當前位置插入 AI 生成的程式碼
- `Tab`：接受建議

程式碼編輯：
- `Cmd/Ctrl + Shift + L` ：將選中內容新增到聊天
- `Alt + ↑/↓` ：移動當前行
- `Cmd/Ctrl + /` ：註釋/取消註釋

檔案操作：
- `Cmd/Ctrl + Shift + F` ：全域性搜尋

更多最新的預設鍵盤快捷鍵以 [官方文件](https://cursor.com/cn/docs/configuration/kbd) 為主：

![](https://pic.yupi.icu/1/image-20260104192219087.png)




### VS Code 常用快捷鍵

如果你用 VS Code + AI 外掛，下面這些快捷鍵會很有用。

多游標編輯：
- `Alt + Click` ：新增游標
- `Cmd/Ctrl + Alt + ↑/↓` ：在上/下方新增游標
- `Cmd/Ctrl + Shift + L` ：在所有匹配項新增游標

程式碼導航：
- `Cmd/Ctrl + Click` ：跳轉到定義
- `Alt + ←/→` ：前進/後退
- `Cmd/Ctrl + Shift + O` ：跳轉到符號

重構：

- `F2` ：重新命名符號
- `Cmd/Ctrl + .` ：快速修復

掌握這些快捷鍵，你的編輯速度會快很多。更多最新的預設鍵盤快捷鍵以 [官方文件](https://code.visualstudio.com/docs/reference/default-keybindings) 為主：

![](https://pic.yupi.icu/1/image-20260104192832985.png)



### AI 程式設計工具的斜槓命令

除了快捷鍵，AI 程式設計工具 Cursor 和 Claude Code 都提供了很多實用的斜槓命令（Slash Commands），能大大提升效率。這些命令以 `/` 開頭，可以快速觸發特定的功能。

#### Cursor 的常用命令

`/summarize` 命令可以快速總結對話內容，特別適合長對話，能節省大量 token。

你還可以在專案的 `.cursor/commands` 目錄下建立自定義命令，把常用的提示詞儲存成命令，需要時直接呼叫。

![](https://pic.yupi.icu/1/cursor_command.png)



#### Claude Code 的常用命令

Claude Code 也有類似的命令系統。

- `/compact` 可以壓縮上下文，把之前的對話內容精簡一下，節省 token
- `/plan` 可以制定實現計劃，讓 AI 先規劃再動手
- `/review` 可以快速進行程式碼審查
- `/init` 可以初始化專案並建立 `CLAUDE.md` 檔案

![](https://pic.yupi.icu/1/image-20260104213706515.png)

這些命令的好處是，你不用每次都寫完整的提示詞，只需要輸入一個簡短的命令，AI 就知道你要做什麼。

而且你可以建立自己的自定義命令，把團隊常用的工作流程標準化。比如建立一個 `/commit` 命令自動生成 Git 提交資訊，建立一個 `/test` 命令自動生成單元測試。

熟練使用這些命令，能讓你的工作流程更順暢，效率提升一大截。詳細的命令列表和用法可以參考 [Cursor 官方文件](https://cursor.com/cn/docs/agent/chat/commands) 和 [Claude Code 官方文件](https://code.claude.com/docs/en/slash-commands)。




## 三、程式碼複用和模組化

把常用的程式碼封裝成可複用的模組，不要重複造輪子。



### 建立元件庫

如果你經常做類似的專案，可以建立一個自己的元件庫。

比如，你可能經常需要這些元件：
- 按鈕（Button）
- 輸入框（Input）
- 卡片（Card）
- 模態框（Modal）
- 載入動畫（Loading）

把這些元件做成通用的，放在一個單獨的資料夾裡：

```
/components
  /ui
    - Button.tsx
    - Input.tsx
    - Card.tsx
    - Modal.tsx
    - Loading.tsx
```

每個元件都要：
- 有清晰的 Props 介面
- 支援自定義樣式
- 有使用示例

這樣，下次做新專案時，直接複製這個資料夾就行了。



### 封裝常用函式

把常用的工具函式封裝起來，避免每次都重新寫或讓 AI 生成。比如日期格式化、防抖函式、生成 ID、複製到剪貼簿這些功能，幾乎每個專案都會用到。把它們整理成一個工具函式庫，需要時直接匯入使用，比每次都讓 AI 重新生成要快得多。

```typescript
// lib/utils.ts

// 格式化日期
export function formatDate(date: Date): string {
  return date.toLocaleDateString('zh-CN');
}

// 防抖
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// 生成隨機 ID
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

// 複製到剪貼簿
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
```




### 使用程式碼片段（Snippets）

在編輯器中建立程式碼片段，快速插入常用程式碼。

比如在 VS Code 中，你可以建立一個前端 React 元件的片段。具體方法是：

1）按 `Cmd/Ctrl + Shift + P` 開啟命令面板，輸入 "Snippets"，選擇 "Configure Snippets"：

![](https://pic.yupi.icu/1/image-20260104214112119.png)

2）然後選擇對應的語言（如 typescriptreact.json），就可以新增自定義片段了。

比如：

```json
{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "interface ${1:ComponentName}Props {",
      "  $2",
      "}",
      "",
      "export function ${1:ComponentName}({ $3 }: ${1:ComponentName}Props) {",
      "  return (",
      "    <div>",
      "      $4",
      "    </div>",
      "  );",
      "}"
    ],
    "description": "Create a React functional component with TypeScript"
  }
}
```

![](https://pic.yupi.icu/1/image-20260104214219382.png)

配置完成後，輸入 `rfc` 再按 Tab，就能快速生成元件模板。

![](https://pic.yupi.icu/1/image-20260104214331581.png)




### 建立程式碼庫

把你做過的好的程式碼儲存起來，建立一個專屬於你的程式碼庫。

舉個例子，可以用這樣的結構：

```
/my-code-library
  /react
    /hooks
      - useLocalStorage.ts
      - useDebounce.ts
      - useFetch.ts
    /components
      - Button.tsx
      - Modal.tsx
    /utils
      - format.ts
      - validate.ts
  /node
    /middleware
      - auth.ts
      - cors.ts
    /utils
      - db.ts
      - email.ts
```

需要時，直接從這裡複製就好。




## 四、模板專案的建立

如果你經常做某一類專案，可以建立一個模板專案。




### 什麼是模板專案？

模板專案是一個預先配置好的專案骨架，包含了：

- 基本的目錄結構
- 常用的依賴包
- 配置檔案（如 tsconfig.json、tailwind.config.js）
- 基礎元件和工具函式
- README 和文件模板

有了模板專案，開始新專案時就不用從零配置了。

就像我自己，做了幾十個專案後，積累了不少模板。現在每次開始新專案，我會先找一個類似的老專案，然後告訴 AI：“請參考這個專案的技術棧和目錄結構來建立新專案。” 這樣 AI 就能生成一個和我習慣一致的專案結構，省去了很多配置的時間。

下面舉幾個例子，不懂前端技術的朋友可以直接跳過。




### 建立 React 專案模板

比如，你可以建立一個 React + TypeScript + Tailwind 的模板：

```bash
my-react-template/
├── src/
│   ├── components/
│   │   └── ui/          # 基礎 UI 元件
│   ├── lib/
│   │   ├── api.ts       # API 呼叫封裝
│   │   └── utils.ts     # 工具函式
│   ├── hooks/           # 自定義 Hooks
│   ├── types/           # TypeScript 型別
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .cursorrules         # Cursor 配置
├── tsconfig.json
├── tailwind.config.js
├── package.json
└── README.md
```

專案的依賴管理檔案 `package.json` 中預裝好常用的包：

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.20.0",
    "zustand": "^4.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.4.0"
  }
}
```

開始新專案時，複製這個模板，改個名字就能用。



### 建立 Next.js 專案模板

如果你常用 Next.js，也可以建立一個模板：

```bash
my-nextjs-template/
├── app/
│   ├── (auth)/          # 認證相關頁面
│   ├── (dashboard)/     # 後臺頁面
│   ├── api/             # API 路由
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── public/
├── .env.example         # 環境變數模板
├── next.config.js
└── README.md
```

`.env.example` 裡列出需要的環境變數：

```
# 資料庫
DATABASE_URL=

# 認證
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# API Keys
OPENAI_API_KEY=
```

這樣新專案開始時，就知道需要配置哪些環境變數。



### 使用 GitHub 模板倉庫

可以把你的模板專案放在 GitHub 上，設定為 `Template repository` 模板倉庫。

![](https://pic.yupi.icu/1/image-20260104215020646.png)

這樣建立新專案時，點選 `Use this template` 就能快速復刻專案模板了：

![](https://pic.yupi.icu/1/image-20260104215101657.png)

除了自己建立模板，你還可以使用別人的模板。在 GitHub 上搜尋 "react template"、"nextjs starter" 等關鍵詞，能找到很多優秀的模板專案。優先選擇 Star 數多、更新活躍的專案。

![](https://pic.yupi.icu/1/image-20260104215329685.png)

然後點選 "Use this template" 就能基於它建立自己的專案。這樣能站在巨人的肩膀上，節省大量配置時間。



## 五、工作流自動化

把重複的操作自動化，節省時間和精力。

下面這些技巧比較專業，主要適合有程式設計基礎的同學。如果你是完全零基礎，可以先跳過這部分，等有需要時再回來看。



### 使用 npm scripts

npm scripts 是 Node.js 前端專案中定義和執行指令碼命令的方式。簡單來說，就是把常用的命令儲存在配置檔案裡，需要時用一個簡短的命令就能執行。比如啟動專案、構建專案、執行測試等，都可以定義成 npm script。

可以在 `package.json` 中定義常用的指令碼：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx}\"",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf dist node_modules",
    "fresh": "npm run clean && npm install"
  }
}
```

這樣配置後，執行 `npm run lint:fix` 就能自動修復程式碼格式問題，不用輸入老長一段命令。



### Git 工作流自動化

Git 是目前最主流的分散式版本控制系統（Version Control System），是團隊協作開發不可或缺的工具。它可以儲存和管理檔案的所有更新記錄、並且使用 **版本號** 進行區分。從而支援將編輯後的文件恢復到修改前的狀態（歷史版本）、對比不同版本的檔案差異、防止舊版本覆蓋新版本等功能。

可以建立一些 Git 命令的別名，簡化常用命令：

```bash
# 在 ~/.gitconfig 中新增
[alias]
  st = status
  co = checkout
  br = branch
  ci = commit
  pl = pull
  ps = push
  lg = log --oneline --graph --decorate
  save = !git add -A && git commit -m 'WIP: save progress'
  undo = reset HEAD~1 --soft
```

這樣，`git st` 就等於 `git status`，`git save` 就能快速儲存進度。



### 使用 Makefile

Makefile 是一個自動化構建工具的配置檔案，最早用於 C/C++ 專案的編譯。現在很多專案也用它來管理複雜的構建流程。它的好處是可以定義任務之間的依賴關係，比如部署前必須先構建，構建前必須先測試。用一個簡短的命令（如 `make deploy`）就能自動執行一系列操作。

如果你的專案有複雜的構建流程，可以用 Makefile：

```makefile
.PHONY: dev build deploy clean

dev:
	npm run dev

build:
	npm run build

deploy: build
	vercel --prod

clean:
	rm -rf dist .next

fresh: clean
	npm install
	npm run dev
```

這樣配置後，執行 `make deploy` 就能自動構建並部署。



### 使用 GitHub Actions

GitHub Actions 是 GitHub 提供的自動化工作流工具，可以在程式碼提交、Pull Request 等事件觸發時自動執行任務。比如每次推送程式碼時自動執行測試、自動部署到伺服器、自動釋出新版本等，這樣就不用每次都手動操作了。

配置 GitHub Actions 很簡單，只需要在專案的 `.github/workflows` 目錄下建立一個 YAML 配置檔案，編寫 GitHub Actions 自動化 CI/CD（持續整合/持續部署）的指令碼程式碼：

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run test
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

這個指令碼的作用是：當你推送程式碼到 main 分支時，GitHub 會自動執行以下步驟：檢出程式碼、安裝 Node.js 環境、安裝專案依賴、構建專案、執行測試、部署到 Vercel。整個過程全自動，你只需要推送程式碼就行了。

GitHub Actions 還有更多玩法，比如魚皮的 [AI 知識庫專案](https://github.com/liyupi/ai-guide) 利用它實現最新 AI 資訊的自動更新：

![](https://pic.yupi.icu/1/image-20260104221153167.png)



### 適合所有人的效率工作流

上面講的都是比較技術性的自動化方法。其實，對於非程式設計師或初學者，也有一些通用的效率工作流。

1）使用零程式碼平臺：如果你不想處理這些複雜的配置，可以直接使用 Bolt.new、Lovable 等零程式碼平臺。它們會自動處理構建、測試、部署等流程，你只需要專注於功能開發。

2）利用 AI 生成配置：如果需要配置檔案，直接讓 AI 幫你生成。比如 “請幫我生成一個 GitHub Actions 配置，實現自動部署到 Vercel”。AI 會給你完整的配置，你複製貼上就行。

3）使用一鍵部署：很多平臺（比如 Vercel、Netlify）支援一鍵部署專案，連線 GitHub 倉庫後，每次推送程式碼就會自動部署，不需要任何配置。



## 六、AI 增強工具 - MCP

提升 AI 開發效率的工具非常多，魚皮這裡重點介紹 MCP（Model Context Protocol）外掛。




### 什麼是 MCP？

MCP（Model Context Protocol，模型上下文協議）是 2024 年底由 Anthropic 推出的新技術，可以給 AI 工具新增各種擴充套件能力，大大提升 Vibe Coding 的效率。

簡單來說，就像給 AI 裝上了各種外掛，讓它能做更多事情。比如讓 AI 能操作 GitHub、讀寫檔案、控制瀏覽器、查詢資料庫等等。

![](https://pic.yupi.icu/1/mcp.png)

近兩年，MCP 生態快速發展，出現了很多實用的 MCP 伺服器。這裡推薦幾個特別能提升 Vibe Coding 效率的：

- GitHub MCP：讓 AI 直接操作 GitHub，比如建立倉庫、提交程式碼、管理 Issue 等。這樣你就不用手動在 GitHub 網頁上操作了。
- Filesystem MCP：讓 AI 能夠讀寫檔案系統，批次處理檔案、搜尋內容、重新命名檔案等都可以直接讓 AI 完成。
- Puppeteer MCP：讓 AI 能夠控制瀏覽器，自動化網頁操作、截圖、爬取資料等。對於需要測試網頁或獲取資料的場景很有用。
- Postgres/MySQL MCP：讓 AI 直接運算元據庫，查詢資料、執行 SQL、分析資料庫結構等。
- Notion MCP：連線 Notion，讓 AI 能讀寫你的筆記和文件，方便整理和搜尋資訊。
- Context7 MCP：增強 AI 對程式碼庫的理解，提供更精準的程式碼分析和建議。

這些 MCP 伺服器可以在 Claude Desktop、Claude Code、Cursor 等工具中配置使用，具體的安裝和配置方法可以參考各個 MCP 伺服器的文件。還有更多 MCP 你可以在 [魚皮的 AI 資源導航網](https://ai.codefather.cn/) 或者 [MCP 大全網站](https://mcp.so/) 找到。

MCP 的強大之處在於，它讓 AI 不再只是一個程式碼生成器，而是一個真正的全能開發助手，能幫你完成開發過程中的各種任務。如果你經常使用 Claude 或 Cursor，強烈建議配置幾個常用的 MCP 伺服器，能大大提升效率。



## 七、提示詞模板庫

建立自己的提示詞模板庫，常用的對話可以直接複用。

除了自己整理，還可以參考一些現成的資源：

- [魚皮的 AI 資源導航](https://ai.codefather.cn/prompt)：收錄了大量提示詞模板，涵蓋各種場景。
- [Cursor Directory](https://cursor.directory/rules)：社群貢獻的 Cursor Rules 集合，有各種語言和框架的規則模板。
- [GitHub awesome-prompts](https://github.com/f/awesome-chatgpt-prompts)：收錄了大量優質提示詞，雖然不是專門針對程式設計的，但很多思路可以借鑑。

這些資源都可以直接拿來用，或者根據自己的需求改改。站在巨人的肩膀上，能節省大量摸索的時間。

下面給大家舉幾個例子。

1）功能開發模板

```
我要開發一個【功能名稱】功能。

需求：
1. 【需求 1】
2. 【需求 2】
3. 【需求 3】

技術棧：【技術棧】

請幫我：
1. 分析實現方案
2. 列出需要的元件和函式
3. 給出核心程式碼
```



2）程式碼審查模板

```
請審查這段程式碼：

【程式碼】

請從以下角度分析：
1. 程式碼質量（可讀性、可維護性）
2. 效能問題
3. 潛在的 bug
4. 改進建議
```



3）除錯問題模板

```
我遇到了一個問題：

問題描述：【問題描述】

報錯資訊：
【錯誤資訊】

相關程式碼：
【程式碼】

技術棧：【技術棧】

請幫我：
1. 分析問題原因
2. 給出解決方案
3. 解釋為什麼會出現這個問題
```



4）效能最佳化模板

```
這段程式碼的效能不夠好：

【程式碼】

場景：【使用場景和資料規模】

請幫我：
1. 分析效能瓶頸
2. 給出最佳化方案
3. 說明最佳化後的效能提升
```



5）文件生成模板

```
請為這個【元件/函式】生成文件：

【程式碼】

文件應該包括：
1. 功能說明
2. 引數說明
3. 返回值說明
4. 使用示例
5. 注意事項
```

把這些模板儲存在一個檔案裡，需要時直接複製貼上，並填入具體內容。



## 八、時間管理技巧

效率不只是技術問題，也是時間管理問題。很多時候，不是你技術不行，而是時間沒管理好。

分享幾個我自己在用的方法吧：

1）番茄工作法：設定 25 分鐘的專注時間，在這段時間內只做一件事，不看手機、不刷社交媒體。時間到了就休息 5 分鐘，起來走走、喝口水。這樣工作 4 個番茄鍾後，休息 15 ~ 30 分鐘。這個方法能讓你保持高效，又不會太累。

2）把大任務分解成小任務：比如 “完成使用者系統” 這個任務太大了，不知道從哪裡開始。但如果拆成實現使用者登錄檔單、實現表單驗證、連線註冊 API、新增錯誤提示、測試註冊流程這樣的小任務，每個都很具體，很容易完成、也更有成就感。

3）批次處理：把相似的任務放在一起做，比如一次性寫完所有元件的基本結構、一次性新增所有的型別定義、一次性處理所有的樣式問題。這樣能減少上下文切換，大腦不用頻繁在不同型別的工作間切換，效率會更高。

4）最後，不要在 MVP 階段就追求完美。先讓功能能用，再考慮最佳化；先完成核心功能，再新增輔助功能；先透過測試，再重構程式碼。

**記住，完成比完美更重要。**



## 寫在最後

效率提升不是一蹴而就的，而是透過無數個小改進積累起來的。每個快捷鍵、每個模板、每個自動化指令碼，都能為你節省一點時間。積少成多，你的開發速度就會有質的飛躍。

建議你定期記錄自己的工作流程，看看哪些步驟最耗時、哪些操作重複最多、哪些地方可以自動化，然後針對性地改進。同時保持對新工具的關注，關注技術部落格和社群，嘗試新的 AI 工具，學習新的快捷鍵和技巧。但也不要盲目追新，雖然 AI 工具的迭代更新非常快，但真正好用的、適合自己的也就那麼幾個，還是要選擇真正能提高效率的工具。

向他人學習也很重要，比如看別人的直播或影片、參加技術分享會、加入開發者社群等等，多觀察其他開發者的工作方式，學習他們的效率技巧，你的效率也會越來越高。

當然，咱不能為了追求效率丟失掉程式碼質量。下一篇文章，我會講解程式碼質量保障，教你如何保證 AI 生成的程式碼質量。

休息片刻，讓我們再繼續征程吧！




## 推薦資源

1）魚皮 AI 導航網站：[AI 資源大全、最新 AI 資訊、免費 AI 教程](https://ai.codefather.cn)

2）程式設計導航學習圈：[學習路線、程式設計教程、實戰專案、求職寶典、交流答疑](https://www.codefather.cn)

3）程式設計師面試八股文：[實習/校招/社招高頻考點、企業真題解析](https://www.mianshiya.com)

4）程式設計師寫簡歷神器：[專業模板、豐富例句、直通面試](https://www.laoyujianli.com)

5）1 對 1 模擬面試：[實習/校招/社招面試拿 Offer 必備](https://ai.mianshiya.com)
