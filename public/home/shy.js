document.addEventListener("DOMContentLoaded", function () {
    const shy = document.getElementById("funni");
    const flutter = document.getElementById("character");
    const squee = new Audio("./slide.wav");

    if (!funni) return;

    function characterAnim() {
        funni.disabled = true;
        squee.play();

        if (!character) {
            funni.disabled = false;
            return;
        }

        character.classList.add("active");
        character.addEventListener("animationend", function () {
            funni.disabled = false;
            character.classList.remove("active");
        }, { once: true });
    }

    funni.addEventListener("click", characterAnim);
});