const animationDuration = 700; // アニメーション時間 (ms)

function accessto(url) {
    const cover1 = document.getElementById("cover1");
    const cover2 = document.getElementById("cover2");
    // ページを覆うアニメーション
    cover1.style.transform = "translateY(0%)";
    cover2.style.transform = "translateY(0%)";

    // アニメーションが完了した後にページ遷移
    setTimeout(() => {
        window.location.href = url;
    }, animationDuration);
}

window.addEventListener("load", () => {
    const cover1 = document.getElementById("cover1");
    const cover2 = document.getElementById("cover2");
    // ページ読み込み時にシャッターを開くアニメーション
    setTimeout(() => {
        cover1.style.transform = "translateY(-100%)";
        cover2.style.transform = "translateY(100%)";
    }, 100);
});
