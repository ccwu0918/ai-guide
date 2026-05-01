## DeepSeek R1 + 個人知識庫，直接起飛！


DeepSeek R1 + 個人知識庫，直接起飛！

今天要講的：DeepSeek-R1 + 個人知識庫打造。  
除了矽基流動，還要用到另一個圈內比較火的第三方客戶端：Cherry Studio。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503395801-4c70f1e1-0a51-4ff7-b1d4-ee0b10f0a041.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)

1\. 下載安裝 Cherry Studio  
https://cherry-ai.com/  
作為一個完全開源的專案，除去UI設計、功能不談，Cherry Studio很值得推薦的一點是作者（@kangfenmao）活躍在各大平臺、論壇，積極聽取使用者反饋的同時，更新相當及時。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503395910-33cac31e-7d46-4db1-aa6c-f8ef77667448.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


2\. 模型配置  
安裝好Cherry Studio後，首先需要配置模型。搭建個人知識庫，僅矽基流動的模型就足夠了，所以只需：點選左下角的設定\->選擇矽基流動\->開啟開關->填入矽基流動的API key。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503395891-52e15ffd-7229-403d-abee-e13e5811bc96.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


接下來，把需要用到的模型新增上。下拉到最下面，點選綠色的管理按鈕。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503395843-ca60f57f-08dc-4098-91c3-b0506b6e3385.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


常規模型中，推薦新增下面三個模型：推理模型DeepSeek-R1、通用模型DeepSeek-V3，以及視覺模型Janus-Pro-7B。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503396949-f8d5110a-8274-40df-b72c-8cb2f294a623.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


嵌入（embedding）模型，推薦新增下面兩個：完全免費的BAAI/bge-m3和付費的Pro/BAAI/bge-m3。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503396781-1c8015e3-6675-40a5-91b1-0c4ca8690b21.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


一般說來，免費的BAAI/bge-m3模型就夠用。  
3\. 建立知識庫  
配置完模型，就可以開始建立知識庫了！  
點選左側選單欄的知識庫圖示->點選左上角的新增按鈕->在彈窗裡輸入你的知識庫名稱，隨便輸，方便查詢就行->選擇嵌入模型。  
嵌入模型選擇上一步中新增的免費模型BAAI/bge-m3就可以。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503396827-010a8349-0158-4e2e-a3e5-326e0074f015.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


接下來就可以往你建立好的知識庫裡新增資料，Cherry Studio支援各種型別的資料，比如檔案、網址、筆記等等。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503396864-2a508bc8-54fc-4fd5-aaf9-97a7465928c7.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


以最常見的檔案資料為例，直接把PDF拖拽進去，當看到檔案右邊的狀態符號變為綠色的對勾，就說明該檔案已經向量化完畢。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503396884-e338bada-3b51-4522-8d2a-ff5f9c038727.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


4\. 和知識庫對話  
新增完資料，就可以開始檢索你的個人知識庫了。  
兩種方式使用。  
一種是直接在知識庫最下面的搜尋知識庫，點選後進行搜尋。  
輸入你想搜尋的內容，點選搜尋按鈕。就像下面這樣。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503397365-05aa6d51-278f-4df6-9da4-507377cd6608.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


第二種方法則更為實用：直接在問答的過程中選中知識庫，相當於給LLM新增了額外的上下文資訊。  
在Cherry Studio的輸入框下方，有一個知識庫的圖示，點選，選擇你建立好的知識庫。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503397343-5a28048b-0917-4001-adb0-076a966e0636.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


選中後，知識庫的圖示會變成藍色。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503397345-59a63aaf-f09a-4c5c-9ab4-b7b8ce81464a.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


這裡我預設的模型是DeepSeek-R1。回答前，會先對知識庫進行檢索，然後把搜尋結果投餵給DeepSeek-R1，由模型進行整理、分析，再生成最終的答案。  
可以看到，DeepSeek-R1的回答結果是基於知識庫內容產生的。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503397373-51641dc2-ea26-435a-8749-848588d63079.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)


附上DeepSeek-R1的思考過程，一如既往的給力。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503397382-0fc4b4c1-c19b-4dba-91fe-8f2cf3f74060.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)

  

近期，由於大量使用者湧入矽基流動使用DeepSeek模型，導致矽基的DeepSeek-R1呼叫可能卡頓，並且思考時間有時離譜的長。所以，上車要趁早啊。  

![](https://cdn.nlark.com/yuque/0/2025/webp/22157260/1739503397819-a3aa2802-a4fc-432e-85d5-bc6a7fb14ff5.webp?x-oss-process=image%2Fresize%2Cw_1080%2Climit_0)

  

> 來源：[https://mp.weixin.qq.com/s/wa\_Swhj2cAvB9Btt2\_-Dbg](https://mp.weixin.qq.com/s/wa_Swhj2cAvB9Btt2_-Dbg)  