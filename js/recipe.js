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

// ── アプリの状態 ──
let selectedIngredients = [];

// ── DOM要素 ──
const ingredientInput = document.getElementById("ingredientInput");
const addBtn = document.getElementById("addBtn");
const ingredientTags = document.getElementById("ingredientTags");
const searchBtn = document.getElementById("searchBtn");
const resultSection = document.getElementById("resultSection");
const noResultSection = document.getElementById("noResultSection");
const retryBtn = document.getElementById("retryBtn");

// ── イベント登録 ──
addBtn.addEventListener("click", addIngredient);
ingredientInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addIngredient();
  }
});
searchBtn.addEventListener("click", searchRecipe);
retryBtn.addEventListener("click", searchRecipe);

// ── 食材を追加する ──
function addIngredient() {
  const value = ingredientInput.value.trim();
  if (!value) return;
  if (selectedIngredients.includes(value)) {
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
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = ingredient;

    const removeBtn = document.createElement("button");
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
  const matched = recipes.filter(function (recipe) {
    return selectedIngredients.some(function (ingredient) {
      return recipe.ingredients.some(function (ri) {
        return ri.includes(ingredient) || ingredient.includes(ri);
      });
    });
  });

  resultSection.classList.add("hidden");
  noResultSection.classList.add("hidden");

  if (matched.length === 0) {
    noResultSection.classList.remove("hidden");
    return;
  }

  const randomIndex = Math.floor(Math.random() * matched.length);
  const recipe = matched[randomIndex];
  displayRecipe(recipe);
}

// ── レシピを画面に表示する ──
function displayRecipe(recipe) {
  document.getElementById("recipeName").textContent = recipe.name;
  document.getElementById("recipeTime").textContent = "⏱️ " + recipe.time;
  document.getElementById("recipeServings").textContent = "🍽️ " + recipe.servings;

  const ingredientsList = document.getElementById("recipeIngredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  const stepsList = document.getElementById("recipeSteps");
  stepsList.innerHTML = "";
  recipe.steps.forEach(function (step) {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
