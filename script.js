// ===================================================
// 架空イベント告知ページ JavaScript
// ★ Issue #4: このファイルを編集して機能を追加できます
// ===================================================

// スムーズスクロール（ナビゲーションリンクをクリックしたとき）
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===================================================
// ★ Issue #4: ここから下に機能を追加しよう
//
// アイデア例（難しくなくていい）:
//   - スクロールでヘッダーの影を強くする
//   - 「申し込む」ボタンを押したらメッセージを表示
//   - プログラムの時間をクリックで詳細を開閉する
//   - ページトップに戻るボタン
// ===================================================
