5. 程式架構盡可能做到你最滿意的方式並於readme說明 - 
    1. 功能說明 - api: "https://mocki.io/v1/50eabb82-d5cd-46e7-b330-dbf7f70b10d1"
        (1) 假資料內容有 [key, 商品圖片uri, 商品名稱, 售價, like(購物車), 標籤分類(male, female), 賣家: { 名稱, 商品數量, 賣家頭貼, 評價 }]
        (2) 使用 mockio.io 生成 api, 使用 Redux 搭配 Thunk 串接 api。並且在 Redux 中創建 updateClothes 函式，控制是否加入購物車
        (3) 控制路由使用 React Navigator(Stack, Tab, Drawer)
            (a) Tab 有兩頁: Home and 購物車
            (b) Drawer 有三頁: All Clothes, Boy Clothes, Girl Clothes, 男女裝從 api 的男女分類控制
        (4) 點擊任意商品可以進入商品頁面，最下面有兩個按鈕，直接購買按鈕還未實做功能，加入購物車則可以控制資料是否顯示在購物車頁面，顯示已加入購物車表示顯示在購物車頁面，顯示加入購物車則不顯示
        (5) 購物車頁面中使用react-native-swipe-list-view套件，向左滑動可刪除項目
    2. 架構說明
        (1) 分成四個主要項目 
            a. redux - 做串接資料及更新資料功能
            b. common - Header放在首頁, Card把商品資訊做成首頁商品卡, CartListCard做購物車的商品欄
            c. layouts - ClothesScreenLayout 做 All Clothes, boy and Girl Clothes screen，把整頁做出來(熱門商品＋限時優惠＋免運商品項目)。CardsLayout則是做 ClothesScreenLayout的區塊，把所有商品卡結合起來
            d. screens - 所有頁面最終呈現的樣貌

6. 於readme寫下各項目進行的時間 - 
    決定內容與畫面 + react-native init + react navigator + xcode設定: 一天
    切版製作畫面 + 用 Redux 串接 api - 一天
    做 updateClothes 功能控制購物車內容 + 把資料放進畫面 + 微調切版畫面 - 一天
    Android Studio 設定 + 使用 react-native-vector-icons": "^9.0.0" 設定 - 一天
    最終樣式微調 + 說明 - 一天

7. 說明IOS、Android的上架流程與注意事項，並以md檔案描述
    (1) 注意事項
        a. APP名稱、文字介紹部分以及軟體截圖不能不符合或違反國家相關規定
        b. 軟體文字介紹里所留的網址必須是與APP或與APP開發者相關的連結，禁止其他無關連結
        c. APP圖標、截圖必須是來源於所上傳的APP，且圖片清晰，與當前版本對應相符
        d. APP必須能正常安裝、操作以及卸載。確保用戶可良好體驗
        e. APP中如果有收費項目，必須有提示用戶的說明
        f. IOS 上架截圖中出現了Android或談論 Android 內容
    (2) IOS 上架流程
        a. 申請付費帳號，並進入 App Store Connect 設定
        b. 進入 我的 App，點選建立 App，設定基本資訊，建立後生成 ID，放在 Xcode Bunble ID
        c. 從 Xcode 上傳 App
        d. 設定上架 App 的個人帳號，切換到 App 的 General 頁面，在 Signing 區塊點選 Add Account並設定。
        e. 檢查 App 的 Bundle Identifier 和 Version，需和 App Store Connect 上設定的一模一樣
        f. 將 App Build 的對象改為 Generic iOS Device
        g. 點擊 Product > Archive，包裝製作 App，點擊右邊 Distribute App 按鈕，選擇 iOS App Store，選擇 Upload，產生 iOS Distribution certificate，點選 Upload 上傳
    (3) Android 上架流程
        a. 設定付費帳號
        b. 選擇 App 上架，設定資訊
        c. 回到 IDE Build -> Generate Signed APK，create new，產生出來的 apk 就是要上架的檔案
        d. 選擇 apk 那頁上傳