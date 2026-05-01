## WPS裡裝上deepseek，簡直就是辦公神器

不得不說，將DeepSeek-R1接入WPS真的驚呆我了！這意味著什麼？簡單來說，文件編輯從“手動擋”進化成了“自動擋”！不管是生成內容、最佳化表達，甚至是邏輯推理分析，AI都能直接幫你搞定，爽到飛起！

今天就來給大家聊聊，如何在WPS裡接入 **DeepSeek-R1**，一步步帶你從零配置到實戰，讓AI真正成為你的文件處理助手。

![img](https://pic4.zhimg.com/v2-e1cdeb2a05c46c9e58d572625828ff0d_1440w.jpg)

## **為什麼要在WPS裡接入DeepSeek-R1？**

講道理，我以前用WPS，大多數時候就是敲敲字、插插圖、改改排版，寫完了還得自己檢查語法、最佳化表達，甚至有時候絞盡腦汁想一段好文案，簡直像掏空靈魂。

但現在，DeepSeek-R1 直接進駐 WPS，相當於在文件裡藏了一個AI小助手，幫你：

- **快速生成內容**：隨便給個大綱，AI就能幫你擴充套件成一段流暢的文字。
- **最佳化表達**：寫完的內容，總覺得有點彆扭？AI可以幫你潤色，變得更自然、更流暢。
- **邏輯推理**：寫方案、分析資料、寫報告？讓AI來幫你理清邏輯，提升說服力。

這麼一看，這不就是文件界的“外掛”嗎？不裝等啥呢？接下來就帶你 **一步步配置**，讓AI真正成為你的寫作搭子。

## **第一步：獲取DeepSeek-R1的API Key**

要讓DeepSeek-R1在WPS裡跑起來，首先得有個 **API Key**，就像是進入AI世界的“通行證”。獲取方式有兩種：

### **方案一：DeepSeek官方API Key**

可以去官網申請：**[https://www.deepseek.com](https://link.zhihu.com/?target=https%3A//www.deepseek.com)**

![img](https://pic1.zhimg.com/v2-6625a31c5f9a3ca230d2ab288c861a7c_1440w.jpg)

### **方案二：騰訊雲提供的DeepSeek-R1 API Key**

這個方案更靠譜，可以去這裡申請：**[https://curl.qcloud.com/T3M5yBHp](https://link.zhihu.com/?target=https%3A//curl.qcloud.com/T3M5yBHp)**相對穩定，推薦使用！

⚠️ **重要提醒**：不管用哪個API Key，都得保證你的賬戶有餘額，否則AI是不會搭理你的！

## **第二步：配置WPS開發工具**

既然AI要接入WPS，那就得開啟WPS的開發模式，整個流程其實很簡單，跟著來就行。

### **1. 啟用開發工具**

- 開啟 **WPS**，隨便新建一個文件。

![img](https://pic1.zhimg.com/v2-cf631f098a495ffdc97652252245b2ba_1440w.jpg)

- 點選 **檔案** → **選項** → **自定義功能區**。
- 在右側的功能區列表中，找到 **“工具”**，勾選它。

![img](https://picx.zhimg.com/v2-033ed49bdcbc159f2e8119ae26b442e5_1440w.jpg)

- 點選 **“確定”**，儲存設定。

### **2. 配置信任中心**

![img](https://pic2.zhimg.com/v2-01dce0e341193d040bbf09332ae389e9_1440w.jpg)

1. 在 WPS 中，點選 **檔案** → **選項** → **信任中心**。
2. 選擇 **“信任中心設定”** → **“宏安全性”**。
3. 將安全性設定為 **“低”**，這樣才能執行 VBA 宏。

### **3. 新增宏模組**

- 在 WPS 頂部選單欄，點選 **工具** → **開發工具** → **切換到VB環境**，然後 **重啟WPS**。

![img](https://pica.zhimg.com/v2-5a6465ca1c5a62c416b02717eb4d07e0_1440w.jpg)

![img](https://pic4.zhimg.com/v2-7e60dd67f7e9fc3e5cff268c377379fb_1440w.jpg)

- 重啟後，點選 **VB編輯器**。

![img](https://pic1.zhimg.com/v2-ab5f13cc0586bbe57eec0c23e86859e6_1440w.jpg)

- 在彈出的 **VB編輯器視窗**，點選 **插入** → **模組**。

![img](https://pic2.zhimg.com/v2-d4c90ca66c85f699d358204495170c45_1440w.jpg)

- 複製以下程式碼到編輯區裡，並把 `your_api_key_here` 換成你申請到的API Key：

![img](https://pic2.zhimg.com/v2-bcaf2cf70d14d7ebfa39bbc62f580383_1440w.jpg)

**儲存程式碼**，關閉 VB 編輯器。

以下是**Deepseek-R1程式碼(官方apikey）**完整程式碼示例，記得替換為你的API Key：

```text
Function CallDeepSeekAPI(api_key As String, inputText As String) As String
    Dim API As String
    Dim SendTxt As String
    Dim Http As Object
    Dim status_code As Integer
    Dim response As String

    API = "https://api.deepseek.com/chat/completions"
    SendTxt = "{""model"": ""deepseek-reasoner"", ""messages"": [{""role"":""system"", ""content"":""You are a Word assistant""}, {""role"":""user"", ""content"":""" & inputText & """}], ""stream"": false}"

    Set Http = CreateObject("MSXML2.XMLHTTP")
    With Http
        .Open "POST", API, False
        .setRequestHeader "Content-Type", "application/json"
        .setRequestHeader "Authorization", "Bearer " & api_key
        .send SendTxt
        status_code = .Status
        response = .responseText
    End With

    ' 彈出視窗顯示 API 響應（除錯用）

    ' MsgBox "API Response: " & response, vbInformation, "Debug Info"

    If status_code = 200 Then
        CallDeepSeekAPI = response
    Else
        CallDeepSeekAPI = "Error: " & status_code & " - " & response
    End If

    Set Http = Nothing
End Function

Sub DeepSeekR1()
    Dim api_key As String
    Dim inputText As String
    Dim response As String
    Dim regex As Object
    Dim reasoningRegex As Object
    Dim contentRegex As Object
    Dim matches As Object
    Dim reasoningMatches As Object
    Dim originalSelection As Object
    Dim reasoningContent As String
    Dim finalContent As String

    api_key = "替換為你的api key"
    If api_key = "" Then
        MsgBox "Please enter the API key."
        Exit Sub
    ElseIf Selection.Type <> wdSelectionNormal Then
        MsgBox "Please select text."
        Exit Sub
    End If

    ' 儲存原始選中的文字
    Set originalSelection = Selection.Range.Duplicate

    inputText = Replace(Replace(Replace(Replace(Replace(Selection.text, "\", "\\"), vbCrLf, ""), vbCr, ""), vbLf, ""), Chr(34), "\""")
    response = CallDeepSeekAPI(api_key, inputText)

    If Left(response, 5) <> "Error" Then
        ' 建立正規表示式物件來分別匹配推理內容和最終回答
        Set reasoningRegex = CreateObject("VBScript.RegExp")
        With reasoningRegex
            .Global = True
            .MultiLine = True
            .IgnoreCase = False
            .Pattern = """reasoning_content"":""(.*?)"""
        End With
        
        Set contentRegex = CreateObject("VBScript.RegExp")
        With contentRegex
            .Global = True
            .MultiLine = True
            .IgnoreCase = False
            .Pattern = """content"":""(.*?)"""
        End With

        ' 提取推理內容
        Set reasoningMatches = reasoningRegex.Execute(response)
        If reasoningMatches.Count > 0 Then
            reasoningContent = reasoningMatches(0).SubMatches(0)
            reasoningContent = Replace(reasoningContent, "\n\n", vbNewLine)
            reasoningContent = Replace(reasoningContent, "\n", vbNewLine)
            reasoningContent = Replace(Replace(reasoningContent, """", Chr(34)), """", Chr(34))
        End If

        ' 提取最終回答
        Set matches = contentRegex.Execute(response)
        If matches.Count > 0 Then
            finalContent = matches(0).SubMatches(0)
            finalContent = Replace(finalContent, "\n\n", vbNewLine)
            finalContent = Replace(finalContent, "\n", vbNewLine)
            finalContent = Replace(Replace(finalContent, """", Chr(34)), """", Chr(34))

            ' 取消選中原始文字
            Selection.Collapse Direction:=wdCollapseEnd

            ' 插入推理過程（如果存在）
            If Len(reasoningContent) > 0 Then
                Selection.TypeParagraph
                Selection.TypeText "推理過程："
                Selection.TypeParagraph
                Selection.TypeText reasoningContent
                Selection.TypeParagraph
                Selection.TypeText "最終回答："
                Selection.TypeParagraph
            End If

            ' 插入最終回答
            Selection.TypeText finalContent

            ' 將游標移回原來選中文字的末尾
            originalSelection.Select
        Else
            MsgBox "Failed to parse API response.", vbExclamation
        End If
    Else
        MsgBox response, vbCritical
    End If
End Sub
```

## **第三步：自定義功能區（加個AI按鈕！）**

- 回到 WPS 主介面，點選 **檔案** → **選項** → **自定義功能區**。
- 在右側列表裡，**新建一個組**，命名為 **DeepSeek**。

![img](https://pic3.zhimg.com/v2-d15fc50116854bf516e8a9dc8d3c6bd2_1440w.jpg)

- 在左側命令列表裡，找到 **宏**，然後選中剛剛建立的 **GetAIResponse**。

![img](https://picx.zhimg.com/v2-d19f1d9b11d202aa1a00cfe155b05d95_1440w.jpg)

- 點選 **新增**，然後右鍵重新命名為 **生成**。

![img](https://pic3.zhimg.com/v2-7eb4daf84cc1fbccc9e1d082ceaf5b7c_1440w.jpg)

- 點選 **確定**，儲存設定。

現在，我們在WPS里加了一個專屬按鈕，點一下就能呼叫AI，牛不牛？

## **第四步：使用DeepSeek-R1生成內容（實戰！）**

- **開啟WPS文件**，隨便輸入一句話，比如：請輸入一個關於AI未來的簡短分析：
- **選中這句話**。
- 點選剛剛建立的 **生成** 按鈕。

![img](https://pica.zhimg.com/v2-c8590788c3ab7a2ba605d395b6e864ca_1440w.jpg)

- **等待幾秒**，AI會自動生成一段完整的分析，並直接插入到文件中！

這體驗，就像請了個貼身秘書，隨時幫你寫文案、潤色表達，甚至還能幫你分析問題。

## **第五步：建立WPS模板（以後直接用！）**

有了這個功能，我們可以儲存成模板，省得每次都要重新配置：

- **點選“檔案” → “另存為”**。
- **在檔案型別裡選擇** “Microsoft Word 帶宏的模板檔案（*.dotm）”。

![img](https://pica.zhimg.com/v2-7755f8d9dcfa76caade4411060b53104_1440w.jpg)

- **儲存到WPS的模板資料夾**（通常是這個路徑）：C:\Users\使用者名稱\AppData\Roaming\kingsoft\wps\startup

**下次需要用的時候**，直接開啟這個模板檔案就能用AI寫文件，簡直不要太方便！

這波操作下來，我真的感覺自己是個“AI增強人”了——文件寫作變得超高效，潤色最佳化信手拈來，甚至還能讓AI幫忙分析問題，真香！

以前寫報告、整理方案，最痛苦的就是改來改去，現在有了 DeepSeek-R1，直接在 WPS 裡一句話搞定，省下來的時間都夠我刷兩集番了。

你們覺得這個功能 **炸不炸**？趕緊試試，把 AI 請進你的 WPS，享受這飛一般的文件編輯體驗！

> 來源：https://www.cnblogs.com/shanren/p/18709648