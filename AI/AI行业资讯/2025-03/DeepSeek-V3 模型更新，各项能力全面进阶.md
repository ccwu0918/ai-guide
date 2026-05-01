# DeepSeek-V3 模型更新，各項能力全面進階

DeepSeek V3 模型已完成小版本升級，目前版本號 DeepSeek-V3-0324，使用者登入官方網頁、APP、小程式進入對話介面後， **關閉深度思考** 即可體驗。API 介面和使用方式保持不變。

如非複雜推理任務，建議使用新版本 V3 模型，即刻享受速度更加流暢、效果全面提升的對話體驗。

---

## 模型能力提升一覽

### 推理任務表現提高

新版 V3 模型借鑑 DeepSeek-R1 模型訓練過程中所使用的強化學習技術，大幅提高了在推理類任務上的表現水平，在數學、程式碼類相關評測集上取得了超過 GPT-4.5 的得分成績。

![](https://cdn.deepseek.com/api-docs/v3_0324_benchmark.webp)

### 前端開發能力增強

在 HTML 等程式碼前端任務上，新版 V3 模型生成的程式碼可用性更高，視覺效果也更加美觀、富有設計感。

![](https://cdn.deepseek.com/api-docs/v3_0324_gif.gif)

### 中文寫作升級

在中文寫作任務方面，新版 V3 模型基於 R1 的寫作水平進行了進一步最佳化，同時特別提升了中長篇文字創作的內容質量。

![](https://cdn.deepseek.com/api-docs/v3_0324_example_1.webp)

![](https://cdn.deepseek.com/api-docs/v3_0324_example_2.webp)

### 中文搜尋能力最佳化

新版 V3 模型可以在聯網搜尋場景下，對於報告生成類指令輸出內容更為詳實準確、排版更加清晰美觀的結果。

![](https://cdn.deepseek.com/api-docs/v3_0324_example_3.webp)

此外，新版 V3 模型在 **工具呼叫、角色扮演、問答閒聊** 等方面也得到了一定幅度的能力提升。

---

## 模型開源

DeepSeek-V3-0324 與之前的 DeepSeek-V3 使用同樣的 base 模型，僅改進了後訓練方法。私有化部署時只需要更新 checkpoint 和 tokenizer_config.json（tool calls 相關變動）。模型引數約 660B，開源版本上下文長度為 128K（網頁端、App 和 API 提供 64K 上下文）。V3-0324 模型權重下載請參考：

- Model Scope: [https://modelscope.cn/models/deepseek-ai/DeepSeek-V3-0324](https://modelscope.cn/models/deepseek-ai/DeepSeek-V3-0324)
- Huggingface: [https://huggingface.co/deepseek-ai/DeepSeek-V3-0324](https://huggingface.co/deepseek-ai/DeepSeek-V3-0324)

與 DeepSeek-R1 保持一致，此次我們的開源倉庫（包括模型權重）統一採用 MIT License，並允許使用者利用模型輸出、透過模型蒸餾等方式訓練其他模型。

- [模型能力提升一覽](https://api-docs.deepseek.com/zh-cn/news/news250325#%E6%A8%A1%E5%9E%8B%E8%83%BD%E5%8A%9B%E6%8F%90%E5%8D%87%E4%B8%80%E8%A7%88)
  - [推理任務表現提高](https://api-docs.deepseek.com/zh-cn/news/news250325#%E6%8E%A8%E7%90%86%E4%BB%BB%E5%8A%A1%E8%A1%A8%E7%8E%B0%E6%8F%90%E9%AB%98)
  - [前端開發能力增強](https://api-docs.deepseek.com/zh-cn/news/news250325#%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E8%83%BD%E5%8A%9B%E5%A2%9E%E5%BC%BA)
  - [中文寫作升級](https://api-docs.deepseek.com/zh-cn/news/news250325#%E4%B8%AD%E6%96%87%E5%86%99%E4%BD%9C%E5%8D%87%E7%BA%A7)
  - [中文搜尋能力最佳化](https://api-docs.deepseek.com/zh-cn/news/news250325#%E4%B8%AD%E6%96%87%E6%90%9C%E7%B4%A2%E8%83%BD%E5%8A%9B%E4%BC%98%E5%8C%96)
- [模型開源](https://api-docs.deepseek.com/zh-cn/news/news250325#%E6%A8%A1%E5%9E%8B%E5%BC%80%E6%BA%90)

> 來源：deepseek 官方
