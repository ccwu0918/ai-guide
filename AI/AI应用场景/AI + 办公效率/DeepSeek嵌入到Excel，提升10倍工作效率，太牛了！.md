## DeepSeek嵌入到Excel，提升10倍工作效率，太牛了！


昨天跟大家分享了DeepSeek的簡單用法，有粉絲就問道：能將DeepSeek嵌入到Excel嗎？

當然可以了，我們需要藉助VBA程式碼來實現，以下的程式碼都是由DeepSeek自動生成的，我們還需要呼叫DeepSeek的API，

實現在A1單元格中輸入資料，然後點選按鈕執行，在B1單元格中輸出結果的效果，我們來看下具體怎麼做的

![img](https://pic.yupi.icu/yuyi/1739500999272-ee9397b5-62c2-423d-b53b-695644b46146.webp)

### 一、獲取API

首先我們需要獲取DeepSeek的API，只需來到官網，右上角點選【API開放平臺】，然後在右側找到【API keys】然後在中間點選【API keys】，就會顯示視窗，我們需要為其設定一個名字，然後複製下API，等下需要用到。

![img](https://pic.yupi.icu/yuyi/1739500999275-43b619a8-74ec-4c4a-b0ec-6affe8204823.webp)

### 二、插入VBA程式碼

開啟Excel，按下快捷鍵ALT+F11，調出VBA的編輯視窗，然後在左側點選空白的區域，找到【插入】選擇【模組】之後將下面的程式碼貼上到視窗中

我們需要將【你的API】替換為你剛才獲取的API地址

![img](https://pic.yupi.icu/yuyi/1739500999509-195d3321-c3ef-46eb-866e-d667c5a30aaf.webp)

```vbnet
Sub CallDeepSeekAPI()
    Dim question As String
    Dim response As String
    Dim url As String
    Dim apiKey As String
    Dim http As Object
    Dim content As String
    Dim startPos As Long
    Dim endPos As Long
    
    ' 獲取 A1 單元格中的問題
    question = ThisWorkbook.Sheets(1).Range("A1").Value
    
    ' 設定 API 的 URL 和 API 金鑰
    url = "https://api.deepseek.com/v1/chat/completions" ' 替換為實際的 API URL
    apiKey = "你的API" ' 替換為你的 API 金鑰
    
    ' 建立 HTTP 請求物件
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    ' 設定請求頭
    http.Open "POST", url, False
    http.setRequestHeader "Content-Type", "application/json"
    http.setRequestHeader "Authorization", "Bearer " & apiKey
    
    ' 設定請求體
    Dim requestBody As String
    requestBody = "{""model"":""deepseek-chat"",""messages"":[{""role"":""user"",""content"":""" & question & """}]}"
    
    ' 傳送請求
    http.send requestBody
    
    ' 獲取響應
    If http.Status = 200 Then
        response = http.responseText
        
        ' 從 JSON 字串中提取 content 欄位
        startPos = InStr(response, """content"":""") + Len("""content"":""")
        endPos = InStr(startPos, response, """")
        content = Mid(response, startPos, endPos - startPos)
        
        ' 將結果寫入 A2 單元格
        ThisWorkbook.Sheets(1).Range("A2").Value = content
    Else
        ' 如果請求失敗，顯示錯誤資訊
        ThisWorkbook.Sheets(1).Range("A2").Value = "Error: " & http.Status & " - " & http.statusText
    End If
End Sub
```

### 三、設定按鈕

點選【開發工具】然後點選【插入】在表單控制元件中選擇【選擇】，然後直接新建按鈕，將按鈕指定給【CallDeepSeekAPI】這個宏即可

到此就設定設定完畢了，只需在A1單元格輸入問題，然後點選【按鈕】等待一段時間就能得到結果，大家可以動手試一下~

![img](https://pic.yupi.icu/yuyi/1739500999992-c3359cbb-2927-4997-8305-4efcde15be17.gif)



> 來源：https://mp.weixin.qq.com/s/ZD6KRtYPr7gpsPtAiwiLvQ