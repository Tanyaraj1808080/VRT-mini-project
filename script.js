const textToType = document.getElementById("text-to-type").innerText;
const typingArea = document.getElementById("typing-area");
const resetBtn = document.getElementById("reset-btn");
const resultDisplay = document.getElementById("result");

let startTime;
let isTyping = false;

typingArea.addEventListener("input", function () {
    if (!isTyping) {
        isTyping = true;
        startTime = new Date();
    }

    if (typingArea.value.trim() === textToType.trim()) {
        let endTime = new Date();
        let timeTaken = (endTime - startTime) / 1000;
        let words = textToType.split(" ").length;
        let wpm = Math.round((words / timeTaken) * 60);
        resultDisplay.innerText = Typing Speed: ${wpm} WPM;
        typingArea.disabled = true;
    }
});

resetBtn.addEventListener("click", function () {
    typingArea.value = "";
    typingArea.disabled = false;
    resultDisplay.innerText = "";
    isTyping = false;
});