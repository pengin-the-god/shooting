const audio1 = new Audio("ビームガン.mp3")
const audio2 = new Audio("歓声と拍手1.mp3")

{//スタートからクリアの時間を取ります。
    let start = 0;
    document.querySelector("button").addEventListener("click", () => {
        start = new Date();
    })

}


{//スタートからクリアの時間を取ります。
    let start = 0;
    let end = 0;
    document.querySelector("button").addEventListener("click", () => {
        start = Date.now();
        console.log(start)
        return start;
    });

    //ターゲットブロックの消失と出現動作。
    //スタート動作。
    document.querySelector("button").addEventListener("click", () => {
        document.querySelector(".start").remove();
        document.querySelector("#a1").classList.add("open");
        document.querySelector("*").style.cursor="crosshair"

    })
    document.querySelector(`#a1`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a1`).remove();
        document.querySelector(`#a2`).classList.add("open");
    });
    document.querySelector(`#a2`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a2`).remove();
        document.querySelector(`#a3`).classList.add("open");
    });
    document.querySelector(`#a3`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a3`).remove();
        document.querySelector(`#a4`).classList.add("open");
    });
    document.querySelector(`#a4`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a4`).remove();
        document.querySelector(`#a5`).classList.add("open");
    });
    document.querySelector(`#a5`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a5`).remove();
        document.querySelector(`#a6`).classList.add("open");
    });
    document.querySelector(`#a6`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a6`).remove();
        document.querySelector(`#a7`).classList.add("open");
    });
    document.querySelector(`#a7`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a7`).remove();
        document.querySelector(`#a8`).classList.add("open");
    });
    document.querySelector(`#a8`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a8`).remove();
        document.querySelector(`#a9`).classList.add("open");
    });
    document.querySelector(`#a9`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a9`).remove();
        document.querySelector(`#a10`).classList.add("open");
    });
    document.querySelector(`#a10`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a10`).remove();
        document.querySelector(`#a11`).classList.add("open");
    });
    document.querySelector(`#a11`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a11`).remove();
        document.querySelector(`#a12`).classList.add("open");
    });
    document.querySelector(`#a12`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a12`).remove();
        document.querySelector(`#a13`).classList.add("open");
    });
    document.querySelector(`#a13`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a13`).remove();
        document.querySelector(`#a14`).classList.add("open");
    });
    document.querySelector(`#a14`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a14`).remove();
        document.querySelector(`#a15`).classList.add("open");
    });
    document.querySelector(`#a15`).addEventListener("click", () => {
        audio1.load();
        audio1.play();
        document.querySelector(`#a15`).remove();
        document.querySelector(".clear").classList.add("open")

        document.querySelector("*").style.cursor="auto"

        end = Date.now();
        const time = end - start;
        const time2=time/1000;
        const time3=time2.toFixed(2);
        document.querySelector(".clear-text").textContent=`記録:${time3}秒`

        setTimeout(() => {
            audio2.load();
            audio2.play();
        }, 300);
    })
}
