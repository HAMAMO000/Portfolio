const animationDuration = 700; // アニメーション時間 (ms)

function accessto(url) {
    const cover1 = document.getElementById("cover1");
    const cover2 = document.getElementById("cover2");
    setTimeout(() => {
        const cover3 = document.getElementById("cover3");
        cover3.style.opacity = "1";
        cover1.style.transform = "translateY(0%)";
        cover2.style.transform = "translateY(0%)";

    }, 100);


    // アニメーションが完了した後にページ遷移
    setTimeout(() => {
        window.location.href = url;
    }, animationDuration);
}

window.addEventListener("load", () => {
    const cover1 = document.getElementById("cover1");
    const cover2 = document.getElementById("cover2");
    const cover3 = document.getElementById("cover3");
    // ページ読み込み時にシャッターを開くアニメーション
    setTimeout(() => {
        cover1.style.transform = "translateY(-100%)";
        cover2.style.transform = "translateY(100%)";
        cover3.style.opacity = "0";
    }, 100);

});



function displayBirthday() {
    const birthday = new Date("2003-09-14");
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDifference = today.getMonth() - birthday.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    document.getElementById("birthday").innerText = `${birthday.getFullYear()}年${birthday.getMonth() + 1}月${birthday.getDate()}日 (${age} 歳)`;
}
