## 手把手教你在word中接入deepseek，秒生文件材料


將DeepSeek接入Word，實現無需切換即可進行材料續寫的功能，具有顯著的價值和廣泛的應用前景。以下是其核心價值的詳細描述：

### 1. 提升工作效率

在文件編輯過程中，使用者無需頻繁切換應用或介面，直接在Word中呼叫DeepSeek進行內容續寫，極大減少了操作步驟和時間成本。無論是撰寫報告、論文，還是創作文案，使用者都可以專注於內容創作，而無需中斷思路去處理技術細節。

### 2. 無縫銜接創作流程

DeepSeek接入Word後，使用者可以在同一介面中完成從構思到成稿的全過程。AI能夠根據上下文自動生成連貫的內容，幫助使用者快速填補空白段落或擴充套件思路。這種無縫銜接的創作體驗，尤其適合需要高效輸出的場景，如新聞寫作、商業計劃書撰寫等。

### 3. 智慧輔助與內容最佳化

DeepSeek不僅能續寫材料，還能提供語法修正、風格最佳化、邏輯完善等智慧輔助功能。使用者可以在Word中實時獲得AI的建議，提升文件質量。這種智慧化的輔助工具，特別適合非母語寫作者或需要高精度表達的專業人士。

### 4. 降低創作門檻

對於不擅長寫作或缺乏靈感的使用者，DeepSeek的接入可以顯著降低創作門檻。AI能夠根據使用者輸入的關鍵詞或主題，自動生成高質量的內容草稿，幫助使用者快速啟動創作。這種功能在教育、營銷等領域尤其有價值。

### 5. 個性化定製與學習能力

DeepSeek可以根據使用者的使用習慣和寫作風格進行個性化定製，逐漸學習並適應使用者的偏好。在Word中，這種能力可以體現為更精準的內容續寫和更符合使用者需求的建議，進一步提升使用者體驗。

### 6. 多場景適用性

無論是學術研究、商業寫作，還是日常辦公，DeepSeek接入Word都能滿足多樣化的需求。例如，研究人員可以利用AI快速生成文獻綜述，企業員工可以高效完成合同或提案撰寫，學生則可以藉助AI最佳化論文結構。

### 7. 資料安全與隱私保護

在Word中直接呼叫DeepSeek，避免了將敏感文件上傳至第三方平臺的風險，確保了資料的安全性和隱私性。這對於處理機密檔案的企業或個人使用者尤為重要。

### 8. 未來擴充套件潛力

隨著AI技術的不斷發展，DeepSeek在Word中的應用還可以進一步擴充套件。例如，支援多語言翻譯、自動生成圖表、智慧排版等功能，為使用者提供更全面的文件處理解決方案。

總之，將DeepSeek接入Word，不僅提升了文件編輯的效率和體驗，還為使用者提供了智慧化、個性化的創作支援。這種創新整合，將在未來的辦公和學習場景中發揮越來越重要的作用。



01

註冊deepseek獲取API_KEY

1.登入www.deepseek.com，註冊登入後點選左上角"API開放平臺"



![img](https://pic.yupi.icu/yuyi/1739501422379-4fac0028-94c7-4845-8dc4-beda4b58e8fa.webp)

2.充值後點選左側"API keys"

![img](https://pic.yupi.icu/yuyi/1739501422357-7a5a3cce-ecb5-4322-9c14-043175ff5129.webp)

3.點選建立API key，填寫名稱，自動生成key，複製Key備用

![img](https://pic.yupi.icu/yuyi/1739501422360-1ee09b18-eb94-43d2-acff-1db5a2e4f354.webp)

![img](https://pic.yupi.icu/yuyi/1739501422392-c3d4b8ee-a5cd-4a9a-b3c3-cdaca4a155b7.webp)



02

在word中新增deepseek的VBA指令碼

1.在開發工具中天街vb指令碼，如果沒有開發工具，可在檔案-選項-自定義功能區中設定

![img](https://pic.yupi.icu/yuyi/1739501422415-baf0b991-78f8-4cc6-8d92-00533bea483d.webp)

2.在Normal的模組下右鍵新增模組，輸入程式碼後儲存

![img](https://pic.yupi.icu/yuyi/1739501422854-02e2e8bb-0aa1-4fe0-8567-952930186f20.webp)

輸入程式碼如下，將前面儲存的Key替換程式碼中的"你的APIKEY"

```vbnet
Function CallDeepSeekAPI(api_key As String, inputText As String)
    Dim API As String
    Dim SendTxt As String
    Dim Http As Object
    Dim status_code As Integer
    Dim response As String
    API = "https://api.deepseek.com/chat/completions"
    SendTxt = "{""model"": ""deepseek-chat"", ""messages"": [{""role"":""system"", ""content"":""你是word文案助手""}, {""role"":""user"", ""content"":""" & inputText & """}], ""stream"": false}"
    Set Http = CreateObject("MSXML2.XMLHTTP")
    With Http
    .Open "POST", API, False
    .setRequestHeader "Content-Type", "application/json"
    .setRequestHeader "Authorization", "Bearer " & api_key
    .send SendTxt
    status_code = .Status
    response = .responseText
   End With
   
If status_code = 200 Then
    CallDeepSeekAPI = response
    Else
      CallDeepSeekAPI = "Error: " & status_code & " - " & response
 End If
    Set Http = Nothing
End Function
Function CallDeepSeekRAPI(api_key As String, inputText As String)
    Dim API As String
    Dim SendTxt As String
    Dim Http As Object
    Dim status_code As Integer
    Dim response As String
    API = "https://api.deepseek.com/chat/completions"
    SendTxt = "{""model"": ""deepseek-reasoner"", ""messages"": [{""role"":""system"", ""content"":""你是word文案助手""}, {""role"":""user"", ""content"":""" & inputText & """}], ""stream"": false}"
    Set Http = CreateObject("MSXML2.XMLHTTP")
    With Http
    .Open "POST", API, False
    .setRequestHeader "Content-Type", "application/json"
    .setRequestHeader "Authorization", "Bearer " & api_key
    .send SendTxt
    status_code = .Status
    response = .responseText
   End With
   
If status_code = 200 Then
    CallDeepSeekRAPI = response
    Else
      CallDeepSeekRAPI = "Error: " & status_code & " - " & response
 End If
    Set Http = Nothing
End Function
Sub DeepSeekV3()
    Dim api_key As String
    Dim inputText As String
    Dim response As String
    Dim regex As Object
    Dim matches As Object
    Dim originalSelection As Object
    api_key = "你的APIKEY"
    If api_key = "" Then
       MsgBox "Please enter the API key."
      Exit Sub
    ElseIf Selection.Type <> wdSelectionNormal Then
       MsgBox "請選擇文字."
     Exit Sub
  End If
   ' 儲存原始選中的文字
  Set originalSelection = Selection.Range.Duplicate
   inputText = Replace(Replace(Replace(Replace(Replace(Selection.Text, "\", "\\"), vbCrLf, ""), vbCr, ""), vbLf, ""), Chr(34), "\""")
   response = CallDeepSeekAPI(api_key, inputText)
   If Left(response, 5) <> "Error" Then
        Set regex = CreateObject("VBScript.RegExp")
       With regex
           .Global = True
           .MultiLine = True
            .IgnoreCase = False
             .Pattern = """content"":""(.*?)"""
       End With
       Set matches = regex.Execute(response)
     If matches.Count > 0 Then
      response = matches(0).SubMatches(0)
      response = Replace(Replace(response, """", Chr(34)), """", Chr(34))
        response = Replace(response, "\n", vbCrLf)
               response = Replace(response, "\n", vbCrLf)
        response = Replace(response, "*", "")
        response = Replace(response, "#", "")
    ' 取消選中原始文字
       Selection.Collapse Direction:=wdCollapseEnd
     ' 將內容插入到選中文字的下一行
      Selection.TypeParagraph ' 插入新行
      Selection.TypeText Text:=response
    ' 將游標移回原來選中文字的末尾
     originalSelection.Select
     Else
      MsgBox "Failed to parse API response.", vbExclamation
     End If
     Else
    MsgBox response, vbCritical
   End If
End Sub
Sub DeepSeekR()
    Dim api_key As String
    Dim inputText As String
    Dim response As String
    Dim regex As Object
    Dim matches As Object
    Dim originalSelection As Object
    api_key = "你的APIKEY"
    If api_key = "" Then
       MsgBox "Please enter the API key."
      Exit Sub
    ElseIf Selection.Type <> wdSelectionNormal Then
       MsgBox "請選擇文字."
     Exit Sub
  End If
   ' 儲存原始選中的文字
  Set originalSelection = Selection.Range.Duplicate
   inputText = Replace(Replace(Replace(Replace(Replace(Selection.Text, "\", "\\"), vbCrLf, ""), vbCr, ""), vbLf, ""), Chr(34), "\""")
   response = CallDeepSeekRAPI(api_key, inputText)
   If Left(response, 5) <> "Error" Then
        Set regex = CreateObject("VBScript.RegExp")
       With regex
           .Global = True
           .MultiLine = True
            .IgnoreCase = False
             .Pattern = """content"":""(.*?)"""
       End With
       Set matches = regex.Execute(response)
     If matches.Count > 0 Then
      response = matches(0).SubMatches(0)
      response = Replace(Replace(response, """", Chr(34)), """", Chr(34))
       response = Replace(response, "\n", vbCrLf)
        response = Replace(response, "*", "")
        response = Replace(response, "#", "")
    ' 取消選中原始文字
       Selection.Collapse Direction:=wdCollapseEnd
     ' 將內容插入到選中文字的下一行
      Selection.TypeParagraph ' 插入新行
      Selection.TypeText Text:=response
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

03

生成功能配置

1.開啟選單檔案-選項-自定義功能區，如下圖進行設定

![img](https://pic.yupi.icu/yuyi/1739501427865-71593a69-efd8-471d-b16d-bbf4c06aebec.webp)設定完成後，選單如圖所示

![img](https://pic.yupi.icu/yuyi/1739501422864-b0f9fe76-4754-40de-bbb5-d8a64d6c0574.webp)



04

生成功能測試

1.新建一個文件，輸入如下內容，選擇文字後，點選"對話"

![img](https://pic.yupi.icu/yuyi/1739501424837-8ef6c3da-d01a-4d03-b489-55f8a9500e68.webp)

2.效果如圖

![img](https://pic.yupi.icu/yuyi/1739501424819-347916b3-06e2-4d83-8b6f-85dab3cfe339.gif)



> 來源：https://mp.weixin.qq.com/s/g6E-gNHZABMl6JUEWQtViQ