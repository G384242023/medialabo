// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="kaitou"]');
  let yoso = Number(i.value);
  let span = document.querySelector('span#kaisu');
  span.textContent = kaisu;
  span = document.querySelector('span#answer');
  span.textContent = yoso;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let p = document.querySelector('p#result');
  if(kotae===yoso){
    p.textContent = "正解です。おめでとう!";
        console.log("正解です。おめでとう!");
    }else 
    if(kaisu===4){
        p.textContent = "まちがい。残念でした答えは"+kotae+"です。";
        console.log("まちがい。残念でした答えは"+kotae+"です。");
    }else
    if(kaisu<=3){
        if(kotae<yoso){
            p.textContent = "まちがい。答えはもっと小さいですよ。";
            console.log("まちがい。答えはもっと小さいですよ。");
        }else{
            p.textContent = "まちがい。答えはもっと大きいですよ。";
            console.log("まちがい。答えはもっと大きいですよ。");
        }
    }
    if(kaisu>=5){
        p.textContent = "答えは"+kotae+"でした。すでにゲームは終わっています。";
        console.log("答えは"+kotae+"でした。すでにゲームは終わっています。");
    }
    kaisu = kaisu+1;
}