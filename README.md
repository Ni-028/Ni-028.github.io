<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>今日はなにを作る？</title>
  <link rel="stylesheet" href="レシピ.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>🍳 今日はなにを作る？</h1>
      <p class="subtitle">食材を入力して、レシピを見つけよう！</p>
    </header>

    <main>
      <section class="api-section">
        <button id="apiToggle" class="api-toggle">
          <span>⚙️ 楽天レシピAPI設定</span>
          <span id="apiStatusBadge" class="api-badge disconnected">未接続</span>
        </button>
        <div id="apiPanel" class="api-panel hidden">
          <p class="api-description">
            楽天レシピAPIを使うと、写真付きの人気レシピも一緒に検索できます。
          </p>
          <p class="api-hint">
            <a href="https://webservice.rakuten.co.jp/" target="_blank" rel="noopener noreferrer">
              楽天ウェブサービス
            </a>
            でアプリIDを無料で取得してください。
          </p>
          <div class="api-input-wrapper">
            <input type="text" id="apiKeyInput" placeholder="アプリID を入力">
            <button id="apiSaveBtn" class="btn-api-save">保存</button>
            <button id="apiClearBtn" class="btn-api-clear hidden">削除</button>
          </div>
          <p id="apiStatus" class="api-status"></p>
        </div>
      </section>

      <section class="input-section">
        <div class="input-wrapper">
          <input
            type="text"
            id="ingredientInput"
            placeholder="食材を入力（例：鶏肉）"
            autocomplete="off"
          >
          <button id="addBtn" class="btn-add">追加</button>
        </div>

        <div id="ingredientTags" class="tags-container"></div>

        <button id="searchBtn" class="btn-search" disabled>
          🔍 レシピを探す！
        </button>
      </section>

      <div id="apiLoading" class="api-loading hidden">
        <div class="spinner"></div>
        <p>楽天レシピを検索中...</p>
      </div>

      <section id="resultSection" class="result-section hidden">
        <div class="recipe-card">
          <h2 id="recipeName" class="recipe-name"></h2>
          <div class="recipe-meta">
            <span id="recipeTime" class="meta-item">⏱️</span>
            <span id="recipeServings" class="meta-item">🍽️</span>
          </div>
          <div class="recipe-detail">
            <h3>📝 材料</h3>
            <ul id="recipeIngredients" class="ingredients-list"></ul>
          </div>
          <div class="recipe-detail">
            <h3>👨‍🍳 作り方</h3>
            <ol id="recipeSteps" class="steps-list"></ol>
          </div>
          <div class="external-links">
            <h3>🌐 外部サイトで詳しく見る</h3>
            <div id="externalLinks" class="external-links-grid"></div>
          </div>
        </div>
        <button id="retryBtn" class="btn-retry">🔄 別のレシピを探す</button>
      </section>

      <section id="apiResultSection" class="api-result-section hidden">
        <h2 class="api-result-title">🌐 楽天レシピからのおすすめ</h2>
        <div id="apiResults" class="api-results-grid"></div>
      </section>

      <section id="noResultSection" class="no-result-section hidden">
        <p class="no-result-text">😢 その食材に合うレシピが見つかりませんでした。</p>
        <p class="no-result-hint">外部サイトで探してみましょう！</p>
        <div id="noResultExternalLinks" class="external-links-grid no-result-links"></div>
      </section>
    </main>

    <footer>
      <p>🥕 食材を入れて、今日のごはんを決めよう！</p>
    </footer>
  </div>

  <script src="レシピ.js"></script>
</body>
</html>
