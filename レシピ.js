// ── レシピデータベース ──
const recipes = [
  {
    name: "親子丼",
    time: "20分",
    servings: "2人前",
    ingredients: ["鶏肉", "卵", "玉ねぎ", "ごはん", "醤油", "みりん", "だし汁", "砂糖"],
    steps: [
      "鶏肉を一口大に切り、玉ねぎを薄切りにする。",
      "鍋にだし汁、醤油、みりん、砂糖を入れて煮立てる。",
      "玉ねぎを加えてしんなりするまで煮る。",
      "鶏肉を加えて火が通るまで煮る。",
      "溶き卵を回し入れ、半熟になったら火を止める。",
      "ごはんの上に盛り付けて完成。"
    ]
  },
  {
    name: "肉じゃが",
    time: "30分",
    servings: "3人前",
    ingredients: ["牛肉", "じゃがいも", "にんじん", "玉ねぎ", "しらたき", "醤油", "砂糖", "みりん"],
    steps: [
      "じゃがいも、にんじんは乱切り、玉ねぎはくし切りにする。",
      "鍋に油を熱し、牛肉を炒める。",
      "野菜を加えてさっと炒める。",
      "水、醤油、砂糖、みりんを加えて煮立てる。",
      "落し蓋をして中火で15〜20分煮込む。",
      "じゃがいもが柔らかくなったら完成。"
    ]
  },
  {
    name: "チキンカレー",
    time: "40分",
    servings: "4人前",
    ingredients: ["鶏肉", "じゃがいも", "にんじん", "玉ねぎ", "カレールー", "ごはん", "サラダ油"],
    steps: [
      "鶏肉、じゃがいも、にんじんを一口大に切る。",
      "玉ねぎを薄切りにする。",
      "鍋に油を熱し、玉ねぎをあめ色になるまで炒める。",
      "鶏肉を加えて表面に焼き色をつける。",
      "にんじん、じゃがいもを加え、水を入れて煮る。",
      "野菜が柔らかくなったら火を止め、カレールーを溶かす。",
      "再び弱火で10分煮込み、ごはんと一緒に盛り付ける。"
    ]
  },
  {
    name: "豚の生姜焼き",
    time: "15分",
    servings: "2人前",
    ingredients: ["豚肉", "生姜", "玉ねぎ", "醤油", "みりん", "酒", "サラダ油", "キャベツ"],
    steps: [
      "生姜をすりおろす。",
      "醤油、みりん、酒、すりおろし生姜を混ぜてタレを作る。",
      "玉ねぎを薄切りにする。",
      "フライパンに油を熱し、豚肉を焼く。",
      "玉ねぎを加えて炒める。",
      "タレを加えて絡める。",
      "千切りキャベツと一緒に盛り付けて完成。"
    ]
  },
  {
    name: "麻婆豆腐",
    time: "20分",
    servings: "2人前",
    ingredients: ["豆腐", "ひき肉", "長ねぎ", "にんにく", "生姜", "豆板醤", "醤油", "片栗粉"],
    steps: [
      "豆腐をさいの目に切り、軽く水切りする。",
      "長ねぎ、にんにく、生姜をみじん切りにする。",
      "フライパンに油を熱し、にんにく、生姜を炒める。",
      "ひき肉を加えてほぐしながら炒める。",
      "豆板醤、醤油を加えて味を調える。",
      "豆腐と水を加えて煮立て、水溶き片栗粉でとろみをつける。",
      "長ねぎを散らして完成。"
    ]
  },
  {
    name: "オムライス",
    time: "20分",
    servings: "2人前",
    ingredients: ["卵", "ごはん", "鶏肉", "玉ねぎ", "ケチャップ", "バター", "塩", "こしょう"],
    steps: [
      "鶏肉を小さめに切り、玉ねぎをみじん切りにする。",
      "フライパンにバターを溶かし、鶏肉と玉ねぎを炒める。",
      "ごはんを加え、ケチャップで味付けしてチキンライスを作る。",
      "別のフライパンにバターを溶かし、溶き卵を流し入れる。",
      "半熟のうちにチキンライスをのせて包む。",
      "皿に盛り、ケチャップをかけて完成。"
    ]
  },
  {
    name: "味噌汁",
    time: "10分",
    servings: "2人前",
    ingredients: ["豆腐", "わかめ", "長ねぎ", "味噌", "だし汁"],
    steps: [
      "豆腐をさいの目に切る。",
      "長ねぎを小口切りにする。",
      "鍋にだし汁を沸かし、豆腐を入れる。",
      "わかめを加えてひと煮立ちさせる。",
      "火を止めて味噌を溶き入れる。",
      "器に盛り、長ねぎを散らして完成。"
    ]
  },
  {
    name: "焼きそば",
    time: "15分",
    servings: "2人前",
    ingredients: ["焼きそば麺", "豚肉", "キャベツ", "にんじん", "もやし", "ソース", "サラダ油", "青のり"],
    steps: [
      "豚肉を一口大に切る。",
      "キャベツをざく切り、にんじんを短冊切りにする。",
      "フライパンに油を熱し、豚肉を炒める。",
      "野菜を加えて炒める。",
      "麺を加え、水を少し入れてほぐしながら炒める。",
      "ソースを加えて全体に絡める。",
      "皿に盛り、青のりをかけて完成。"
    ]
  },
  {
    name: "唐揚げ",
    time: "25分",
    servings: "2人前",
    ingredients: ["鶏肉", "醤油", "酒", "生姜", "にんにく", "片栗粉", "サラダ油"],
    steps: [
      "鶏肉を一口大に切る。",
      "醤油、酒、すりおろし生姜、にんにくを混ぜて下味をつける。",
      "15分ほど漬け込む。",
      "片栗粉をまぶす。",
      "170℃の油で4〜5分揚げる。",
      "一度取り出し、180℃に上げて1〜2分二度揚げする。",
      "油を切って盛り付けて完成。"
    ]
  },
  {
    name: "チャーハン",
    time: "10分",
    servings: "2人前",
    ingredients: ["ごはん", "卵", "長ねぎ", "ハム", "醤油", "塩", "こしょう", "サラダ油"],
    steps: [
      "長ねぎをみじん切り、ハムを小さく切る。",
      "フライパンに油を多めに熱し、溶き卵を入れる。",
      "すぐにごはんを加え、卵と絡めながら強火で炒める。",
      "ハム、長ねぎを加えて炒める。",
      "醤油を鍋肌から回し入れ、塩こしょうで味を調える。",
      "パラパラになったら皿に盛って完成。"
    ]
  },
  {
    name: "ハンバーグ",
    time: "30分",
    servings: "2人前",
    ingredients: ["ひき肉", "玉ねぎ", "卵", "パン粉", "牛乳", "塩", "こしょう", "ケチャップ"],
    steps: [
      "玉ねぎをみじん切りにし、炒めて冷ます。",
      "パン粉を牛乳に浸す。",
      "ひき肉、玉ねぎ、卵、パン粉、塩、こしょうを混ぜてよくこねる。",
      "小判形に成形し、中央をくぼませる。",
      "フライパンに油を熱し、強火で両面に焼き色をつける。",
      "蓋をして弱火で8〜10分蒸し焼きにする。",
      "ケチャップとソースを混ぜたタレをかけて完成。"
    ]
  },
  {
    name: "ポテトサラダ",
    time: "20分",
    servings: "3人前",
    ingredients: ["じゃがいも", "きゅうり", "にんじん", "ハム", "マヨネーズ", "塩", "こしょう"],
    steps: [
      "じゃがいもを茹でて、熱いうちに潰す。",
      "にんじんを薄切りにして茹でる。",
      "きゅうりを薄切りにし、塩もみして水気を絞る。",
      "ハムを短冊切りにする。",
      "全ての材料を混ぜ、マヨネーズ、塩、こしょうで味付けする。",
      "冷蔵庫で冷やして完成。"
    ]
  },
  {
    name: "豚キムチ",
    time: "10分",
    servings: "2人前",
    ingredients: ["豚肉", "キムチ", "にら", "ごま油", "醤油", "もやし"],
    steps: [
      "豚肉を食べやすい大きさに切る。",
      "にらを4cm幅に切る。",
      "フライパンにごま油を熱し、豚肉を炒める。",
      "もやしを加えて炒める。",
      "キムチを加えてさっと炒める。",
      "醤油を少し加え、にらを入れてさっと混ぜて完成。"
    ]
  },
  {
    name: "鮭のホイル焼き",
    time: "25分",
    servings: "2人前",
    ingredients: ["鮭", "玉ねぎ", "しめじ", "バター", "塩", "こしょう", "レモン"],
    steps: [
      "玉ねぎを薄切り、しめじをほぐす。",
      "アルミホイルに玉ねぎを敷き、鮭をのせる。",
      "しめじを周りに置き、バターをのせる。",
      "塩、こしょうをふる。",
      "ホイルをしっかり包む。",
      "フライパンに少量の水を入れ、蓋をして中火で15分蒸し焼きにする。",
      "レモンを絞って完成。"
    ]
  },
  {
    name: "卵焼き",
    time: "10分",
    servings: "2人前",
    ingredients: ["卵", "砂糖", "醤油", "だし汁", "サラダ油"],
    steps: [
      "卵を溶き、砂糖、醤油、だし汁を混ぜる。",
      "卵焼き器に油を薄くひいて熱する。",
      "卵液を薄く流し入れ、半熟のうちに手前に巻く。",
      "再び油をひき、卵液を流して巻くを繰り返す。",
      "全て巻き終えたら形を整える。",
      "少し冷ましてから切り分けて完成。"
    ]
  },
  {
    name: "豚汁",
    time: "25分",
    servings: "3人前",
    ingredients: ["豚肉", "大根", "にんじん", "ごぼう", "こんにゃく", "長ねぎ", "味噌", "だし汁"],
    steps: [
      "野菜を食べやすい大きさに切る。",
      "こんにゃくは手でちぎる。",
      "鍋にごま油を熱し、豚肉を炒める。",
      "野菜を加えて炒める。",
      "だし汁を加えて煮立て、アクを取る。",
      "野菜が柔らかくなるまで煮込む。",
      "火を止めて味噌を溶き入れ、長ねぎを散らして完成。"
    ]
  },
  {
    name: "グラタン",
    time: "35分",
    servings: "2人前",
    ingredients: ["マカロニ", "鶏肉", "玉ねぎ", "牛乳", "バター", "小麦粉", "チーズ", "塩"],
    steps: [
      "マカロニを茹でておく。",
      "鶏肉を一口大に切り、玉ねぎを薄切りにする。",
      "フライパンにバターを溶かし、鶏肉と玉ねぎを炒める。",
      "小麦粉を加えて粉っぽさがなくなるまで炒める。",
      "牛乳を少しずつ加え、とろみがつくまで混ぜる。",
      "マカロニを加え、塩で味を調える。",
      "耐熱皿に入れてチーズをのせ、オーブンで焼き色がつくまで焼く。"
    ]
  },
  {
    name: "野菜炒め",
    time: "10分",
    servings: "2人前",
    ingredients: ["豚肉", "キャベツ", "にんじん", "もやし", "ピーマン", "醤油", "塩", "こしょう"],
    steps: [
      "豚肉を一口大に切る。",
      "キャベツをざく切り、にんじんを短冊切り、ピーマンを細切りにする。",
      "フライパンに油を熱し、豚肉を炒める。",
      "にんじん、キャベツ、もやし、ピーマンの順に加えて強火で炒める。",
      "醤油、塩、こしょうで味付けする。",
      "シャキシャキ感が残るうちに皿に盛って完成。"
    ]
  },
  {
    name: "パスタ・ペペロンチーノ",
    time: "15分",
    servings: "2人前",
    ingredients: ["パスタ", "にんにく", "唐辛子", "オリーブオイル", "塩", "ベーコン"],
    steps: [
      "パスタをたっぷりのお湯で茹でる。",
      "にんにくを薄切り、唐辛子を輪切りにする。",
      "フライパンにオリーブオイル、にんにく、唐辛子を入れて弱火で香りを出す。",
      "ベーコンを加えてカリッとするまで炒める。",
      "茹で汁を少し加え、乳化させる。",
      "茹で上がったパスタを加えて絡める。",
      "塩で味を調えて完成。"
    ]
  },
  {
    name: "餃子",
    time: "30分",
    servings: "3人前",
    ingredients: ["ひき肉", "キャベツ", "にら", "にんにく", "生姜", "餃子の皮", "ごま油", "醤油"],
    steps: [
      "キャベツとにらをみじん切りにし、塩もみして水気を絞る。",
      "にんにくと生姜をすりおろす。",
      "ひき肉に野菜、にんにく、生姜、醤油、ごま油を混ぜてよくこねる。",
      "餃子の皮で包む。",
      "フライパンに油を熱し、餃子を並べる。",
      "水を加えて蓋をし、中火で蒸し焼きにする。",
      "水気がなくなったらごま油を回しかけ、カリッと焼いて完成。"
    ]
  }
];

// ── 外部料理サイト定義 ──
const externalSites = [
  {
    name: "クックパッド",
    icon: "📗",
    buildUrl: function (query) {
      return "https://cookpad.com/search/" + encodeURIComponent(query);
    }
  },
  {
    name: "クラシル",
    icon: "🎬",
    buildUrl: function (query) {
      return "https://www.kurashiru.com/search?query=" + encodeURIComponent(query);
    }
  },
  {
    name: "楽天レシピ",
    icon: "🍲",
    buildUrl: function (query) {
      return "https://recipe.rakuten.co.jp/search/" + encodeURIComponent(query);
    }
  },
  {
    name: "デリッシュキッチン",
    icon: "🍴",
    buildUrl: function (query) {
      return "https://delishkitchen.tv/search?q=" + encodeURIComponent(query);
    }
  },
  {
    name: "白ごはん.com",
    icon: "🍚",
    buildUrl: function (query) {
      return "https://www.sirogohan.com/?s=" + encodeURIComponent(query);
    }
  }
];

// ── 楽天レシピAPI設定 ──
var RAKUTEN_API_BASE = "https://app.rakuten.co.jp/services/api/Recipe";
var RAKUTEN_API_VER = "20170426";
var API_STORAGE_KEY = "rakutenRecipeApiKey";
var cachedCategories = null;

// 幅広いカテゴリからレシピを取得するための大カテゴリID
var LARGE_CATEGORY_IDS = [
  "10", "11", "12", "13", "14",
  "15", "16", "17", "18", "30",
  "31", "32", "33", "34"
];

// ── アプリの状態 ──
var selectedIngredients = [];

// ── DOM要素 ──
var ingredientInput = document.getElementById("ingredientInput");
var addBtn = document.getElementById("addBtn");
var ingredientTags = document.getElementById("ingredientTags");
var searchBtn = document.getElementById("searchBtn");
var resultSection = document.getElementById("resultSection");
var noResultSection = document.getElementById("noResultSection");
var retryBtn = document.getElementById("retryBtn");
var apiToggle = document.getElementById("apiToggle");
var apiPanel = document.getElementById("apiPanel");
var apiKeyInput = document.getElementById("apiKeyInput");
var apiSaveBtn = document.getElementById("apiSaveBtn");
var apiClearBtn = document.getElementById("apiClearBtn");
var apiStatusBadge = document.getElementById("apiStatusBadge");
var apiStatus = document.getElementById("apiStatus");
var apiLoading = document.getElementById("apiLoading");
var apiResultSection = document.getElementById("apiResultSection");

// ── イベント登録 ──
addBtn.addEventListener("click", addIngredient);
ingredientInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addIngredient();
  }
});
searchBtn.addEventListener("click", searchRecipe);
retryBtn.addEventListener("click", searchRecipe);

apiToggle.addEventListener("click", function () {
  apiPanel.classList.toggle("hidden");
});
apiSaveBtn.addEventListener("click", saveApiKey);
apiClearBtn.addEventListener("click", clearApiKey);

// ── 初期化 ──
updateApiUI();

// ── APIキー管理 ──
function getApiKey() {
  return localStorage.getItem(API_STORAGE_KEY) || "";
}

function saveApiKey() {
  var key = apiKeyInput.value.trim();
  if (!key) return;
  localStorage.setItem(API_STORAGE_KEY, key);
  apiKeyInput.value = "";
  updateApiUI();
  testApiConnection(key);
}

function clearApiKey() {
  localStorage.removeItem(API_STORAGE_KEY);
  cachedCategories = null;
  updateApiUI();
  apiStatus.textContent = "APIキーを削除しました。";
  apiStatus.className = "api-status";
}

function updateApiUI() {
  var key = getApiKey();
  if (key) {
    apiStatusBadge.textContent = "接続済み";
    apiStatusBadge.className = "api-badge connected";
    apiClearBtn.classList.remove("hidden");
    apiKeyInput.placeholder = "設定済み（変更する場合は入力）";
  } else {
    apiStatusBadge.textContent = "未接続";
    apiStatusBadge.className = "api-badge disconnected";
    apiClearBtn.classList.add("hidden");
    apiKeyInput.placeholder = "アプリID を入力";
  }
}

function testApiConnection(key) {
  apiStatus.textContent = "接続テスト中...";
  apiStatus.className = "api-status";

  var url = RAKUTEN_API_BASE + "/CategoryList/" + RAKUTEN_API_VER +
    "?format=json&applicationId=" + encodeURIComponent(key);

  fetch(url)
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (data) {
      if (data.result) {
        cachedCategories = data.result;
        apiStatus.textContent = "✅ 接続成功！楽天レシピAPIが使えます。";
        apiStatus.className = "api-status success";
      } else {
        throw new Error("Invalid response");
      }
    })
    .catch(function (err) {
      apiStatus.textContent = "❌ 接続失敗：APIキーを確認してください。";
      apiStatus.className = "api-status error";
      localStorage.removeItem(API_STORAGE_KEY);
      updateApiUI();
    });
}

// ── 楽天レシピAPIからカテゴリ一覧を取得 ──
function fetchCategories(apiKey) {
  if (cachedCategories) {
    return Promise.resolve(cachedCategories);
  }

  var url = RAKUTEN_API_BASE + "/CategoryList/" + RAKUTEN_API_VER +
    "?format=json&applicationId=" + encodeURIComponent(apiKey);

  return fetch(url)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      cachedCategories = data.result || {};
      return cachedCategories;
    });
}

// ── 楽天レシピAPIからランキングを取得 ──
function fetchRanking(apiKey, categoryId) {
  var url = RAKUTEN_API_BASE + "/CategoryRanking/" + RAKUTEN_API_VER +
    "?format=json&applicationId=" + encodeURIComponent(apiKey);

  if (categoryId) {
    url += "&categoryId=" + encodeURIComponent(categoryId);
  }

  return fetch(url)
    .then(function (res) {
      if (!res.ok) return [];
      return res.json();
    })
    .then(function (data) {
      return data.result || [];
    })
    .catch(function () {
      return [];
    });
}

// ── 食材に関連するカテゴリを選ぶ ──
function pickCategoriesToSearch(categories, ingredients) {
  var picked = [];

  // 中カテゴリから食材名に一致するものを探す
  var medium = categories.medium || [];
  medium.forEach(function (cat) {
    ingredients.forEach(function (ing) {
      if (cat.categoryName.indexOf(ing) !== -1 || ing.indexOf(cat.categoryName) !== -1) {
        picked.push(cat.parentCategoryId + "-" + cat.categoryId);
      }
    });
  });

  // 大カテゴリからも一部追加（幅広く検索するため）
  var shuffled = LARGE_CATEGORY_IDS.slice().sort(function () { return Math.random() - 0.5; });
  var largePicks = shuffled.slice(0, 4);
  largePicks.forEach(function (id) {
    if (picked.indexOf(id) === -1) {
      picked.push(id);
    }
  });

  return picked.slice(0, 6);
}

// ── 楽天レシピAPIで検索 ──
function searchRakutenRecipes(ingredients) {
  var apiKey = getApiKey();
  if (!apiKey) return Promise.resolve([]);

  return fetchCategories(apiKey)
    .then(function (categories) {
      var categoryIds = pickCategoriesToSearch(categories, ingredients);

      // 全体ランキング + カテゴリ別ランキングを並列取得
      var fetches = [fetchRanking(apiKey, "")];
      categoryIds.forEach(function (catId) {
        fetches.push(fetchRanking(apiKey, catId));
      });

      return Promise.all(fetches);
    })
    .then(function (results) {
      var allRecipes = [];
      results.forEach(function (arr) {
        allRecipes = allRecipes.concat(arr);
      });

      // 重複を除去
      var seen = {};
      var unique = allRecipes.filter(function (r) {
        if (!r.recipeTitle || seen[r.recipeTitle]) return false;
        seen[r.recipeTitle] = true;
        return true;
      });

      // 食材でフィルタリング
      return unique.filter(function (recipe) {
        var materials = recipe.recipeMaterial || [];
        return ingredients.some(function (ingredient) {
          return materials.some(function (m) {
            return m.indexOf(ingredient) !== -1 || ingredient.indexOf(m) !== -1;
          });
        });
      });
    })
    .catch(function (err) {
      console.error("楽天レシピAPI検索エラー:", err);
      return [];
    });
}

// ── APIレシピを画面に表示する ──
function displayApiRecipes(apiRecipes) {
  var container = document.getElementById("apiResults");
  container.innerHTML = "";

  if (apiRecipes.length === 0) {
    apiResultSection.classList.add("hidden");
    return;
  }

  apiRecipes.forEach(function (recipe) {
    var card = document.createElement("a");
    card.href = recipe.recipeUrl;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.className = "api-recipe-card";

    var img = document.createElement("div");
    img.className = "api-recipe-img";
    img.style.backgroundImage = 'url("' + recipe.foodImageUrl + '")';

    var info = document.createElement("div");
    info.className = "api-recipe-info";

    var title = document.createElement("h3");
    title.className = "api-recipe-title";
    title.textContent = recipe.recipeTitle;

    var meta = document.createElement("div");
    meta.className = "api-recipe-meta";
    var metaParts = [];
    if (recipe.recipeIndication) metaParts.push("⏱️ " + recipe.recipeIndication);
    if (recipe.recipeCost) metaParts.push("💰 " + recipe.recipeCost);
    meta.textContent = metaParts.join("　");

    var desc = document.createElement("p");
    desc.className = "api-recipe-desc";
    desc.textContent = recipe.recipeDescription || "";

    var materials = document.createElement("p");
    materials.className = "api-recipe-materials";
    var materialList = (recipe.recipeMaterial || []).slice(0, 6);
    materials.textContent = materialList.join("、");
    if ((recipe.recipeMaterial || []).length > 6) {
      materials.textContent += " ...";
    }

    var badge = document.createElement("span");
    badge.className = "api-recipe-badge";
    badge.textContent = "楽天レシピで見る →";

    info.appendChild(title);
    info.appendChild(meta);
    info.appendChild(desc);
    info.appendChild(materials);
    info.appendChild(badge);

    card.appendChild(img);
    card.appendChild(info);
    container.appendChild(card);
  });

  apiResultSection.classList.remove("hidden");
}

// ── 食材を追加する ──
function addIngredient() {
  var value = ingredientInput.value.trim();
  if (!value) return;
  if (selectedIngredients.indexOf(value) !== -1) {
    ingredientInput.value = "";
    return;
  }

  selectedIngredients.push(value);
  renderTags();
  ingredientInput.value = "";
  ingredientInput.focus();
  updateSearchButton();
}

// ── 食材タグを表示する ──
function renderTags() {
  ingredientTags.innerHTML = "";
  selectedIngredients.forEach(function (ingredient, index) {
    var tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = ingredient;

    var removeBtn = document.createElement("button");
    removeBtn.className = "tag-remove";
    removeBtn.textContent = "✕";
    removeBtn.addEventListener("click", function () {
      selectedIngredients.splice(index, 1);
      renderTags();
      updateSearchButton();
    });

    tag.appendChild(removeBtn);
    ingredientTags.appendChild(tag);
  });
}

// ── 検索ボタンの有効/無効を切り替える ──
function updateSearchButton() {
  searchBtn.disabled = selectedIngredients.length === 0;
}

// ── レシピを検索する ──
function searchRecipe() {
  // ローカル検索
  var matched = recipes.filter(function (recipe) {
    return selectedIngredients.some(function (ingredient) {
      return recipe.ingredients.some(function (ri) {
        return ri.indexOf(ingredient) !== -1 || ingredient.indexOf(ri) !== -1;
      });
    });
  });

  resultSection.classList.add("hidden");
  noResultSection.classList.add("hidden");
  apiResultSection.classList.add("hidden");

  var localFound = false;
  if (matched.length > 0) {
    var randomIndex = Math.floor(Math.random() * matched.length);
    var recipe = matched[randomIndex];
    displayRecipe(recipe);
    localFound = true;
  }

  // 楽天レシピAPI検索
  var apiKey = getApiKey();
  if (apiKey) {
    apiLoading.classList.remove("hidden");
    searchBtn.disabled = true;

    searchRakutenRecipes(selectedIngredients)
      .then(function (apiRecipes) {
        displayApiRecipes(apiRecipes);

        if (!localFound && apiRecipes.length === 0) {
          var ingredientQuery = selectedIngredients.join(" ");
          renderExternalLinks("noResultExternalLinks", ingredientQuery);
          noResultSection.classList.remove("hidden");
        }
      })
      .finally(function () {
        apiLoading.classList.add("hidden");
        updateSearchButton();
      });
  } else {
    if (!localFound) {
      var ingredientQuery = selectedIngredients.join(" ");
      renderExternalLinks("noResultExternalLinks", ingredientQuery);
      noResultSection.classList.remove("hidden");
    }
  }
}

// ── レシピを画面に表示する ──
function displayRecipe(recipe) {
  document.getElementById("recipeName").textContent = recipe.name;
  document.getElementById("recipeTime").textContent = "⏱️ " + recipe.time;
  document.getElementById("recipeServings").textContent = "🍽️ " + recipe.servings;

  var ingredientsList = document.getElementById("recipeIngredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  var stepsList = document.getElementById("recipeSteps");
  stepsList.innerHTML = "";
  recipe.steps.forEach(function (step) {
    var li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  renderExternalLinks("externalLinks", recipe.name);

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── 外部サイトリンクを表示する ──
function renderExternalLinks(containerId, query) {
  var container = document.getElementById(containerId);
  container.innerHTML = "";
  externalSites.forEach(function (site) {
    var link = document.createElement("a");
    link.href = site.buildUrl(query);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "external-link";
    link.innerHTML = '<span class="external-link-icon">' + site.icon + '</span>' +
      '<span class="external-link-name">' + site.name + '</span>' +
      '<span class="external-link-query">\u300C' + query + '\u300D\u3067\u691C\u7D22</span>';
    container.appendChild(link);
  });
}
