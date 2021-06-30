// ページが読み込まれたら実行
window.onload = function () {
  // オブジェクトと変数の準備
  const count_disp = document.getElementById("disp_count");
  const count_up_btn = document.getElementById("btn_count_up");
  const end_btn = document.getElementById("btn_end");
  const user_name_text = document.getElementById("user_name");
  const exchange_btn = document.getElementById("exchange");
  const score_txt = document.getElementById("score");
  let count_value = 0;
  let score = 0;

  let user = window.prompt("ユーザー名を入力してください", "");
  if (user == "" || user == null) {
    user = "匿名";
  }
  user_name_text.value = user;

  // カウントアップボタンクリック処理
  count_up_btn.onclick = function () {
    count_value += 1;
    count_disp.innerHTML = "<h1>" + count_value + "</h1>";
  };
  //カウントアップボタンのマウスダウン処理
  count_up_btn.onmousedown = function () {
    count_up_btn.src = "../static/button_onoff2.png";
  };
  // カウントアップボタンのマウスアップ処理
  count_up_btn.onmouseup = function () {
    count_up_btn.src = "../static/button_onoff1.png";
  };

  exchange_btn.onclick = function () {
    score += Math.floor(random_num * count_value);
    count_value = 0;
    count_disp.innerHTML = "<h1>" + count_value + "</h1>";
    end_btn.value = score;
    score_txt.innerHTML = "総得点 " + score;
  };
};

document.onkeypress = function (e) {
  // エンターキーだったら無効にする
  if (e.key === "Enter") {
    return false;
  }
};

let random_num = 0;

let random = function () {
  money_rate = document.getElementById("exchange");
  random_num = Math.ceil(Math.random() * 100) / 80;
  money_rate.innerHTML = "換金" + "<br>" + random_num;
};

setInterval(random, 3000);
