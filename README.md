# 外科核心課程 · 微學習講義

九堂外科核心課程錄音整理成的靜態網站，可直接部署到 GitHub Pages。共 139 個單元。

**乳房外科**

- **第一講：乳房腫瘤**（`breast.html`，17 單元）— 觸診、超音波 SAM、乳房攝影鈣化、BI-RADS、切片選擇、保留乳房手術、腋下分期
- **第三講：乳癌全身性治療**（`breast-systemic.html`，16 單元）— 亞型分類、化療、荷爾蒙治療、標靶、免疫治療、新輔助化療、精準治療

**大腸直腸外科**

- **第二講：結腸（直腸）癌**（`colorectal.html`，12 單元）— 大腸鏡適應症、篩檢年齡、iFOBT、interval cancer、AJCC 第八版 M1c、息肉處置、術式選擇、stage IV 順序
- **第四講：痔瘡與肛門膿瘍瘻管**（`anorectal.html`，16 單元）— 痔瘡的本質、dentate line、分級與治療階梯、cryptoglandular 機轉、引流原則、Goodsall's rule
- **第五講：潰瘍性結腸炎**（`uc.html`，14 單元）— 危險因子、內視鏡分級、嚴重度評估、藥物階梯、三種術式

**器官移植**

- **第六講：腎臟移植**（`kidney-transplant.html`，14 單元）— 器官摘取與保存液、捐贈者評估、腦死與心死判定、分配原則
- **第七講：肝臟移植**（`liver-transplant.html`，17 單元）— 抗排斥藥、三條管路的併發症、活體捐贈評估、B/C 肝策略、liver cancer、PTLD
- **第八講：腸衰竭與小腸移植**（`intestinal-failure.html`，17 單元）— 功能性定義、營養評估、EN 與 PN、導管照顧、GLP-2、移植適應症

**臨床學習**

- **第九講：臨床學習與病人照顧**（`clinical-learning.html`，16 單元）— clerk 的團隊位置、門診 SOAP 與小兒劑量、照會、開刀房、傷口照顧、報告格式

## 部署到 GitHub Pages

1. 建一個 repo（例如 `surg-lectures`），把這個資料夾裡的檔案全部推上去：

   ```bash
   git init
   git add .
   git commit -m "Add surgical core lecture notes"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/<repo 名稱>.git
   git push -u origin main
   ```

2. 到 repo 的 **Settings → Pages**，Source 選 **Deploy from a branch**，branch 選 `main`、資料夾選 `/ (root)`，按 Save。

3. 約一分鐘後開啟 `https://<你的帳號>.github.io/<repo 名稱>/`。

若要放在個人主頁根目錄，把 repo 命名為 `<你的帳號>.github.io` 即可。

## 檔案結構

```
index.html                課程首頁（依科別分組）
breast.html               第一講
colorectal.html           第二講
breast-systemic.html      第三講
anorectal.html            第四講
uc.html                   第五講
kidney-transplant.html    第六講
liver-transplant.html     第七講
intestinal-failure.html   第八講
clinical-learning.html    第九講
assets/style.css          共用樣式（深淺色主題、版面、元件、各課主色）
assets/app.js             主題切換、閱讀進度、目錄追蹤、展開全部解答
.nojekyll                 關閉 Jekyll 處理，確保檔案原樣輸出
```

每一課在 `<html>` 上帶一個 `data-page` 屬性，決定該堂課的主色；新增課程時在 `style.css` 裡加一組 `html[data-page="…"]` 與對應的兩段深色版本即可。

全部是純靜態檔案，沒有建置步驟。唯一的外部資源是 Google Fonts 的 Noto Serif TC（標題用）；離線或無法連外時會自動回退到系統的宋體／黑體，版面不受影響。

## 修改內容

每個單元都是一個 `<article class="lesson" id="lNN">`，結構固定：

```html
<article class="lesson" id="l01">
  <div class="lesson-head">…</div>   單元編號與標題
  <p class="hook">…</p>              開場的關鍵事實
  <div class="block">…</div>         框架、表格、列表
  <div class="viz">…</div>           圖解（純文字描述，不放圖片）
  <div class="recall">…</div>        回想測驗，解答收在 <details> 裡
</article>
```

網站不使用任何圖片、SVG 或圖表——「圖解」一律以文字描述該圖的結構，讓讀者自己在腦中畫或抄到筆記上。

新增單元時，記得同步在該頁側欄的 `<nav class="toc">` 加一列，`href` 對應新的 `id`，側欄高亮與閱讀進度會自動運作。

## 內容原則

整理時遵循的規則：依理念（而非講稿順序）切分成約 3 分鐘的單元、可並排比較的內容一律做成表格、每個單元以一道需要「提取或應用」的回想題收尾，以及**不補充逐字稿以外的數字、研究或事實**。錄音中講者標明為假說或個人觀察的部分，在頁面上也照樣標明。
