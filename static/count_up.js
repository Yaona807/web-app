// ページが読み込まれたら実行
window.onload = function () {
  // オブジェクトと変数の準備
  var count_disp = document.getElementById("disp_count");
  var count_up_btn = document.getElementById("btn_count_up");
  var end_btn = document.getElementById("btn_end");
  var user_name_text = document.getElementById("user_name");
  var count_value = 0;

  user = window.prompt("ユーザー名を入力してください", "");
  if (user == "" || user == null) {
    user = "匿名";
  }
  user_name_text.value = user;

  // カウントアップボタンクリック処理
  count_up_btn.onclick = function () {
    count_value += 1;
    count_disp.innerHTML = "<h1>" + count_value + "</h1>";
    end_btn.value = count_value;
  };
  //カウントアップボタンのマウスダウン処理
  count_up_btn.onmousedown = function () {
    count_up_btn.style.backgroundColor = "#084298";
  };
  // カウントアップボタンのマウスアップ処理
  count_up_btn.onmouseup = function () {
    count_up_btn.style.backgroundColor = "";
  };
};
